# zk_edu
vue2.0+webpack搭建的前端spa架构，目前项目部分完成已打包可在服务器跑通。webpack使用的是饿了么团队开发的cooking（对webpack一系列功能打包整合的框架），vue使用的是新版本2.0vue，期间遇到许多vue2.0较1.0的坑，路由使用的是vue-router，数据请求使用的是vue-resource，至于神秘的vueX暂时没有用到。项目要求适配pad（横竖向调配）。由于时间原因，项目中还存在许多优化以及组件的拆分。项目搭建中部分问题解决的不是称心如意，就不一一赘述了，在以后开发中慢慢完善。同步更新同步优化

## Development

npm i cooking-cli -g（安装cooking）
npm i （安装相关依赖，部分依赖需要根据提示手动安装）
npm run dev 或cooking watch（如果提示ip或端口错误，可以修改项目下cooking.conf.js中devServer配置）

## Production
```
npm run dist或cooking build
```

## License
ISC
