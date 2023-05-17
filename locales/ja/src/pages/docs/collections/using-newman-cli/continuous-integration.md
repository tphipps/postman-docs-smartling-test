---
title: "CI with Postman API"
updated: 2022-05-23
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "コレクション内の要求のグループ化"
        url: "/docs/送信リクエスト/コレクション入門/"
    - 
        type: "リンク"
        name: "ニューマンとのコマンドライン統合"
        url: "/docs/collections/using-newman-cli/command-line-integration-with-newman/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ビデオ"
    - 
        type: "リンク"
        name: "郵便配達員による継続的なテスト |ウェビナー"
        url: "https://youtu.be/sB2HHrezQOo"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "郵便配達員による継続的なAPIテスト"
        url: "https://blog.postman.com/continuous-api-testing-with-postman/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "スクリプトの概要"
        url: "/docs/write-scripts/intro-to-scripts/"
    - 
        type: "リンク"
        name: "CI インテグレーション"
        url: "/docs/integrations/ci-integrations/"
warning: false
---
継続的インテグレーション \(CI\) は、開発者がコードの更新を共有リポジトリに定期的にマージする必要がある開発手法です。 これには、開発者がコードの更新をコミットするたびにコードのビルドとテストを自動化するプロセスが含まれます。

Postman API を使用してコレクションにアクセスし、継続的インテグレーションおよび継続的デプロイ \(CI/CD\) 環境内で実行できます。

始める前に:

* シェルコマンドを実行できるCIシステムセットアップがあり、同じものを変更するためのアクセス権があることを確認してください。
* [郵便配達員 API キー](https://docs.api.getpostman.com/#authentication)を取得します。API キーがない場合は、 [API キーを生成](/docs/developer/postman-api/authentication/#generate-a-postman-api-key)できます。
* ローカルホストサーバーをテストするPostmanコレクションがあることを確認し、コレクションのUIDをメモします。
> 
> **APIを開発していますか?** Postman は、API を最も広く使用されている継続的インテグレーション \(CI\) ツールの一部と統合するための組み込みツールを提供します。 API の CI を設定したら、Postman 内からビルドのステータスを表示したり、新しいビルドを開始したりできます。 Newman を使用して、CI パイプラインの一部として API テストを実行することもできます。 詳細については、「 [CI 統合」](/docs/integrations/ci-integrations/)を参照してください。

ステップ1:ノードのインストール
----------------

CI に既に Node がインストールされている場合は、この手順をスキップできます。

手順に従って、CIのプラットフォームに固有の [Nodeをダウンロード](https://nodejs.org/en/download/package-manager/) します。 それ以外の場合、一部の CI には Node をプレインストールする構成があります。 Node.js v4 以降を使用していることを確認します。

ステップ2:ニューマンをインストールする
--------------------

[Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/) は、ローカル開発環境または独自のサーバーでコレクションを実行できるようにするコマンド ライン ツールです。 次のコマンドは、CI に Newman をインストールします。

```bash
npm i newman -g;
```

ステップ3:ニューマンを実行する
----------------

次の Newman コマンドを適切なパラメーターを指定して実行します。

```bash
ニューマンラン https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
```

コレクションに環境を提供する必要がある場合は、適切なパラメーターを持つオプションを Newman コマンドに追加します `--environment` 。

```bash
ニューマンラン https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
--環境 https://api.getpostman.com/environments/{{environment_uid}}?apikey={{postman-api-key-here}}
```

