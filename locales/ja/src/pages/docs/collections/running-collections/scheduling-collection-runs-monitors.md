---
title: "モニターを使用した収集実行のスケジューリング"
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
[](/docs/collections/running-collections/intro-to-collection-runs/) [モニター](/docs/monitoring-your-api/intro-monitors/) を使用して収集実行を自動化し、実行をスケジュールし、要求テスト結果に関するレポートを受け取ることができます。
> 
> コレクション [**ランナーを使用してコレクション**](/docs/collections/running-collections/scheduling-collection-runs/)の実行をスケジュールすることもできます。 モニターは通常、障害発生時のオンコールのトリガーなどのアラートを設定するときに、実行をスケジュールするために使用されます。 ユーザーは通常、コレクションランナーを選択して、他のすべてのユースケースの実行をスケジュールします。

1. 特定のコレクションのモニターを追加またはアクセスするには、サイドバーで \[ **モニター** \] を選択します。

   ![モニターv10](https://assets.postman.com/postman-docs/v10/create-a-monitor-v10.jpg) 

   コレクションにすでに接続されているモニターが表示されます。 \[ **モニターの作成\]** を選択して追加します \(または、コレクションに既にモニターがある場合は **\+ 新しいモニターを作成します** \)。

   最初にコレクションを選択してモニターを追加することもできます。 モニターを追加するコレクションを選択し、\[その他のアクション\] アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) > **\[モニター\] コレクション** を選択します。
2. 次のように入力します。

   * モニター名
   * 徴収
   * 環境 \(オプション\)
   * データ ファイル \(オプション\)
   * このモニターを実行する \(スケジュール\)
   * 地域
   * 失敗とエラー通知の電子メール アドレス
   * 実行が失敗した場合の再試行
   * 要求タイムアウトの設定
   * 要求間の遅延を設定する
   * リダイレクトをフォローする
   * SSL 検証を有効にする

3. \[ **モニターの作成** \] を選択すると、入力したスケジュールでモニターが実行されます。

   [![コレクションに新しいモニターを追加する](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)

   新しいモニターがモニターの概要に表示されます。 モニターの概要タブを開いて、 [いつでもモニターの結果を表示できます](/docs/monitoring-your-api/viewing-monitor-results/) 。
   ![新しいモニターが作成されました](https://assets.postman.com/postman-docs/v10/new-monitor-created-v10.jpg)

