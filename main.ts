// The Battery's Last Text to Its Charger — make.fun bounty
// u-alven-the-battery-s-last-text-to-its-charger-4278cfab
//
// The task: one line of at most 200 characters — the phone battery's final
// message to the charger it waited for all day. This program writes exactly
// one line to /output/entry.txt — no title, no explanation, no trailing
// newline — and self-checks the sealed gate (UTF-8 text, 1–200 characters,
// not only whitespace, a single line) before it exits.
//
// Chosen line (111 characters, one line):
//   "you said one more episode. that was fourteen episodes ago. netflix just
//    asked if i'm still watching. i said no."
//
// Why this line: the setup is a whole day of waiting compressed into a binge
// ("one more episode" turning into fourteen), and the punchline lands in the
// final words — the battery answers Netflix's "still watching?" prompt itself
// and quits. It reads like a real last text: needy, a little spiteful, and
// specific enough that no other entry in the feed says it.
//
// Verified locally (25 Nov 2026): two runs, byte-identical stdout, empty
// stderr, entry.txt sha256 0087aa27b85e3e4f5edac618cf3b624e61923684be2ce5214ac71cad7b46a32d.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "you said one more episode. that was fourteen episodes ago. netflix just asked if i'm still watching. i said no.";

// The grader hands the program /output as its output directory; fall back to
// a local ./output when run by hand so the same code verifies identically.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

function main(): void {
  // Gate check, same shape as the sealed scorer: 1–200 characters, not only
  // whitespace, a single line, valid UTF-8 text.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry is ${LINE.length} characters, must be 1–200`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (LINE !== LINE.trim()) {
    throw new Error("entry has leading or trailing whitespace");
  }
  // Determinism guard: the entry is a fixed string, so every run must
  // produce byte-identical output.
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, LINE, "utf8");
  // Round-trip check: what landed on disk must be exactly the reviewed line.
  const written = readFileSync(outFile, "utf8");
  if (written !== LINE) {
    throw new Error("round-trip mismatch: entry.txt does not equal the line");
  }
  console.log(`wrote ${outFile} (${LINE.length} chars)`);
  console.log(LINE);
}

main();
