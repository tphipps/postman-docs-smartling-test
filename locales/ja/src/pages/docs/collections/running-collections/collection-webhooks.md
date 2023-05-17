---
title: "ウェブフックを使用した実行のトリガー"
order: 92
page_id: "collection_webhooks"
updated: 2021-10-29
search_keyword: "globals.previousRequest, previousRequest"
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "コレクション内の要求のグループ化"
        url: "/docs/送信リクエスト/コレクション入門/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ビデオ"
    - 
        type: "リンク"
        name: "郵便配達員のウェブフック|郵便配達員レベルアップ"
        url: "https://youtu.be/wdLvXKkXhLk"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "Twitch APIとPostmanでSlackボットを構築する"
        url: "https://blog.postman.com/building-slack-bot-with-twitch-api-and-postman/"
warning: false
---
Webhook は、あるアプリケーションから別のアプリケーションにデータを自動的に送信する方法を提供します。 Webhook を使用すると、Postman で特定の時間またはイベントが発生したときにコレクションの実行をトリガーできます。 また、カスタムペイロードをWebhookに送信して、コレクションの実行時にアクセスすることもできます。 これにより、Webhook に送信されたデータのみに依存する代わりに、どの環境からも独立してコレクションを実行できます。

ウェブフックの作成
---------

コレクション ウェブフックでは、特定のイベントがトリガーされたときに POST 要求を使用してデータがウェブフック URL に送信されます。 \(データを送信するアプリケーションとトリガー イベントを構成するのはユーザー次第です\)。 Webhook に送信されたデータは、 [globals オブジェクトの](/docs/sending-requests/variables/)コレクション内でアクセスできます。  [スクリプト](/docs/writing-scripts/intro-to-scripts/)を使用すると、そのデータを解析し、コレクションの実行中に可能な限り使用できます。

コレクションのウェブフックは、 [Postman API](/docs/developer/postman-api/intro-api/)を使用してのみ作成できます。 ウェブフックを作成するには、 [**api.getpostman.com/webhooks** のドキュメント](https://documenter.getpostman.com/view/12959542/UV5XjJV8#8bec7537-cc5d-4ed7-a995-c7753e55ed28)を参照してください。

### スクリプトでの要求本文へのアクセス

ウェブフックのリクエスト本文は、 `globals.previousRequest` オブジェクト。 これを使用するには、最初に解析します `globals.previousRequest` オブジェクト。 Webhook に送信されるデータは、このコード スニペットに示すように、解析されたオブジェクト内のパラメーターで使用できます `data` 。

```js
var previousRequest = JSON.parse(globals.previousRequest),    webhookRequestData = previousRequest.data;webhookRequestData には、ウェブフックに送信されたデータが含まれています。console.log(JSON.stringify(webhookRequestData));
```
> 
> Webhook に送信される要求本文では、JSON 形式のみを使用する必要があります。

### 別の API への出力の送信

コレクション Webhook に送信されるデータを使用して、ロジックを定義し、別の API をトリガーできます。 たとえば、GitHub リポジトリのウェブフックを設定できます。 リポジトリで発生している更新に基づいて、Webhook を使用してカスタム ビルド パイプラインを実行したり、CI テストを実行したりできます。

