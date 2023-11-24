# LIAS Website

本项目使用了 Next.js 来编写，目录结构可以参考 [Next.js 的文档](https://nextjs.org/docs/getting-started/project-structure)。

如果需要新增内容，建议先将仓库拉去到本地，安装好 VScode 和 Nodejs，其中 VScode 需要安装 Eslint 插件，建议安装 yarn 包管理工具，然后在本地进行修改，修改完成后，使用 `git` 命令将修改推送到远程仓库。

项目使用的是 yarn 来管理依赖。在 `git pull` 之后，需要使用 `yarn install` 来安装依赖，然后使用 `yarn dev` 来启动开发服务器。

代码更新并且 `git push` 之后 GitHub 会自动进行构建，构建完成后，网站会自动更新，可以在仓库看到一个绿色的勾。如果代码存在错误或格式错误，GitHub 会自动构建失败，首页会看到一个红叉，此时需要在本地进行修改，然后再次推送。建议在本地先运行 `yarn build` 来检查代码是否存在错误，如果没有错误，再进行推送。

有任何问题欢迎邮件联系我 [yuantuo666@gmail.com](mailto:yuantuo666@gmail.com)

## 下面是默认 README.md

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It also includes:

- [x] [`flowbite`](https://flowbite.com)
- [x] [`flowbite-react`](https://flowbite-react.com)
- [x] [`react-icons`](https://react-icons.github.io/react-icons)
- [x] [`tailwindcss`](https://tailwindcss.com)
- [x] Quality of life tools, like
  - [x] [`eslint`](https://eslint.org) with some plugins
  - [x] [`prettier`](https://prettier.io)

## Getting started

`Next.js` requires [`Node.js`](https://nodejs.org).

If you don't already have `npm` and `yarn` available, make sure you set them up.

```bash
npm i -g npm yarn
```

Install the dependencies:

```bash
yarn install
```

Now you can run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Requirements

- [x] [Node.js](https://nodejs.org/en/)

## Deploy on `vercel`

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
