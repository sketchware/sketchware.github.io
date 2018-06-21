---
id: component-filepicker
title: FilePicker
sidebar_label: FilePicker
---

FilePicker component is used to **pick files from the device storage, MicroSD card and from the cloud (Google drive, Dropbox and etc)**. The FilePicker component can also filter on what type of files the user can pick using the MIME filter.

## Example

Picking files from the device.

![example](assets/filepicker/example.png)

<br/>

--------------------

## Blocks

### pick files

This block triggers the file picker.

![pick files](assets/filepicker/pick-files.png)

| Type       | Explanation                     | Required |
| ---------- | ------------------------------- | -------- |
| FilePicker | Targeted File Picker component  | Yes      |

## Events

### onFilesPicked

This event triggers when the user has successfully picked a file from the file picker
**filePath (List string)** - The file path(s) where the user has selected

### onFilesPickedCancel

This event triggers when the user did not pick a file successfully.