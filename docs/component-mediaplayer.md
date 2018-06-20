---
id: component-mediaplayer
title: MediaPlayer
sidebar_label: MediaPlayer
---

MediaPlayer is used to load and play long sound files.

## Example

Creating a MediaPlayer and playing a sound file on a loop. 

![example](assets/mediaplayer/example.png)

<br/>

--------------------

## Blocks

### create

Create a MediaPlayer with a certain sound file.

![create](assets/mediaplayer/create.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |
| Sound       | Sound file to load    | Yes      |

### start

Play the loaded MediaPlayer.

![start](assets/mediaplayer/start.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### pause

Pause the playing MediaPlayer.

![pause](assets/mediaplayer/pause.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### seek to

Change the position of the MediaPlayer.

![seek to](assets/mediaplayer/seek-to.png)

| Type        | Explanation                      | Required |
| ----------- | -------------------------------- | -------- |
| MediaPlayer | MediaPlayer Component            | Yes      |
| Number      | Time to seek to, in milliseconds | Yes      |

### get current duration

Get the current position of the MediaPlayer, in milliseconds.

![get current duration](assets/mediaplayer/get-current-duration.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### get song duration

Get the entire length of the sound file, in milliseconds.

![get song duration](assets/mediaplayer/get-song-duration.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### is playing

Check if the media player is currently playing.

![is playing](assets/mediaplayer/is-playing.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### set looping

Loop the MediaPlayer if true.

![set looping](assets/mediaplayer/set-looping.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |
| Boolean     | true or false value   | Yes      |


### is looping

Check if the MediaPlayer is currently in a looping state.

![is looping](assets/mediaplayer/is-looping.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |


### reset

Reset the current position to 0.

![reset](assets/mediaplayer/reset.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### release

Release the connected sound file to the MediaPlayer. If released, you have to recreate the MediaPlayer.

![release](assets/mediaplayer/release.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

