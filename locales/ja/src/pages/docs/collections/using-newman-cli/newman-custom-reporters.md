---
title: "ニューマンカスタムレポーターの使用"
updated: 2022-05-23
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "コレクションランナーの使用"
        url: "/docs/collections/running-collections/intro-to-collection-runs/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ビデオ"
    - 
        type: "リンク"
        name: "ニューマンでコレクションを実行する |郵便配達員レベルアップ"
        url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
    - 
        type: "リンク"
        name: "ニューマンでのカスタムレポーターの使用"
        url: "https://youtu.be/Nxdxx-VaYno"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "Newman:コマンドラインからコレクションを実行してテストします"
        url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "郵便配達員 API の概要"
        url: "/docs/developer/postman-api/intro-api/"
warning: false
---
*カスタムレポーター* は、特定のユースケースに対応するコレクション実行レポートをNewmanで生成するのに役立ちます\(たとえば、要求\(またはそのテスト\)が失敗したときに応答本文をログアウトします\)。

カスタムレポーターの構築
------------

カスタムレポーターは、 という形式 `newman-reporter-<name>`の名前を持つ Node.js モジュールです。

カスタムレポーターを作成するには、次の手順を実行します。

1. 選択したディレクトリで、を使用して空の npm パッケージ `npm init`を作成します。

2. `index.js` 次の形式の関数をエクスポートするファイルを追加します。

   ```javascript
   function (emitter, reporterOptions, collectionRunOptions) {
     エミッタは、次のイベントをトリガーするイベントエミッタです。 https://github.com/postmanlabs/newman#newmanrunevents  レポーターオプションは、レポーター固有のオプションのオブジェクトです。 以下の使用例に詳細があります。  コレクション実行オプションは、すべてのコレクション実行オプションのオブジェクトです。
     https://github.com/postmanlabs/newman#newmanrunoptions-object--callback-function--run-eventemitter};
   ```

3. を使用してレポーターを公開するか、レポーター `npm publish`をローカルで使用します。 詳細については、使用手順をお読みください。

のような `@myorg/newman-reporter-<name>` スコープ付きレポーターパッケージ名もサポートされています。

カスタムレポーターの使用
------------

カスタムレポーターを使用するには、最初にインストールする必要があります。 たとえば、Newman TeamCity レポーターを使用するには、レポーター パッケージをインストールします。

```bash
NPMはニューマン-レポーター-チームシティをインストールします
```

パッケージの名前は の形式 `newman-reporter-<name>`であり、 はレポーターの `<name>` 実際の名前であることに注意してください。 Newman がグローバルにインストールされている場合はインストールがグローバルで、それ以外の場合はローカルです。 グローバル・インストールのフラグを指定して `-g` 実行します `npm install ...` 。

ローカル \(非公開\) レポーターを使用するには、代わりにコマンドを実行 `npm install <path/to/local-reporter-directory>` します。

インストールしたレポーターを、コマンドラインツールまたはプログラムで使用できます。 ここでは、 `newman-reporter` オプションでレポーター名を指定するときにプレフィックスは必要ありません。

スコープ付きレポーター パッケージは、スコープ プレフィックスを使用して指定する必要があります。 たとえば、パッケージ名 `@myorg/newman-reporter-name`が の場合、レポータ `@myorg/name`を で指定する必要があります。

コマンドラインで:

```bash
newman run /path/to/collection.json -r myreporter --reporter-myreporter-<option-name> <option-value> # このオプションはオプションです
```

プログラム：

```js
Var Newman = require('Newman');

newman.run({   collection: '/path/to/collection.json',
   記者:「マイレポーター」、
   報告者: {
     マイレポーター: {
       'オプション名': 'オプション値' // これはオプションです
     }
   }
}, 関数 (エラー, 概要) {
  if (err) { throw err; }
  console.info('コレクション 実行が完了しました!});
```

上記のどちらの場合も、レポーターオプションはオプションです。

