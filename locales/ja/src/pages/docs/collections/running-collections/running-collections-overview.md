---
title: "コレクションの実行の概要"
updated: 2022-11-09
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
        name: "API モニタリング |探索的"
        url: "https://youtu.be/tDQzY1Hn2LY"
    - 
        type: "dynamic_blog"
        name: "ブログ記事"
        blog_tag: "モニター"
warning: false
---
Postman では、 [コレクション](/docs/getting-started/creating-the-first-collection/) は保存された [要求](/docs/getting-started/sending-the-first-request/)のグループ、 [ワークフロー](/docs/collections/running-collections/building-workflows/)、または [テスト スイート](/docs/writing-scripts/test-scripts/)です。 コレクションを実行して、新しい API のエンドポイントに要求を送信したり、データ ソースからデータを取得したり、API の機能をテストしたりすることができます。 Postman を使用すると、いくつかの方法でコレクションを実行できます。

* コレクションランナーを使用して [、コレクションを手動で実行できます](/docs/collections/running-collections/intro-to-collection-runs/)。 これは、送信する要求の数が少なく、何度も繰り返す必要がない場合に便利です。
* コレクションの実行をスケジュールするか、モニターを設定することにより、自動化された方法でコレクションを頻繁に実行できます。 [スケジュールされた収集の実行](/docs/collections/running-collections/scheduling-collection-runs) はテストの自動化に役立ち、 [モニター](/docs/collections/running-collections/scheduling-collection-runs-monitors) はパフォーマンス、可用性、および信頼性の確認に役立ちます。
* CI/CD での収集実行は、 [Postman CLI](/docs/postman-cli/postman-cli-overview/) または [Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/)を使用して自動化できます。
* [Webhook](/docs/collections/running-collections/collection-webhooks/) を使用して、特定の時間に、またはアプリケーションで特定のイベントが発生したときにコレクションの実行をトリガーできます。

