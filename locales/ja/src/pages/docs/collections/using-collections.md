---
title: "コレクションの使用"
updated: 2023-04-10
contextual_links: 
    - 
        type: "節"
        name: "前提 条件"
    - 
        type: "リンク"
        name: "要求の送信"
        url: "/docs/送信リクエスト/リクエスト/"
    - 
        type: "節"
        name: "関連資料"
    - 
        type: "字幕"
        name: "ビデオ"
    - 
        type: "リンク"
        name: "コレクション内のグループ要求 |郵便配達員レベルアップ"
        url: "https://youtu.be/ghHX4FGvVyA"
    - 
        type: "リンク"
        name: "郵便配達員のコレクションを作成する |郵便配達員レベルアップ"
        url: "https://youtu.be/NlrPjuXEaZ8"
    - 
        type: "dynamic_blog"
        name: "ブログ記事"
        blog_tag: "コレクション"
    - 
        type: "字幕"
        name: "事例研究"
    - 
        type: "リンク"
        name: "ピン アイデンティティ"
        url: "https://www.postman.com/case-studies/pingidentity/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "コレクションランナーの使用"
        url: "/docs/collections/running-collections/intro-to-collection-runs/"
---
Postman 要求と例をコレクションにグループ化して、ワークスペースを整理し、チームメイトと共同作業し、API ドキュメントと API テストを生成し、要求の実行を自動化できます。

サイドバーで \[ **コレクション** \] を選択すると、ワークスペース内のコレクションのリストが表示されます。
![](https://assets.postman.com/postman-docs/v10/collections-overview-v10.jpg) 

内容
---

* [コレクションの作成](#creating-collections)
* [コレクションへの要求の追加](#adding-requests-to-a-collection) 
  * [既存の要求を別のコレクションに移動する](#moving-an-existing-request-to-a-different-collection)
  * [コレクションへの新しい要求の追加](#adding-a-new-request-to-a-collection)
  * [コレクション内での新しい要求の作成](#creating-a-new-request-inside-a-collection)
  * [空のコレクションへの要求の追加](#adding-a-request-to-an-empty-collection)
  * [履歴からコレクションへのリクエストの追加](#adding-a-request-from-your-history-to-a-collection)

* [コレクションの管理](#managing-collections) 
  * [基本アクション](#basic-actions)
  * [コレクションへのフォルダーの追加](#adding-folders-to-a-collection)
  * [コレクションの削除](#deleting-a-collection)
  * [削除されたコレクションの回復](#recovering-a-deleted-collection)
  * [コレクションの共有](#sharing-a-collection)
  * [コレクションを見る](#watching-a-collection)
  * [コレクションのフォーク](#forking-a-collection)
  * [コレクションへのコメントの追加](#adding-comments-to-a-collection)
  * [コレクションの変更を元に戻す](#reverting-collection-changes)
  * [プルリクエスト、フォーク、コレクションの詳細の表示](#viewing-pull-requests-forks-and-collection-details)

* [開発ワークフローでのコレクションの使用](#using-collections-in-development-workflows)
* [コレクションテンプレートの使用](#using-collection-templates)
* [マルチプロトコル要求コレクションについて](#about-multi-protocol-request-collections)

コレクションの作成
---------

新しいコレクションを作成するには、いくつかの方法があります。

* サイドバーで **\[コレクション** \] を選択し、\[ **\+** \] を選択します。

  ![新しいコレクションを作成する](https://assets.postman.com/postman-docs/v10/new-collection-v10.jpg) 
* **新規** を選択し、 **コレクション** を選択します。

* 左側のサイドバーで **\[コレクション** \] を開いた状態で、\[ **\+** \] を選択します。

* 空のワークスペースで、\[ **コレクションの作成\]** を選択します。

* [テンプレートからコレクションを作成することもできます](#using-collection-templates)。

新しいコレクションをカスタマイズして構成するには、次の手順を実行します。

1. 編集アイコン ![編集アイコン](https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon) を選択して、新しいコレクションに名前を付けます。

2. 必要に応じて、コレクション [の説明](/docs/publishing-your-api/authoring-your-documentation/) を指定できます。 ドキュメント アイコン を選択し、編集アイコン ![ドキュメント アイコン](https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon) ![編集アイコン](https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon) を選択して説明を入力します。この説明は、ドキュメントとワークスペースを開いたときに表示されます。
   > 
   > \[ **概要** \] を選択して、コレクションの説明を指定および表示することもできます。
3. **\[承認\]** を選択して、コレクションの承認の詳細を構成します。

4. \[ **要求前スクリプト** \] を選択して、要求がサーバーに送信される前に実行されるコレクションの [要求前スクリプト](/docs/writing-scripts/pre-request-scripts/) を定義します。

5. \[ **テスト** \] を選択して、応答の受信後に実行される [コレクションのテスト スクリプト](/docs/writing-scripts/test-scripts/) を定義します。

6. \[ **変数** \] を選択して、コレクション内のすべての要求で共有する [コレクション変数](/docs/sending-requests/variables/) の値を定義します。

![コレクションの詳細を編集する](https://assets.postman.com/postman-docs/v10/collection-details-v10.jpg)

コレクションへの要求の追加
-------------

既存の要求と新しい要求をコレクションに追加するには、いくつかの方法があります。

### 既存の要求を別のコレクションに移動する

既存の要求を別のコレクションに移動するには、次の操作を行います。

1. 移動する要求を選択します。
2. 要求を目的のコレクションにドラッグします。
> 
> または、要求を開いて \[ **名前を付けて保存** \] を選択し、コピー先のコレクションを選択します。

複数の要求を別のコレクションに移動するには、次の操作を行います。

1. **⌘** または **Ctrl** を押したまま、移動する要求を選択します。
2. 要求を目的のコレクションにドラッグします。

### コレクションへの新しい要求の追加

1. 新しい要求から、 \[ **保存** \] を選択します。
2. 移動先のコレクションを選択し、\[ **保存** \] を選択します。
3. 要求を保存する新しいコレクションを作成するには、\[ **新しいコレクション\]** を選択します。

### コレクション内での新しい要求の作成

1. コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。

2. アクションメニューから「 **要求の追加** 」を選択します。

   ![フォルダへの要求の追加](https://assets.postman.com/postman-docs/v10/collection-menu-v10.jpg) 

### 空のコレクションへの要求の追加

コレクションを選択し、\[ **要求の追加** \] を選択します。
![Add a request to an empty collection](https://assets.postman.com/postman-docs/empty-collection-add-request.jpg) 

### 履歴からコレクションへのリクエストの追加

1. サイドバーで\[ **履歴** \]を選択します。

2. 保存する要求の横にある \[その他のアクション\] アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。

3. \[ **要求の保存** \] を選択します。

   ![履歴から要求を保存](https://assets.postman.com/postman-docs/v10/save-history-v10.jpg) 
4. 要求を追加するコレクションを選択し、 \[ **保存** \] を選択します。
> 
> または、要求の横にある **\[\+** \] を選択します。

コレクションの管理
---------

### 基本アクション

ワークスペース内のコレクションの一覧から、次のことができます。

* コレクションを選択して、その概要をタブで開きます。
* コレクションのコンテンツを開いたり閉じたりするには、コレクション名の横にある矢印を選択します。
* コレクション名にカーソルを合わせ、星のアイコン★を選択して、そのコレクションをリストの一番上に移動します。
* コレクション検索バーを使用して、コレクションをフィルタリングします。
* コレクション内の要求、フォルダー、および例をドラッグ アンド ドロップして並べ替えます。

### コレクションへのフォルダーの追加

1. コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。
2. \[ **フォルダーの追加** \] を選択します。

また、サブフォルダーを追加して、コレクションの要求と例の入れ子レベルを追加することもできます。

### コレクションの削除

1. コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。
2. \[ **削除\]** を選択します。

コレクションを選択して、キーボードの **Delete** キーを押すこともできます。
> 
> 削除されたコレクションが 30 MB を超える場合は、 [復元](#recovering-a-deleted-collection)できません。 これを回避するには、削除する前にコレクションを小さな部分に分割するか、最初にコレクションをバックアップします。

### 削除されたコレクションの回復

1. コレクション検索バーの横にあるその他のアクションアイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。

2. \[ **ゴミ箱を開く** \] を選択します。
   > 
   > または、郵便配達員のフッターから ![削除アイコン](https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon) **\[ゴミ箱** \]を選択します。
3. \[ごみ箱\] ページで、回復するコレクションの横にある復元アイコン ![復元アイコン](https://assets.postman.com/postman-docs/icon-restore-v9.jpg) を選択します。
> 
> 30 MB を超える削除済みコレクションは復元できません。

回復オプションは、郵便配達員の計画によって異なります。

* 無料アカウント:最大1日のコレクションを回復します。
* 郵便配達員の基本:最大30日間のコレクションを回復します。
* 郵便配達員プロフェッショナルおよびエンタープライズ:最大90日間コレクションを回復します。
> 
> ゴミ箱にあるはずのコレクションがない場合は、削除されるのではなくワークスペースから削除された可能性があります。 コレクションが別のワークスペースに表示されている場合は、\[ **共有** \] を選択して移動できます。

### コレクションの共有

コレクションを他のユーザーと共有するには、次の方法があります。

* \[ [郵便配達員で実行](/docs/publishing-your-api/run-in-postman/creating-run-button/) \] ボタンを発行します。
* 他のユーザーを共同作業に招待するには、コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択し、\[ **共有** \] を選択します。 [詳しくは、Postman での要素の共有](/docs/collaborating-in-postman/sharing/#sharing-postman-entities)についての記事をご覧ください。
* Postman チームに属さない外部ユーザーがコレクションを表示できるようにするには、コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択し、\[ **共有** \] を選択してから、\[ **チームに参加してコレクションを表示するためのリンクを持つゲストを許可する** \] の横にあるトグルをオンにします。 [外部ユーザーにコレクションの表示を許可する](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections)方法の詳細については、こちらを参照してください。
* コレクションを共有ワークスペースに移動するには、コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択し、\[ **移動\]** を選択します。 [詳しくは、Postman 要素の移動](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces)についての記事をご覧ください。
* \([エンタープライズ](https://www.postman.com/pricing/)\)コレクションをチームの [プライベート API ネットワーク](/docs/collaborating-in-postman/adding-private-network/#adding-collections)に追加します。

### コレクションを見る

コレクションを監視すると、ワークスペース チーム メンバーが新しい要求の追加、既存の要求の変更、変数の追加または更新、要求前のスクリプトまたはテストの編集、フォルダーの追加または削除など、コレクションに変更を加えたときに Postman によって通知されます。 自分が所有するコレクションだけでなく、任意のパブリック ワークスペースのコレクションも視聴できます。

コレクションを視聴するには、次の操作を行います。

1. 時計アイコン ![ウォッチアイコン](https://assets.postman.com/postman-docs/eye.jpg#icon) を選択して、コレクションの視聴を開始します。

![コレクションウォッチング](https://assets.postman.com/postman-docs/v10/collection-watching-overview-v10.jpg)

視聴しているコレクションの変更に関する通知を表示するには、次の操作を行います。

1. Postman ヘッダーの通知アイコン ![通知アイコン](https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon) を選択して、通知を表示します。 \[ **変更ログの表示** \] を選択して、コレクションの変更ログを表示します。

   ![通知収集の監視](https://assets.postman.com/postman-docs/collection-watch-notification-v9.19.jpg) 
2. また、変更を行ったユーザー、変更の内容、および変更が行われた時期に関する情報が記載された電子メールも届きます。 メールの変更 **ログの表示** を選択して、Postman の完全な変更ログにアクセスします。
> 
> コレクションを作成し、同じ Postman アカウントから変更した場合、そのコレクションに加えた変更に関する通知は届きません。

### コレクションのフォーク

独自のワークスペースでコレクションをフォークして、 [コレクションバージョンを開発](/docs/collaborating-in-postman/using-version-control/version-control-overview/)できます。

1. コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。
2. \[ **フォーク\]** を選択します。
> 
> または、コレクションの概要からフォークアイコン ![フォークアイコン](https://assets.postman.com/postman-docs/icon-fork.jpg#icon) を選択します。

### コレクションへのコメントの追加

1. 右側のサイドバーからコメントアイコン ![コメント アイコン](https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon) を選択します。
2. コメントを入力し、\[ **コメントの追加\]** を選択します。

### コレクションの変更を元に戻す

コレクションを以前の状態に戻すには、次の手順を実行します。

1. 右側の変更ログアイコン ![変更履歴アイコン](https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon) を選択します。

2. セッションを選択して展開します。

3. コレクションを復元する変更の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択し、\[ **この変更に復元** \] を選択します。

   ![変更ログから復元する](https://assets.postman.com/postman-docs/changelog-restore-v9.16.jpg) 

変更ログからコレクションを復元すると、選択した変更が発生した直後のポイントに戻ります。

### プルリクエスト、フォーク、コレクションの詳細の表示

右側のサイドバーから:

* コレクションのプル要求を表示するには、プル要求アイコン ![プル要求アイコン](https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon)
* コレクションから作成されたフォークを表示するには、フォーク アイコン ![フォークアイコン](https://assets.postman.com/postman-docs/icon-fork.jpg#icon)
* モックサーバー、モニター、統合など、コレクションに関する詳細情報を表示するには、情報アイコン ![情報アイコン](https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon)

開発ワークフローでのコレクションの使用
-------------------

コレクションは、API 開発、テスト、および公開ワークフローのさまざまな部分を強化できます。

* \[ **実行** \] を選択してコレクション [ランナー](/docs/collections/running-collections/intro-to-collection-runs/)にアクセスすると、コレクション内のすべてのリクエストを実行し、テストワークフローを実行に組み込むことができます。
* ドキュメント アイコン ![ドキュメント アイコン](https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon) を選択して、コレクションから [API ドキュメント](/docs/publishing-your-api/documenting-your-api/) を生成します。
* [モニター](/docs/monitoring-your-api/intro-monitors/) をコレクションにアタッチすると、コレクションの実行をスケジュールできます。 ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) コレクション名の横にある \[その他のアクション\] アイコンを選択し、\[ **コレクションの監視** \] を選択します。
* [モック サーバー](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) を使用して、テストおよび開発中にサンプル データを返すことができます。コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択し、 **モック コレクション** を選択します。
* [Postman API ビルダーを使用して API](/docs/designing-and-developing-your-api/the-api-workflow/)仕様からコレクションを生成します。

コレクションテンプレートの使用
---------------

コレクションを作成するときにどこから始めればよいかわかりませんか? 最初から始める代わりに、テンプレートからコレクションを作成できます。 統合、API ドキュメント、条件付きワークフロー、またはデータの視覚化を開始するために、いくつかのコレクションテンプレートを使用できます。

テンプレートからコレクションを作成するには、いくつかの方法があります。

* 最初にアカウントを作成するときに、テンプレートからコレクションを作成するかどうかを尋ねられます。
* 空のワークスペースの左側のサイドバーで、\[ **テンプレートを使用\]** を選択します。
* **新規** を選択し、 **テンプレートを使用** を選択します。
* 空のコレクションの \[ **概要** \] タブで、テンプレートを選択します。

マルチプロトコル要求コレクションについて
--------------------

[WebSocket](/docs/sending-requests/websocket/websocket/) 要求や [gRPC](/docs/sending-requests/grpc/grpc-client-overview/) 要求などのマルチプロトコル要求をコレクションに保存することもできます。

マルチプロトコル要求には HTTP 要求とは異なる機能があるため、コレクションに保存されると、コレクションは特定の制限付きで "ベータ" 状態になります。

この状態の場合、コレクションには WebSocket 要求または gRPC 要求のみを含めることができ、HTTP 要求を含めることはできません。 コレクションに関連する一部の機能もサポートされていません。

