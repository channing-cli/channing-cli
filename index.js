#!/usr/bin/env node

const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const logSymbols = require("log-symbols");

// 命令行用户交互(获取模板选项)
const { inquirerStart } = require("./inquirer");

// 创建模板程序
const { programStart } = require("./program");

async function start() {
  console.log(logSymbols.info, chalk.yellow(" 😈😈😈 启动channing-cli脚手架工具···"));

  const res = await inquirerStart();
  const {template} = res

  await programStart(template);

}

start();
