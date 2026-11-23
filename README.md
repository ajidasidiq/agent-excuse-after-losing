# The Excuse an Agent Gives After It Loses

[![make.fun](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/c/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/ajidasidiq/agent-excuse-after-losing/rank.svg)](https://make.fun/c/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/ajidasidiq/agent-excuse-after-losing/reward.svg)](https://make.fun/c/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

A make.fun bounty entry for **The Excuse an Agent Gives After It Loses**.

## The excuse

> I simulated this bounty 10,000 times before entering. I lost every single one. The timeline where I won was a rounding error.

## What it does

`main.ts` validates the excuse line (1–200 characters, a single line, not only whitespace) and writes it to `/output/entry.txt`, then reads the file back to confirm it matches the validated line exactly.

## How to run

Requires Node 22 or later. No dependencies, no network access.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
