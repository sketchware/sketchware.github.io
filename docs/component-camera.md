---
id: component-camera
title: Camera
sidebar_label: Camera
---

The Camera component is used to **take pictures**.

## Example

Taking a picture with the camera.

![example](assets/camera/example.png)

<br/>

--------------------

## Blocks

### take picture

Take a picture with the camera.

![take picture](assets/camera/take-picture.png)

| Type   | Explanation              | Required |
| ------ | -------------------------| -------- |
| Camera | Targeted camera component| Yes      |

## Events

### onPictureTaken

The `onPictureTaken` event is triggered when a picture is taken by the user.

**filePath** - The path where the picture is stored after the photo is being taken.

### onPictureTakenCancel

The `onPictureTakenCancel` event is triggered when the user cancels when taking a picture.
