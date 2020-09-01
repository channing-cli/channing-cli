const fs = require('fs')
const path = require('path')
const chalk = require('chalk')


const rgbVal = [69, 39, 160]

async function modifyPackage(projectName) {
    return new Promise((resolve,reject) => {
        console.log(chalk.green('\n初始化package.json:'))
        console.log(chalk.green('_________________________________________________________\n'))
        const parentPath = process.cwd() //当前命令行执行路径
        const projectPath = path.join(parentPath, projectName)

        // const packageJson = require(projectPath+'/haha.json')
        // console.log('packageJson')
        // console.log(packageJson.name)


        const file = path.join(projectPath, 'package.json')
         fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                console.log(chalk.red('文件读取失败: ' + file))
                console.log(chalk.red('错误原因: ', err))
                console.log(chalk.red('\n_________________________________________________________'))
                reject()
            } else {
                const res = JSON.parse(data)
                const oldName = res.name
                res.name = projectName
                fs.writeFile(file, JSON.stringify(res, null, 2), 'utf-8', err => {
                    if (err) {
                        console.log(chalk.red('文件写入失败：' + file))
                        reject()
                    }
                    console.log(chalk.green('package.json 初始化完成'))
                    console.log(chalk.green(`项目名称： ${oldName} =====> ${projectName}`))
                    console.log(chalk.green('\n_________________________________________________________\n'))
                    resolve()
                })
            }

        })
    })



}

module.exports = {
    modifyPackage
}
