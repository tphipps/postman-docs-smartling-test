*** ** * ** ***

title: "CI with Postman API"
updated: 2022\-05\-23
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Grouping requests in collections" url: "/docs/sending\-requests/intro\-to\-collections/"
* type: link name: "Command\-line integration with Newman" url: "/docs/collections/using\-newman\-cli/command\-line\-integration\-with\-newman/"
* type: section name: "Additional resources"
* type: subtitle name: "Videos"
* type: link name: "Continuous Testing with Postman \| Webinar" url: "[https://youtu.be/sB2HHrezQOo](https://youtu.be/sB2HHrezQOo)"
* type: subtitle name: "Blog posts"
* type: link name: "Continuous API Testing with Postman" url: "[https://blog.postman.com/continuous\-api\-testing\-with\-postman/](https://blog.postman.com/continuous-api-testing-with-postman/)"
* type: section name: "Next steps"
* type: link name: "Intro to scripts" url: "/docs/writing\-scripts/intro\-to\-scripts/"
* type: link name: "CI Integrations" url: "/docs/integrations/ci\-integrations/"

warning: false
--------------

Continuous integration \(CI\) is a development practice that requires developers to regularly merge code updates into a shared repository. It involves the process of automating the build and testing of code every time a developer commits code updates.

You can access collections using the Postman API to run inside your continuous integration and continuous deployment \(CI/CD\) environments.

Before you get started:

* Ensure you have a CI system setup which can run shell commands and that you have access to modify the same.
* Get a [Postman API key](https://docs.api.getpostman.com/#authentication). If you don't have one, you can [generate an API key](/docs/developer/postman-api/authentication/#generate-a-postman-api-key).
* Make sure you have a Postman Collection that tests your localhost server, and note the UID of the collection.
> 
> **Developing an API?** Postman offers built\-in tools to integrate your API with some of the most widely\-used continuous integration \(CI\) tools. After you set up CI for your API, you can view the status of builds or kick off a new build, all from within Postman. You can also use Newman to run API tests as part of your CI pipeline. To learn more, see [CI integrations](/docs/integrations/ci-integrations/).

Step 1: Install Node
--------------------

You may skip this step if your CI already has Node installed.

Follow the [steps to download Node](https://nodejs.org/en/download/package-manager/) which is specific to your CI's platform. Otherwise, some CI has configuration that pre\-installs Node. Ensure you are using Node.js v4 or above.

Step 2: Install Newman
----------------------

[Newman](/docs/collections/using-newman-cli/command-line-integration-with-newman/) is a command\-line tool that allows you to run a collection in your local development environment or on your own server. The following command installs Newman in your CI.

```bash
npm i newman -g;
```

Step 3: Run Newman
------------------

Run the following Newman command with the appropriate parameters:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
```

If you need to provide an environment to the collection, add the `--environment` option with the appropriate parameters to the Newman command:

```bash
newman run https://api.getpostman.com/collections/{{collection_uid}}?apikey={{postman-api-key-here}}
--environment https://api.getpostman.com/environments/{{environment_uid}}?apikey={{postman-api-key-here}}
```

