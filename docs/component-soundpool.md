---
id: component-soundpool
title: SoundPool
sidebar_label: SoundPool
---

Unlike SoundPool, SoundPool is used to play short sounds, such as sound effects.

## Example

Loading a single sound effect and playing it.

![example](assets/soundpool/example.png)

<br/>

--------------------

## Blocks

### create max stream count

Create a SoundPool instance with maximum number of sounds it can hold.

![create](assets/soundpool/create.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| SoundPool   | SoundPool Component   | Yes      |
| Sound       | Sound file to load    | Yes      |

### SoundID load

Load a sound file and set a number variable.

![load](assets/soundpool/load.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| SoundPool   | SoundPool Component   | Yes      |
| Sound       | Sound file to load    | Yes      |

### play Sound ID

Play the sound file with the matching Sound ID.

![play](assets/soundpool/play.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| SoundPool   | SoundPool Component   | Yes      |
| Sound       | Sound file to load    | Yes      |

### stop stream ID

Stop the sound file with the matching Sound ID.

![stop](assets/soundpool/stop.png)

| Type        | Explanation           | Required |
| ----------- | --------------------- | -------- |
| SoundPool   | SoundPool Component   | Yes      |
| Sound       | Sound file to load    | Yes      |
