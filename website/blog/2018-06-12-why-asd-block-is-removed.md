---
title: Why Add Source Directly Block was removed.
author: Sung Woo Park
authorFBID: 100000049243816
---

Hello, many people have questioned why Add Source Directly Block was removed in the newest update, Sketchware version 3.0.0.

Sketchware currently has a plan of implementing Android Archive Package (AAR) in the future updates, which will make creating your own block possible. This will not only let you create new blocks using our interface, but also allow you to use any Java libraries out there. For example, you would be able to create blocks that implements Physics Engine Library. It could open so many new doors for advanced users as well as the new users, but there is one problem.

Without removing add source directly block, we find this milestone to be very difficult to achieve. We need to ensure stability in the architecture of Sketchware for this functionality to be implemented, but add source directly block makes this impossible. So we are asking you guys a huge favor to remain patient until we bring AAR into Sketchware, and really help us bring back the beauty of block programming back to Sketchware.

## Sketchware was designed for block programming.

Add Source Directly was first introduced as a feature, because code injection using String block was really popular in 2017. This was our mistake, and we want to apologize for making such a rash decision of adding the block.

The founders of Sketchware saw a problem in the complicated methods of app development, and hoped that WYSIWYG editor and Block programming could be the solution to that problem. In the early stages of Sketchware, it was really mindblowing to see what the users came up with, using the blocks.

However, looking at the projects in the shared projects category today, even the founders have no idea how the project works, and felt like the beauty of block programming was lost. More than 90% of the shared projects include an add source directly block that the viewers have no idea of how it works.

For those who are active in Slack will know that the users who ask questions often run into a compilation problem that they do not know how to solve because of merely copying and pasting.

Ultimately, **if you are dependent on Add Source Directly block, you are misusing Sketchware.**

Here are some questions and feedback we received, and here are our replies.

Q: `Why did you remove ASD? It's more comfortable and faster to do it in the block-style way, because it has a highest level abstraction than typically coding in Java.`

A: Yes, that’s what AAR is exactly going to do. Are we taking away the ability to put your own Java code in Sketchware? At the moment, yes, but in the big picture? We are not. AAR will make it possible to make programming in Sketchware even more abstract, because you will be able create your own blocks using actual Java code rather than using Java code itself.

Q: `I like programming in Sketchware because it's really annoying to type all java syntax as usually on PC.`

A: That’s what we’re attacking at the moment, because ASD block is not the right way to do this! As you’ve noticed, ASD block doesn’t even provide syntax highlighting. Most importantly, it doesn't ensure compilation and safety on runtime.

Q: `We could come up with removing ASD in case there will be more ways to make an apps more customizable.`

A: Does ASD block let you add new permissions and external libraries outside of Sketchware, such as AdMob, Glide, FlexBoxLayout, and more? Nope. Does it let you add new permissions in the manifest? Nope. Is it really easy to create widgets with ASD blocks and aimlessly add views, thus causing infinitely more time debugging and programming? Yes. From these points, is ASD block really the right interface to make Sketchware applications more customizable? Nope.

Q: `Don't remove ASD and respect and appreciate your users.`

A: Are we disrespecting and not appreciating our users? Nonsense. Sketchware is useless without growing users, and we appreciate them. Why are we thinking about replacing ASD blocks in the first place if ASD block is all mighty and can create all kinds of applications? Would we really take out a feature that EVERYONE is using? No. The truth is, everyone is not using ASD blocks, and it’s one of the primary reasons why users are leaving Sketchware. You, first need to respect and appreciate other users before asking us to do something that we’re already doing.

Q: `You are supposed to add manifest editing and adding libraries and add java files editing possibilities too. but you are taking back your some good part too rather than giving some extra.`

Thank you for supporting my point. ASD block won’t cut it.

What we’re going to provide down the road is AAR, which will solve the problems above and create a symbiotic environment users where advanced users can create, use, and provide a WYSIWYG-styled widget and block coding interface for the mass. Everybody benefits. Hope this explains why the removal was necessary. Please support us in our decision and future goals.

Best,<br/>
Sung
