import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const query = 'query { user(login: "RemiPelloux") { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount contributionLevel } } } } } }';
let calendar;
if (process.argv[2]) {
  calendar = JSON.parse(await readFile(process.argv[2], 'utf8'));
} else {
  if (!process.env.GH_TOKEN) throw new Error('GH_TOKEN is required.');
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  if (!response.ok || data.errors) throw new Error(`GitHub calendar request failed: ${JSON.stringify(data.errors || response.status)}`);
  calendar = data.data?.user?.contributionsCollection?.contributionCalendar;
}
if (!Number.isInteger(calendar?.totalContributions) || !calendar.weeks?.length) throw new Error('Invalid calendar response.');
const days = calendar.weeks.flatMap(week => week.contributionDays);
if (days.some(day => !/^\d{4}-\d{2}-\d{2}$/.test(day.date) || !Number.isInteger(day.contributionCount) || day.contributionCount < 0)) throw new Error('Invalid contribution day.');
const levels = ['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'];
if (days.some(day => !levels.includes(day.contributionLevel))) throw new Error('Invalid contribution level.');

function render(mobile) {
  const weeks = mobile ? calendar.weeks.slice(-26) : calendar.weeks;
  const width = mobile ? 620 : 1160;
  const height = mobile ? 350 : 310;
  const startX = 45;
  const startY = mobile ? 150 : 120;
  const cell = mobile ? 16 : 15;
  const gap = mobile ? 5 : 5;
  let cells = '';
  let labels = '';
  let month = '';
  weeks.forEach((week, column) => {
    const first = week.contributionDays[0];
    const next = first.date.slice(0, 7);
    if (next !== month && column < weeks.length - 2) {
      month = next;
      const label = new Date(`${first.date}T12:00:00Z`).toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
      labels += `<text class="muted" x="${startX + column * (cell + gap)}" y="${startY - 14}" font-size="14">${label}</text>`;
    }
    week.contributionDays.forEach(day => {
      const row = new Date(`${day.date}T12:00:00Z`).getUTCDay();
      cells += `<rect class="level-${levels.indexOf(day.contributionLevel)}" x="${startX + column * (cell + gap)}" y="${startY + row * (cell + gap)}" width="${cell}" height="${cell}" rx="3"><title>${day.date}: ${day.contributionCount} contributions</title></rect>`;
    });
  });
  const total = calendar.totalContributions.toLocaleString('en-US');
  const range = `${days[0].date} to ${days.at(-1).date}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title desc">
<title id="title">Remi Pelloux: ${total} GitHub contributions</title>
<desc id="desc">GitHub contribution calendar for ${range}.${mobile ? ' Grid shows the latest 26 weeks; total covers the full year.' : ''}</desc>
<style>
text{font-family:Arial,Helvetica,sans-serif;fill:#192327;letter-spacing:0}.muted{fill:#55636b}.bg{fill:#f3f6f8}
.level-0{fill:#e0e7ec}.level-1{fill:#addbca}.level-2{fill:#62b799}.level-3{fill:#258165}.level-4{fill:#125441}
@media(prefers-color-scheme:dark){text{fill:#f0f6fc}.muted{fill:#a6b4be}.bg{fill:#161b22}.level-0{fill:#29323c}.level-1{fill:#174a39}.level-2{fill:#257957}.level-3{fill:#40b97c}.level-4{fill:#9ce8b9}}
</style>
<rect class="bg" width="${width}" height="${height}" rx="8"/>
<text x="38" y="64" font-size="46" font-weight="700">${total}</text>
<text class="muted" x="${mobile ? 38 : 218}" y="${mobile ? 100 : 60}" font-size="${mobile ? 21 : 20}">GitHub contributions in the last year</text>
${labels}${cells}
<text class="muted" x="38" y="${height - 18}" font-size="13">${mobile ? 'Latest 26 weeks shown' : range} · Updated ${days.at(-1).date}</text>
<text class="muted" x="${width - 191}" y="${height - 18}" font-size="12">Less</text>
${levels.map((_, i) => `<rect class="level-${i}" x="${width - 155 + i * 18}" y="${height - 31}" width="13" height="13" rx="2"/>`).join('')}
<text class="muted" x="${width - 58}" y="${height - 18}" font-size="12">More</text>
</svg>\n`;
}

await mkdir(resolve(root, 'assets'), { recursive: true });
await writeFile(resolve(root, 'assets/contributions.svg'), render(false));
await writeFile(resolve(root, 'assets/contributions-mobile.svg'), render(true));
console.log(`Rendered ${calendar.totalContributions} contributions across ${days.length} days.`);
