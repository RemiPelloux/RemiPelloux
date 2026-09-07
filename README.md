<p align="center">
  <picture>
    <source media="(max-width: 600px)" srcset="./assets/profile-banner-mobile.png" />
    <img src="./assets/profile-banner.png" alt="Rémi Pelloux | CTO at OpenPro | AI systems, native apps and developer tools" width="100%" />
  </picture>
</p>

<p align="center">
  <a href="https://openpro.ai"><strong>OpenPro</strong></a> &nbsp; / &nbsp;
  <a href="#selected-projects">Projects</a> &nbsp; / &nbsp;
  <a href="#contributions-in-code">Contributions</a> &nbsp; / &nbsp;
  <a href="https://www.linkedin.com/in/remipelloux/">LinkedIn</a>
</p>

## Rémi Pelloux

**CTO at [OpenPro](https://openpro.ai), based in France.**

I build products from the interface down to the runtime: professional networking,
AI agents, native applications and developer infrastructure. My work often starts
where two systems fail to connect: an ATS and a recruiting platform, a recording
device and your notes, an AI model and the tools it needs to do useful work.

I care about what happens after the demo: how people install it, where their data
lives, how it recovers from failure and whether it feels fast in everyday use.

## What we're building at OpenPro

**A French professional network connecting people, jobs and companies.**
We bring together video job offers, video CVs, AI matching and real-time messaging
across web, iOS and Android. Mia, our AI assistant, helps candidates with career
questions and interview preparation, and recruiters with job descriptions and sourcing.

The goal is to give candidates more ways to show who they are and help recruiters
find and connect with relevant people. Candidates can use OpenPro for free.

As CTO, I lead the technology behind that product. Our public developer work
also makes OpenPro easier to connect to existing workflows:

- **ATS integration:** the [OpenPro Connector SDK](https://github.com/RemiPelloux/openpro-connector-sdk)
  maps and publishes job offers while the ATS remains the source of truth.
- **Developer access:** a PHP SDK, HTTP examples for multiple languages, and
  documented [MCP integration](https://github.com/RemiPelloux/openpro-connector-sdk#8-connect-mcp).
- **Agent tooling:** [OpenAgents](https://github.com/RemiPelloux/OpenAgents),
  our self-hosted adaptation of Hermes Agent for tools, memory and team workflows.

[Explore OpenPro](https://openpro.ai) · [Build a connector](https://github.com/RemiPelloux/openpro-connector-sdk#6-build-a-connector)

## Selected projects

My public work spans company tooling and independent projects. These are some of
the problems I'm working on, and the engineering behind them.

### [OpenPlod](https://github.com/RemiPelloux/OpenPlod) · Audio into usable knowledge

**Why:** a useful recording should become something you can find, edit and reuse.

OpenPlod keeps audio in a desktop vault and turns transcripts into a Markdown
workspace. It combines direct Plaud Note Pro imports on macOS, an Android
companion, local or cloud transcription, and document generation with Mistral.
Audio, transcripts and generated documents remain separate, with source references
and revision history. A REST API and MCP connect the vault to other tools.

**Recent work:** the [0.3.0 release](https://github.com/RemiPelloux/OpenPlod/releases/tag/v0.3.0)
adds the Markdown workspace, document workflows and MCP access.

<sub>TypeScript · React · Tauri · Rust · Bluetooth · MCP</sub>

<sub>Experimental. Direct Plaud extraction is verified on one authorized Note Pro
and Apple Silicon Mac; initial device authorization still needs private provisioning.</sub>

### [LumaSync](https://github.com/RemiPelloux/lumasync) · Screen colors, room-scale light

**Why:** ambient lighting should follow what you see, react quickly and keep screen content local.

LumaSync captures the Windows screen through DXGI, analyzes colors in Rust and
streams them to Philips Hue Entertainment. The engine uses directional sampling,
perceptual color analysis, predictive smoothing and black-bar detection.
Frames stay on the PC; calculated colors go to the local Hue Bridge.

**My focus:** capture and processing latency, stable color transitions, reused
buffers and telemetry that makes performance visible.

<sub>Rust · Tauri · React · TypeScript · DXGI · DTLS</sub>

### [OpenAgents](https://github.com/RemiPelloux/OpenAgents) · Agents inside real workflows

**Why:** using an agent across a team takes more than choosing a model. It needs
tools, context, repeatable workflows and an environment that can run the work.

OpenAgents is an OpenPro fork of [Hermes Agent](https://github.com/NousResearch/Hermes-agent).
It brings a self-hosted agent to the terminal, messaging apps, desktop and web,
with multiple model providers, persistent memory, MCP and company workspaces.

**My recent contributions:** worker tooling, pinned build environments, output
validation and read-only engineering inspections. The upstream Hermes project
provides the foundation; our fork adds OpenPro identity and team-oriented workflows.

<sub>Python · LLM providers · MCP · Docker · Agent orchestration</sub>

### [OpenNative](https://github.com/RemiPelloux/OpenNative) · PC software on Android handhelds

**Why:** launching a game is only part of the experience. Runtime setup, controls,
frame delivery and recovery need to work together on a handheld.

Built on [GameNative](https://github.com/utkarshdalal/GameNative), OpenNative combines
Wine/Proton, DXVK, VKD3D, Box64 and FEX in an Android interface with per-game
configuration and runtime management.

**My recent contributions:** warm-prefix launches that skip unchanged setup work,
shared-prefix locking, crash-safe activation and batched library queries.
Performance depends on the game, device and runtime; improvements need measurements.

<sub>Kotlin · Android · Wine/Proton · Graphics translation</sub>

### More tools, with a purpose

- **[OpenPro Connector SDK](https://github.com/RemiPelloux/openpro-connector-sdk):**
  reduce repeated integration work with normalized job offers, connector manifests,
  a PHP client and examples for other languages.
- **[OpenWhistle SDKs](https://github.com/RemiPelloux/openwhistle-sdks):**
  connect audio workflows to applications through clients for JavaScript/TypeScript,
  Python, PHP, Rust and Go. Shared concerns include authentication, workspace
  selection, uploads, runs, reports and errors.
- **[Containust](https://github.com/RemiPelloux/Containust):**
  run container stacks without a privileged daemon, including local and air-gapped
  workflows. Written in Rust, with `.ctst` composition, Linux isolation and QEMU
  backends. Source-available under a commercial license.

## Contributions in code

A few concrete changes from my public commit history:

- **[OpenPlod: Markdown workspace and MCP](https://github.com/RemiPelloux/OpenPlod/commit/119ed6766e60468116f153e952514d8dba81691a)**
  makes transcripts part of an editable, connected document workflow.
- **[LumaSync: rebuilt color engine](https://github.com/RemiPelloux/lumasync/commit/11d8bdd12079a1e7d4559e9762d1ff70b00013ca)**
  develops the low-latency directional sampling pipeline and modularizes its sources.
- **[OpenNative: warm-prefix launch](https://github.com/RemiPelloux/OpenNative/commit/6ff47dfd13f0db65be005430ec5dc78ca5b5997b)**
  avoids redundant Wine initialization and protects shared runtime state.
- **[OpenNative: batched library queries](https://github.com/RemiPelloux/OpenNative/commit/ed57524130fff8bb9326d98bc4e6ad7d082fea84)**
  removes repeated reads across the library, DLC and download paths.
- **[OpenAgents: engineering inspections](https://github.com/RemiPelloux/OpenAgents/commit/3c53b593386388a1fdf49c0ff4c882b1ea4e5d43)**
  adds read-only inspection capabilities to the worker.

These are contributions to projects I build or maintain, including the forks
credited above. Their upstream projects and dependencies are part of the story.

[Browse public activity](https://github.com/RemiPelloux?tab=overview) ·
[Explore all repositories](https://github.com/RemiPelloux?tab=repositories)

## How I work

- **Start with the workflow.** Follow a real task from first use to a useful result.
- **Make systems connect.** Treat APIs, SDKs, data formats and documentation as product features.
- **Keep ownership clear.** Preserve original data, distinguish generated content and make export practical.
- **Measure the hard parts.** Look at latency, repeated work, failure recovery and device constraints.
- **Build on existing work.** Credit upstream projects and be explicit about what a fork changes.

<details>
<summary><strong>Technical toolbox</strong></summary>

<br />

| Area | Languages & tools |
| --- | --- |
| Product & web | TypeScript, JavaScript, React, Node.js, PHP, Symfony |
| Native & systems | Rust, Tauri, Kotlin, C++ |
| AI & automation | Python, LLM APIs, RAG, MCP, agent frameworks |
| Data & infrastructure | PostgreSQL, MySQL, Redis, Docker, AWS, CI/CD |

</details>

## Build with me

Interested in recruiting technology, practical AI agents, native tools or developer
infrastructure? [Connect on LinkedIn](https://www.linkedin.com/in/remipelloux/).

For project feedback, use the relevant repository's issues. Reproducible bug
reports, device compatibility results, performance measurements and documentation
improvements are especially useful. Check each project's contribution guide and
license before submitting changes.
