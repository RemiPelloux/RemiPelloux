# Profile motion

The pixel slime adapts the bouncing body, blinking eyes and curious expressions
of OpenPro's OpenCode-style CLI mascot in OpenAgents:

- [mascot.py](https://github.com/RemiPelloux/OpenAgents/blob/main/openagents_cli/mascot.py)
- [startup_animation.py](https://github.com/RemiPelloux/OpenAgents/blob/main/openagents_cli/startup_animation.py)

The waveform and light illustrate the work done by OpenPlod and LumaSync.
Later assets extend the same language: Modelly moves agents across a grid and
a network while a data-collection chart draws; android-hid-kb streams bytes
down a USB cable into a console; GalaxyCrash opens a lock then reboots it away;
deal-club deals a fan of property cards. These are decorative illustrations,
not live processing, telemetry or availability indicators.

The SVGs are self-contained, with no scripts, fonts, network requests or filters.
Motion uses only transforms and opacity with stable image dimensions.
Each asset disables animation for `prefers-reduced-motion: reduce`.
README picture sources also select explicit still images for reduced motion,
because browser preference propagation into embedded SVG images can vary.
The rest of the README, including contribution counts, stays static.

## Motion review

| Before | After | Why |
| --- | --- | --- |
| Static agent icon | Small breathing and blinking mascot | Carries the CLI identity into the profile |
| Static waveform | Low-amplitude bar motion | Illustrates audio processing |
| Static light bulb | Gentle fill and ray opacity changes | Illustrates ambient lighting |
| SVG media query alone | Explicit still-image picture sources | Guarantees reduced motion at the page level |

The loops are decorative profile motion, not interactive UI transitions.
They do not require hover, change layout, interrupt reading or move data.
Reduced motion removes all looping animation. No unresolved motion findings.

Verdict: Approve after browser pixel checks for animation and reduced motion.
