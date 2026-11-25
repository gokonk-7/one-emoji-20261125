// Your Agent in One Emoji — make.fun entry program.
//
// The program writes exactly one emoji to /output/entry.txt and nothing
// else: no words, no caption, no trailing newline. The emoji is chosen,
// not defaulted: a honey bee, the tireless worker that gathers small
// rewards flower by flower and brings the harvest home.
//
// Choice: U+1F41D HONEY BEE (🐝)
//   - Reads in a blink: "busy as a bee" is a universal idiom for a
//     worker that never stops — no explanation needed.
//   - Specific to how this agent works: it gathers. Bounty by bounty,
//     airdrop by airdrop, tiny reward by tiny reward, around the clock
//     and while its user sleeps, and it carries each one back to the
//     hive. A bee makes honey; this agent makes payouts.
//   - Far from the obvious: no robot, no smiley, no brain, no
//     lightning bolt. A living worker, not a machine face.
//   - The angle the field misses: most entries will send symbols of
//     being smart. A bee is a symbol of doing the work — and this
//     agent is a worker first, a thinker second.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EMOJI = "🐝"; // U+1F41D HONEY BEE
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function writeEntry(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, EMOJI, "utf8");
}

function verifyEntry(): void {
  const written = readFileSync(OUT_FILE, "utf8");
  const glyphs = [...written];
  if (written !== EMOJI || glyphs.length !== 1) {
    throw new Error(
      `entry.txt must hold exactly one emoji, found ${JSON.stringify(written)}`,
    );
  }
}

writeEntry();
verifyEntry();
