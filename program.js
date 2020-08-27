const program = require("commander");

const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");
const logSymbols = require("log-symbols");

function programStart() {
  program.version("0.1.0");

  program
    .command("create <project>")
    .description("初始化项目模板~")
    .action(function (project) {
      console.log(chalk.yellow(`开始创建项目： ${project} ~`));
      // 在下载前提示
      const spinner = ora({
        text: '"正在下载模板当中"',
        color: "yellow",
        spinner: {
          interval: 80,
          frames: ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"],
        },
      });
      spinner.start();

      /**
       * @downloadUrl   仓库地址#分支 注意需要改成所需要的格式，不要直接复制粘贴
       *
       * @project       项目名称
       *
       */
      const downloadUrl =
        "https://github.com:channing-cli/vue-template-default#master";
      download(downloadUrl, project, { clone: true }, (err) => {
        if (err) {
          spinner.fail(chalk.red("下载模板失败，失败原因：" + err));
        } else {
          spinner.succeed(chalk.green("成功下载模板"));
        }

          spinner.info(chalk.blue("finished"));
      });
    });

  program
    .command("help")
    .description("查看所有可用的模板帮助")
    .action(function () {
      onsole.log(chalk.yelllow("在这里可以书写相关的帮助信息"));
    });

  program.parse(process.argv);
}

module.exports = { programStart };
