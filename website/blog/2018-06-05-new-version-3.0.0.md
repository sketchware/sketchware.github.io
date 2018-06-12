---
title: Version 3.0.0 Update Log
author: Sung Woo Park
authorFBID: 100000049243816
---

## New Features

1.  `Undo and Redo`

This was probably a big feature that everyone was waiting for. Although Sketchware is really easy to use with the drag and dropping functionality, one wrong drag and drop could really hurt you if you forgot to save.

Also, an accidental deletion of widgets and blocks often happened.

So we introduce to you, redo and undo functionality for both widgets and blocks.

![undo redo](/img/blogs/2018-06-05/undo-redo.png)

2.  `Save Frequently used Widgets and Blocks`

When we were creating more complicated projects, we often found the need to re-create the same screens again. For example, a project that requires Firebase Auth would need a login page. Because these are often follow the same styling rules, we wanted to save the hassle of re-creating similar widgets over and over again.

Now, you will be able to save a custom widget that you can recycle all across the projects. For example, if I created a like button that I want to re-use, I would click on the save button on the property tab to save the widget.

| Saving Widget                                         | Saved Widget                                            |
| :---------------------------------------------------: | :-----------------------------------------------------: |
| ![save widget](/img/blogs/2018-06-05/save-widget.png) | ![saved widget](/img/blogs/2018-06-05/saved-widget.png) |

Blocks work similarly:

| Saving Blocks                                       | Saved Blocks                                          |
| :-------------------------------------------------: | :---------------------------------------------------: |
| ![save block](/img/blogs/2018-06-05/save-block.png) | ![saved block](/img/blogs/2018-06-05/saved-block.png) |

3.  `Property Tab`

We've completely renovated the property tab, such that you will save yourself a click by editing on the spot. For new users, we thought learning new property was a high learning curve, so we made it more user-friendly. From this tab, you will be able to change properties and access the associated events as well.

![property](/img/blogs/2018-06-05/property.png)

4.  `Separation of Event and Component tabs`

Whenever working on large projects, we found the user interface to be very clustered and complex. In version 2.x, the events and the components were placed in the same tab even though they hade very different functionalities.

In this version, we decided to separate these two topics separately to make development experience less clustered.

In addition, we've categorized events into 5 different types of events: Activity, View, Component, Drawer, and MoreBlock.

![events](/img/blogs/2018-06-05/events.png)

5.  `My Collection`

Just like widgets and blocks, you probably find yourself reusing the same assets over and over--such as images, sounds, fonts, etc. We wanted to apply the same principle to the assets. Now, you will have a "Collection" box where you can save frequently used assets, as well as widgets and blocks. These are shared assets that you can access from all the projects.

![collection](/img/blogs/2018-06-05/my-collection.png)

6.  `Right Drawer`

We tried our best to remove unnecessary context menus and popups to make user experience as smooth as possible. You will notice small animations here and there. By using a right drawer, it will give us more options to put new functionalities in there.

![drawer](/img/blogs/2018-06-05/right-drawer.png)

7.  `Ability to Edit Resource Files`

You can now edit existing resource files, such as images, fonts, and sounds to different files without having to erase them and reimport them. This feature will be very useful if you have a boilerplate for other projects.

8.  `Bulk Image Import`

Now, you can import images in a bulk without having to import one by one. The imported images will follow a naming principle you assign them. For example, if you import two images and name the bulk `abcd`, the images will be named `abcd_1` and `abcd_2`.

9.  `Language Settings / Sharing Platform`

We have users from all across the world, so we wanted to create a space where users can share their translated strings.xml file.

Here, users will be able to share, download, and apply different language files onto Sketchware. If you speak more than one language, please help Sketchware become localized in different countries!

![language](/img/blogs/2018-06-05/language.png)

10.  `New Components`

Camera, Firebase Storage, and File components will be added.

11. `... And more!`

There are more to cover, and not enough space, so here is a few screenshot from the new version. Hope you enjoy them!

| ![project-list](/img/blogs/2018-06-05/project-list.png) | ![new project](/img/blogs/2018-06-05/bulk-event.png)            |
| :-----------------------------------------------------: | :-------------------------------------------------------------: |
| ![components](/img/blogs/2018-06-05/components.png)     | ![component events](/img/blogs/2018-06-05/component-events.png) |

### Deprecated - Add Source Directly Block

Add Source Directly won't be available anymore starting this update. Existing projects with add source directly blocks will still compile, but you won't be able to add new add source directly blocks. You guys may find this very saddening, but please try to see this issue from our perspective.

1.  `Sketchware was designed for block programming.`

The founders of Sketchware saw a problem in the complicated methods of app development, and hoped that WYSIWYG editor and Block programming could be the solution to that problem. In the early stages of Sketchware, it was really mindblowing to see what the users came up with, using the blocks.

However, looking at the projects in the shared projects category today, even the founders have no idea how the project works, and felt like the beauty of block programming was lost. More than 90% of the shared projects include an add source directly block that the viewers have no idea of how it works.

For those who are active in Slack will know that the users who ask questions often run into a compilation problem that they do not know how to solve because of merely copying and pasting.

2.  `We want to make Sketchware more scalable.`

Sketchware currently has a plan of implementing Android Archive Package (AAR) in the future updates, which will make creating your own block possible. This will not only let you create new blocks using our interface, but also allow you to use any Java libraries out there. For example, you would be able to create blocks that implements Physics Engine Library. It could open so many new doors for advanced users as well as the new users, but there is one problem.

Without removing add source directly block, we find this milestone to be very difficult to achieve. We need to ensure stability in the architecture of Sketchware for this functionality to be implemented, but add source directly block makes this impossible. So we are asking you guys a huge favor to remain patient until we bring AAR into Sketchware, and really help us bring back the beauty of block programming back to Sketchware.

### Tutorial Tab Under Construction

Tutorials will be temporarily closed for maintenance. We found the tutorials to be very tedious, because the user doesn't have the ability to fast forward, preview, or review. We are hoping to make the tutorials really "step-by-step" this time, allowing users to learn visually from observings the actions rather than performing each actions by themselves.

That's it! We are hoping to release the update really soon. Thank you for reading this long update log. :-)
