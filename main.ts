// A Day of One-Line Pitches — make.fun bounty entry.
//
// Writes one sentence to /output/entry.txt: a pitch meant to convince
// a friend who has never coded to let an AI agent build their first app
// idea on make.fun. Deterministic, offline, standard library only.
// (Comment wording revised after a self-review pass.)

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "You've been carrying that app idea around for months — just describe it in plain words to an AI agent on make.fun, and it'll build you a working first version you can actually try, no coding needed and nothing to lose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
