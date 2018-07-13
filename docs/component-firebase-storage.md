---
id: component-firebase-storage
title: Firebase Storage
sidebar_label: Firebase Storage
---

Firebase Storage component is used to save and download files from an online storage.
It is used to store all kinds of data like images and sound files.

## Example

Uploading an image file after using Camera component to take a picture.

![example](assets/component-firebase-storage/example.png)

## Other uses
- Store files picked using FilePicker
- Store app/game assets to make app size smaller

<br/>

--------------------

## Blocks

### upload file

The 'Upload file' block upload a local path given into the firebase server.

![upload file](assets/component-firebase-storage/upload-file.png)

| Type             | Explanation                         | Required |
| ---------------- | ----------------------------------- | -------- |
| Firebase Storage | Targeted Firebase Storage Component | Yes      |
| String           | Path to the file to be uploaded     | Yes      |
| String           | Name to save the file as            | Yes      |

### download file

The 'Download file' block downloads files with the given remote firebase directory path into a given local path.

![download file](assets/component-firebase-storage/download-file.png)

| Type             | Explanation                         | Required |
| ---------------- | ----------------------------------- | -------- |
| Firebase Storage | Targeted Firebase Storage Component | Yes      |
| String           | URL of the file                     | Yes      |
| String           | Path to save the file to            | Yes      |

### delete file

The 'Delete file' block deletes a file using the given remote Firebase directory path.

![delete file](assets/component-firebase-storage/delete-file.png)

| Type             | Explanation                                  | Required |
| ---------------- | -------------------------------------------- | -------- |
| Firebase Storage | Targeted Firebase Storage Component          | Yes      |
| String           | URL of the file in Firebase Storage          | Yes      |


## Events

### onFailure

The 'onFailure' event triggers when an error is encountered with uploading or downloading a file from the Firebase storage database.
**message (string)** - The error supplied from the service when the error occured

### onUploadSuccess

The 'onUploadSuccess' event triggers when the file/s were successfully uploaded into the Firebase storage database.
**downloadUrl (string/link)** - The path of the recently uploaded file.

### onUploadProgress

The 'onUploadProgress' event triggers when the file starts uploading or if there is a change in the upload progress.
**progressValue (integer)** - The current progress state of the uploading file.

### onDownloadProgress

The 'onDownloadProgress' event triggers when the file starts downloading or there os a change in the download progress.
**progressValue (integer)** - The current progress state of the downloading file.

### onDownloadSuccess

The 'onDownloadSuccess' event triggers when the file successfully downloaded from the Firebase storage database.
**totalByteCount (integer)** - The downloaded file size in bytes.

### onDeleteSuccess

The 'onDeleteSuccess' event triggers when the file is successfully deleted from the Firebase storage database.