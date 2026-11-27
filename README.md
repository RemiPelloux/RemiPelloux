<a href="https://remipelloux.github.io/">
  <img src="./assets/motion/hero.svg" alt="Rémi Pelloux, CTO and co-founder of OpenPro in Nice, France. Orchestrating coding agents, shipping LLM agents and MCP servers, writing the rules AI agents follow, and leading engineering at OpenPro." width="100%" />
</a>

<br />

<p align="center">
  <a href="https://remipelloux.github.io/"><img alt="Portfolio" src="https://img.shields.io/badge/Portfolio-remipelloux.github.io-f5b544?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://remipelloux.github.io/cv/"><img alt="CV" src="https://img.shields.io/badge/CV-EN%20%C2%B7%20FR-dfe7ff?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://openpro.ai"><img alt="OpenPro" src="https://img.shields.io/badge/CTO-OpenPro-2b5cf0?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://www.linkedin.com/in/remipelloux/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-remipelloux-8fd8bc?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://github.com/sponsors/RemiPelloux"><img alt="Sponsor" src="https://img.shields.io/badge/Sponsor-%E2%99%A5-f48271?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://github.com/RemiPelloux?tab=followers"><img alt="GitHub followers" src="https://img.shields.io/github/followers/RemiPelloux?style=for-the-badge&label=Followers&color=6f8ff7&labelColor=0b0f17" /></a>
</p>

<h3 align="center">I build AI systems that people actually run.</h3>
<p align="center"><em>LLM agents and MCP&nbsp; ·&nbsp; tools for coding agents&nbsp; ·&nbsp; local-first apps&nbsp; ·&nbsp; Rust systems&nbsp; ·&nbsp; security research</em></p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white&labelColor=0b0f17" />
  <img alt="Python" src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white&labelColor=0b0f17" />
  <img alt="Rust" src="https://img.shields.io/badge/Rust-DEA584?style=flat-square&logo=rust&logoColor=black&labelColor=0b0f17" />
  <img alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white&labelColor=0b0f17" />
  <img alt="Claude" src="https://img.shields.io/badge/Claude-D97757?style=flat-square&logo=claude&logoColor=white&labelColor=0b0f17" />
  <img alt="MCP" src="https://img.shields.io/badge/MCP-ffffff?style=flat-square&logo=modelcontextprotocol&logoColor=black&labelColor=0b0f17" />
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black&labelColor=0b0f17" />
  <img alt="Laravel" src="https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white&labelColor=0b0f17" />
  <img alt="Flutter" src="https://img.shields.io/badge/Flutter-02569B?style=flat-square&logo=flutter&logoColor=white&labelColor=0b0f17" />
  <img alt="Tauri" src="https://img.shields.io/badge/Tauri-24C8DB?style=flat-square&logo=tauri&logoColor=black&labelColor=0b0f17" />
  <img alt="AWS" src="https://img.shields.io/badge/AWS-FF9900?style=flat-square&logo=amazonwebservices&logoColor=black&labelColor=0b0f17" />
</p>

<p align="center">
  <a href="#concerto">Concerto</a> &nbsp;·&nbsp;
  <a href="#agent-tooling">Agent tooling</a> &nbsp;·&nbsp;
  <a href="#modelly">Modelly</a> &nbsp;·&nbsp;
  <a href="#open-source">Open source</a> &nbsp;·&nbsp;
  <a href="#security">Security</a> &nbsp;·&nbsp;
  <a href="#at-openpro">At OpenPro</a> &nbsp;·&nbsp;
  <a href="#activity">Activity</a>
</p>

I'm **Rémi Pelloux**, an AI engineer and the **CTO and co-founder of [OpenPro](https://openpro.ai)**, in Nice, France. I have ten years of full-stack, security and cloud work behind me. Today I design **LLM systems and run them in production**: tool-calling agents, MCP servers, retrieval, realtime voice, and routing across providers with fallback, caching and cost control. In my spare time I build **tools for AI coding agents**, **local-first apps**, **Rust systems tools** and **security research**, all in public. Before OpenPro I did security, R&D and full-stack work for clients including Dassault Aviation, DGA, Thales and Decathlon.

**[Portfolio →](https://remipelloux.github.io/)** &nbsp;·&nbsp; [CV in English and French](https://remipelloux.github.io/cv/) &nbsp;·&nbsp; [Security reports](https://remipelloux.github.io/security/) &nbsp;·&nbsp; [Lab](https://remipelloux.github.io/lab/) &nbsp;·&nbsp; [Learn to code with AI agents](https://remipelloux.github.io/iadevlearn/)

<br />

<a name="concerto"></a>

## 🎼 Latest: Concerto — one request, a team of coding agents

<a href="https://github.com/RemiPelloux/Concerto">
  <img src="./assets/motion/concerto.svg" alt="Concerto: a request is split into four user stories, each one is routed to a model that fits its risk, passes tests and a review by a second model, and then merges into main." width="100%" />
</a>

**Hand it the whole feature. Get back code that was planned, built by the right model, tested, reviewed by a second model and merged.** A single coding agent working through a big request is slow and expensive, and it grades its own work. Concerto runs the job like a team:

- **The right model for every story.** Concerto splits the request into user stories and scores each one on ten factors (its reach in the import graph, untested code, risk, churn and more). Risky work goes to Opus or GPT-6.1 Sol, and small work goes to Haiku or a free local model. You can see why each story got its score and change it before the build starts.
- **Nothing unchecked reaches your branch.** Each story is built in its own git worktree. It then has to pass your tests and type check, a mutation probe and a secret scan. Risky stories are also reviewed by a model from another vendor. The merge is three-way, so your own edits are kept.
- **It uses the agents you already pay for.** Claude Code, Codex, Gemini CLI, Cursor, OpenCode, Goose, Aider, pi, and local models through Ollama or LM Studio. Concerto never holds an API key.
- **Each run reports its cost.** The expensive model plans and wakes up only at checkpoints. The report compares the run's cost with what that model alone would have cost.

[**Install →**](https://github.com/RemiPelloux/Concerto#install) &nbsp;·&nbsp; [Docs](https://remipelloux.github.io/Concerto/) &nbsp;·&nbsp; <img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/Concerto?style=flat-square&color=f5b544&labelColor=16111f&label=release" /> &nbsp;·&nbsp; <sub>`TypeScript` `TUI` `MCP` · Homebrew, Scoop, apt, Nix · MIT</sub>

<br />

<a name="agent-tooling"></a>

## 🤖 Tools for AI coding agents

<p>
  <a href="https://github.com/RemiPelloux/pelloux-guidelines"><img src="./assets/motion/pelloux-guidelines.svg" alt="Pelloux Guidelines: an audit checks file, function and parameter limits, flags a leftover console.log, and passes once it is removed." width="49%" /></a>
  <a href="https://github.com/RemiPelloux/kill-my-idea"><img src="./assets/motion/kill-my-idea.svg" alt="kill-my-idea: sources are collected, a score ring fills to 44 out of 100, and a NO-GO verdict is stamped on the card." width="49%" /></a>
</p>

<table>
<tr>
<td width="50%" valign="top">

### [Pelloux Guidelines](https://github.com/RemiPelloux/pelloux-guidelines) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/pelloux-guidelines?style=flat-square&color=4fd08a&labelColor=111113&label=%E2%98%85" />

**Coding discipline for AI agents.** Ten rules and a few hard numbers keep agent-written code small enough to review: files of 400 lines at most, functions of 25 lines, 3 parameters. A zero-dependency audit checks them in the agent loop, before every commit and in CI. A ratchet holds legacy code, which can shrink but never grow.

- Nine language profiles. Works with Claude Code, Codex, Cursor, Copilot, Windsurf and Gemini
- Used in more than thirty repositories. One-line installer, Claude Code plugin and skills

<sub>`Python` `pre-commit` `CI` · MIT</sub>

</td>
<td width="50%" valign="top">

### [kill-my-idea](https://github.com/RemiPelloux/kill-my-idea) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/kill-my-idea?style=flat-square&color=e5383b&labelColor=15120f&label=%E2%98%85" />

**A Claude Code plugin that tries to kill your startup idea before you build it.** It looks for free alternatives, competitors, people who already failed and numbers that don't add up. Then it gives a score out of 100, a GO / PIVOT / NO-GO verdict and a 7-day test, with a source for every number.

- Market size, CAC, LTV and break-even, per country. A roast mode, and a fact-checker for viral "$10k/month" posts
- Listed in [Awesome AI Plugins](https://github.com/hashgraph-online/awesome-ai-plugins). [Live reports](https://remipelloux.github.io/kill-my-idea/)

<sub>`Claude Code plugin` `skills` · MIT</sub>

</td>
</tr>
<tr>
<td width="50%" valign="top">

### [OpenTerm](https://github.com/RemiPelloux/openterm) &nbsp;<img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/openterm?include_prereleases&style=flat-square&color=22d3ee&labelColor=0b1d2a&label=release" />

**The terminal that speaks to your model.** A native macOS terminal built on Ghostty, in Rust. It shrinks noisy command output before your model reads it, and its 39 `ai-*` wrappers send tests, linters, diffs and logs through RTK. It also keeps every byte as encrypted evidence (XChaCha20-Poly1305), and it works with any LLM, including the Claude or ChatGPT plan you already pay for.

<sub>`Rust` `Swift` `Ghostty` · macOS · Apache-2.0 · alpha</sub>

</td>
<td width="50%" valign="top">

### [SmartTest](https://github.com/RemiPelloux/SmarttyTest) &nbsp;<img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/SmarttyTest?style=flat-square&color=6aa5ff&labelColor=0b1d2a&label=release" />

**Runs only the tests a change can affect.** SmartTest builds a symbol-level dependency graph of the repository, finds what a change reaches and runs those tests through your own runner: Jest, Vitest, `node --test`, Playwright, Cypress or Angular. Every skipped test comes with a reason, and `audit --mutate` checks that the selection catches real breaks. It runs in the commit hooks at OpenPro and LeadsIt.

<sub>`TypeScript` · Python and PHP in preview · Apache-2.0 · [docs](https://remipelloux.github.io/SmarttyTest/)</sub>

</td>
</tr>
</table>

<a href="https://github.com/RemiPelloux/OpenVision">
  <img src="./assets/motion/openvision.svg" alt="OpenVision: an editor where an AI model suggests code that is accepted with Tab, next to a blinking eye logo and a bring-your-own model provider list." width="100%" />
</a>

### [OpenVision](https://github.com/RemiPelloux/OpenVision) — an AI coding workspace where you choose the models

A project explorer, an editor, terminals, Git worktrees, agents and Tab autocomplete in one desktop app. Point it at any OpenAI-compatible API or a server on `127.0.0.1`, and it discovers the available models. There is no account and no login. Agents run tools only after you approve them, and they read MCP servers, project rules and skills from `.openvision/`. The portable Windows build runs without Node or npm.

[**Download →**](https://github.com/RemiPelloux/OpenVision/releases) &nbsp;·&nbsp; <sub>`Electron` `TypeScript` `MCP` · development preview, Windows x64</sub>

<br />

<a name="modelly"></a>

## 🧬 Modelly — agent-based modeling for Python

<a href="https://remipelloux.github.io/Modelly/">
  <img src="./assets/motion/modelly.svg" alt="Modelly: typed agents move across a simulation grid and a network while a data-collection chart draws a line, for an agent-based modeling framework in Python with seeded reproducible runs." width="100%" />
</a>

**A framework for agent-based modeling (ABM) in Python, fast by construction.** Scenarios are typed and every run is seeded, so a shared config gives back the same numbers. Agents are backed by numpy and live on grids, networks or continuous space, with discrete-event time, pandas data collection and a browser view to watch a run live. A codemod helps you move models over from Mesa, and [modelly-hub](https://github.com/RemiPelloux/modelly-hub) indexes published models with DOIs and checksums.

[**Read the docs →**](https://remipelloux.github.io/Modelly/) &nbsp;·&nbsp; [Source](https://github.com/RemiPelloux/Modelly) &nbsp;·&nbsp; <img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/Modelly?style=flat-square&color=8fd8bc&labelColor=0b1d2a&label=release" /> &nbsp;·&nbsp; <sub>`Python` `numpy` `pandas` `C` · Apache-2.0</sub>

<br />

<a name="open-source"></a>

## 🧪 Open source

<p>
  <a href="https://github.com/RemiPelloux/OpenPlod"><img src="./assets/motion/openplod.svg" alt="OpenPlod: a recorder sends audio over Bluetooth, the waveform plays, and transcript lines become a Markdown document." width="49%" /></a>
  <a href="https://github.com/RemiPelloux/OpenNative"><img src="./assets/motion/opennative.svg" alt="OpenNative: a gaming handheld showing a stable frame-time graph, next to the Wine, DXVK, VKD3D, Box64 and FEX runtime stack." width="49%" /></a>
</p>

<table>
<tr>
<td width="50%" valign="top">

### [OpenPlod](https://github.com/RemiPelloux/OpenPlod) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/OpenPlod?style=flat-square&color=2dd4bf&labelColor=0b1d2a&label=%E2%98%85" />

**A local-first vault for your Plaud Note Pro recordings.** OpenPlod imports audio directly over Bluetooth, keeps the original files, and turns them into transcripts, Markdown documents and AI chats that cite their sources.

- Transcript Studio: speaker editing, version diffs, chapters and subtitles
- Transcription with Mistral/Voxtral, OpenAI or AssemblyAI, plus local Ollama for text
- REST API and a **read-only MCP server**, so your agents can query your recordings

<sub>`Tauri` `Rust` `TypeScript` · macOS, experimental Android · MIT</sub>

</td>
<td width="50%" valign="top">

### [OpenNative](https://github.com/RemiPelloux/OpenNative) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/OpenNative?style=flat-square&color=f48271&labelColor=22110f&label=%E2%98%85" />

**Windows games on Android gaming handhelds.** OpenNative combines Wine/Proton, DXVK, VKD3D, Mesa, Box64 and FEX in an interface built for controllers.

- Warm, shared Wine prefixes that launch quickly, with per-game profiles
- Shader caches tracked per game, safe cache invalidation, and a performance view on a second screen
- APK updates checked against their signature and checksum. FPS gains are claimed only after measurement

<sub>`Kotlin` `C++` `Android ARM64` · validated on AYN Thor · GPL-3.0</sub>

</td>
</tr>
</table>

<a href="https://github.com/RemiPelloux/Containust">
  <img src="./assets/motion/containust.svg" alt="Containust: a terminal runs ctst pull, plan and run with offline mode, and an api component connects to a db component without a background daemon." width="100%" />
</a>

### [Containust](https://github.com/RemiPelloux/Containust) &nbsp;<img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/Containust?style=flat-square&color=f59e0b&labelColor=1a130b&label=release" />

**A container runtime written in Rust, with no background daemon.** Each `ctst` command talks to the backend directly and writes file state. You describe stacks in a small declarative language (`.ctst`: `COMPONENT`, `CONNECT`, `EXPOSE`). Images are pulled by pinned digest, and `--offline` blocks network access before anything connects, so it works on air-gapped machines. On Linux it uses namespaces and cgroups v2 directly. On macOS and Windows it runs through QEMU. It also ships a Rust SDK for the parser, the graph and the runtime.

<sub>`Rust` `Linux namespaces` `cgroups v2` `OCI` · source-available, commercial license</sub>

<details>
<summary><strong>More public work</strong></summary>
<br />

| Project | What it is | Stack |
| --- | --- | --- |
| [**unslop**](https://github.com/RemiPelloux/unslop) | Rules for interfaces and copy that don't look machine-made, with checks: no shadows, no gradients, no emoji, 350 banned words. An Agent Skill for Claude, Codex, Cursor, Copilot and Gemini | `Python` `Markdown` |
| [**gitverse**](https://github.com/RemiPelloux/gitverse) | Learn Git by using it: a simulated terminal, a live commit graph and lessons that check your repository, in English and French. [Live](https://remipelloux.github.io/gitverse/) | `TypeScript` `Next.js` |
| [**agent-mangaka-forge**](https://github.com/RemiPelloux/agent-mangaka-forge) | AI manga-page skill pack with persistent character memory for consistent characters | `Python` |
| [**DrosoSim Next**](https://github.com/RemiPelloux/DrosoSimBetter) | Real-time decision simulator for growers fighting the fruit fly *Drosophila suzukii* | `TypeScript` |
| [**OpenSw**](https://github.com/RemiPelloux/OpenSw) | Android ARM64 Switch emulator with Vulkan rendering, per-game profiles and AYN Thor tuning | `C++` `Vulkan` |
| [**OpenAgents**](https://github.com/RemiPelloux/OpenAgents) | Self-hosted, multi-provider AI agents with memory and MCP, forked from [Hermes Agent](https://github.com/NousResearch/Hermes-agent) | `Python` `MCP` |
| [**templateCardGame**](https://github.com/RemiPelloux/templateCardGame) | Template for server-authoritative multiplayer card games: pure rules engine, rooms with bots, React table | `TypeScript` |
| [**LumaSync**](https://github.com/RemiPelloux/lumasync) | Local Philips Hue ambilight driven by fast screen capture | `Rust` `Tauri` `React` |
| [**OpenPro Connector SDK**](https://github.com/RemiPelloux/openpro-connector-sdk) | Sync ATS jobs into OpenPro through PHP, HTTP or MCP | `PHP` |
| [**OpenWhistle SDKs**](https://github.com/RemiPelloux/openwhistle-sdks) | OpenWhistle API clients for five languages | `JS` `Python` `PHP` `Rust` `Go` |
| [**delonghi-coffee-api**](https://github.com/RemiPelloux/delonghi-coffee-api) | Local REST API for De'Longhi machines, built on the reverse-engineered ECAM protocol | `Python` `FastAPI` |

Everything else is in the [archive](https://remipelloux.github.io/work/) and the [lab](https://remipelloux.github.io/lab/).

</details>

<br />

<a name="security"></a>

## 🔐 Security research

<a href="https://github.com/RemiPelloux/HackoogleMini">
  <img src="./assets/motion/hackooglemini.svg" alt="HackoogleMini: a Google Home Mini's lights pulse while a research chain goes from a DNS redirect to a fake Cast registry, through a V8 bug, toward a shell, and finally to a local LLM with MCP tools." width="100%" />
</a>

### [HackoogleMini](https://github.com/RemiPelloux/HackoogleMini) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/HackoogleMini?style=flat-square&color=a59bff&labelColor=120f24&label=%E2%98%85" />

**Software-only research to get a shell on a first-generation Google Home Mini, then replace Google Assistant with a local LLM that can call MCP servers.** No hardware modifications. The research covers the device's pre-release Chrome 92 (CVE-2021-30563), Cast registry interception, the Magellan SQLite bugs, the BLE setup protocol, firmware acquisition and YAFFS2 kernel work.

<sub>`Python` `reverse engineering` `Cast` `BLE` `embedded Linux`</sub>

| Reference | Project | What happened |
| --- | --- | --- |
| [**CVE-2026-45753**](https://github.com/advisories/GHSA-hhg7-c65m-h7ff) | Symfony HtmlSanitizer | The URL sanitizer skipped `action`, `formaction`, `poster` and `cite`, so a `javascript:` URI could get through and cause XSS. I reported it, and the Symfony team fixed it in 6.4.40, 7.4.12 and 8.0.12. [Write-up](https://remipelloux.github.io/security/) |
| **2026, in triage** | Tailscale | One finding was new to Tailscale's security team and is being fixed, with credit. Details stay private until the fix ships |
| [**php-upload-rce**](https://github.com/RemiPelloux/php-upload-rce) | PHP | An independent source-level analysis of the `session.upload_progress` use-after-free (CVE-2026-109618 and CVE-2026-109619, CVSS 9.2, fixed on 21 October 2026). Includes a heap layout study, a lab, an exposure scanner and a one-line fix. I studied this bug; I didn't find it |
| [**BurpHunterTK**](https://github.com/RemiPelloux/BurpHunterTK) | Burp Suite | An extension that uses LLMs to flag high and critical vulnerabilities during bug bounty work |

<p>
  <a href="https://github.com/RemiPelloux/android-hid-kb"><img src="./assets/motion/android-hid-kb.svg" alt="android-hid-kb: a rooted Android phone connected over USB acts as a hardware HID keyboard and types a text file into a PC console." width="49%" /></a>
  <a href="https://github.com/RemiPelloux/GalaxyCrash"><img src="./assets/motion/galaxycrash.svg" alt="GalaxyCrash: a Samsung Galaxy phone gains a temporary root shell when a lock opens, then a reboot arrow resets it, because the root is ephemeral." width="49%" /></a>
</p>

<table>
<tr>
<td width="50%" valign="top">

### [android-hid-kb](https://github.com/RemiPelloux/android-hid-kb) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/android-hid-kb?style=flat-square&color=8fd8bc&labelColor=0b1d2a&label=%E2%98%85" />

**Turn a rooted Android phone into a USB hardware keyboard.** Using the Linux `configfs` gadget stack (`f_hid`) and only `mksh` shell builtins, the phone shows up on any PC as a plain keyboard and types out a text file. The PC needs no app and no driver.

<sub>`Android` `configfs` `USB HID` `shell`</sub>

</td>
<td width="50%" valign="top">

### [GalaxyCrash](https://github.com/RemiPelloux/GalaxyCrash) &nbsp;<img alt="stars" src="https://img.shields.io/github/stars/RemiPelloux/GalaxyCrash?style=flat-square&color=f48271&labelColor=22110f&label=%E2%98%85" />

**Temporary root for Samsung Galaxy devices, a stability fork of DirtyFrag (CVE-2026-43284).** Root is granted in memory, for research on your own device. A reboot undoes it completely, because nothing is written to the system partition.

<sub>`Java` `Android` · reboot to undo</sub>

</td>
</tr>
</table>

<br />

## 🎴 Live apps

<a href="https://deal-club.fun">
  <img src="./assets/motion/deal-club.svg" alt="deal-club.fun: property cards are dealt into a fan next to a price deal chip and a city skyline, for an installable French real-estate card game that plays offline against local AI opponents." width="100%" />
</a>

| App | What it is |
| --- | --- |
| [**deal-club.fun**](https://deal-club.fun) | An installable French real-estate card game (PWA). You buy, trade and auction properties against AI opponents that run on your device, so it plays offline. Includes 58 original hand-drawn SVG illustrations |
| [**LeadsIt**](https://leadsit.eu) | An automated B2B lead search platform, with an in-app agent that has 18 tools and asks for confirmation before every write, plus a hosted MCP server |
| [**Gitverse**](https://remipelloux.github.io/gitverse/) | A gamified Git course that runs entirely in the browser, in English and French |
| [**IA Dev Learn**](https://remipelloux.github.io/iadevlearn/) | A free course for learning to code with AI agents by doing it. You prompt Claude Code, Codex, Gemini CLI and Antigravity in a simulated terminal, write rules and skills, and run a team of agents in parallel with Orca. No account or API key, in English and French |

<br />

<a name="at-openpro"></a>

## 🏗️ At OpenPro

<img src="./assets/motion/openpro-stack.svg" alt="OpenPro architecture sketch: web, iOS and Android clients built with Flutter, plus ATS integrations, talk to a PHP and Laravel core platform. It uses an AI layer in Python with RAG and MCP, and PostgreSQL and Redis, on AWS with Docker and CI/CD." width="100%" />

[OpenPro](https://openpro.ai) is a French professional network for **people, jobs and companies**. It has video CVs, AI matching, real-time messaging and Mia, our AI assistant, on web, iOS and Android. I co-founded it and have been CTO since February 2023. The code is private, but this is the engineering I'm responsible for:

- **Mia, the assistant.** A streaming tool-calling agent with **87 tools**, and a live voice mode on OpenAI Realtime, with Gemini Live and Grok as fallbacks.
- **A hosted MCP server at `mcp.openpro.ai`.** It uses Streamable HTTP and OAuth 2.1 with PKCE, filters tools by role and scope, and includes an MCP App for editing job drafts.
- **One LLM layer over 10 providers.** A Claude → Mistral → OpenAI fallback chain, prompt caching, a cost log for every call and a monthly budget breaker.
- **A multi-agent offer writer.** A triage agent hands off to four specialists and their output is checked against a schema. It runs on the OpenAI Agents SDK, with Claude plugged in as a custom model provider.
- **The platform.** A Laravel core, TypeScript and React on the web, and Flutter apps for iOS and Android. It runs on PostgreSQL and Redis on AWS, in Docker, released through CI/CD and hosted in the EU under GDPR. ATS partners connect through a [public SDK](https://github.com/RemiPelloux/openpro-connector-sdk) over HTTP and MCP.

<details>
<summary><strong>How I build with agents</strong></summary>
<br />

- **Rules, not hope.** The [Pelloux Guidelines](https://github.com/RemiPelloux/pelloux-guidelines) run in 32 repositories, checked in the agent loop, at pre-commit and in CI.
- **Several agents a day.** Claude Code, Codex, Cursor, Gemini CLI and Copilot, with parallel agents in git worktrees, coordinated by [Concerto](https://github.com/RemiPelloux/Concerto).
- **My own tooling.** 25 Claude Code skills (task graphs, decision and quality gates), 306 Cursor rules and 23 `AGENTS.md` files.
- **13 MCP servers, more than 260 tools:** OpenPro 87, OpenCRM 41, OpenPlod 30, OpenTicket 20, Obsidian 15, and more.
- **Measure before claiming.** Latency, recovery and acceptance gates are written down. Forks and integrations credit the projects they build on.

</details>

<br />

<a name="activity"></a>

## 📈 Activity

<a href="https://github.com/RemiPelloux?tab=overview">
  <picture>
    <source media="(max-width: 600px)" srcset="./assets/contributions-mobile.svg" />
    <img src="./assets/contributions.svg" alt="Rémi Pelloux's GitHub contribution calendar, showing daily activity over the last year." width="100%" />
  </picture>
</a>

<p align="center"><sub>Contribution calendar, refreshed daily by a GitHub Action</sub></p>

<a href="https://www.linkedin.com/in/remipelloux/">
  <img src="./assets/motion/footer.svg" alt="Building useful software across AI, products and systems. Thanks for stopping by." width="100%" />
</a>

<p align="center"><sub>All animations are self-contained SVGs with no scripts or network requests, and they stop when your system asks for reduced motion.</sub></p>
