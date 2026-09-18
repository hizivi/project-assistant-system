# 研发项目助理工作系统

一个面向研发项目助理/项目协调岗位的轻量工作系统，用来练习和展示项目进度跟进、风险识别、海外沟通、资源整理和周报输出能力。

## 功能

- 工作台：汇总进行中项目、延期/阻塞、高风险、海外待回复事项。
- 项目进度：记录项目阶段、负责人、计划完成日、状态、进度和下一步。
- 风险问题：记录风险类型、等级、影响、解决动作、截止日期和状态。
- 海外沟通：记录合作方沟通事项，并提供英文邮件模板。
- 资源库：整理海外合作商、代理、当地客服等外部资源。
- 技能训练：按阶段训练项目助理必备能力。
- 数据备份：支持导出和导入 JSON 数据。

## 本地打开

最简单的方式是直接双击 `index.html`。

如果浏览器限制本地文件功能，可以用本地服务打开：

```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p==='/'||p==='')p='/index.html';const file=path.join(root,p);fs.readFile(file,(err,data)=>{if(err){res.writeHead(404);return res.end('Not found')}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream'});res.end(data)})}).listen(8000,()=>console.log('http://localhost:8000'))"
```

然后打开 `http://localhost:8000`。

## 发布到 GitHub Pages

1. 在 GitHub 新建一个仓库，例如 `project-assistant-system`。
2. 上传本文件夹里的全部文件：`index.html`、`styles.css`、`app.js`、`README.md`、`.nojekyll`。
3. 进入仓库的 `Settings`。
4. 找到 `Pages`。
5. Source 选择 `Deploy from a branch`。
6. Branch 选择 `main`，目录选择 `/root`。
7. 保存后等待 GitHub 生成访问地址。

发布后通常会得到类似这样的地址：

```text
https://你的GitHub用户名.github.io/project-assistant-system/
```

## 数据说明

当前版本的数据保存在浏览器本地 `localStorage` 中。

- 适合：个人练习、面试作品展示、单人使用。
- 不适合：多人同时协作、公司真实项目数据共享。

如果要展示给面试官，建议只放示例数据，不要放真实公司、真实客户、真实合作商信息。

## 可继续升级的方向

- 做成桌面应用：用 Electron 或 Tauri 打包成 Windows 可安装程序。
- 做成多人系统：增加登录、数据库、权限和在线同步。
- 做成面试作品集：加入项目管理方法说明、英文沟通样例和周报案例。
