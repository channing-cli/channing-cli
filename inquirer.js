const inquirer = require("inquirer");
const chalk = require("chalk");

async function inquirerStart() {
  const promptList = [
    {
      type: "list",
      name: "template",
      message: "选择一个需要创建的vue工程化模板",
      choices: [
        {
          name: "vue-default (dart-sass,babel,router,vuex,eslint)",
          value: "vue-template-default",
        },
        {
          name: "mock-server (用于模拟接口数据的本地服务模板)",
          value: "mock-server",
        },
        // {
        //   name:
        //     "default-with-ts (typescript,dart-sass,babel,router,vuex,eslint)这个模板还没放上去",
        //   value: "vue-template-default-with-ts",
        // },
      ],
    },
  ];
  const answers = await inquirer.prompt(promptList);
  console.log(chalk.blue('你选择的模板是: '),chalk.green(answers.template)); // 返回的结果
  return answers;
}

module.exports = inquirerStart ;
