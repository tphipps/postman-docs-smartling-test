*** ** * ** ***

title: "Newman with Docker"
order: 61
updated: 2021\-06\-17
page\_id: "newman\_with\_docker"
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Command\-line integration with Newman" url: "/docs/collections/using\-newman\-cli/command\-line\-integration\-with\-newman/"
* type: section name: "Additional resources"
* type: subtitle name: "Blog posts"
* type: link name: "Integrations: how Postman plays with some of your favorite tools" url: "[https://blog.postman.com/integrations\-how\-postman\-plays\-with\-some\-of\-your\-favorite\-tools/](https://blog.postman.com/integrations-how-postman-plays-with-some-of-your-favorite-tools/)"
* type: section name: "Next steps"
* type: link name: "Postman API overview" url: "/docs/developer/postman\-api/intro\-api/"

warning: false
tags:

* "newman"

*** ** * ** ***

This topic describes how to use [Newman](https://github.com/postmanlabs/newman) with [Docker](https://www.docker.com/) in these platforms:

* [macOS and Ubuntu](#macos-and-ubuntu)
* [Windows](#windows)

macOS and Ubuntu
----------------

To use Newman with Docker for macOS and Ubuntu, do the following:

1\. In the [Docker Hub](https://hub.docker.com/r/postman/newman/), download your copy.

2\. Ensure you have Docker installed and running in your system. Docker has extensive installation guidelines for popular operating systems. Choose your operating system and follow the instructions.

To test your Docker installation, execute this command to ensure it runs without errors:

```bash
$ docker run hello-world
```

3\. Pull the Newman docker image.

```bash
$ docker pull postman/newman;
```

4\. Run Newman commands on the image.

```bash
$ docker run -t postman/newman run "https://www.getpostman.com/collections/0d0350a9a89d39fb6361"
```

The URL is a shareable public link to your collection.

To get the public link, do the following:

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name.
2. Select **Share collection** .
3. Select **Get public link** .

At this stage, the [Collection](/docs/sending-requests/intro-to-collections/) runs in Newman and the output displays in the terminal.

The entry point to the Docker image is Newman. So you can use all Newman command\-line parameters. You can also run locally stored collection files. The README of the image outlines how to mount shared data volumes.

Windows
-------

Check out [how to run Newman in Docker for Windows](https://blog.postman.com/using-the-newman-docker-image-in-windows/).

*** ** * ** ***

For more information on collection runs, see:

* [Using the Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/)
* [Working with data files](/docs/collections/running-collections/working-with-data-files/)
* [Building workflows](/docs/collections/running-collections/building-workflows/)
* [Integration with Jenkins](/docs/collections/using-newman-cli/integration-with-jenkins/)
* [Integration with Travis CI](/docs/collections/using-newman-cli/integration-with-travis/)

