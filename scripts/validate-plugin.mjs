#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
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

const skillsDir = path.join(root, "skills");
if (!fs.existsSync(skillsDir)) fail("skills directory is missing");
for (const entry of fs.existsSync(skillsDir) ? fs.readdirSync(skillsDir, { withFileTypes: true }) : []) {
  if (!entry.isDirectory()) continue;
  const skillFile = path.join(skillsDir, entry.name, "SKILL.md");
  if (!fs.existsSync(skillFile)) {
    fail(`Skill ${entry.name} is missing SKILL.md`);
    continue;
  }
  const text = fs.readFileSync(skillFile, "utf8");
  const match = text.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    fail(`Skill ${entry.name} is missing YAML frontmatter`);
    continue;
  }
  if (!/^name:\s*.+$/m.test(match[1])) fail(`Skill ${entry.name} frontmatter is missing name`);
  if (!/^description:\s*.+$/m.test(match[1])) fail(`Skill ${entry.name} frontmatter is missing description`);
}

for (const file of walk(root)) {
  if (file.includes(`${path.sep}.git${path.sep}`)) continue;
  const text = fs.readFileSync(file, "utf8");
  const placeholderPattern = new RegExp("\\b(" + "TO" + "DO|FIX" + "ME" + ")\\b");
  if (placeholderPattern.test(text)) fail(`Placeholder marker found in ${path.relative(root, file)}`);
}

if (!process.exitCode) console.log("Plugin validation passed.");
