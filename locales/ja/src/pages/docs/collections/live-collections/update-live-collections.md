---
title: "ライブコレクションの更新"
updated: 2023-03-15
---
ライブコレクションがインストゥルメントされたサービスで新しいAPIイベントを監視するたびに、更新ワークフローがトリガーされます。 更新は、既存の要求に適用することも、新しい要求がコレクションに追加される場合もあります。 更新されたパラメータまたはヘッダーは、デフォルトでは有効になっていません。 コレクションを自動的に更新するか、更新を行う前に手動で確認するかを選択できます。

内容
---

* [ライブ コレクションの自動更新](#automatic-updates-to-a-live-collection)
* [ライブコレクションの手動更新](#manual-updates-to-a-live-collection)
* [ライブコレクションの変更の表示](#viewing-changes-in-a-live-collection)

ライブ コレクションの自動更新
---------------

Live コレクションを最初に作成した後、最初のリクエストが検出されると、コレクションの横に通知が表示されます。 既定では、要求は自動的にコレクションに追加されます。 更新が検出されたときにライブ コレクションを自動的に更新するには、\[ **コレクションを自動的に更新** する\] を選択し、\[ **保存** \] を選択します。
![Live Collections update request](https://assets.postman.com/postman-docs/v10/live-collections-update-request-first-time-popup.jpg) 

自動更新を選択すると、通知が送信されずにサービスで API イベントが観察されるたびに、要求が自動的に作成または更新されます。

自動的に行われた更新のログを表示するには、コレクション変更ログを使用できます。 詳しくは、 [Live コレクションでの変更の表示を参照してください。](#viewing-changes-in-a-live-collection) 

ライブコレクションの手動更新
--------------

自動更新を使用する代わりに、変更を確認して手動で適用することもできます。 新しいアップデートが入るたびに、コレクション名の横にあるライブコレクションアイコン ![ライブコレクションアイコン](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) がオレンジ色に点灯して通知されます。 その後、Live コレクションを手動で更新することを選択できます。

Live コレクションを手動で更新するには、次の手順を実行します。

1. \[ライブ コレクション\] アイコン ![ライブコレクションアイコン](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) にカーソルを合わせ、\[ **変更の確認** \] を選択します。 右側のサイドバーのライブコレクション構成設定に移動することもできます。

   ![ライブコレクションの更新リクエスト](https://assets.postman.com/postman-docs/v10/live-collections-review-changes-popup.jpg) 
2. 受信した変更を確認します。 これらは、新しい要求の追加または既存の要求への変更です。 Postman は、アプリケーションの API イベントから受信した応答に基づいて、新しい例も作成します。

   ![ライブコレクションレビューの変更点](https://assets.postman.com/postman-docs/v10/live-collections-review-changes.jpg) 
3. Live コレクションで変更を行い、サービスからの受信変更によって同じコンポーネントが変更された場合、競合が発生します。 これらの競合は、受信した変更を確認するときに表示されます。 競合する要求の各部分について、ユーザー更新またはサービス更新を保持するかどうかを選択できます。

   ![ライブコレクションの競合](https://assets.postman.com/postman-docs/v10/live-collection-conflict.jpg) 
4. \[ **コレクションの更新** \] を選択して変更を受け入れてコレクションを更新するか、\[ **すべて拒否\]** を選択して無視します。

ライブコレクションの変更の表示
---------------

ライブコレクションに加えられた変更を確認するには、コレクションの変更ログを使用します。 コレクションの変更ログには、ライブコレクションに加えられた更新が表示されます。

変更ログを表示するには、コレクションを開き、右側のサイドバーにある変更ログアイコン ![変更履歴アイコン](https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon) を選択します。 コレクション名の横にある \[ライブ コレクション\] アイコン ![ライブコレクションアイコン](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) にカーソルを合わせて、\[ **最近の変更を表示** \] を選択することもできます。
![Changelog view](https://assets.postman.com/postman-docs/v10/changelog-view.jpg) 

詳細については、「 [コレクション変更ログの表示](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-the-collection-changelog)」を参照してください。

