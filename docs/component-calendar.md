---
id: component-calendar
title: Calendar
sidebar_label: Calendar
---

Calendar component is used to handle date and time. 

## Example

Using setData block to save a value of `someValue` with the key `someKey`.

![example](assets/calendar/example.png)

<br/>

--------------------

# Blocks

## getNow

getNow is used to initialize and retrieve the current time value in milliseconds.

![get now](assets/calendar/get-now.png)

| Type     | Explanation        | Required |
| -------- | ------------------ | -------- |
| Calendar | Calendar Component | Yes      |


## getTime

getTime is used to retrieve the time retrieved from the `getNow` block.

![get time](assets/calendar/get-time.png)

| Type     | Explanation        | Required |
| -------- | ------------------ | -------- |
| Calendar | Calendar Component | Yes      |


## setTime

setTime is used to set the Calendar component to a specific time value (ms).

![set time](assets/calendar/set-time.png)

| Type     | Explanation          | Required |
| -------- | -------------------- | -------- |
| Calendar | Calendar Component   | Yes      |
| Number   | Time in milliseconds | Yes      |





## addValue

addValue is used to add an amount of time to the Calendar component.

![add value](assets/calendar/add-value.png)

| Type     | Explanation                                                        | Required |
| -------- | ------------------------------------------------------------------ | -------- |
| Calendar | Calendar Component                                                 | Yes      |
| Time     | Type of time from: YEAR, MONTH, DAY_OF_MONTH, HOUR, MINUTE, SECOND | Yes      |
| Number   | Value to add                                                       | No       |


## setValue

setValue is used to set a specific time value on a Calendar component.

![set value](assets/calendar/set-value.png)

| Type     | Explanation                                                        | Required |
| -------- | ------------------------------------------------------------------ | -------- |
| Calendar | Calendar Component                                                 | Yes      |
| Time     | Type of time from: YEAR, MONTH, DAY_OF_MONTH, HOUR, MINUTE, SECOND | Yes      |
| Number   | Value to set                                                       | No       |


## Format

Format is used to format the time (ms) into a prettified format. Read more [here](https://developer.android.com/reference/java/util/Calendar).

![format](assets/calendar/format.png)

| Type     | Explanation               | Required |
| -------- | ------------------------- | -------- |
| Calendar | Calendar Component        | Yes      |
| String   | Format to set the time to | No       |



## difference

difference is used to find the difference between two Calendar components.

![difference](assets/calendar/difference.png)

| Type     | Explanation               | Required |
| -------- | ------------------------- | -------- |
| Calendar | First Calendar Component  | Yes      |
| Calendar | Second Calendar Component | Yes      |

