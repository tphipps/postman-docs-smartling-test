*** ** * ** ***

title: "Running collections on the command line with Newman"
updated: 2022\-05\-23
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Using the Collection Runner" url: "/docs/collections/running\-collections/intro\-to\-collection\-runs/"
* type: section name: "Additional resources"
* type: subtitle name: "Videos"
* type: link name: "Run Collections with Newman \| Postman Level Up" url: "[https://www.youtube.com/watch?v=SQlwGZj97Y4](https://www.youtube.com/watch?v=SQlwGZj97Y4)"
* type: link name: "Using Custom Reporters with Newman" url: "[https://youtu.be/Nxdxx\-VaYno](https://youtu.be/Nxdxx-VaYno)"
* type: subtitle name: "Blog posts"
* type: link name: "Next\-Level Automation Tricks for Newman" url: "[https://blog.postman.com/automation\-tricks\-for\-newman/](https://blog.postman.com/automation-tricks-for-newman/)"
* type: link name: "Making the switch: empowering manual testers to automate their API tests" url: "[https://blog.postman.com/switching\-from\-manual\-to\-automated\-api\-testing/](https://blog.postman.com/switching-from-manual-to-automated-api-testing/)"
* type: subtitle name: "Case Studies"
* type: link name: "SEI Novus integrated Newman into its CI/CD process for regression testing" url: "[https://www.postman.com/case\-studies/sei\-novus/](https://www.postman.com/case-studies/sei-novus/)"
* type: link name: "Western Governors University \(WGU\) leverages Newman to automate tests" url: "[https://www.postman.com/case\-studies/wgu/](https://www.postman.com/case-studies/wgu/)"
* type: section name: "Next steps"
* type: link name: "Postman API overview" url: "/docs/developer/postman\-api/intro\-api/" warning: false

*** ** * ** ***

Newman is a command\-line Collection Runner for Postman. It enables you to run and test a Postman Collection directly from the command line. It's built with extensibility in mind so that you can integrate it with your continuous integration \(CI\) servers and build systems.

Newman maintains feature parity with Postman and allows you to run collections the way they're executed inside the collection runner in Postman.

Newman resides in the [npm registry](https://www.npmjs.com/package/newman) and on [GitHub](https://github.com/postmanlabs/newman).

You can also run collections from the command line using the [Postman CLI](/docs/postman-cli/postman-cli-overview/). For more information on the differences between Newman and the Postman CLI, see [deciding which command\-line companion to use](/docs/postman-cli/postman-cli-overview/#deciding-which-command-line-companion-to-use).

[![Running Newman](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)](https://assets.postman.com/postman-docs/newman-running-in-terminal.gif)

Contents
--------

* [Getting started](#getting-started)
* [Options](#options)
* [File uploads](#file-uploads)
* [Custom reporters](#custom-reporters)

Getting started
---------------

To get started, install Node.js and Newman, then run your collections. Learn more about [installing and running Newman](/docs/collections/using-newman-cli/installing-running-newman/).

Options
-------

Newman provides a rich set of options to customize a run. Learn more about [Newman options](/docs/collections/using-newman-cli/newman-options/).

File uploads
------------

Newman supports file uploads, so you can use a data file \(such as a text file\) to fill in form data fields. Learn more about [uploading files in Newman](/docs/collections/using-newman-cli/newman-file-uploads/).

Custom reporters
----------------

Custom reporters are useful to generate collection run reports that cater to specific use cases, for example, logging out the response body when a request \(or its tests\) fail. Learn more about [using Newman custom reporters](/docs/collections/using-newman-cli/newman-custom-reporters/).

