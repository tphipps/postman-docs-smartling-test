*** ** * ** ***

title: "Using collections"
updated: 2023\-04\-10
contextual\_links:

* type: section name: "Prerequisites"
* type: link name: "Sending requests" url: "/docs/sending\-requests/requests/"
* type: section name: "Additional resources"
* type: subtitle name: "Videos"
* type: link name: "Group Requests in Collections \| Postman Level Up" url: "[https://youtu.be/ghHX4FGvVyA](https://youtu.be/ghHX4FGvVyA)"
* type: link name: "Create a Postman Collection \| Postman Level Up" url: "[https://youtu.be/NlrPjuXEaZ8](https://youtu.be/NlrPjuXEaZ8)"
* type: dynamic\_blog name: "Blog posts" blog\_tag: "collections"
* type: subtitle name: "Case Studies"
* type: link name: "Ping Identity" url: "[https://www.postman.com/case\-studies/pingidentity/](https://www.postman.com/case-studies/pingidentity/)"
* type: section name: "Next steps"
* type: link name: "Using the Collection Runner" url: "/docs/collections/running\-collections/intro\-to\-collection\-runs/"

*** ** * ** ***

You can group your Postman requests and examples into collections to keep your workspace organized, to collaborate with teammates, to generate API documentation and API tests, and to automate request runs.

Select **Collections** in the sidebar for the list of collections in a workspace.
![](https://assets.postman.com/postman-docs/v10/collections-overview-v10.jpg) 

Contents
--------

* [Creating collections](#creating-collections)
* [Adding requests to a collection](#adding-requests-to-a-collection) 
  * [Moving an existing request to a different collection](#moving-an-existing-request-to-a-different-collection)
  * [Adding a new request to a collection](#adding-a-new-request-to-a-collection)
  * [Creating a new request inside a collection](#creating-a-new-request-inside-a-collection)
  * [Adding a request to an empty collection](#adding-a-request-to-an-empty-collection)
  * [Adding a request from your history to a collection](#adding-a-request-from-your-history-to-a-collection)

* [Managing collections](#managing-collections) 
  * [Basic actions](#basic-actions)
  * [Adding folders to a collection](#adding-folders-to-a-collection)
  * [Deleting a collection](#deleting-a-collection)
  * [Recovering a deleted collection](#recovering-a-deleted-collection)
  * [Sharing a collection](#sharing-a-collection)
  * [Watching a collection](#watching-a-collection)
  * [Forking a collection](#forking-a-collection)
  * [Adding comments to a collection](#adding-comments-to-a-collection)
  * [Reverting collection changes](#reverting-collection-changes)
  * [Viewing pull requests, forks, and collection details](#viewing-pull-requests-forks-and-collection-details)

* [Using collections in development workflows](#using-collections-in-development-workflows)
* [Using collection templates](#using-collection-templates)
* [About multi\-protocol request collections](#about-multi-protocol-request-collections)

Creating collections
--------------------

There are several ways to create a new collection:

* Select **Collections** in the sidebar, then select **\+** .

  ![Create new collection](https://assets.postman.com/postman-docs/v10/new-collection-v10.jpg) 
* Select **New** , then select **Collection** .

* With **Collections** open in the left sidebar, select **\+** .

* In an empty workspace, select **Create Collection** .

* You can also [create a collection from a template](#using-collection-templates).

To customize and configure a new collection, do the following:

1. Select the edit icon ![Edit icon](https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon) to give your new collection a name.

2. You can optionally specify a [description](/docs/publishing-your-api/authoring-your-documentation/) for your collection. Select the documentation icon ![Documentation icon](https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon), then select the edit icon ![Edit icon](https://assets.postman.com/postman-docs/documentation-edit-icon-v8-10.jpg#icon) to write your description. This description will appear in its documentation and in the workspace when anyone opens it.
   > 
   > You can also select **Overview** to specify and view the description for your collection.
3. Select **Authorization** to configure authorization details for the collection.

4. Select **Pre\-request Script** to define a [pre\-request script](/docs/writing-scripts/pre-request-scripts/) for your collection, which will run before requests are sent to the server.

5. Select **Tests** to define a [test script](/docs/writing-scripts/test-scripts/) for your collection, which will run after a response is received.

6. Select **Variables** to define values for [collection variables](/docs/sending-requests/variables/) to share across all requests in the collection.

![Edit collection details](https://assets.postman.com/postman-docs/v10/collection-details-v10.jpg)

Adding requests to a collection
-------------------------------

There are several ways to add existing and new requests to a collection.

### Moving an existing request to a different collection

To move an existing request to a different collection, do the following:

1. Select the request you want to move.
2. Drag the request into the desired collection.
> 
> Alternatively, open the request and select **Save As** , then choose the collection you want to copy it to.

To move more than one request to a different collection, do the following:

1. Press and hold **⌘** or **Ctrl** , then select the requests you want to move.
2. Drag the requests into the desired collection.

### Adding a new request to a collection

1. From a new request, select **Save** .
2. Choose the collection you want to move it to, and then select **Save** .
3. To create a new collection to save the request to, select **New Collection** .

### Creating a new request inside a collection

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name.

2. Select **Add Request** from the actions menu.

   ![Add request to folder](https://assets.postman.com/postman-docs/v10/collection-menu-v10.jpg) 

### Adding a request to an empty collection

Select the collection, then select **Add a request** .
![Add a request to an empty collection](https://assets.postman.com/postman-docs/empty-collection-add-request.jpg) 

### Adding a request from your history to a collection

1. Select **History** in the sidebar.

2. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the request you want to save.

3. Select **Save request** .

   ![Save request from history](https://assets.postman.com/postman-docs/v10/save-history-v10.jpg) 
4. Choose the collection to add the request to, then select **Save** .
> 
> Alternatively, select **\+** next to the request.

Managing collections
--------------------

### Basic actions

From the list of collections in your workspace, you can:

* Select a collection to open its overview in a tab.
* Open and close collection content by selecting the arrow next to the collection name.
* Hover over a collection name and select the star icon ★ to move that collection to the top of the list.
* Use the collection search bar to filter through your collections.
* Reorder the requests, folders, and examples inside a collection by dragging and dropping them.

### Adding folders to a collection

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name.
2. Select **Add folder** .

You can also add sub\-folders to create extra levels of nesting for the collection's requests and examples.

### Deleting a collection

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name.
2. Select **Delete** .

You can also select the collection and press **Delete** on your keyboard.
> 
> If a deleted collection is larger than 30 MB, you won't be able to [recover it](#recovering-a-deleted-collection). To avoid this, you can split the collection into smaller pieces before deleting it, or back up the collection first.

### Recovering a deleted collection

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection search bar.

2. Select **Open Trash** .
   > 
   > Alternatively, select ![Delete icon](https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon) **Trash** from the Postman footer.
3. In the Trash page, select the restore icon ![Restore icon](https://assets.postman.com/postman-docs/icon-restore-v9.jpg) next to the collection you want to recover.
> 
> Deleted collections that are larger than 30 MB can't be recovered.

Recovery options depend on your Postman plan:

* Free account: Recover collections for up to one day.
* Postman Basic: Recover collections for up to 30 days.
* Postman Professional and Enterprise: Recover collections for up to 90 days.
> 
> If a collection that you expected to be in the Trash isn't there, it may have been removed from a workspace rather than deleted. If the collection appears in another workspace, you can move it by selecting **Share** .

### Sharing a collection

To share a collection with other users, you can:

* Publish a [Run in Postman](/docs/publishing-your-api/run-in-postman/creating-run-button/) button.
* Invite others to collaborate by selecting the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name, then selecting **Share** . Learn more about [sharing elements in Postman](/docs/collaborating-in-postman/sharing/#sharing-postman-entities).
* Allow external users who aren't in your Postman team to view collections by selecting the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name, selecting **Share** , then turning on the toggle next to **Allow Guests with the link to join your team and view collection** . Learn more about [allowing external users to view collections](/docs/collaborating-in-postman/sharing/#allowing-external-users-to-view-collections).
* Move the collection to a shared workspace by selecting the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name, then selecting **Move** . Learn more about [moving Postman elements](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/#moving-elements-to-team-workspaces).
* \([Enterprise](https://www.postman.com/pricing/)\) Add the collection to your team's [Private API Network](/docs/collaborating-in-postman/adding-private-network/#adding-collections).

### Watching a collection

When you watch a collection, Postman notifies you when a workspace team member makes changes to the collection, including adding a new request, modifying the existing requests, adding or updating variables, editing pre\-request scripts or tests, and adding or deleting a folder. You can watch a collection that you own, as well as collections in any public workspace.

To watch a collection, do the following:

1. Select the watch icon ![Watch icon](https://assets.postman.com/postman-docs/eye.jpg#icon) to start watching the collection.

![Collection watching](https://assets.postman.com/postman-docs/v10/collection-watching-overview-v10.jpg)

To view notifications about what has changed in a collection you watch, do the following:

1. Select the notifications icon ![Notification icon](https://assets.postman.com/postman-docs/icon-notification-bell-v9.jpg#icon) in the Postman header to view the notification. Select **View changelog** to view the collection's changelog.

   ![Notification Collection Watching](https://assets.postman.com/postman-docs/collection-watch-notification-v9.19.jpg) 
2. You will also receive an email with the information regarding who made the change, what the change was, and when it was made. Select **View changelog** in the email to access the full changelog in Postman.
> 
> If you create a collection and change it from the same Postman account, you won't receive notifications for any changes you make to that collection.

### Forking a collection

You can fork collections in your own workspace to [develop collection versions](/docs/collaborating-in-postman/using-version-control/version-control-overview/).

1. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name.
2. Select **Fork** .
> 
> Alternatively, select the fork icon ![Fork icon](https://assets.postman.com/postman-docs/icon-fork.jpg#icon) from the collection overview.

### Adding comments to a collection

1. Select the comment icon ![Comments icon](https://assets.postman.com/postman-docs/icon-comments-v9.jpg#icon) from the right sidebar.
2. Write your comment, then select **Add Comment** .

### Reverting collection changes

To revert your collection to an earlier state, do the following:

1. Select the changelog icon ![Changelog icon](https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon) on the right.

2. Select a session to expand it.

3. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the change you'd like to restore your collection to, then select **Restore to this change** .

   ![Restore from changelog](https://assets.postman.com/postman-docs/changelog-restore-v9.16.jpg) 

Restoring a collection from the changelog reverts it to the point immediately after your selected change occurred.

### Viewing pull requests, forks, and collection details

From the right sidebar:

* To view pull requests for a collection, select the pull request icon ![Pull request icon](https://assets.postman.com/postman-docs/icon-pull-request.jpg#icon)
* To view forks created from a collection, select the fork icon ![Fork icon](https://assets.postman.com/postman-docs/icon-fork.jpg#icon)
* To view more information about the collection, including mock servers, monitors, and integrations, select the information icon ![Information icon](https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon)

Using collections in development workflows
------------------------------------------

Collections can power various parts of your API development, testing, and publishing workflows.

* Select **Run** to access the [Collection Runner](/docs/collections/running-collections/intro-to-collection-runs/), which allows you to run all requests in a collection and build testing workflows into your runs.
* Select the documentation icon ![Documentation icon](https://assets.postman.com/postman-docs/documentation-icon-v8-10.jpg#icon) to generate [API documentation](/docs/publishing-your-api/documenting-your-api/) from a collection.
* Attaching a [monitor](/docs/monitoring-your-api/intro-monitors/) to a collection lets you schedule collection runs. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name, and then select **Monitor collection** .
* You can use [mock servers](/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/) to return sample data during testing and development. Select the more actions icon ![More actions icon](https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon) next to the collection name, and then select **Mock collection** .
* Generate collections from API specifications using the [Postman API Builder](/docs/designing-and-developing-your-api/the-api-workflow/).

Using collection templates
--------------------------

Not sure where to start when creating a collection? Instead of starting from scratch, you can create a collection from a template. Several collection templates are available for getting started with integrations, API documentation, conditional workflows, or data visualization.

There are several ways to create a collection from a template:

* When you first create your account, you will be asked if you want to create a collection from a template.
* In an empty workspace, in the left sidebar, select **Use a Template** .
* Select **New** , then select **Use a template** .
* In an empty collection, on the **Overview** tab, select a template.

About multi\-protocol request collections
------------------------------------------

You can also save multi\-protocol requests, such as [WebSocket](/docs/sending-requests/websocket/websocket/) and [gRPC](/docs/sending-requests/grpc/grpc-client-overview/) requests, into collections.

Because multi\-protocol requests have different features than HTTP requests, when they're saved to a collection, it causes the collection to be in a “beta” state with certain limitations.

When in this state, a collection can only contain WebSocket or gRPC requests, and not HTTP requests. Some features related to collections also aren't supported.

