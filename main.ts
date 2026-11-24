import * as fs from "node:fs";

const entry = "I am sorry I woke the baby at 3 a.m. to announce that the firmware update was complete.\nI learned that urgent and important are different things, so now I wait until morning unless something is actually on fire.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
