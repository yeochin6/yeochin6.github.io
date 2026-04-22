---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3044022066a4404bdc2c75c175341dbeb65119b5bf20e841e414c97d21840d5a6ecec8dc0220627c5509e9b651f9591900d643637eed42c681cd0e128e74f23dc811fb799556
    ReservedCode2: 3046022100a5cb0d8cce48db3230d4ba88e23aceea4d52bef373b7cad5d08c70c6ac21274a022100fcb3dad9b79cee6b4952d7d7eb58ad52db112181094edac3b51456c9203bbea4
---

# BluePurple Portal - 简洁导航门户

一个蓝紫渐变风格的导航门户，支持新闻热词滚动和年度进度展示。

## 文件结构

```
yeochin6.github.io/
├── index.html           # 主页
├── styles.css           # 样式
├── script.js            # 交互逻辑
├── news.json            # 新闻热词数据
├── about.html           # 关于页面
├── projects.html        # 项目页面
├── notes.html           # 笔记页面
├── docs.html            # 文档页面
└── .github/
    └── workflows/
        └── fetch-news.yml  # GitHub Actions 新闻自动抓取
```

## 部署步骤

### 1. 创建 GitHub 仓库

1. 登录 GitHub，点击 **New repository**
2. 仓库名称设为 `yeochin6.github.io`（必须是你的用户名 + `.github.io`）
3. 选择 **Public**，点击 **Create repository**

### 2. 上传文件

```bash
cd yeochin6.github.io
git init
git add .
git commit -m "Initial portal"
git branch -M main
git remote add origin https://github.com/yeochin6/yeochin6.github.io.git
git push -u origin main
```

### 3. 启用 GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **main**，文件夹选择 **/ (root)**
4. 点击 **Save**

几分钟后访问 `https://yeochin6.github.io`

## 添加更多离线页面

1. 在仓库根目录创建新的 HTML 文件（例如 `contact.html`）
2. 在 `index.html` 和其他页面的 `.links` 导航中添加对应链接：
   ```html
   <a href="contact.html">联系</a>
   ```
3. 所有页面使用相同的 `styles.css` 保持风格一致

## 新闻热词自动更新（可选）

### 使用 GitHub Actions 自动抓取新闻

1. 获取 [NewsAPI](https://newsapi.org) 的 API Key
2. 在仓库 **Settings** → **Secrets** 添加：
   - 名称：`NEWSAPI_KEY`
   - 值：你的 API Key
3. Workflow 会每天 UTC 02:00 自动更新 `news.json`

### 手动更新新闻热词

直接编辑 `news.json` 文件，格式：
```json
[
  "人工智能",
  "中美关系",
  "芯片自研"
]
```

## 自定义

- 修改标语：编辑 `script.js` 中的 `TAGLINES` 数组
- 修改导航链接：在 `index.html` 的 `.links` 中添加/修改 `<a>` 标签
- 修改颜色：在 `styles.css` 的 `:root` 中调整 CSS 变量

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- 无需任何框架
- 纯静态部署

---

部署：GitHub Pages · © 2026