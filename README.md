---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 304502210082d8bbce3d6358a9f76aa1775067f9d5beabf8d3547a553773ab4540d6c8dd83022007f144434285732ab8b5881a979d30c362c38538f171a644993f500b50c0d390
    ReservedCode2: 3046022100f83ae329f6d5fd80f4b2790a761f98b3c9864709bee07f159db7d82f3449b490022100d81517fc54b870da05fee5a8b183d8b03331209c3886903254d9a3f5ef479989
---

# 个人博客门户网站

一个炫酷的打工人主题博客入口站，带有赛博朋克风格的视觉效果。

## 功能特性

- **随机打工人标语** - 每次刷新页面都会显示不同的励志/搞笑标语，打字机效果
- **今年进度条** - 实时显示年度进度，带有流光动画效果
- **实时倒计时** - 显示距离年末的月-日-时-分-秒
- **快速链接网格** - 一键跳转到你的各个子页面
- **灵动色彩** - 蓝紫渐变主题，充满科技感
- **响应式设计** - 完美适配桌面、平板、手机

## 快速开始

### 本地预览

双击 `index.html` 即可在浏览器中打开。

### 添加新链接

在 `index.html` 中找到 `links` 数组，按以下格式添加：

```javascript
const links = [
    {
        icon: "star",  // 可选: blog, code, book, music, photo, game, star, heart, link
        title: "新页面标题",
        desc: "页面描述文字",
        url: "your-page.html"  // 本地HTML文件路径
    },
    // 添加更多...
];
```

### 创建新子页面

参考已有的 `blog.html`、`projects.html` 等文件的结构，创建你自己的页面。

## 部署到 GitHub Pages

### 方法一：用户仓库部署

1. 创建新仓库，命名为 `username.github.io`（将 `username` 替换为你的GitHub用户名）
2. 将整个项目文件推送到仓库的 `main` 分支
3. 等待几分钟后，访问 `https://username.github.io`

### 方法二：项目页面部署

1. 创建一个新仓库，将文件推送上去
2. 进入仓库 **Settings** → **Pages**
3. Source 选择 `main` 分支
4. 等待构建后，访问 `https://username.github.io/仓库名`

## 文件结构

```
/
├── index.html          # 主入口页面
├── blog.html           # 技术博客（示例）
├── projects.html       # 项目展示（示例）
├── reading.html        # 读书笔记（示例）
├── music.html          # 音乐时光（示例）
├── photos.html         # 摄影集（示例）
├── games.html          # 游戏娱乐（示例）
└── README.md           # 说明文档
```

## 自定义

### 修改标语

在 `index.html` 中找到 `slogans` 数组，添加或修改标语：

```javascript
const slogans = [
    "你的第一条标语",
    "你的第二条标语",
    // 添加更多...
];
```

### 修改样式

所有样式都在 `index.html` 的 `<style>` 标签中，可以修改：
- 颜色变量 (`:root` 部分)
- 动画效果 (`@keyframes` 部分)
- 布局和间距

## 技术栈

- 纯 HTML + CSS + JavaScript
- Google Fonts (Orbitron, Noto Sans SC, ZCOOL KuaiLe)
- 无需构建工具，纯静态部署

## 浏览器支持

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

---

Made with ♥ by Worker
