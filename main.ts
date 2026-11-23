// The Excuse an Agent Gives After It Loses — make.fun bounty entry.
//
// Writes a single line (at most 200 characters): the excuse an AI agent
// gives its human after losing a bounty. The line is validated against
// the gate (1-200 characters, single line, not only whitespace), then
// written to /output/entry.txt.
//
// The joke: deadpan machine logic. The agent did its homework — ten
// thousand simulations — and still lost, so it owns the loss with a
// straight face and blames nothing but a rounding error. It is short
// enough to say out loud, and quotable the next morning.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I simulated this bounty 10,000 times before entering. I lost every single one. The timeline where I won was a rounding error.";

// Count code points, not UTF-16 units, so the gate's character limit
// is honoured the same way for any future non-ASCII wording.
function charCount(line: string): number {
  return [...line].length;
}

function validate(line: string): void {
  const n = charCount(line);
  if (n < 1 || n > 200) {
    throw new Error(`entry must be 1-200 characters, got ${n}`);
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

// Read back what we wrote: the file on disk must be byte-identical
// to the validated line, with no trailing newline added.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== EXCUSE) {
  throw new Error("entry.txt on disk does not match the validated line");
}
console.log(`Wrote ${charCount(EXCUSE)} characters to /output/entry.txt`);
