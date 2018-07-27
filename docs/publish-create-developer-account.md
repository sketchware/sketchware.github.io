---
id: publish-creating-service-account
title: Creating a Service Account
sidebar_label: Creating a Service Account
---

This guide will assist you on creating a service account for Google Play Developer Console. If you do not have a Google Play Developer Account, please follow this [guide](publish-getting-started.md).

## Navigate to Google Play Console

First, navigate to [Google Play Console](https://play.google.com/apps/publish). Then, click on "Settings" located on the left panel.

![step1](assets/publish-creating-service-account/step-1.png)

Under Developer Account -> API Access, click on `CREATE NEW PROJECT` button. This will create a new project, and link the project to your Developer Account.

![step2](assets/publish-creating-service-account/step-2.png)

When the project is linked, click on `CREATE SERVICE ACCOUNT` button located on the bottom of the page.

![step3](assets/publish-creating-service-account/step-3.png)

You will be prompted with the following screen:

![step4](assets/publish-creating-service-account/step-4.png)

Navigate to the given `Google API Console` link. Then, click on `+ CREATE SERVICE ACCOUNT` button located next to "Service accounts."

![step5](assets/publish-creating-service-account/step-5.png)

Fill out the necessary information like below. Make sure that `Furnish a new private key` is checked.

After you click on `Save`, a json file including the service account credential will be saved. **Make sure to store this key securely.**

![step6](assets/publish-creating-service-account/step-6.png)

When you're done, go back to the Google Play Console page, and click on `DONE`.

![step4](assets/publish-creating-service-account/step-4.png)

You will see that a new service account has been added. Click on `GRANT ACCESS`

![step7](assets/publish-creating-service-account/step-7.png)

Grant access to the service account by filling the information like below. Don't change other options. When you're done, click on `ADD USER`.

![step8](assets/publish-creating-service-account/step-8.png)

## Securely Store JSON File

You're all set! Securely store the json file, since you will need it for linking your Play Store Developer account in Sketchware.
