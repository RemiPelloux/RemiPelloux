<a href="https://www.linkedin.com/in/remipelloux/">
  <img src="./assets/motion/hero.svg" alt="Rémi Pelloux, CTO at OpenPro in France. Building AI coding workspaces, local-first native apps, Rust systems tools, and leading engineering at OpenPro." width="100%" />
</a>

<br />

<p align="center">
  <a href="https://openpro.ai"><img alt="OpenPro" src="https://img.shields.io/badge/CTO-OpenPro-2b5cf0?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://www.linkedin.com/in/remipelloux/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-remipelloux-8fd8bc?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://github.com/sponsors/RemiPelloux"><img alt="Sponsor" src="https://img.shields.io/badge/Sponsor-%E2%99%A5-f48271?style=for-the-badge&labelColor=0b0f17" /></a>
  <a href="https://github.com/RemiPelloux?tab=followers"><img alt="GitHub followers" src="https://img.shields.io/github/followers/RemiPelloux?style=for-the-badge&label=Followers&color=6f8ff7&labelColor=0b0f17" /></a>
</p>

<p align="center">
  <a href="#openvision">OpenVision</a> &nbsp;·&nbsp;
  <a href="#open-source">Open source</a> &nbsp;·&nbsp;
  <a href="#at-openpro">At OpenPro</a> &nbsp;·&nbsp;
  <a href="#activity">Activity</a>
</p>

I build software that people actually run: **AI tools that work with your own models**, **native apps that keep data on your machine**, and **systems tools without hidden daemons**. During the day I lead engineering at **OpenPro**. The rest of the time I ship in public.

<br />

<a name="openvision"></a>

## 👁️ Latest: OpenVision

<a href="https://github.com/RemiPelloux/OpenVision">
  <img src="./assets/motion/openvision.svg" alt="OpenVision: an editor where an AI model suggests code that is accepted with Tab, next to a blinking eye logo and a bring-your-own model provider list." width="100%" />
</a>

**An AI coding workspace where you choose the models.** OpenVision brings together a project explorer, editor, terminals, Git and worktrees, AI agents and Tab autocomplete in one desktop app. Point it at any OpenAI-compatible API or a server on `127.0.0.1`, and it discovers the available models. You can pick a separate model just for autocomplete.

- **No account and no login.** Built-in analytics and crash uploads are disabled at build time.
- **Agents with approved tools.** Agents read files, propose edits and run tools only after you approve them. They also get MCP, project rules, skills and plans from `.openvision/`.
- **A portable Windows app.** Download the zip, extract it, and double-click to run. You don't need to set up Node or npm.
- **Honest progress.** The roadmap tracks acceptance stories, and only the ones that pass are marked verified.

[**Download v0.2.0-preview.6 →**](https://github.com/RemiPelloux/OpenVision/releases) &nbsp;·&nbsp; [Read the docs](https://github.com/RemiPelloux/OpenVision/tree/main/docs) &nbsp;·&nbsp; <sub>`Electron` `TypeScript` `MCP` · development preview, tested on Windows x64</sub>

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

<sub>`Tauri` `Rust` `TypeScript` · macOS / Linux / Windows · experimental</sub>

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

### [Containust](https://github.com/RemiPelloux/Containust) &nbsp;<img alt="release" src="https://img.shields.io/github/v/release/RemiPelloux/Containust?style=flat-square&color=f59e0b&labelColor=1a130b" />

**A container runtime written in Rust, with no background daemon.** Each `ctst` command talks to the backend directly and writes file state. You describe stacks in a small declarative language (`.ctst`: `COMPONENT`, `CONNECT`, `EXPOSE`). Images are pulled by pinned digest, and `--offline` blocks network access before anything connects, so it works on air-gapped machines. On Linux it uses namespaces and cgroups v2 directly. On macOS and Windows it runs through QEMU. It also ships a Rust SDK for the parser, the graph and the runtime.

<sub>`Rust` `Linux namespaces` `cgroups v2` `OCI` · GA 1.2 · source-available, commercial license</sub>

<details>
<summary><strong>More public work</strong></summary>
<br />

| Project | What it is | Stack |
| --- | --- | --- |
| [**OpenSw**](https://github.com/RemiPelloux/OpenSw) | Android ARM64 Switch emulator with Vulkan rendering, per-game profiles and AYN Thor tuning | `C++` `Vulkan` |
| [**agent-mangaka-forge**](https://github.com/RemiPelloux/agent-mangaka-forge) | AI manga-page skill pack with persistent character memory for consistent characters | `Python` |
| [**OpenAgents**](https://github.com/RemiPelloux/OpenAgents) | Self-hosted, multi-provider AI agents with memory and MCP, forked from [Hermes Agent](https://github.com/NousResearch/Hermes-agent) | `Python` `MCP` |
| [**LumaSync**](https://github.com/RemiPelloux/lumasync) | Local Philips Hue ambilight driven by fast screen capture | `Rust` `Tauri` `React` |
| [**OpenPro Connector SDK**](https://github.com/RemiPelloux/openpro-connector-sdk) | Sync ATS jobs into OpenPro through PHP, HTTP or MCP | `PHP` |
| [**OpenWhistle SDKs**](https://github.com/RemiPelloux/openwhistle-sdks) | OpenWhistle API clients for five languages | `JS` `Python` `PHP` `Rust` `Go` |
| [**BurpHunterTK**](https://github.com/RemiPelloux/BurpHunterTK) | Burp Suite extension that uses LLMs to triage high-impact web vulnerabilities | `Python` |
| [**delonghi-coffee-api**](https://github.com/RemiPelloux/delonghi-coffee-api) | Local REST API for De'Longhi machines, built on the reverse-engineered ECAM protocol | `Python` `FastAPI` |

</details>

<br />

<a name="at-openpro"></a>

## 🏗️ At OpenPro

<img src="./assets/motion/openpro-stack.svg" alt="OpenPro architecture sketch: web, iOS and Android clients and ATS integrations talk to a PHP and Symfony core platform, which uses an AI layer in Python with RAG and MCP, and PostgreSQL and Redis, on AWS with Docker and CI/CD." width="100%" />

[OpenPro](https://openpro.ai) is a French professional network for **people, jobs and companies**. It offers video CVs, AI matching, real-time messaging and Mia, our AI assistant, on web, iOS and Android. The code is private, but this is the engineering I'm responsible for as CTO:

- **Product platform.** A PHP/Symfony core with TypeScript/React on the web and apps for iOS and Android, all shipped from one roadmap.
- **Applied AI.** Matching, retrieval (RAG) and the Mia assistant, built with Python and connected through MCP.
- **Open integrations.** ATS connectors through a [public SDK](https://github.com/RemiPelloux/openpro-connector-sdk) over HTTP and MCP, so partners don't need custom work.
- **Infrastructure.** PostgreSQL and Redis on AWS, containerized with Docker and released through CI/CD.

<details>
<summary><strong>How I like to engineer</strong></summary>
<br />

- **Useful workflows first:** from the first install to everyday use.
- **Your data stays yours:** local-first storage, portable formats and practical APIs.
- **Measure before claiming:** latency, recovery and acceptance gates, written down.
- **Credit upstream:** forks and integrations name the projects they build on.

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
