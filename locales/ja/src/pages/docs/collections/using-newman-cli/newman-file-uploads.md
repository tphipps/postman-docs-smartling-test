---
title: "ニューマンでのファイルのアップロード"
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
        name: "Newman:コマンドラインからコレクションを実行してテストします"
        url: "https://blog.postman.com/newman-run-and-test-your-collections-from-the-command-line/"
    - 
        type: "節"
        name: "次のステップ"
    - 
        type: "リンク"
        name: "郵便配達員 API の概要"
        url: "/docs/developer/postman-api/intro-api/"
warning: false
---
ファイルのアップロード
-----------

ニューマンはファイルのアップロードをサポートしています。 これを機能させるには、コレクションで指定された相対的な場所にファイルをアップロードします。 たとえば、次のコレクションを確認します。

```json
{
    "変数": [],
    "情報": {
        "名前": "ファイルアップロード",
        "_postman_id": "9dbfcf22-fdf4-f328-e440-95dbd8e4cfbb",
        "description": "ファイルをフォームデータフィールドとしてアップロードするための一連の「POST」リクエスト",
        "スキーマ": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"    },
    "アイテム": [
        {
            "名前": "フォームデータのアップロード",
            "イベント": [
                {
                    "聞く": "テスト",
                    "スクリプト": {
                        "タイプ": "テキスト/ジャバスクリプト",
                        "exec": [
                            "var response = JSON.parse(responseBody).files[\"sample-file.txt\"];",
                            "",
                            "tests[\"ステータスコードは200です\"] = responseCode.code === 200;",
                            "tests[\"ファイルが正しくアップロードされました\"] = /^data:application\\/octet-stream;base64/.test(response);",                            ""
                        ]
                    }
                }
            ],
            "リクエスト": {
                "url": "https://postman-echo.com/post",                "メソッド": "POST",
                "ヘッダー": [],
                "ボディ": {
                    "モード": "フォームデータ",
                    "フォームデータ": [
                        {
                            "キー": "ファイル",
                            "タイプ": "ファイル",
                            "有効":真、
                            "src": "サンプルファイル.txt"                        }
                    ]
                },
                "description": "'POST' リクエストを使用して、ファイルをフォームデータフィールドとして 'https://postman-echo.com/post' にアップロードします。            },
            "応答": []
        }
    ]
}
```

ファイルは `sample-file.txt` 、現在の作業ディレクトリにコレクションとして存在している必要があります。 このコレクションを通常どおりに実行します。

```bash
$ newman run file-upload.postman_collection.json
```

