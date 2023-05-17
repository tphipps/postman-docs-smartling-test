*** ** * ** ***

title: "Live Collection setup"
updated: 2023\-03\-15
contextual\_links:

* type: section name: "Additional resources"
* type: subtitle name: "Blog posts"
* type: link name: "Introducing Postman Live Collections for automated documentation" url: "[https://blog.postman.com/introducing\-postman\-live\-collections\-for\-automated\-documentation/](https://blog.postman.com/introducing-postman-live-collections-for-automated-documentation/)"

*** ** * ** ***

To start using Live Collections, create a collection, then install the Postman SDK in your application.

1. To create a new Live Collection, select a collection, select the Live Collections icon ![Live Collections icon](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) in the right sidebar, then select **Enable Live** .

2. Select your application language: **Node.js** , **Python** , or **Go** .

3. Select a framework. For Node.js, select **Express.js** , **Sails.js** , or **Fastify** . For Python, select **Flask** . For Go, select **Gin** .

4. Install the Postman SDK in the application’s root directory. You're provided with an installation command that uses `npm`, `pip`, or `go get`. Copy the command and enter it on your server to install the SDK.

   ![Live Collection install SDK](https://assets.postman.com/postman-docs/v10/live-collections-install-sdk.jpg)
5. Configure the Postman SDK by adding a code snippet to your application.

   1. You need to add a [Postman API key](/docs/developer/postman-api/intro-api/) to the code snippet. You can do this with a variable in your application, or select **Add API Key** .

      ![Live Collection configure SDK](https://assets.postman.com/postman-docs/v10/live-collections-add-api-key.jpg)
   2. Select **Generate Key** to create a new key, or **Use Existing Key** to use one you've previously created.

   3. Add the code snippet into your app. For example, for a Node.js application using the Express.js framework, copy the code and add it to your app's main `index.js` file:

   ![Live Collection configure SDK](https://assets.postman.com/postman-docs/v10/live-collections-configure-sdk.jpg)
6. Restart your application if it's already running.

7. Select **Test Connection** to test if Postman can reach your application, or wait for the connection to be established. After Postman is connected to your application, the connection state will change and your app will be connected to Postman.

   ![Live Collections connected](https://assets.postman.com/postman-docs/v10/live-collection-connected.jpg) 

Data privacy
------------

**Note:** Review the request and responses in a Live Collection within a sandbox or non\-production environment to ensure that sensitive data is not sent to Postman. We recommend you to deploy on Production only after enabling data truncation and redaction rules to prevent any sensitive data from being sent to Postman.

* Data truncation is turned on by default to automatically remove the fields from the request and response body and will only send the type. This will not remove the fields from the request and response headers.
* Removing the data truncation rule will result in the values of the request and response body to be sent to Postman.
* Add data redaction rules to your application to ensure that sensitive data is redacted from the request headers, response headers, request body, response body and query params.
* See [Truncating and redacting sensitive data](/docs/collections/live-collections/live-collections-settings/#truncating-and-redacting-sensitive-data) for more information.
* With Live collections, any potentially sensitive data in the request and response like authorization keys, email, and so on could be stored or shared with Postman if data truncation or redaction rules are not configured.
* Review our [shared security model](https://www.postman.com/trust/shared-responsibility/) for additional information about best practices you should implement while using the Postman services.

