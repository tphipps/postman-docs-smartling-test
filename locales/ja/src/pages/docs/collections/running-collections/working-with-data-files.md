*** ** * ** ***

title: "Importing data files"
order: 58
updated: 2022\-07\-18
page\_id: "working\_with\_data\_files"
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Using the Collection Runner" url: "/docs/collections/running\-collections/intro\-to\-collection\-runs/"
* type: section name: "Additional resources"
* type: subtitle name: "Videos"
* type: link name: "Loop Through a Data File \| Postman Level Up" url: "[https://youtu.be/RH8b3gbujPY](https://youtu.be/RH8b3gbujPY)"
* type: subtitle name: "Blog posts"
* type: link name: "Looping through a Data File in the Postman Collection Runner" url: "[https://blog.postman.com/looping\-through\-a\-data\-file\-in\-the\-postman\-collection\-runner/](https://blog.postman.com/looping-through-a-data-file-in-the-postman-collection-runner/)"
* type: subtitle name: "Case Studies"
* type: link name: "Reputation imports data files with Postman" url: "[https://www.postman.com/case\-studies/reputation/](https://www.postman.com/case-studies/reputation/)"

warning: false

*** ** * ** ***

You can use data files to pass Postman sets of values to use in a collection run. By selecting a JSON or CSV data file in the Collection Runner, you can test your requests with multiple values as part of a single run.

Running collections with data files
-----------------------------------

You can select a data file to use in a [collection run](/docs/collections/running-collections/intro-to-collection-runs/).

1. Select ![Runner icon](https://assets.postman.com/postman-docs/icon-runner-v9.jpg#icon) **Runner** from the Postman footer.

2. Select your collection and drag it into the **Run Order** work area.

3. Select your data file with the **Select File** button.

   ![Data File Select](https://assets.postman.com/postman-docs/v10/select-data-file-1-v10.jpg)  
4. After you select your data file, you can select **Preview** to inspect the data in the file before you start the run.

   ![Data File Preview](https://assets.postman.com/postman-docs/v10/preview-data-file-1-v10.jpg)
5. Select **Run using data files** to begin the run with the values from the file. The Collection Runner runs the collection requests for each iteration in the data file. The output indicates the results for any tests you defined in your collection requests.
   > 
   > * You can test the steps in this page by first importing [the sample collection](https://assets.postman.com/postman-docs/58533790.json). Download and import it into Postman using **Import** at the top of the sidebar. ![Import Collection](https://assets.postman.com/postman-docs/v10/import-export-import-ui-v10-2.jpg)
   > * In the Collection Runner, choose the collection you imported. Download [the sample data file](https://assets.postman.com/postman-docs/58702589.json) and select it in the **Runner** also.
   > * Note that the sample collection has a `POST` request which uses a `path` variable in the URL. This path variable is specified in each record in the data file. The request also uses a `value` variable in the body which is also pulled from the data file for each iteration. *The example request is to the [Postman Echo API](https://www.postman.com/postman/workspace/published-postman-templates/documentation/631643-f695cab7-6878-eb55-7943-ad88e1ccfd65?ctx=documentation), a learning resource that returns the data you send it.* ![Tests](https://assets.postman.com/postman-docs/data-file-tests-tab-v8.jpg)

6. Select a request in the Collection Runner results to get more details on its data.

   ![Collection Run Results](https://assets.postman.com/postman-docs/data-file-collection-run-v8.jpg)

Any data defined in the requests will be used when the collection runs, and your request data can reference values defined in the data file.

![Data File Value](https://assets.postman.com/postman-docs/request-body-data-run-v8.jpg)

Accessing data file values
--------------------------

You can reference values defined in the data file throughout your requests, but accessing them with scripts requires a different technique. To use values from the data file in your **Tests** or **Pre\-request Script** code, use `iterationData`, which provides access to the current data file record used to run the request.

```js
//get the 'value' field from the data file for this request run
pm.iterationData.get("value")
```

See the [Sandbox Reference](/docs/writing-scripts/script-references/postman-sandbox-api-reference/) for more on what you can do with iteration data.

Errors when reading data files
------------------------------

You may encounter errors when Postman attempts to read your data file during a collection run. If this happens, you can take the following steps:

1. Ensure your data file is formatted correctly, as either CSV or JSON.

2. Confirm your data file is encoded properly, by opening your data file in a text editor and saving the file in a different format.

If the errors persist, [contact the Postman support team](https://support.postman.com/hc/en-us).

