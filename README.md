# AI Chat 导航

收录国内外可直接在网页上对话的 AI 产品，一站式发现和访问各类 AI 聊天工具。

## 功能

- **分类筛选** — 全部 / 国内 / 国外 一键切换
- **实时搜索** — 按名称或描述过滤
- **多选收藏** — 点击卡片选中，批量管理常用站点
- **一键打开** — 选中多个站点后批量打开

## 技术栈

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## 本地运行

```bash
npm install
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

## Docker 部署

```bash
docker compose up -d
```

访问 [http://localhost:3000](http://localhost:3000)

## 数据

目前收录 **38** 个 AI 对话站点（国内 18 个，国外 20 个），数据文件位于 `src/data/sites.ts`，欢迎补充。