---
id: component-intent
title: Intent
sidebar_label: Intent
---

An Intent is a messaging object you can use to request an action from another app component. You can use the Intent component to **start a new acitivity** or **pass data to another activity**.

## Example

Set of blocks to start another activity while passing the data of `someValue` with key `someKey`.

![example](assets/intent/example.png)

<br/>

--------------------

# Blocks

## setData

setData is used to point to the location of a data object (like a file for example), while putExtra adds simple data types (such as an SMS text string for example).

![set data](assets/intent/set-data.png)

| Type   | Explanation                                                                                                          | Required |
| ------ | -------------------------------------------------------------------------------------------------------------------- | -------- |
| Intent | Intent Component                                                                                                     | Yes      |
| String | Data to transfer to next activity. Read more [here](https://developer.android.com/guide/components/intents-filters). | No       |

## setScreen

setScreen is used to start another Activity.

![set screen](assets/intent/set-screen.png)

| Type     | Explanation             | Required |
| -------- | ----------------------- | -------- |
| Intent   | Intent Component        | Yes      |
| Activity | Activity to navigate to | Yes      |

## putExtra

putExtra is used to pass data to another Activity. After you pass the data, you retrieve the data using the `Activity getExtra key []` block.

![put extra](assets/intent/put-extra.png)

| Type   | Explanation                      | Required |
| ------ | -------------------------------- | -------- |
| Intent | Intent Component                 | Yes      |
| String | Key value used to retrieve later | Yes      |
| String | Value to pass                    | Yes      |

## setFlags

setFlags changes the behavior of an activity.

1. `SINGLE_TOP` — Organizes the views in a way that if the view you’re about to transition to was already called before, it would bring that view to the top rather than putting another copy on the top.

2. `CLEAR_TOP` - Clears all the previous views.

![set flags](assets/intent/set-flags.png)

| Type   | Explanation      | Required |
| ------ | ---------------- | -------- |
| Intent | Intent Component | Yes      |
| Flag   | Flag to set      | Yes      |

## startActivity

startActivity starts a new activity.

![start activity](assets/intent/start-activity.png)

| Type   | Explanation      | Required |
| ------ | ---------------- | -------- |
| Intent | Intent Component | Yes      |