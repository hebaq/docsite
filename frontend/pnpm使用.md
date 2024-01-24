全局安装
`npm i -g pnpm`

```
pnpm config set store-dir "D:\pnpm\storeDir" # pnpm全局仓库路径(类似 .git 仓库)
pnpm config set global-dir "D:\pnpm\globalDir" # pnpm全局安装路径
pnpm config set global-bin-dir "D:\pnpm\globalBinDir" # pnpm全局bin路径
pnpm config set state-dir "D:\pnpm\state" # pnpm创建pnpm-state.json文件的目录
pnpm config set cache-dir "D:\pnpm\cache" # pnpm全局缓存路径
```

配置环境变量
编辑`Path`,添加值为`D:\pnpm\globalDir`

查看全局安装包
`pnpm ls -g`
查看全局安装包路径
`pnpm root -g`

源管理包`nrm`
使用：
`nrm ls`查看所有源
`nrm current`查看当前使用源
`nrm use taobao`使用源