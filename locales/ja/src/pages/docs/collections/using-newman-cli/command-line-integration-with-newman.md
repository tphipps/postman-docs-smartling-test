---
title: "Newman を使用したコマンドラインでのコレクションの実行"
updated: 2022-05-23
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
        name: "ニューマンでコレクションを実行する |郵便配達員レベルアップ"
        url: "https://www.youtube.com/watch?v=SQlwGZj97Y4"
    - 
        type: "リンク"
        name: "ニューマンでのカスタムレポーターの使用"
        url: "https://youtu.be/Nxdxx-VaYno"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "ニューマンのための次のレベルの自動化トリック"
        url: "https://blog.postman.com/automation-tricks-for-newman/"
    - 
        type: "リンク"
        name: "切り替え: 手動テスターが API テストを自動化できるようにする"
        url: "https://blog.postman.com/switching-from-manual-to-automated-api-testing/"
    - 
        type: "字幕"
        name: "事例研究"
    - 
        type: "リンク"
        name: "SEI Novusは、回帰テストのためにニューマンをCI / CDプロセスに統合しました"
        url: "https://www.postman.com/case-studies/sei-novus/"
    - 
        type: "リンク"
        name: "ウエスタンガバナーズ大学(WGU)がニューマンを活用してテストを自動化"
        url: "https://www.postman.com/case-studies/wgu/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "郵便配達員 API の概要"
        url: "/docs/developer/postman-api/intro-api/"
warning: false
---
Newman は Postman のコマンドラインコレクションランナーです。 これにより、コマンド ラインから直接 Postman コレクションを実行してテストできます。 拡張性を念頭に置いて構築されているため、継続的インテグレーション \(CI\) サーバーと統合してシステムを構築できます。

Newman は Postman と同等の機能を維持し、Postman のコレクションランナー内で実行される方法でコレクションを実行できます。

Newman は [npm レジストリ](https://www.npmjs.com/package/newman) と [GitHub](https://github.com/postmanlabs/newman)に存在します。

[Postman CLI](/docs/postman-cli/postman-cli-overview/)を使用してコマンドラインからコレクションを実行することもできます。Newman と Postman CLI の違いの詳細については、「 [使用するコマンドラインコンパニオンの決定](/docs/postman-cli/postman-cli-overview/#deciding-which-command-line-companion-to-use)」を参照してください。

[![ランニングニューマン](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)

内容
---

* [はじめ](#getting-started)
* [オプション](#options)
* [ファイルのアップロード](#file-uploads)
* [カスタムレポーター](#custom-reporters)

はじめ
---

開始するには、Node.js と Newman をインストールしてから、コレクションを実行します。  [Newman のインストールと実行](/docs/collections/using-newman-cli/installing-running-newman/)の詳細については、こちらを参照してください。

オプション
-----

Newman には、実行をカスタマイズするための豊富なオプション セットが用意されています。  [ニューマンオプション](/docs/collections/using-newman-cli/newman-options/)の詳細をご覧ください。

ファイルのアップロード
-----------

Newmanはファイルのアップロードをサポートしているため、データファイル\(テキストファイルなど\)を使用してフォームデータフィールドに入力できます。  [詳しくは、Newman でのファイルのアップロード](/docs/collections/using-newman-cli/newman-file-uploads/)についての記事をご覧ください。

カスタムレポーター
---------

カスタムレポーターは、特定のユースケースに対応するコレクション実行レポートを生成するのに役立ちます \(たとえば、要求 \(またはそのテスト\) が失敗したときに応答本文をログアウトするなど\)。  [詳しくは、Newman カスタムレポーターの使用](/docs/collections/using-newman-cli/newman-custom-reporters/)についての記事をご覧ください。

