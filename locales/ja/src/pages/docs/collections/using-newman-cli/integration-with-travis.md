---
title: "トラビスCIとの統合"
order: 63
page_id: "integration_with_travis"
updated: "2022-1-14"
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "Newman を使用したコマンドラインでのコレクションの実行"
        url: "/docs/collections/using-newman-cli/command-line-integration-with-newman/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "統合:Postmanがお気に入りのツールでどのように遊ぶか"
        url: "https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "郵便配達員 API の概要"
        url: "/docs/developer/postman-api/intro-api/"
    - 
        type: "リンク"
        name: "CI インテグレーション"
        url: "/docs/integrations/ci-integrations/"
warning: false
tags: 
    - "ニューマン"
---
継続的インテグレーション \(CI\) は、開発者がコード変更を定期的に共有リポジトリにコミットすることを奨励する開発プラクティスです \(通常は 1 日に数回\)。 早期に頻繁にコミットすることで、チームは技術的負債を回避し、問題を検出することができます。

CI では、すべてのコード コミットによって、コードをビルドしてテストを実行する自動プロセスがトリガーされます。 このプロセスでは、すべてのチェックに合格した場合、更新されたコードをデプロイすることもできます \(継続的デリバリー \(CD\) と呼ばれます\)。
> 
> **APIを開発していますか?** Postman は、Travis CI など、最も広く使用されている継続的インテグレーション \(CI\) ツールと API を統合するための組み込みツールを提供しています。 API の CI を設定したら、Postman 内からビルドのステータスを表示したり、新しいビルドを開始したりできます。 Newman を使用して、CI パイプラインの一部として API テストを実行することもできます。 詳細については、「 [CI 統合」](/docs/integrations/ci-integrations/)を参照してください。

トラビスCIを使用した郵便配達員テストの実行
----------------------

一般に、 [Postman テスト](/docs/writing-scripts/test-scripts/) を Travis CI と統合することは、 [Jenkins](/docs/collections/using-newman-cli/integration-with-jenkins/)、AppVeyor、またはその他のビルド システムで実行するのと同じプロセスです。 ビルドの開始時にシェルコマンドを実行するように CI 構成を設定します。 このコマンドは、テストを含むコレクションを実行し、CI システムに記録される合格または不合格の終了コードを返す [Newman スクリプト](/docs/collections/using-newman-cli/command-line-integration-with-newman/) です。

この例では、Postman を、開発チームがコード変更を自動的にビルドしてテストするために使用する継続的インテグレーション プラットフォームである [Travis CI](https://travis-ci.com/)と統合する方法を示します。 完了すると、GitHub リポジトリにコミットするたびに Travis CI がテストを実行します。

[![トラビスワークフロー](https://assets.postman.com/postman-docs/travis_workflow.png)](https://assets.postman.com/postman-docs/travis_workflow.png)

はじめ
---

1. **テストで郵便配達員コレクションを選択してください。** ほとんどの場合、テストには郵便配達員コレクションがすでにあります。 この例では、この **\[Postman で実行** \] ボタンを選択して、サンプルの "Hello World" コレクションをワークスペースにインポートできます。

   [![郵便配達員で走る](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/92cc7527bbab2bedffbd?action=collection%2Fimport)
2. **GitHub リポジトリをセットアップします。** Travis CIは、GitHubのオープンソースプロジェクトは無料です。 この例では、Postman テストと共にコレクションをパブリック GitHub リポジトリに格納します。 GitHub で新しいパブリック リポジトリを作成し、プロジェクトをローカル システムに複製します。

3. **トラビスCIを設定します。**  [Travis CI入門ガイド](https://docs.travis-ci.com/user/getting-started) に従って、完全なウォークスルーを確認してください。 [Travis CI にサインイン](https://app.travis-ci.com/signin) し、新しいパブリック GitHub リポジトリの [Travis CI 統合をアクティブ化](https://app.travis-ci.com/account/repositories) する必要があります。

郵便配達員とトラビスCIの接続
---------------

1. ["Hello World" コレクションを](/docs/getting-started/importing-and-exporting-data/) JSON ファイルとしてエクスポートし、エクスポートしたファイルの名前 `hello_world.postman_collection.json`を変更します。

2. ローカル プロジェクトのルートに という名前の `tests` フォルダーを作成し、エクスポートした JSON ファイルを新しい `tests` フォルダーに移動します。

   ```bash
   .
   └── テスト
       └── hello_world.postman_collection.json
   ```
   > 
   > コレクションで環境を使用する場合は、環境を JSON ファイルとして [エクスポート](/docs/sending-requests/managing-environments/) し、フォルダーに移動する `tests` 必要もあります。
3. プロジェクト リポジトリのルートに という名前の `.travis.yml` 新しいファイルを作成します。 このファイルを使用して、プロジェクトのプログラミング言語とそのビルド方法を Travis CI に伝えます。

   ```bash
   .
   ├── .travis.yml
   └── テスト
       └── hello_world.postman_collection.json
   ```
   > 
   > ビルドプロセスの任意のステップ [をカスタマイズできます](https://docs.travis-ci.com/user/customizing-the-build)。 ファイル内の `.travis.yml`スクリプトは、次回コミットして変更をリポジトリにプッシュするときに実行されます。
4. `.travis.yml` ファイルで、CI 環境の Newman に `install` コマンドを追加し、Postman テストを実行するように指示する `script` コマンドを追加します \(フォルダーに配置し `tests` ました\)。

   Travis CI は Newman の場所を認識していないため、. `PATH`この例では、 `newman` ツールは `.bin` フォルダ内にある `node_modules` フォルダ。

   この例では、 `.travis.yml` ファイルは次のようになります。

   ```bash
   言語: node_js
   node_js:
   - "16.13.2"
   
   取り付ける：
   - NPMインストールニューマン
   
   before_script:
   - ノード --バージョン
   - npm - バージョン
   - node_modules/.bin/ニューマン - バージョン
   
   スクリプト：
   - node_modules/.bin/newman run tests/hello_world.postman_collection.json
   ```

   環境をエクスポートした場合は、スクリプトにも追加する必要があることに注意してください。

   ```bash
   スクリプト：
   - node_modules/.bin/newman run tests/hello_world.postman_collection.json -e tests/tests.postman_environment.json
   ```

5. すべての変更をローカル プロジェクトにコミットし、パブリック GitHub リポジトリにプッシュします。

   Travis CIは自動的にビルドをトリガーし、コミットをリポジトリにプッシュするたびにテストを実行します。  [Travis CI ダッシュボード](https://app.travis-ci.com/dashboard) を開いて、ビルドの状態に関する詳細を取得します。すべてがうまくいけば、ビルドは正常に成功しました。

   [![トラビスCIビルド成功](https://assets.postman.com/postman-docs/travis-ci-build-success.jpg)](https://assets.postman.com/postman-docs/travis-ci-build-success.jpg)

テストの失敗の修正
---------

テストが失敗した場合、物事はどのように見えますか? 確認するには、Postman でインポートした "Hello Word" コレクションを変更して、テストの 1 つが壊れるようにします。

失敗したテストを表示するには、次の操作を行います。

1. コレクションを開き、"Hello World" 要求を選択して、\[ **テスト\]** タブを選択します。

2. 最終テストを変更して、"Hello, World\!" ではなく "Hello, Everyone\!" というテキストを検索するようにします。

   [![\[テスト\] タブのエラー](https://assets.postman.com/postman-docs/travis-ci-test-error-example-v9-9.jpg)](https://assets.postman.com/postman-docs/travis-ci-test-error-example-v9-9.jpg)
3. 変更を保存してから、コレクションを再度エクスポートします。 前と同様に、エクスポートしたファイルの名前 `hello_world.postman_collection.json` を変更し、ローカルプロジェクトのディレクトリに移動します `tests` 。

4. 変更をコミットし、パブリック GitHub リポジトリにプッシュします。 これにより、Travis CIで新しいビルドがトリガーされ、今回はビルドが失敗します。

   [![トラビスCIビルドに失敗しました](https://assets.postman.com/postman-docs/travis-ci-build-failed.jpg)](https://assets.postman.com/postman-docs/travis-ci-build-failed.jpg)
5. 失敗したビルド リンクを選択して、Travis CI のビルド ログを表示します。 ログには、アサーションが失敗したことが示されます。 これが独自のコレクションである場合は、エラー メッセージを使用して、テストが失敗した理由を理解し、問題をデバッグできます。

   [![トラビスCIエラーログ](https://assets.postman.com/postman-docs/travis-ci-error-log.jpg)](https://assets.postman.com/postman-docs/travis-ci-error-log.jpg)
6. この例では、必要に応じて、Postman のテストのエラーを修正し、コレクションを再度エクスポートできます。 前と同じように、JSONファイルの名前を変更し、ローカルプロジェクトのフォルダーに追加 `tests` してから、コミットしてプッシュします。 今回は、Travis CIでのビルドが成功します。

