---
title: "要求ワークフローの構築"
order: 57
page_id: "building_workflows"
updated: 2021-12-16
search_keyword: "postman.setNextRequest, setNextRequest"
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "スクリプトの概要"
        url: "/docs/write-scripts/intro-to-scripts/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ビデオ"
    - 
        type: "リンク"
        name: "postman.setNextRequest() によるワークフローの制御 |郵便配達員レベルアップ"
        url: "https://youtu.be/Oxsdv1VFRsE"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "郵便配達員でワークフローを構築する3つの方法"
        url: "https://blog.postman.com/3-ways-to-build-workflows-in-postman/"
    - 
        type: "字幕"
        name: "事例研究"
    - 
        type: "リンク"
        name: "WhatsAppはワークフローを使用してメッセージの自動化を組み込みます"
        url: "https://www.postman.com/case-studies/whatsapp/"
warning: false
---
通常、 [コレクションの実行](/docs/collections/running-collections/intro-to-collection-runs/)を開始すると、Postman はコレクションに表示されるのと同じ順序ですべての要求を実行します。 フォルダー内の要求が最初に実行され、次にコレクションのルート内の要求が実行されます。

コレクションランナーでは、実行を開始する前にリクエストの順序を変更するオプションがあります。 ただし、コレクションを実行するたびに要求の順序を手動で変更する代わりに、 `postman.setNextRequest()` 機能。

名前が示すように、 `postman.setNextRequest()` では、現在の要求に続いて、Postman が次に実行する要求を指定できます。 この関数を使用すると、要求を連鎖させるカスタムワークフローを構築し、特定の順序で次々に実行できます。
![次の要求の設定](https://assets.postman.com/postman-docs/set-next-request-v9-4.jpg) 

次の要求の設定
-------

次に実行する要求を指定するには、要求の **\[テスト** \] タブで次のコードを追加します。 次に実行する要求の名前に置き換えます `request_name` 。

```js
postman.setNextRequest("request_name");
```

Postman は、現在の要求を完了した後、指定された要求を実行します。

要求のループ
------

現在のリクエストの名前を `setNextRequest` 関数に渡すと、Postman は現在のリクエストを繰り返し実行します。
![要求のループ](https://assets.postman.com/postman-docs/set-next-request-loop-v9-4.jpg)  
> 
> **大事な！** 要求が無限にループしないように、必ず追加のロジックをラップ `setNextRequest` してください。 たとえば、一定回数の反復の後、または別の条件が満たされたときにループを終了する場合があります。 それ以外の場合は、コレクションランナーを強制的に閉じてループを終了する必要があります。

ワークフローの停止
---------

ワークフローを停止するには、要求の **\[テスト** \] タブに次のコードを追加します。

```js
postman.setNextRequest(null);
```

コレクションの実行は、Postman が現在の要求を完了すると停止します。

要求ワークフローを構築するためのヒント
-------------------

を使用する `postman.setNextRequest()` ときは、次のヒントに留意してください 機能。

### setNextRequest\(\) は、コレクション全体を実行する場合にのみ機能します

この `postman.setNextRequest()` 関数は、 **Send** を使用してリクエストを実行する場合は効果がなく、コレクションランナー、Postman CLI、または Newman を使用してコレクションを実行する場合にのみ使用されます。

### 事前リクエストまたはテストスクリプトでsetNextRequest\(\)を使用する

要求前スクリプトまたは要求のテストスクリプトで使用できます `postman.setNextRequest()` 。 複数の値が割り当てられている場合は、最後に設定された値が優先されます。

### 要求 ID を使用して次の要求を指定する

次に実行する要求の名前を指定する代わりに、要求 ID を指定できます。 要求 ID を見つけるには、要求を開き、右側のサイドバーの情報アイコン ![情報アイコン](https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon) を選択します。

表示される ID は、ユーザー ID の後に要求 ID が続くことに注意してください。 最初の 8 桁を省略し、ダッシュを使用して要求 ID を取得します。 この関数を使用して `pm.info.requestId` 要求 ID を取得することもできます \(「 [ワークフローのスクリプト作成](/docs/writing-scripts/script-references/postman-sandbox-api-reference/#scripting-workflows)」を参照\)。
![要求 ID の取得](https://assets.postman.com/postman-docs/set-next-request-id-v9-4.jpg) 

### setNextRequest\(\) は常に最後に実行されます

この `postman.setNextRequest()` 関数は、常に現在の要求の最後に実行されます。 この関数の後に要求前スクリプトまたはテストスクリプトのどこかに他のコードブロックを配置しても、コードブロックは `postman.setNextRequest()`.

### setNextRequest\(\) スコープはコレクションに限定されます

の `postman.setNextRequest()` スコープは、コレクション実行のソースです。

* コレクション全体を実行する場合は、フォルダー内の要求であっても、コレクション内の任意の要求を次の要求として設定できます。
* フォルダーを実行する場合、の `postman.setNextRequest()` スコープはそのフォルダーに制限されます。 この場合、次の要求と同じフォルダーに任意の要求を設定できますが、他のフォルダーまたはコレクションのルートにある要求は設定できません。

[詳しくは、コレクションやフォルダの実行](/docs/collections/running-collections/intro-to-collection-runs/)についての記事をご覧ください。

次のステップ
------

要求ワークフローの構築方法を学習した後、いくつかのスクリプトを記述できます。

* 事前要求スクリプトとテスト スクリプトの作成の詳細については、「 [Postman でのスクリプト」](/docs/writing-scripts/intro-to-scripts/)を参照してください。

