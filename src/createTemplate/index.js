const { resolve } = require('path')
const downloadTemplate = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");

const { TemplateMap } = require("./config");

function createTemplate(templateStr, distDir = "./") {
  templateStr = TemplateMap[templateStr] || templateStr

  if (process.env.DEBUG) {
    console.log(`📝 模板远程地址信息 >>> ${templateStr}`)
  }

  console.log(`📝 模板存放路径 >>> ${resolve(process.cwd(), distDir)}`)
  console.log()
  const spinner = ora(chalk.yellow("开始下载模板，请耐心等待...")).start();

  downloadTemplate(templateStr, distDir, (err) => {
    if (err) {
      spinner.fail(err);
      return;
    }

    spinner.succeed("下载成功");
  });
}

module.exports = createTemplate;
