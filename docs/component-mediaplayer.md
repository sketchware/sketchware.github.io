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

The 'create' block creates a MediaPlayer with the selected soundtrack.

![create](assets/mediaplayer/create.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |
| Sound       | Sound file to load             | Yes      |

### start

The 'start' block plays the loaded MediaPlayer.

![start](assets/mediaplayer/start.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### pause

The 'pause' block pauses the playing MediaPlayer.

![pause](assets/mediaplayer/pause.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### seek to

The 'seek to' block changes the time position of the current plaing track in the mediaplayer.

![seek to](assets/mediaplayer/seek-to.png)

| Type        | Explanation                      | Required |
| ----------- | -------------------------------- | -------- |
| MediaPlayer | Targeted MediaPlayer Component   | Yes      |
| Number      | Time to seek to, in milliseconds | Yes      |

### get current duration

Get the current position of the MediaPlayer, in milliseconds.

![get current duration](assets/mediaplayer/get-current-duration.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### get song duration

The 'get song duration' gets the entire time length of the sound file, in milliseconds.

![get song duration](assets/mediaplayer/get-song-duration.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### is playing

The Check if the media player is currently playing.

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

