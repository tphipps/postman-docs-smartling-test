---
title: "ジェンキンスとの統合"
order: 64
page_id: "integration_with_jenkins"
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
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
        name: "API ライフサイクル、パート 2: API の監視とデプロイ |郵便配達員銀河間"
        url: "https://youtu.be/voAUfBx8fnE"
    - 
        type: "リンク"
        name: "郵便配達員による継続的なテスト |ウェビナー"
        url: "https://youtu.be/sB2HHrezQOo"
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
warning: false
tags: 
    - "ニューマン"
updated: 2022-01-14
---
Postman には、API 用の JavaScript ベースのテストを作成および実行できるフル機能の [テスト サンドボックス](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) が含まれています。 その後、Postman のコマンドライン コレクション ランナーである [Newman を使用して、Postman](/docs/collections/using-newman-cli/command-line-integration-with-newman/)を CI/CD ビルド システムと統合できます。

次の例は、Newman を使用してコレクションを実行する Jenkins ビルドを設定する方法を示しています。 コレクションがすべてのテストに合格すると、Jenkins ビルドは成功としてマークされます。 これはローカルで実行されている Jenkins インストールを使用しますが、通常は運用環境で使用するためにビルド サーバーで実行します。
> 
> **APIを開発していますか?** Postman には、Jenkins など、最も広く使用されている継続的インテグレーション \(CI\) ツールと API を統合するための組み込みツールが用意されています。 API の CI を設定したら、Postman 内からビルドのステータスを表示したり、新しいビルドを開始したりできます。 Newman を使用して、CI パイプラインの一部として API テストを実行することもできます。 詳細については、「 [CI 統合」](/docs/integrations/ci-integrations/)を参照してください。

内容
---

* [取り付け](#installation)
* [郵便配達員のコレクションを作成する](#create-a-postman-collection)
* [ジェンキンスを設定する](#set-up-jenkins)
* [トラブルシューティング](#troubleshooting)
* [実行の頻度を構成する](#configure-frequency-of-runs)

取り付け
----

1. Jenkinsをローカルにインストールして起動します。 詳細については、 [https://www.jenkins.io](https://www.jenkins.io)の Jenkins ドキュメントを参照してください。

2. ジェンキンスにノード.jsとニューマンをインストールします。

   1. Jenkinsサーバー\(ローカルで実行している場合はデフォルトであります `http://localhost:8080` \)に移動し、サインインします。
   2. **ジェンキンスの管理>プラグインの管理** に移動し、NodeJSプラグインをインストールします。
   3. **Jenkins >グローバル ツール構成の管理** に移動し、 **NodeJS** で **NodeJS の追加** を選択します。
   4. ノード.jsインストールの名前を入力します。
   5. \[ **インストールするグローバル npm パッケージ** \] に「」と入力します `newman`。
   6. \[ **保存** \] を選択します。

郵便配達員のコレクションを作成する
-----------------

この例では、テストを含むいくつかの要求を含む Postman コレクションが必要です。 この例では、この **\[Postman で実行** \] ボタンを選択して、サンプルの "Hello World" コレクションをワークスペースにインポートできます。

[![郵便配達員で走る](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/92cc7527bbab2bedffbd?action=collection%2Fimport)

トラブルシューティング プロセスを示すには、要求を編集し、テストの 1 つを意図的に中断します。 たとえば、最終テストを変更して、"Hello, World\!" ではなく "Hello, Everyone\!" というテキストを検索するようにします。

コレクションを作成したら、 [JSON ファイルとしてエクスポートします](/docs/getting-started/importing-and-exporting-data/)。

ジェンキンスを設定する
-----------

1. Jenkins を実行している状態で、に移動して `http://localhost:8080` サインインします。

2. **\[ダッシュボード\]** ページで、左側のサイドバーの \[新しいアイテム\] を選択して、 **新しい** ジョブを作成します。

3. オプションから **フリースタイルプロジェクト** を選択します。 プロジェクトに名前を付け、 \[ **OK** \] を選択します。

   [![新しいジェンキンスの仕事](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)](https://assets.postman.com/postman-docs/integrating_with_jenkins_4.jpg)
4. \[ **全般\] > \[** ビルド\] で、プロジェクトにビルド ステップを追加し、\[ **シェルの実行\]** を選択します。 ビルド ステップはシェル コマンドを実行します。 実行するシェルコマンドを入力します。 `newman run ~/Desktop/jenkins_demo_postman_collection.json`

5. **ビルド環境 > ビルド環境で** 、 **ノードと npm bin/ フォルダーを PATH に提供する** を選択し、Newman で構成した NodeJS インストールを選択します。

6. \[ **保存** \] を選択して、プロジェクトの作成を完了します。

トラブルシューティング
-----------

1. このビルド テストを手動で実行するには、サイドバーの \[ **今すぐビルド** \] を選択します。

   ![ビルドの実行](https://assets.postman.com/postman-docs/integrating_with_jenkins_build_now-2.jpg)

   Jenkins は、ビルド履歴のビルドの横に赤い十字印を付けて、ビルドが失敗したことを示します。 これは、コレクション内のテストが意図的に失敗したためです。
2. 履歴リストでビルドを選択し、\[ **コンソール出力** \] を選択して、Newman が返したものを調べます。

3. コレクション内のこれらのテストを修正します。 エクスポートしてから、ビルドを再度実行します。

Jenkins は、ビルドが成功したことを緑色のチェックマークで示します。

実行の頻度を構成する
----------

Jenkins が Newman を実行する頻度を設定するには、次の操作を行います。

1. ビルドウィンドウを開きます。

2. \[ **構成\]** を選択します。

3. \[ **トリガーのビルド\]** に移動し、\[ **定期的にビルド** する\] を選択します。

4. スケジュールを入力します。 頻度を 30 分ごとに設定するための構文は `H/(30) * * * *`です。
   > 
   > **\[スケジュール** \] の横にあるヘルプ アイコンを選択して、ビルド頻度を指定する方法を学習します。
5. \[ **保存** \] を選択します。

Jenkins は、目的の頻度で Newman を実行し、ビルドが失敗したか成功したかを通知します。

実際のビルド環境では、Newman は運用環境の一部になります。 必要に応じて通知を設定し、Jenkinsをカスタマイズできます。 他のさまざまな構成を使用して、コレクションをより動的にすることができます。

コレクション実行の詳細については、以下を参照してください。

* [コレクションランナーの使用](/docs/collections/running-collections/intro-to-collection-runs/)
* [データ ファイルの操作](/docs/collections/running-collections/working-with-data-files/)
* [ワークフローの構築](/docs/collections/running-collections/building-workflows/)
* [トラビスCIとの統合](/docs/collections/using-newman-cli/integration-with-travis/)
* [ニューマンとドッカー](/docs/collections/using-newman-cli/newman-with-docker/)

