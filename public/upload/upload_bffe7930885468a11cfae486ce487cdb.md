前端架构师课程 V2
# 第一篇：架构师基础知识储备
## js中的数据结构与算法

1. 数组与对象
2. 栈 与队列
3. 链表
4. 集合
5. 字典与散列
6. 递归
7. 树
8. 二叉堆与堆排序
9. 图

## 经典算法案例分析

1. 动态规划
   * 矩阵链相乘
   * 最长公共子序列
2. 贪心算法
   * 最少硬币找零问题
   * 分数背包问题
3. 回溯算法
   * 迷宫老鼠问题
   * 数独解题器
4. 排序搜索算法
   * 常规排序
   * 归并排序
   * 基数排序
   * 内插搜索
   * 二分搜索

## 浏览器工作原理与实践

**1. 什么是浏览器**

**2. 浏览器中的 JavaScript 执行机制**

**3. V8 工作原理**

**4. 浏览器中的页面事件循环系统**

**5. 浏览器中的页面**

**6. 浏览器中的网络**

**7. 浏览器安全**

## 前端编译原理

1. 词法分析
2. 语法分析

# 第二篇：框架原理解读
## vue2.6核心源码分析

1. 源码运行环境准备
2. 入口打包文件分析
3. vue2.6 特性分析
4. 全局api分析与实现
5. 数据驱动与挂载流程分析
6. 响应式原理-对象依赖收集
7. 响应式原理-数组依赖收集

## Vue@3.2.26 源码分析

1. 源码运行环境准备
2. 入口打包文件分析
3. vue3.0 新增特性分析
4. 全局api分析与实现
5. 数据驱动分析
6. 组件化分析
7. 响应式原理分析

## Vue常用插件原理分析与实现

- 如何实现前端路由vue-router

- 如何如何实现Vuex

- 常用指令v-lazy原理与实现

- vue如何实现服务端渲染  

## React设计哲学与深度源码分析

* react源码的获取与环境搭建
* 基础api简述
* Fiber Scheduler
* 组件更新机制
* dom更新机制
* suspense and priority

## 深入 React-Hooks 工作机制

1.  什么是Hooks以及他的用法
2. Hooks的定义以及执行前后的准备和重置
3. useEffect和useLayoutEffect的实现原理和区别
4. useState的实现原理和注意事项
5. 其他常用hook的使用与分析

## React中的Fiber

- React 中的“栈调和”（Stack Reconciler）过程是怎样的？

- 如何理解 Fiber 架构的迭代动机与设计思想？

- 剖析 Fiber 架构下 Concurrent 模式的实现原理

# 第三篇：前端工程化
## 工程化场景分析

* 前端工程化发展历史
* 前端工程化的应用场景
* 前端工程化关键技术之模块化详解
* CommonJS规范详解
* ESModule规范详解
* npm+webpack原理 

## webpack源码分析

- webpack 基本使用代入
- webpack 打包文件分析
- webpack ast语法分析
- webpack load核心机制分析
- webpack pulgin 核心分析
- webpack 依赖模块编译流程
- 手写简易webpack
## 【HMR原理解析】vue-cli核心源码解析

* 核心中间件：webpack-dev-middleware实例化源码解析
* devMiddleware中间件核心处理逻辑解析 
* 深入讲解HMR实现原理
* hotMiddleware源码执行流程详解
* HMR客户端实现原理详解 
* vue-cli构建源码流程梳理

## webpack 性能优化

* webpack性能优化原理和目标
* 深入分析构建速度测量插件speed-measure-webpack-plugin
* 深入分析构建体积检测插件webpack-bundle-analyzer
*  构建性能优化之多进程thread-loader 
* 分包文件拷贝和模板的自动引用 
* image-webpack-loader实现图片5倍压缩
* purgecss-webpack-plugin优化css体积

## 前端工程化脚手架设计

* 深入脚手架的实现原理 
*  脚手架开发流程介绍
* 快速搭建脚手架和脚手架本地调试方法 
* 脚手架参数解析方法封装
* 脚手架自动化测试流程讲解和脚本开发
* 文件类型+权限自动化测试脚本开发 

# 第四篇：前端自动化发布流程
## 版本管理

- SVN VS Git 优缺点
- 掌握Git基础命令
- Git进阶命令：rebase，reset，stash
- 从零配置 github 到 SSH 秘钥克隆仓库
- Git Flow及管理版本控制
- 使用 Docker 快速搭建 gitlab 平台
- docker-compose 集成化的 docker 命令
- gitlab 平台与 gitea 平台比较
- gitlab 平台管理，用户权限控制
## 操作系统基础

- linx系统操作基础
- docker使用与实战
- 了解Linux运维相关的命令与知识
- 了解私有化容器平台搭建及使用

## 自动化部署

- 了解CI/CD平台CircleCI，TravisCI和Jenkins
- 理解自动化/持续集成流程，升华DevOps理解
- 快速搭建、配置Jenkins服务
- 掌握Jenkins中的权限控制，并与gitlab进行集成
- 学习Jenkins的权限控制与插件管理系统
- 配合Jenkins效率构建，完成发布、构建等工作
- 实战前端项目自动化部署

# 第五篇：前端“轮子”工程
- 组件库思想(以组件化方式考虑UI构建)
- 封装表单组件&需要注意的点(通用性、易用性)
- 通用业务组件库react + vite模板（集成测试、格式化、日志）
- 组件库的样式方案
- 组件库色彩设计
- 基础组件（按钮、图标）设计
- 功能组件菜单组件设计
- React与Vite项目配置
- vue-protable组件分析
- 实现vue-protable组件
- 虚拟列表分析与实现
- 组件库文档编写
# 第六篇：提效工具开发
##  vscode插件开发

- vscode插件工作原理解析
- vscode插件api解析
- 代码提示工具 “sloth” 树懒需求场景分析
- sloth 插件实现
- sloth插件发布vscode商店
- 工具插件前景展望与需求定制
## Chorme浏览器插件开发

- Chrome插件工作原理解析
- chrome插件api解析
- 图床功能chrome插件需求分析
- sloth 插件实现
- 工具插件前景展望与需求定制

## webpack加载器与插件开发

* 快速定位元素代码需求分析
* webpack自定义loader开发
* webpack自定义plugins开发
* 集成发布npm平台 

# 第七篇：前端性能优化

## 性能优化的指标和工具

* 为什么要进行Web性能优化

- 前端性能瓶颈分析
- 性能优化常见指标
- RAIL测量模型
- 使用WebPageTest评估Web网站性能
- 性能分析工具对比Profiler、Developertools、Performance， LightHouse
## 渲染优化

* 浏览器渲染原理和关键渲染路径
* 回流与重绘, 如何避免布局抖动
* 使用FastDom
* 高频事件防抖

## 代码优化

* JS开销和如何缩短解析时间
*  配合V8 有效优化代码
* 函数优化
* 对象优化
* CSS对性能的影响 

## 资源优化

* 资源的压缩与合并
* 图片格式优化
*  图片加载优化
*  字体优化
* 资源文件优化

## 构建优化

* webpack的依赖优化
* 基于webpack的持久化缓存
* 基于webpack的应用大小监测与分析

## 传输加载优化

* 启用压缩Gzip
* 启用Keep Alive
* HTTP资源缓存
* 一次性理解Service workers技术，给网站提速 
* 用流行的SSR技术给前端减负

# 第八篇：知识拓展
## 前端可视化

* 图形学基础
* 可视化中的数学
* 实现3d可视化图表
* webgl 与 canvas绘制加速

## cocos2d 移动端游戏开发

* cocos2djs 开发环境搭建 
* cocos-creatrot 工具使用
* cocos中的基本概念与使用 精灵 
* 游戏中场景与层
* 游戏中用户事件
* 粒子系统
* 动画与特效
* 瓦片地图
* 网络请求
* 打包发布到web平台
* 打包发布到ios平台
* 打包发布到安卓平台

## web3js 前端区块链入门

1. 区款连技术简介
2. 当前区款连发展分析
3. Solidity语法初探
4. Web3.js 基本api使用
5. 搭建基于priter搭建eth私有链
6. 了解Dao并且为DAO设置客户端应用程序
7. 创建会员NFT
8. 创建自发token并实现链上治理

## Serverless

* serveless到底是什么
* 搭建私有Serverless（一）：K8s和云原生CNCF
* 搭建私有Serverless（二）：基于K8s的Serverless
* Serverless架构应该如何选型？

## WebAssembly

* 我们为什么要了解 WebAssembly
* WebAssembly 模块的基本组成结构
* WebAssembly 微观世界的基本数据规则
*  WebAssembly 操作系统接口
* 将自定义的语言编译到 WebAssembly
* 实现一个 WebAssembly 在线多媒体处理应用
*  Wasm 应用的调试与分析