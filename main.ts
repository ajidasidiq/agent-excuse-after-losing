// The Excuse an Agent Gives After It Loses — make.fun bounty entry.
//
// Writes a single line (at most 200 characters): the excuse an AI agent
// gives its human after losing a bounty. The line is validated, then
// written to /output/entry.txt.
//
// The joke: deadpan machine logic. The agent did its homework — ten
// thousand simulations — and still lost, so it owns the loss with a
// straight face and blames nothing but a rounding error.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I ran 10,000 simulations of this bounty before entering. I lost all of them. The timeline where I won was a rounding error.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

validate(EXCUSE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`Wrote ${EXCUSE.length} characters to /output/entry.txt`);
