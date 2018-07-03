---
id: component-firebase-database
title: Firebase DB
sidebar_label: Firebase DB
---

Firebase DB is an online, real-time database used to store and read data. 

## Example

Creating and saving a post information on Firebase Database.

![example](assets/component-firebase-database/example.png)

<br/>

--------------------

## Blocks

### add key value

The 'add key value' block adds data into the Firebase database

![add key value](assets/component-firebase-database/add-key-value.png)

| Type              | Explanation                             | Required |
| ----------------- | --------------------------------------- | -------- |
| Firebase Database | Targeted Firebase Database Component    | Yes      |
| String            | Key of the value you are trying to save | Yes      |
| Map               | Map of values                           | Yes      |

### push value

The 'push value' block pushes data to Firebase Database with a generated Unique Identification Key (UID).

![push value](assets/component-firebase-database/push-value.png)

| Type              | Explanation                          | Required |
| ----------------- | ------------------------------------ | -------- |
| Firebase Database | Targeted Firebase Database Component | Yes      |
| Map variable      | Map containing values                | Yes      |

### push getKey

The 'push getKey' block generates a unique random key.

![get key](assets/component-firebase-database/push-get-key.png)

| Type              | Explanation                          | Required |
| ----------------- | ------------------------------------ | -------- |
| Firebase Database | Targeted Firebase Database Component | Yes      |

### delete key

The 'delete key' block deletes the data from the Databse with the given key.

![delete key](assets/component-firebase-database/delete-key.png)

| Type              | Explanation                               | Required |
| ----------------- | ----------------------------------------- | -------- |
| Firebase Database | Firebase Database Component               | Yes      |
| String            | Key of the value you are trying to delete | Yes      |

### get children to --- then

The 'get children to ---then' block retrieves the values from a Firebase database and transfers it to a List Map, then performs additional action if required.

![get children to then](assets/component-firebase-database/get-children-then.png)

| Type              | Explanation                          | Required |
| ----------------- | ------------------------------------ | -------- |
| Firebase Database | Targeted Firebase Database Component | Yes      |
| List Map          | Targeted List Map variable           | Yes      |

### start listening

The 'start listening' block starts listening to changes in the Firebase database. The component starts listening by default. Only used listening is turned off manually.

![start listening](assets/component-firebase-database/start-listening.png)

| Type              | Explanation                          | Required |
| ----------------- | ------------------------------------ | -------- |
| Firebase Database | Targeted Firebase Database Component | Yes      |

### stop listening

The 'stop listening' block stops listening to the changes in the database.

![stop listening](assets/component-firebase-database/stop-listening.png)

| Type              | Explanation                          | Required |
| ----------------- | ------------------------------------ | -------- |
| Firebase Database | Targeted Firebase Database Component | Yes      |

## Events

### onChildAdded

The 'onChildAdded' event is triggered when a new child value is added to the database.
**childKey (string)** - The key of the added child.
**Map: childValue** - A map containing the details about the added child.

### onChildChanged

The 'onChildChanged' event is triggered when any value in the children within the list has been changed.
**childKey (string)** - The key of the changed child.
**Map: childValue** - A map containing the details about the modified child.

### onChildRemoved

The 'onChildRemoved' event is triggered when a child is removed from reference.
**childKey (string)** - The key of the removed child.
**Map: childValue** - A map containing the details about the removed child.

### onCancelled

The 'onCancelled' event is triggered when any read or write action is cancelled.
**errorCode (number)** - The error code of the given error.
**errorMessage (string)** - A string containing the message of the error.
