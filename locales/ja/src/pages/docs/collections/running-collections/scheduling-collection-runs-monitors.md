*** ** * ** ***

title: "Scheduling collection runs with monitors"
updated: 2022\-11\-09
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Using the Collection Runner" url: "/docs/collections/running\-collections/intro\-to\-collection\-runs/"
* type: section name: "Additional resources"
* type: subtitle name: "Videos"
* type: link name: "API Monitoring \| The Exploratory" url: "[https://youtu.be/tDQzY1Hn2LY](https://youtu.be/tDQzY1Hn2LY)"
* type: dynamic\_blog name: "Blog posts" blog\_tag: "monitors"

warning: false

*** ** * ** ***

You can automate [collection runs](/docs/collections/running-collections/intro-to-collection-runs/) using [monitors](/docs/monitoring-your-api/intro-monitors/) to schedule runs and receive reports on your request test results.
> 
> You can also schedule collection runs with the [**Collection Runner**](/docs/collections/running-collections/scheduling-collection-runs/). Monitors are typically used to schedule runs when you want to set up alerts like triggering on\-call upon failure. Users typically choose the Collection Runner to schedule runs for all other use cases.

1. To add or access monitors for a particular collection, select **Monitors** in the sidebar.

   ![Monitors v10](https://assets.postman.com/postman-docs/v10/create-a-monitor-v10.jpg) 

   Any monitors already attached to your collection will appear. Select **Create a monitor** to add one \(or **\+ Create a new Monitor** if you already have one on the collection\).

   You can also add a monitor by selecting a collection first. Select the collection you want to add a monitor to, then select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) > **Monitor collection** .
2. Enter the following:

   * Monitor name
   * Collection
   * Environment \(optional\)
   * Data file \(optional\)
   * Run this monitor \(schedule\)
   * Regions
   * Email addresses for failure and error notifications
   * Retry if run fails
   * Set request timeout
   * Set delay between requests
   * Follow redirects
   * Enable SSL validation

3. Select **Create Monitor** and your monitor will run on the schedule you entered.

   [![Add new monitor to collection](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)](https://assets.postman.com/postman-docs/v10/create-new-monitor-overview-1-v10.jpg)

   Your new monitor will appear in the monitor overview. You can open the monitor overview tab to [view your monitor results](/docs/monitoring-your-api/viewing-monitor-results/) at any time.
   ![New monitor created](https://assets.postman.com/postman-docs/v10/new-monitor-created-v10.jpg)

