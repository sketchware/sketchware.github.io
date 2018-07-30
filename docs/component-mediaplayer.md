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

| Type        | Explanation                     | Required |
| ----------- | ------------------------------- | -------- |
| MediaPlayer | Targeted MediaPlayer Component  | Yes      |
| Number      | Time to seek to in milliseconds | Yes      |

### get current duration

The 'get current duration' block gets the current time position of the MediaPlayer queue in milliseconds.

![get current duration](assets/mediaplayer/get-current-duration.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### get song duration

The 'get song duration' block gets the entire time length of the sound file in milliseconds.

![get song duration](assets/mediaplayer/get-song-duration.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### is playing

The 'is playing' block checks if the specified media player is currently playing.

![is playing](assets/mediaplayer/is-playing.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

### set looping

The 'set looping' block decides whether the mediaplayer should loop after the music track queue is finished. The mediaplayer will loop if this option is set to true either by a variable or toggle manually.

![set looping](assets/mediaplayer/set-looping.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |
| Boolean     | true or false value   | Yes      |


### is looping

The 'is looping' block checks if the MediaPlayer is currently in a looping state. it will return true if the mediaplayer is currently looping at that state.

![is looping](assets/mediaplayer/is-looping.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |


### reset

The 'reset' block resets the current position of the mediaplayer to 0 or you could say, the beginning of the queue.

![reset](assets/mediaplayer/reset.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| MediaPlayer | MediaPlayer Component | Yes      |

### release

The 'Release' block releases the connected sound file to the MediaPlayer like deleting the queue paths of the sound files. If the mediaplayer has been released, you have to recreate the MediaPlayer or else errors will occur while using most of the mediaplayer blocks.

![release](assets/mediaplayer/release.png)

| Type        | Explanation                    | Required |
| ----------- | ------------------------------ | -------- |
| MediaPlayer | Targeted MediaPlayer Component | Yes      |

