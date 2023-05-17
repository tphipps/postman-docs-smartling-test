---
title: "ニューマンのインストールと実行"
updated: 2022-05-23
search_keyword: "ニューマンラン"
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
ニューマンの使用を開始するには、Node.jsをインストールしてから、ニューマンをインストールします。 その後、コレクションを実行できます。

ニューマンのインストール
------------

1. ニューマンはノード.js上に構築されています。 Newman を実行するには、Node.js がインストールされていることを確認してください。 手順に従って、CI のプラットフォーム用の [Node をダウンロード](https://nodejs.org/en/download/package-manager/) します。 \(一部のCIシステムには、Nodeをプリインストールする構成があることに注意してください。 Node.js v4 以降を使用していることを確認します。

2. システムにnpmからグローバルにNewmanをインストールすると、どこからでも実行できます。

```bash
$ npm install -g ニューマン
```

ランニングニューマン
----------

Newman を実行する最も簡単な方法は、コレクションを使用して実行することです。 ファイルシステムから任意のコレクションファイルを実行できます。
> 
> [コレクションをエクスポート](/docs/getting-started/importing-and-exporting-data/#exporting-collections) して、ファイルとして共有できます。

```bash
$ newman run mycollection.json
```

コレクション [を共有する](/docs/collaborating-in-postman/sharing/#sharing-postman-entities) ことで、URL として渡すこともできます。

コレクションでは、おそらく環境変数が使用されています。 付随する [環境変数](/docs/sending-requests/managing-environments/)のセットを提供するには、Postman からテンプレートをエクスポートし、フラグを指定して `-e` 実行します。

```bash
$ ニューマンラン https://www.postman.com/collections/cb208e7e64056f5294e5 -e dev_environment.json
```

テストに失敗したコレクションの例
----------------

```bash
→ステータスコードテスト
  https://postman-echo.com/status/404 を取得 [404 見つかりません、534B、1551ms]
  1\. 応答コードは 200 です

┌─────────────────────────┬──────────┬──────────┐
│ │ 実行済み │ 失敗 │
├─────────────────────────┼──────────┼──────────┤
│ 反復回数 │ 1 │ 0 │
├─────────────────────────┼──────────┼──────────┤
│ リクエスト │ 1 │ 0 │
├─────────────────────────┼──────────┼──────────┤
│ テストスクリプト │ 1 │ 0 │
├─────────────────────────┼──────────┼──────────┤
│ 事前要求スクリプト │ 0 │ 0 │
├─────────────────────────┼──────────┼──────────┤
│ アサーション │ 1 │ 1 │
├─────────────────────────┴──────────┴──────────┤
│ 総実行時間: 1917ms │
├───────────────────────────────────────────────┤
│ 受信データ総数:約14B │
├───────────────────────────────────────────────┤
│ 平均応答時間: 1411ms │
└───────────────────────────────────────────────┘

# 障害の詳細

1\.  アサーションファイ... 応答コードは 200 です
                    アサーション時:テストスクリプトの1
                    「サンプルコレクション」の「ステータスコードテスト」内
                    テスト失敗」
```

すべてのテストと要求の結果をファイルにエクスポートできます。 JSON レポーターとファイル名を使用して、出力をファイルに保存します。

    $ newman run mycollection.json --reporters cli,json --reporter-json-export outputfile.json
> 
> Newman では、Postman がサポートするすべての [ライブラリとオブジェクト](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) を使用して、テストと事前要求スクリプトを実行できます。

オプション
-----

Newman には、実行をカスタマイズするための豊富なオプション セットが用意されています。 ニュー [マンオプション](/docs/collections/using-newman-cli/newman-options/)の詳細をご覧ください

CI/CD でのニューマンの使用
----------------

既定では、Newman は、例外なしですべてが期待どおりに実行されると、状態コード 0 で終了します。 継続的インテグレーション \(CI\) ツールは、Newman の終了コードに応答し、それに応じてビルドの合格または失敗するように構成できます。 また、この `--bail` フラグを使用して、状態コード 1 のテスト ケース エラーが発生した場合に Newman に実行を停止させ、CI ツールまたはビルド システムで取得することもできます。

ニューマンをノード.jsライブラリとして使用する
------------------------

ニューマンは図書館としてゼロから建設されました。 さまざまな方法で拡張して使用できます。 Node.jsコードでは次のように使用できます。

```javascript
Var Newman = require('Newman');プロジェクトにニューマンが必要

newman.run を呼び出して 'options' オブジェクトを渡し、コールバックを待機します。
newman.run({    collection: require('./sample-collection.json'),
    レポーター: 'CLI'
}, 関数 (エラー) {
    if (err) { throw err; }
    コンソール.log('コレクション 実行が完了しました!});
```

