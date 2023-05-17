*** ** * ** ***

title: "Updating Live Collections"
updated: 2023\-03\-15
----------------------------------------------------------

Whenever Live Collections observes a new API event in the service that was instrumented, it will trigger an update workflow. Updates can apply to existing requests or result in new requests being added to the collection. Any updated params or headers won't be enabled by default. You can choose to either automatically update the collection or to manually review updates before making them.

Contents
--------

* [Automatic updates to a Live Collection](#automatic-updates-to-a-live-collection)
* [Manual updates to a Live Collection](#manual-updates-to-a-live-collection)
* [Viewing changes in a Live Collection](#viewing-changes-in-a-live-collection)

Automatic updates to a Live Collection
--------------------------------------

After you first create a Live Collection, when the first request is detected, you'll see a notification next to the collection. By default, the request will automatically be added to the collection. To automatically update a Live Collection as it detects updates, select **Automatically update collection** , and then select **Save** .
![Live Collections update request](https://assets.postman.com/postman-docs/v10/live-collections-update-request-first-time-popup.jpg) 

Selecting automatic updates will result in requests getting automatically created or updated any time the API events are observed in the service without any notifications being sent.

To see a log of updates made automatically, you can use the collection change log. See [Viewing changes in a Live Collection](#viewing-changes-in-a-live-collection) for more

Manual updates to a Live Collection
-----------------------------------

You can also choose to review changes and apply them manually, instead of using automatic updates. Every time a new update comes in, you will be notified by the Live Collections icon ![Live Collections icon](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) next to the collection name turning solid orange. You can then choose to manually update the Live Collection.

To manually update a Live Collection, do the following:

1. Hover over the Live Collections icon ![Live Collections icon](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) and select **Review changes** . You can also go to the Live Collections configurations settings in the right sidebar.

   ![Live Collections update request](https://assets.postman.com/postman-docs/v10/live-collections-review-changes-popup.jpg) 
2. Review the incoming changes. These can be an addition of a new request or changes to an existing request. Postman also creates new examples based on the response received from the API events on the application.

   ![Live Collections review changes](https://assets.postman.com/postman-docs/v10/live-collections-review-changes.jpg) 
3. If you made changes in your Live Collection and the same component is changed by incoming changes from the service, a conflict will occur. These conflicts are shown when you review incoming changes. You can select if you want to keep user updates or service updates for each part of the conflicted requests.

   ![Live Collections conflict](https://assets.postman.com/postman-docs/v10/live-collection-conflict.jpg) 
4. Select **Update Collection** to accept the changes and update the collection, or select **Reject all** to ignore them.

Viewing changes in a Live Collection
------------------------------------

To see changes made to a Live Collection, use the collection changelog. The changelog for the collection shows the updates that have been made to a Live Collection.

To see the changelog, open the collection and select the changelog icon ![Changelog icon](https://assets.postman.com/postman-docs/icon-changelog-v9.jpg#icon) in the right sidebar. You can also hover over the Live Collections icon ![Live collections icon](https://assets.postman.com/postman-docs/v10/icon-live-collections.jpg#icon) next to the collection name, then select **View recent changes** .
![Changelog view](https://assets.postman.com/postman-docs/v10/changelog-view.jpg) 

For more information, see [Viewing the collection changelog](/docs/collaborating-in-postman/using-workspaces/changelog-and-restoring-collections/#viewing-the-collection-changelog).

