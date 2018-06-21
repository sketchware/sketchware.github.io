---
id: component-dialog
title: Dialog
sidebar_label: Dialog
---

Dialog is a popup that is often used to confirm user's action.

## Example

Create and show a dialog with the `title` and `message` with OK, Cancel, and a optional neutral button.

![example](assets/dialog/example.png)

<br/>

--------------------

## Blocks

### setTitle

Set the title of the selected dialog. 

![set title](assets/dialog/set-title.png)

| Type   | Explanation              | Required |
| ------ | -------------------------| -------- |
| Dialog | Targeted dialog component| Yes      |
| String | Title of the dialog      | Yes      |

### setMessage

Set the message of the dialog. 

![set message](assets/dialog/set-message.png)

| Type   | Explanation              | Required |
| ------ | -------------------------| -------- |
| Dialog | Targeted dialog component| Yes      |
| String | Message of the dialog    | Yes      |


### OK Button Clicked

Adds an OK button, and determine the action to perform when the button is clicked.
**Action of the button will only be excuted within the block**
![ok button](assets/dialog/ok-button.png)

| Type   | Explanation              | Required |
| ------ | -------------------------| -------- |
| Dialog | Targeted dialog component| Yes      |
| String | Text of the OK Button    | Yes      |

### Cancel Button Clicked

Adds a Cancel button, and determine the action to perform when the button is clicked.
**Action of the button will only be excuted within the block**

![cancel button](assets/dialog/cancel-button.png)

| Type   | Explanation               | Required |
| ------ | ------------------------- | -------- |
| Dialog | Targeted dialog component | Yes      |
| String | Text of the Cancel Button | Yes      |

### Neutral Button Clicked

Adds a Neutral button, and determine the action to perform when the button is cilcked.
**Action of the button will only be excuted within the block**

![neutral button](assets/dialog/neutral-button.png)

| Type   | Explanation                | Required |
| ------ | -------------------------- | -------- |
| Dialog | Targeted dialog component  | Yes      |
| String | Text of the Neutral Button | Yes      |

### Show

Show the created dialog. **Note that the dialog will not show without this block.**

![show](assets/dialog/show.png)

| Type   | Explanation              | Required |
| ------ | ------------------------ | -------- |
| Dialog | Targeted dialog component| Yes      |

