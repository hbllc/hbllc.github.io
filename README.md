# 李立川 - 架构师个人主页

> 一个专业、现代化的程序员个人主页，完美展示11年大厂工作经验

🌐 **在线预览**: [点击访问](https://hbllc.github.io)

---

## 📖 项目简介

这是一个使用纯原生技术（HTML5 + CSS3 + JavaScript ES6+）开发的个人主页网站，专为架构师、资深开发者设计。网站采用**暗色科技风**设计，支持亮色/暗色主题切换，完全响应式布局，适配所有设备。

### ✨ 核心特性

- ✅ **现代化设计**：暗色科技风 + 霓虫蓝强调色
- ✅ **响应式布局**：完美适配手机/平板/电脑
- ✅ **双主题支持**：暗色/亮色一键切换（保存到本地）
- ✅ **流畅动画**：淡入、悬浮、滚动触发效果
- ✅ **智能导航**：滚动自动高亮当前区域
- ✅ **高性能**：使用 Intersection Observer API
- ✅ **零依赖**：纯原生 JavaScript，无任何框架
- ✅ **SEO 优化**：语义化 HTML，meta 标签完善
- ✅ **可访问性**：键盘导航支持，屏幕阅读器友好

---

## 🎯 页面结构

### 1. **Hero Section（首屏）**
- 大头像展示区（可替换为真实照片）
- 姓名 + 职位 + 简介
- 社交链接：GitHub、LinkedIn、邮箱、博客
- 行动按钮：联系我、查看经历

### 2. **About Me（关于我）**
- 个人简介（三段内容）
- 教育背景：西北工业大学 软件工程专业
- 三大核心优势展示
- 数据统计：11年经验、5家公司、20+技术栈、100+项目

### 3. **Work Experience（工作经历）** ⭐核心模块
垂直时间轴展示5段完整工作经历：

#### **滴灌通（2023-至今）** - 重点展示
- **三大业务板块详细展示**：
  - **资产端系统**：全流程系统、采购系统、资产管理平台
  - **资金端系统**：投后管理、资金管控、风险预警
  - **交易所系统**（核心）：DRO/RBO/SPV/SPAC产品、撮合引擎、清算结算、运营后台
- **核心职责与成就**：6大责任领域，数据化成果展示
- **技术架构详解**：微服务、分布式事务、高性能撮合等

#### **其他公司经历（简化展示）**
- **阿里巴巴**（2021-2023）：国际物流平台
- **华锐金融**（2020-2021）：证券风控系统
- **顺丰科技**（2018-2020）：保险业务系统
- **嘉联支付**（2015-2018）：支付交易对账

### 4. **Skills（技能栈）**
7大技术分类，三档熟练度标识：
- 编程语言：Java、Python、Go、JavaScript
- 微服务框架：Spring Cloud、Dubbo、Service Mesh
- AI技术：AI Agent、LangChain、RAG、大模型
- 数据库：MySQL、Redis、MongoDB、Elasticsearch
- 中间件：Kafka、RocketMQ、Nacos
- 云原生：Docker、Kubernetes、Jenkins
- 金融科技：支付、风控、交易、供应链金融

### 5. **Contact（联系方式）**
- 邮箱：li_lichuan@126.com（点击复制）
- GitHub、LinkedIn 链接
- 微信二维码占位符

---

## 🚀 快速开始

### 方式1：直接预览（最快）
```bash
双击 index.html 文件即可在浏览器中打开
```

### 方式2：本地服务器（推荐）
```bash
# 在项目文件夹中打开终端

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (需要先安装 http-server)
npx http-server -p 8000

# 然后访问：http://localhost:8000
```

### 方式3：使用 VS Code Live Server
1. 安装 VS Code 的 Live Server 扩展
2. 右键点击 `index.html`
3. 选择 "Open with Live Server"

---

## 🌐 部署到线上

### 部署到 GitHub Pages（推荐）

```bash
# 1. 创建 GitHub 仓库
# 仓库名称：your-username.github.io（替换为你的 GitHub 用户名）

# 2. 初始化 Git 仓库
git init

# 3. 添加所有文件
git add .

# 4. 提交更改
git commit -m "Initial commit: 李立川个人主页上线"

# 5. 添加远程仓库
git remote add origin https://github.com/your-username/your-username.github.io.git

# 6. 推送到 GitHub
git push -u origin main

# 7. 在 GitHub 仓库设置中启用 GitHub Pages
# Settings → Pages → Source: main branch → Save

# 8. 访问你的网站
# https://your-username.github.io
```

### 部署到 Vercel

```bash
# 1. 访问 https://vercel.com
# 2. 用 GitHub 账号登录
# 3. 点击 "Import Project"
# 4. 选择你的仓库
# 5. 一键部署！（自动 HTTPS，秒级生效）
```

### 部署到 Netlify

```bash
# 1. 访问 https://www.netlify.com
# 2. 拖拽项目文件夹到 Netlify 面板
# 3. 自动部署！（自动 HTTPS，自定义域名支持）
```

---

## ✏️ 个性化配置

### 1. 修改基本信息

编辑 `index.html` 文件：

```html
<!-- 第50行左右：修改姓名 -->
<span class="title-name">你的名字</span>

<!-- 第54行左右：修改职位 -->
<span class="typing-cursor">你的职位 | 技术专长</span>

<!-- 第60行左右：修改简介 -->
<p class="hero-description">
    你的个人介绍...
</p>

<!-- 第80-90行左右：修改社交链接 -->
<a href="https://github.com/your-username" target="_blank">
    <i class="fab fa-github"></i>
</a>
```

### 2. 更新教育背景

在 `index.html` 的 About Me 区域（约第160行）：

```html
<div class="education-school">你的大学</div>
<div class="education-major">你的专业</div>
<div class="education-degree">学历</div>
```

### 3. 修改工作经历

在 `index.html` 的 Experience 区域（约第250-600行），修改每个 `timeline-item` 的内容：

- 公司名称
- 工作时间
- 职位
- 工作职责描述
- 技术栈标签

### 4. 调整技能标签

在 `index.html` 的 Skills 区域（约第650-750行）：

- 添加/删除技能标签
- 修改熟练度等级：`expert`（精通）、`advanced`（熟练）、`intermediate`（了解）

### 5. 更新联系方式

在 `index.html` 的 Contact 区域（约第800行）：

```html
<!-- 修改邮箱 -->
<a href="mailto:your-email@example.com">your-email@example.com</a>
<button class="copy-btn" data-copy="your-email@example.com">

<!-- 修改社交链接 -->
<a href="https://github.com/your-username" target="_blank">
```

### 6. 添加真实头像

替换头像占位符为真实照片（约第45行）：

```html
<!-- 原代码 -->
<div class="avatar-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- 替换为 -->
<img src="your-photo.jpg" alt="你的名字" style="width:150px; height:150px; border-radius:50%; object-fit:cover; box-shadow: 0 0 20px rgba(0, 217, 255, 0.3);">
```

### 7. 更换配色方案

编辑 `css/style.css` 第 5-10 行：

```css
:root {
    --primary-color: #00d9ff;      /* 主色调：霓虹蓝 */
    --secondary-color: #667eea;    /* 副色调：紫色 */
    --accent-color: #f093fb;       /* 强调色：粉色 */
    /* 改成你喜欢的颜色！ */
}
```

推荐配色方案：
- **科技蓝**：`#00d9ff` + `#667eea`（当前）
- **绿色科技**：`#10b981` + `#34d399`
- **橙色暖调**：`#f59e0b` + `#fbbf24`
- **红色激情**：`#ef4444` + `#f87171`

---

## 🎨 设计亮点

### 视觉设计
- 🌙 暗色科技风：深灰背景 + 霓虫蓝强调色
- ✨ 渐变效果：标题、按钮、图标使用渐变
- 🎯 卡片设计：统一的圆角、阴影、悬浮效果
- 📱 响应式栅格：灵活适配不同屏幕尺寸

### 交互体验
- 🔄 主题切换：暗色/亮色平滑过渡
- 🧭 智能导航：滚动自动高亮
- 📍 平滑滚动：点击导航优雅滚动
- 🎭 微动画：悬浮、淡入、数字滚动

### 技术实现
- ⚡ Intersection Observer：高性能滚动监听
- 💾 LocalStorage：主题设置持久化
- 🎯 CSS 变量：统一管理配色和间距
- ♿ 语义化 HTML：SEO 和可访问性优化

---

## 🛠️ 技术栈

| 分类 | 技术 | 说明 |
|------|------|------|
| **前端** | HTML5 | 语义化标签、SEO优化 |
| **样式** | CSS3 | 变量、动画、响应式、Flexbox、Grid |
| **脚本** | JavaScript ES6+ | 原生实现，无框架依赖 |
| **图标** | Font Awesome 6.4 | 1000+ 矢量图标 |
| **字体** | Google Fonts | Inter（正文） + Fira Code（代码） |
| **性能** | Intersection Observer | 滚动动画性能优化 |
| **存储** | LocalStorage | 主题设置持久化 |

---

## 📁 文件结构

```
个人主页/
│
├── 📄 index.html                 # 主页面（单页应用）
│
├── 📁 css/
│   └── 📄 style.css              # 样式文件
│
├── 📁 js/
│   └── 📄 main.js                # 交互逻辑
│
├── 📁 images/                    # 图片资源（可选）
│   ├── avatar.jpg                # 头像照片
│   ├── wechat-qr.jpg             # 微信二维码
│   └── projects/                 # 项目截图
│
├── 📄 README.md                  # 项目说明文档
├── 📄 QUICK_START.md             # 快速上手指南
└── 📄 PROJECT_SUMMARY.md         # 项目完成总结
```

---

## 💡 使用技巧

### 隐藏彩蛋
- 🌙 按 `Ctrl/Cmd + K` 快速切换主题
- 📧 点击邮箱卡片自动复制地址
- 📱 按 `ESC` 关闭移动端菜单
- 🎯 按 `F12` 打开控制台查看欢迎信息

### 自定义功能

#### 启用打字机效果
在 `js/main.js` 约第 200 行取消注释：
```javascript
const typingElement = document.querySelector('.typing-cursor');
if (typingElement) {
    const text = typingElement.textContent;
    typeWriter(typingElement, text, 80);
}
```

#### 添加 Google Analytics
在 `js/main.js` 最后添加：
```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
```

---

## 🐛 常见问题

### Q: 样式没有加载？
**A**: 检查 `css/style.css` 路径是否正确，清除浏览器缓存（Ctrl+F5）

### Q: 主题切换不生效？
**A**: 检查 `js/main.js` 是否正确加载，查看浏览器控制台是否有错误

### Q: 移动端显示异常？
**A**: 检查浏览器版本是否过旧（推荐使用 Chrome、Safari、Firefox 最新版）

### Q: GitHub Pages 部署后不显示？
**A**: 等待 2-5 分钟构建时间，检查仓库名称是否为 `username.github.io`

### Q: 如何添加更多页面？
**A**: 创建新的 HTML 文件（如 `blog.html`），在导航中添加链接

### Q: 如何优化加载速度？
**A**: 
- 压缩图片（推荐使用 WebP 格式）
- 使用 CDN 加载字体和图标
- 启用 Gzip 压缩（服务器配置）

---

## 📚 学习资源

- 📖 [MDN Web 文档](https://developer.mozilla.org/zh-CN/)
- 🎨 [CSS Tricks](https://css-tricks.com/)
- 💻 [JavaScript.info](https://javascript.info/)
- 🚀 [GitHub Pages 文档](https://docs.github.com/en/pages)
- 🎓 [Web.dev 学习](https://web.dev/learn/)

---

## 🎯 后续优化建议

### 内容增强
- [ ] 添加项目作品集模块（展示 GitHub 项目）
- [ ] 集成技术博客（接入 Medium/掘金）
- [ ] 添加技术分享演讲视频
- [ ] 放上开源项目贡献记录

### 功能升级
- [ ] 添加在线简历下载（PDF）
- [ ] 集成评论系统（Giscus/Utterances）
- [ ] 添加多语言切换（中文/英文）
- [ ] 实现深色模式自动切换（跟随系统）

### SEO 优化
- [ ] 添加 `sitemap.xml`
- [ ] 优化 meta 标签（Open Graph、Twitter Card）
- [ ] 提交到搜索引擎收录
- [ ] 添加结构化数据标记（Schema.org）

### 性能优化
- [ ] 图片懒加载
- [ ] 启用 Service Worker（离线访问）
- [ ] 代码压缩（Minify）
- [ ] 使用 WebP 图片格式

---

## 📞 需要帮助？

如果你在使用过程中遇到问题，可以：

1. 📧 发送邮件到：li_lichuan@126.com
2. 💬 在 GitHub Issues 中提问
3. 🔍 搜索相关技术文档
4. 👥 加入开发者社区交流

---

## 📄 许可证

MIT License - 你可以自由使用、修改和分发这个项目。

---

## 🙏 致谢

感谢以下开源项目和资源：

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体库
- [MDN Web Docs](https://developer.mozilla.org/) - 技术文档

---

## 🎊 最后的话

这个个人主页是为了帮助程序员们更好地展示自己的技术实力和职业经历而创建的。希望它能帮助你在求职、社交、个人品牌建设等方面取得成功！

**记住：一个好的个人主页就是你的数字名片！** 🚀

---

**Made with ❤️ by 李立川**

如果这个项目对你有帮助，欢迎：
- ⭐ 给项目点个 Star
- 🔗 分享给更多的朋友
- 📧 提供改进建议
