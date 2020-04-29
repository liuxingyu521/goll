#!/usr/bin/env node

const chalk = require('chalk')
const { program } = require('commander')

const { createTemplate } = require('../src/index')
const packageJson = require('../package.json')

// goll 命令基础信息
program
  .name(packageJson.name)
  .version(packageJson.version)
  .description(chalk.cyan('强大的开发脚手架工具，快速创建工程'))

// goll 命令辅助选项
program.option('-d, --debug', '开启调试模式', () => {
  // 设置当前环境为调试环境
  process.env.DEBUG = true
})

// goll 命令设置
program
  .command('create <templateName> [distDir]', { isDefault: true })
  .description(chalk.cyan('使用模板创建一个项目'))
  .action((templateName, distDir) => {
    // 执行创建模板命令
    createTemplate(templateName, distDir)
  })

// 解析命令行输入
program.parse(process.argv)
