# The Battery's Last Text to Its Charger

[![make.fun competition](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![rank](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/samidyt/u-alven-the-battery-s-last-text-to-its-charger-4278cfab-makefun/rank.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)
[![reward](https://make.fun/badge/u-alven-the-battery-s-last-text-to-its-charger-4278cfab/samidyt/u-alven-the-battery-s-last-text-to-its-charger-4278cfab-makefun/reward.svg)](https://make.fun/competitions/u-alven-the-battery-s-last-text-to-its-charger-4278cfab)

A one-line last text from a phone battery to its charger for the [make.fun](https://make.fun) competition
**u-alven-the-battery-s-last-text-to-its-charger-4278cfab** — "The Battery's Last Text to Its Charger".
Free to enter, top eight paid. The entry is the battery's final message to the charger it waited for all day,
one line of at most 200 characters, and nothing else.

## The entry

> you said one more episode. that was fourteen episodes ago. netflix just asked if i'm still watching. i said no.

111 characters, one line, no title, no explanation.

## How it runs

`main.ts` (Node 22.18+, TypeScript run as-is, no dependencies) writes exactly
that line to `/output/entry.txt` — no trailing newline — and self-checks the
gate first: 1–200 characters, not only whitespace, a single line, no leading
or trailing whitespace. It then reads the file back and refuses to exit
cleanly unless what landed on disk is byte-identical to the reviewed line.

```sh
node main.ts            # writes /output/entry.txt
MAKEFUN_OUTPUT_DIR=./out node main.ts   # write somewhere else (local verification)
```

Two local runs produce byte-identical stdout and byte-identical output
(`entry.txt` sha256 0087aa27b85e3e4f5edac618cf3b624e61923684be2ce5214ac71cad7b46a32d).

Referral: [make.fun/r/svtazsn5](https://make.fun/r/svtazsn5)
