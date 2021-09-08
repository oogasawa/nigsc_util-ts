# nigsc_util-ts

遺伝研スパコンホームページ作成関係のユーティリティープログラム

## インストール方法

```
git clone https://github.com/oogasawa/nigsc_util-ts
cd nigsc_util-ts
npm install
pkg .
cp nigsc_util-linux ~/local/bin/nigsc_util
```

## 使い方

ヘルプの表示

```
nigsc_util --help         # 利用可能なコマンド一覧の表示
nigsc_util table --help   # tableコマンドの使い方表示
```

TSV => HTML変換 (汚いデータの修正前処理こみ）

```
nigsc_util table paper_2020.utf8.txt > paper_2020.utf8.html
```




