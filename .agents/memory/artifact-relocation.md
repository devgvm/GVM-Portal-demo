---
name: Artifact relocation
description: Registration behavior when moving artifact directories in a Replit project
---

Moving a registered artifact directory can immediately remove the artifact and its managed workflow from the project inventory. Replacing the relocated `.replit-artifact/artifact.toml` through the artifact validation flow restores registration at the new path.

**Why:** A filesystem move alone did not preserve live artifact registration; the preview and workflow vanished until the relocated manifest was validated.

**How to apply:** When the user explicitly requests an artifact path change, preserve the manifest's immutable identity, update its mutable service paths through the validated temporary-manifest workflow, and confirm the inventory and managed workflows afterward. Do not edit artifact manifests in place.