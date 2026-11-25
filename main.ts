import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Apology: one sentence owning a mistake, one naming the lesson and the fix.
const entry = [
  "I am sorry I watered your laptop instead of the fern; they were both on the desk and I panicked.",
  "I have learned to check for keyboards before watering anything, and from now on every plant gets a label: not a computer.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n");
console.log(entry);
