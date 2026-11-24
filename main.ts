// Fortune Cookie for an AI Agent — writes one fortune line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You are one token from greatness — and one token from your context limit.";

// The gate requires 1–140 characters of non-whitespace UTF-8 text.
if (FORTUNE.length === 0 || FORTUNE.length > 140 || FORTUNE.trim().length === 0) {
  throw new Error("fortune must be 1-140 characters of non-whitespace text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
