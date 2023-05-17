---
title: "ライブコレクションのセットアップ"
updated: 2023-03-15
contextual_links: 
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "自動化された文書化のためのPostman Live Collectionsの紹介"
        url: "https://blog.postman.com/introducing-postman-live-collections-for-automated-documentation/"
---
ライブコレクションの使用を開始するには、コレクションを作成してから、アプリケーションに Postman SDK をインストールします。

1. 新しいライブコレクションを作成するには、コレクションを選択し、右側のサイドバーにあるライブコレクションアイコン ![ライブコレクションアイコン](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) を選択してから、\[ **ライブを有効にする\]** を選択します。

2. アプリケーション言語を選択します: **ノード.js** 、 **パイソン** 、または **囲碁** 。

3. フレームワークを選択します。 \[ノード.js\] で \[ **高速.js** \] を選択します。 **帆.js** 、または **ファスティファイ** 。 Python の場合は、 **Flask** を選択します。 \[囲碁\] で \[ **ジン** \] を選択します。

4. Postman SDK をアプリケーションのルート ディレクトリにインストールします。 、、 `pip`または `go get`を使用する `npm`インストール コマンドが提供されます。コマンドをコピーしてサーバーに入力し、SDK をインストールします。

   ![ライブ コレクション インストール SDK](https://assets.postman.com/postman-docs/v10/live-collections-install-sdk.jpg)
5. アプリケーションにコード スニペットを追加して、Postman SDK を構成します。

   1. コード スニペットに [Postman API キー](/docs/developer/postman-api/intro-api/) を追加する必要があります。 これを行うには、アプリケーションの変数を使用するか、 \[ **API キーの追加** \] を選択します。

      ![ライブ コレクションの構成 SDK](https://assets.postman.com/postman-docs/v10/live-collections-add-api-key.jpg)
   2. \[ **キーの生成** \] を選択して新しいキーを作成するか、\[ **既存のキーを使用** \] を選択して以前に作成したキーを使用します。

   3. コード スニペットをアプリに追加します。 たとえば、Express.js フレームワークを使用する Node.js アプリケーションの場合は、コードをコピーしてアプリのメイン `index.js` ファイルに追加します。

   ![ライブ コレクションの構成 SDK](https://assets.postman.com/postman-docs/v10/live-collections-configure-sdk.jpg)
6. アプリケーションが既に実行されている場合は、再起動します。

7. \[ **接続のテスト** \] を選択して、Postman がアプリケーションに到達できるかどうかをテストするか、接続が確立されるのを待ちます。 Postman がアプリケーションに接続されると、接続状態が変更され、アプリが Postman に接続されます。

   ![ライブコレクションが接続されています](https://assets.postman.com/postman-docs/v10/live-collection-connected.jpg) 

データプライバシー
---------

**手記：** サンドボックス環境または非運用環境内のライブコレクションで要求と応答を確認して、機密データが Postman に送信されないようにします。 機密データが Postman に送信されないように、データの切り捨てと秘匿化ルールを有効にした後にのみ、運用環境にデプロイすることをお勧めします。

* データの切り捨ては既定で有効になっており、要求と応答の本文からフィールドが自動的に削除され、型のみが送信されます。 これにより、要求ヘッダーと応答ヘッダーからフィールドが削除されることはありません。
* データ切り捨てルールを削除すると、要求本文と応答本文の値が Postman に送信されます。
* データ編集ルールをアプリケーションに追加して、要求ヘッダー、応答ヘッダー、要求本文、応答本文、クエリ パラメーターから機密データが編集されるようにします。
* 詳細については、「 [機密データの切り捨てと編集](/docs/collections/live-collections/live-collections-settings/#truncating-and-redacting-sensitive-data) 」を参照してください。
* Live コレクションでは、データの切り捨てまたは秘匿化ルールが構成されていない場合、承認キー、電子メールなど、要求と応答に含まれる可能性のある機密データを Postman に保存または共有できます。
* Postman サービスの使用中に実装する必要があるベスト プラクティスに関する追加情報については、 [共有セキュリティ モデル](https://www.postman.com/trust/shared-responsibility/) を確認してください。

