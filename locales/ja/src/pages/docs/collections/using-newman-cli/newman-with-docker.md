---
title: "ニューマンとドッカー"
order: 61
updated: 2021-06-17
page_id: "newman_with_docker"
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
---
[](https://github.com/postmanlabs/newman) このトピックでは、次のプラットフォームで [Docker](https://www.docker.com/) で Newman を使用する方法について説明します。

* [macOSとUbuntu](#macos-and-ubuntu)
* [ウィンドウズ](#windows)

macOSとUbuntu
------------

Newman を macOS および Ubuntu 用の Docker で使用するには、次の手順を実行します。

1\.  [Docker ハブ](https://hub.docker.com/r/postman/newman/)で、コピーをダウンロードします。

2\. システムに Docker がインストールされ、実行されていることを確認します。 Dockerには、一般的なオペレーティングシステム用の広範なインストールガイドラインがあります。 オペレーティングシステムを選択し、指示に従います。

Docker のインストールをテストするには、次のコマンドを実行して、エラーなしで実行されることを確認します。

```bash
$ docker run hello-world
```

3\. ニューマン ドッカー イメージをプルします。

```bash
$ ドッカープルポストマン/ニューマン;
```

4\. イメージに対して Newman コマンドを実行します。

```bash
$ Docker Run -t Postman/Newman Run "https://www.getpostman.com/collections/0d0350a9a89d39fb6361"
```

URL は、コレクションへの共有可能な公開リンクです。

公開リンクを取得するには、次の手順を実行します。

1. コレクション名の横にあるその他のアクション アイコン ![その他のアクション アイコン](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) を選択します。
2. \[ **コレクションの共有** \] を選択します。
3. \[ **公開リンクの取得** \] を選択します。

この段階で、 [コレクション](/docs/sending-requests/intro-to-collections/) はニューマンで実行され、出力はターミナルに表示されます。

Docker イメージへのエントリ ポイントは Newman です。 したがって、すべてのNewmanコマンドラインパラメータを使用できます。 ローカルに保存されたコレクション ファイルを実行することもできます。 イメージの README には、共有データ ボリュームをマウントする方法の概要が記載されています。

ウィンドウズ
------

[Docker for Windows で Newman を実行する方法](https://blog.postman.com/using-the-newman-docker-image-in-windows/)を確認してください。

*** ** * ** ***

コレクション実行の詳細については、以下を参照してください。

* [コレクションランナーの使用](/docs/collections/running-collections/intro-to-collection-runs/)
* [データ ファイルの操作](/docs/collections/running-collections/working-with-data-files/)
* [ワークフローの構築](/docs/collections/running-collections/building-workflows/)
* [ジェンキンスとの統合](/docs/collections/using-newman-cli/integration-with-jenkins/)
* [トラビスCIとの統合](/docs/collections/using-newman-cli/integration-with-travis/)

