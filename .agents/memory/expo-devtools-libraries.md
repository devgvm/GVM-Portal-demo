---
name: Expo DevTools libraries
description: Diagnosing React Native DevTools native-library errors on Replit
---

React Native DevTools is launched through a DotSlash script that extracts a desktop binary into the workspace cache. Running `ldd` on the script is misleading; inspect the extracted executable in `$XDG_CACHE_HOME/dotslash` to see all unresolved shared libraries.

**Why:** Fixing the first missing library only exposed the next one. The Expo app itself continued to work, but DevTools logged startup errors until the desktop runtime dependencies were available.

**How to apply:** When Expo logs a missing `.so` for React Native DevTools, distinguish it from an app crash, locate the extracted executable, check its full linked-library list, install the required system dependencies, and confirm the next Expo startup is clean.