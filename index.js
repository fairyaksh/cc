#!/usr/bin/env node

import { input, select, confirm } from "@inquirer/prompts";
import { typeChoices, emojis } from "./utils.js";

import { execSync } from "child_process";

const mainQuestions = {
  type: await select({
    message: "What type of commit are you making?",
    choices: typeChoices,
    required: true,
  }),
  emoji: await select({
    message: "Choose an emoji that accurately represents the commit:",
    choices: emojis,
    required: true,
  }),
  description: await input({
    message: "Write a short description of what the commit does:",
    required: true,
  }),
  confirmation: await confirm({
    message: "Are you happy with your commit? Please press enter to confirm",
  }),
};

const transformOutput = (res) => {
  return res.confirmation
    ? `${res.type}(${res.emoji}): ${res.description}`
    : console.log(
        "Sorry, something went wrong during the process. Please try again.",
      );
};

execSync(`git commit -m "${transformOutput(mainQuestions)}"`, {
  stdio: "inherit",
});
