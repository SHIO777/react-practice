# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 参考サイト

[React ハンズオンラーニング](https://github.com/oreilly-japan/learning-react-2e-ja)

[2021 年版・爆速 React プロジェクトの作り方(create-react-app を使用)](https://qiita.com/taskooh/items/f67d34f9f5c8eab08dc0)

```
# npm 経由でyarnをインストール
npm install -g yarn
# yarnのバージョンを確認
yarn -v

yarn create react-app react-practice
#プロジェクトディレクトリへ移動
cd react-practice

yarn start

```

## [eslint] Failed to load config "react-app" to extend from.

コードを変えるたびに、
`[eslint] Failed to load config "react-app" to extend from.`というエラーが発生。
以下で解決。

```
yarn install
yart start
```
