# 个人简历网页 - 开发规范

## 项目概述

这是一个优雅的个人简历展示网页，采用杂志风格设计，适用于求职展示。

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript 5
- **样式**: Tailwind CSS 4
- **字体**: Playfair Display (标题) + Inter (正文)
- **图标**: Lucide React

## 目录结构

```
src/
├── app/
│   ├── globals.css      # 全局样式与动画
│   ├── layout.tsx       # 根布局与元数据
│   └── page.tsx         # 简历主页面
└── components/ui/       # shadcn/ui 组件库
```

## 开发命令

```bash
pnpm dev      # 开发环境 (端口 5000)
pnpm build    # 构建生产版本
pnpm start    # 启动生产环境
pnpm lint     # ESLint 检查
pnpm ts-check # TypeScript 类型检查
```

## 页面结构

1. **Hero 区域** - 姓名、职位、联系方式
2. **关于我** - 个人简介与关键数据
3. **工作经历** - 时间线展示
4. **技能** - 分类技能徽章
5. **项目** - 精选项目卡片
6. **教育背景** - 教育经历
7. **联系方式** - 底部联系信息

## 自定义方式

编辑 `src/app/page.tsx` 中的 `resumeData` 对象即可更新简历内容。

## 设计特点

- 响应式布局
- 滚动渐入动画
- 固定导航栏与活跃区域高亮
- 优雅的琥珀金色强调色
- 支持亮色/暗色模式
