#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const expectedPluginName = "ds";
const expectedSkills = new Set([
  "tokens",
  "components",
  "storybook"
]);
const fail = (message) => {
  console.error(message);
  process.exitCode = 1;
};

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    fail(`${file} is not valid JSON: ${error.message}`);
    return {};
  }
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const next = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(next) : [next];
  });
}

const manifestPath = path.join(root, ".codex-plugin", "plugin.json");
if (!fs.existsSync(manifestPath)) fail(".codex-plugin/plugin.json is missing");
const manifest = fs.existsSync(manifestPath) ? readJson(manifestPath) : {};
for (const key of ["name", "version", "description"]) {
  if (!manifest[key]) fail(`plugin.json is missing ${key}`);
}
if (manifest.name !== expectedPluginName) fail(`plugin.json name must be ${expectedPluginName}`);

const skillsDir = path.join(root, "skills");
if (!fs.existsSync(skillsDir)) fail("skills directory is missing");
const seenSkills = new Set();
for (const entry of fs.existsSync(skillsDir) ? fs.readdirSync(skillsDir, { withFileTypes: true }) : []) {
  if (!entry.isDirectory()) continue;
  const skillName = entry.name;
  seenSkills.add(skillName);
  if (!expectedSkills.has(skillName)) fail(`Unexpected skill folder: ${skillName}`);
  const skillFile = path.join(skillsDir, skillName, "SKILL.md");
  if (!fs.existsSync(skillFile)) {
    fail(`Skill ${skillName} is missing SKILL.md`);
    continue;
  }
  const text = fs.readFileSync(skillFile, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    fail(`Skill ${skillName} is missing YAML frontmatter`);
    continue;
  }
  const nameMatch = match[1].match(/^name:\s*(.+)$/m);
  if (!nameMatch) fail(`Skill ${skillName} frontmatter is missing name`);
  if (nameMatch && nameMatch[1].trim() !== skillName) {
    fail(`Skill ${skillName} frontmatter name must match folder name`);
  }
  if (!/^description:\s*.+$/m.test(match[1])) fail(`Skill ${skillName} frontmatter is missing description`);
}

for (const expected of expectedSkills) {
  if (!seenSkills.has(expected)) fail(`Expected skill folder is missing: ${expected}`);
}

const placeholderPattern = new RegExp("\\b(" + "TO" + "DO|FIX" + "ME" + ")\\b");
for (const file of walk(root)) {
  if (file.includes(`${path.sep}.git${path.sep}`)) continue;
  if (placeholderPattern.test(fs.readFileSync(file, "utf8"))) {
    fail(`Placeholder marker found in ${path.relative(root, file)}`);
  }
}

if (!process.exitCode) console.log("Plugin validation passed.");
