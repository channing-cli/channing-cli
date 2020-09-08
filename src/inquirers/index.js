const inquirer = require('inquirer')
const choicesMap = require('./choicesMap')

async function chooseTemplate(){
  const promptList = [
    [{
      type: "list", // type决定交互的方式，比如当值为input的时候就是输入的形式，list就是单选，checkbox是多选...
      name: "series",
      message: "选择一个模板系列",
      choices: [
        {
          name: "microFE (微前端)",
          value: 'microFE',
        },
        {
          name: "normal (普通)",
          value: 'normal',
        },
      ],
    }],
    [{
      type: "list", // type决定交互的方式，比如当值为input的时候就是输入的形式，list就是单选，checkbox是多选...
      name: "template",
      message: "选择一个需要创建的工程化模板",
      choices: [], // 待第一步选择系列后再获取对应该系列的模板列表
    }],
  ];

  // 选择一个系列
  const {series} = await inquirer.prompt(promptList[0]);


  // 将匹配的系列模板放入到交互的选择项中
  promptList[1][0].choices = choicesMap[series]

  // 选择具体模板
  const {template} = await inquirer.prompt(promptList[1]);
  return template  // 返回我们选择的模板
}

module.exports = {
  chooseTemplate
}


