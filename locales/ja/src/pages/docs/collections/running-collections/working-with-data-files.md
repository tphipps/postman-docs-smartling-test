---
title: "データファイルのインポート"
order: 58
updated: 2022-07-18
page_id: "working_with_data_files"
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
        name: "データファイルをループする |郵便配達員レベルアップ"
        url: "https://youtu.be/RH8b3gbujPY"
    - 
        type: "字幕"
        name: "ブログ記事"
    - 
        type: "リンク"
        name: "郵便配達員コレクションランナーのデータファイルのループ"
        url: "https://blog.postman.com/looping-through-a-data-file-in-the-postman-collection-runner/"
    - 
        type: "字幕"
        name: "事例研究"
    - 
        type: "リンク"
        name: "レピュテーションはPostmanでデータファイルをインポートします"
        url: "https://www.postman.com/case-studies/reputation/"
warning: false
---
データ ファイルを使用して、コレクション実行で使用する値の Postman セットを渡すことができます。 コレクションランナーでJSONまたはCSVデータファイルを選択することで、1回の実行の一部として複数の値を使用してリクエストをテストできます。

データ ファイルを使用したコレクションの実行
----------------------

[コレクション実行](/docs/collections/running-collections/intro-to-collection-runs/)で使用するデータ ファイルを選択できます。

1. 郵便配達員のフッターから ![ランナーアイコン](https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon) **\[ランナー** \] を選択します。

2. コレクションを選択し、\[ **実行順序** \] 作業領域にドラッグします。

3. \[ファイルの選択\]ボタンでデータ **ファイル** を選択します。

   ![データ ファイルの選択](https://assets.postman.com/postman-docs/v10/select-data-file-1-v10.jpg)  
4. データ ファイルを選択したら、 \[ **プレビュー** \] を選択して、実行を開始する前にファイル内のデータを検査できます。

   ![データ ファイルのプレビュー](https://assets.postman.com/postman-docs/v10/preview-data-file-1-v10.jpg)
5. \[データ ファイルを使用して実行\] を選択し、 **ファイルの値を使用して実行** を開始します。 コレクションランナーは、データファイル内の反復ごとにコレクションリクエストを実行します。 出力は、収集要求で定義したすべてのテストの結果を示します。
   > 
   > * このページの手順をテストするには [、最初にサンプル コレクションをインポートします](https://assets.postman.com/postman-docs/58533790.json)。 サイドバーの上部にある\[インポート\]を使用して、ダウンロードしてPostmanに **インポート** します。 ![コレクションのインポート](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-2.jpg)
   > * コレクションランナーで、インポートしたコレクションを選択します。 [サンプルデータファイルをダウンロード](https://assets.postman.com/postman-docs/58702589.json) し、 **ランナー** でも選択します。
   > * サンプル コレクションには、 `POST` URL で変数を使用する `path` 要求があることに注意してください。 このパス変数は、データ ファイルの各レコードで指定されます。 要求では、 `value` 反復ごとにデータ ファイルから取得される変数も本文で使用します。 *リクエストの例は、送信したデータを返す学習リソースである [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation)に対するものです。* ![テスト](https://assets.postman.com/postman-docs/data-file-tests-tab-v8.jpg)

6. コレクションランナーの結果でリクエストを選択して、そのデータの詳細を取得します。

   ![コレクション実行結果](https://assets.postman.com/postman-docs/data-file-collection-run-v8.jpg)

要求で定義されたデータはコレクションの実行時に使用され、要求データはデータ ファイルで定義された値を参照できます。

![データ ファイルの値](https://assets.postman.com/postman-docs/request-body-data-run-v8.jpg)

データ・ファイル値へのアクセス
---------------

要求全体でデータ ファイルで定義された値を参照できますが、スクリプトを使用して値にアクセスするには、別の手法が必要です。  **テスト** または要求 **前スクリプト** ・コードでデータ・ファイルの値を使用するには、 を使用して、 `iterationData`要求の実行に使用された現在のデータ・ファイル・レコードにアクセスします。

```js
この要求実行のデータ ファイルから 'value' フィールドを取得します
pm.iterationData.get("value")
```

イテレーション データで実行できる操作の詳細については、「 [サンドボックス リファレンス](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) 」を参照してください。

データファイルの読み取り時のエラー
-----------------

コレクションの実行中に Postman がデータ ファイルを読み取ろうとすると、エラーが発生することがあります。 これが発生した場合は、次の手順を実行できます。

1. データ ファイルの形式が CSV または JSON として正しく設定されていることを確認します。

2. データ ファイルをテキスト エディターで開き、別の形式で保存して、データ ファイルが正しくエンコードされていることを確認します。

エラーが引き続き発生する場合は、 [Postman サポート チームにお問い合わせください](https://support.postman.com/hc/en-us)。

