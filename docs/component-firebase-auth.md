---
id: component-firebase-auth
title: Firebase Auth
sidebar_label: Firebase Auth
---

Firebase Auth component is used to authenticate users. It also ensures that users are only accessible to certain data.

## Example

Creating a new user with given username and password.

![example](assets/component-firebase-auth/example.png)

<br/>

--------------------

## Blocks

### create user with email and password

This block creates a new user on Firebase using the E-mail and password given by the user

![create user](assets/component-firebase-auth/create-user.png)

| Type          | Explanation                      | Required |
| ------------- | -------------------------------- | -------- |
| Firebase Auth | Targeted Firebase Auth component | Yes      |
| String        | User E-mail                      | Yes      |
| String        | User password                    | Yes      |

### sign in user with email and password

This block signs the user in the app by checking against the database

![sign in user](assets/component-firebase-auth/sign-in.png)

| Type          | Explanation                      | Required |
| ------------- | -------------------------------- | -------- |
| Firebase Auth | Targeted Firebase Auth component | Yes      |
| String        | User E-mail                      | Yes      |
| String        | User password                    | Yes      |

### sign in anonymously

This block signs in the user without any login infomation or registration needed.

![sign in anonymously](assets/component-firebase-auth/sign-in-anonymously.png)

| Type          | Explanation                      | Required |
| ------------- | -------------------------------- | -------- |
| Firebase Auth | Targeted Firebase Auth component | Yes      |

### is logged in

The boolean will return a True if the user has been authenticated by Firebase, otherwise it will return a False

![is logged in](assets/component-firebase-auth/is-logged-in.png)

### get email

Retrieves the email of the current user.

![get email](assets/component-firebase-auth/get-email.png)

### get Uid

Retrieves the unique identification (Uid) of the current user.

![get uid](assets/component-firebase-auth/get-uid.png)

### send password reset email to

This block sends a password reset email to the given email.

![create user](assets/component-firebase-auth/send-password-reset.png)

| Type          | Explanation                      | Required |
| ------------- | -------------------------------- | -------- |
| Firebase Auth | Targeted Firebase Auth component | Yes      |
| String        | Email address                    | Yes      |

### sign out

This block logs the user out from the app and deletes its infomation from the app data

![sign out](assets/component-firebase-auth/sign-out.png)

## Events

### onCreateUserComplete

This event triggers when Firebase auth finishes attampting to create a new user in the database.
**Success (Boolean)** - Tells whether the user creation was successful. True if the user was created successfully, otherwise False
**errorMessage (String)** - The error message can be retrived here if the user creation was not successful.

### onSignInUserComplete

This event triggers when Firebase auth finishes attampting to log in an user using the database.
**Success (Boolean)** - Tells whether the user log-in was successful. True if the user was created successfully, otherwise False
**errorMessage (String)** - The error message can be retrived here if the user log-in was not successful.
### onResetPasswordEmailSent

This event triggers when a password reset E-Mail has been sent to the selected E-mail address.