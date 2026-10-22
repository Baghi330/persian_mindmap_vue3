# 一个基于Vue3.2 + ElementPlus的Web思维导图

## 项目预览
### 项目地址：[思维导图](https://huangyuanyin.gitee.io/hyy-vue3-mindmap/#/)
![image](https://github.com/huangyuanyin/hyy-vue3-mindMap/assets/42410679/de1f7a5c-b9a8-443c-ada7-ba85728f6760)
![image](https://github.com/huangyuanyin/hyy-vue3-mindMap/assets/42410679/ba50db92-df06-4ff0-8621-ab089c685fba)
![image](https://github.com/huangyuanyin/hyy-vue3-mindMap/assets/42410679/3fda4eb2-f473-40b3-afcd-bd10bbcee52c)




## 特性

- [x] 插件化架构，除核心功能外，其他功能作为插件提供，按需使用，减小整体体积
- [x] 支持逻辑结构图、思维导图、组织结构图、目录组织图、时间轴（横向、竖向）、鱼骨图等结构
- [x] 内置多种主题，允许高度自定义样式，支持注册新主题
- [x] 节点内容支持文本（普通文本、富文本）、图片、图标、超链接、备注、标签、概要
- [x] 支持画布拖动、缩放
- [x] 支持右键按住多选
- [x] 节点支持拖拽（拖拽移动、自由调整）、多种节点形状，支持使用 DDM 完全自定义节点内容
- [x] 支持鼠标按键拖动选择和Ctrl+左键两种多选节点方式
- [x] 支持导出为json、png、svg、pdf、markdown、xmind，支持从json、xmind、markdown导入
- [x] 支持快捷键、前进后退、关联线、搜索替换、小地图、水印
- [x] 提供丰富的配置，满足各种场景各种使用习惯

## 工具库介绍
1.`simple-mind-map`
思维导图工具库，框架无关，`Vue`、`React`等框架或无框架都可以使用。

2.使用`simple-mind-map`工具库，基于`vue3.2`、`ElementPlus`搭建的在线思维导图。特性：

- [x] 工具栏，支持插入节点、删除节点；编辑节点图片、图标、超链接、备注、标签、概要

- [x] 侧边栏，基础样式设置面板、节点样式设置面板、大纲面板、主题选择面板、结构选择面板

- [x] 导入导出功能；数据默认保存在浏览器本地存储，也支持直接创建、打开、编辑电脑本地文件

- [x] 右键菜单，支持展开、收起、整理布局等操作

- [x] 底部栏，支持节点数量、字数统计；支持切换编辑和只读模式；支持放大缩小；支持全屏切换；支持小地图

## 开发

### 本地开发
```bash
git clone https://github.com/huangyuanyin/hyy-vue3-mindMap.git
npm i
npm run serve
```

### 多语言
项目支持 `简体中文`、`English` 和 `فارسی`（فارسی）三种语言，默认语言为 فارسی。
在编辑页右下角工具栏以及首页右上角的语言下拉框中即可切换，切换结果会保存到浏览器本地存储中。

翻译文件位置：
- `src/lang/zh_cn.js`、`src/lang/en_us.js`、`src/lang/fa_ir.js` ：界面文案
- `src/config/zh.js`、`src/config/en.js`、`src/config/fa.js` ：字体、快捷键、形状等配置项
- `src/config/structureZh.js`、`src/config/structureEn.js`、`src/config/structureFa.js` ：布局结构名称
- `src/config/editorLang.js` ：富文本编辑器（toast-ui editor）的文案
- `src/example/exampleDataFa.js` ：فارسی 默认示例数据

可运行 `node scripts/checkLangKeys.js` 检查三个语言的文案键是否一致。

### 从右向左的思维导图
除了工具库自带的布局外，项目额外提供了「思维导图（从右向左）」布局，节点统一向左生长，适合 فارسی 等从右到左的语言：

- `src/layouts/MindMapRtl.js` ：布局实现
- `src/layouts/index.js` ：把自定义布局注册到工具库
- `src/assets/img/structures/mindMapRtl.png` ：结构预览图（由 `scripts/createRtlStructureImage.py` 生成）

### RTL 布局
选择 فارسی（فارسی）语言时，页面会自动切换为从右到左（RTL）的布局：

- `src/utils/direction.js` 根据当前语言计算 `dir` 属性，并同步到 `html` 标签上
- 界面中的 `left`/`right`、`margin-left`/`margin-right` 等样式统一改为 `inset-inline-*`、`margin-inline-*` 等逻辑属性，从而同时兼容 LTR 与 RTL 两种布局
- فارسی 语言下会使用 `Vazirmatn`（وزیرمتن）字体，相关文件位于 `src/assets/fonts/`

界面的固定位置在所有语言下保持一致：

- 右侧的竖向工具栏（结构、主题、样式等）以及由它打开的侧边面板，始终位于页面右边
- 底部的横向工具栏（搜索、缩放、全屏、语言切换等）以及搜索面板，始终位于页面左边
- 节点数量统计位于右下角

### 已知问题
- 节点备注使用的富文本编辑器（toast-ui editor）在开启/关闭备注窗口时会在控制台输出 `RangeError: Applying a mismatched transaction`，该问题来自编辑器依赖的 ProseMirror，与本项目代码无关。

## 后期计划
- [ ] 将项目从 vue-cli 迁移至 vite
- [ ] 将项目由 JS 改至 TS编写
- [x] 完善فارسی（波斯语）界面的从右到左（RTL）布局支持

# 特别说明

本项目较粗糙，未进行完整测试，功能尚不是很完善，性能也存在一些问题，仅用于学习和参考，请勿用于实际项目。

本项目基于https://github.com/wanglin2/mind-map 上重构vue3 + elementplus版本。

项目内置的主题和图标来自于：

[百度脑图](https://naotu.baidu.com/)

[知犀思维导图](https://www.zhixi.com/)
# persian_mindmap_vue3
# persian_mindmap_vue3
