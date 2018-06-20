---
id: component-firebase-auth
title: Firebase Auth
sidebar_label: Firebase Auth
---

Firebase Auth component is used to authenticate users.

## Example

Creating a new user with given username and password.

![example](assets/component-firebase-auth/example.png)

<br/>

--------------------

## Blocks

### create user with email and password

Create a new user with given email and password.

![create user](assets/component-firebase-auth/create-user.png)

| Type          | Explanation             | Required |
| ------------- | ----------------------- | -------- |
| Firebase Auth | Firebase Auth Component | Yes      |
| String        | Email                   | Yes      |
| String        | Password                | Yes      |

### sign in user with email and password

Sign in a user with given email and password.

![sign in user](assets/component-firebase-auth/sign-in.png)

| Type          | Explanation             | Required |
| ------------- | ----------------------- | -------- |
| Firebase Auth | Firebase Auth Component | Yes      |
| String        | Email                   | Yes      |
| String        | Password                | Yes      |

### sign in anonymously

Sign in a user with an anonymous credential.

![sign in anonymously](assets/component-firebase-auth/sign-in-anonymously.png)

| Type          | Explanation             | Required |
| ------------- | ----------------------- | -------- |
| Firebase Auth | Firebase Auth Component | Yes      |

### is logged in

True if logged in.

![is logged in](assets/component-firebase-auth/is-logged-in.png)

### get email

Retrieve the email of the current user.

![get email](assets/component-firebase-auth/get-email.png)

### get Uid

Retrieve the unique identification of the current user.

![get uid](assets/component-firebase-auth/get-uid.png)

### send password reset email to

Send a password reset email to the given email.

![create user](assets/component-firebase-auth/send-password-reset.png)

| Type          | Explanation             | Required |
| ------------- | ----------------------- | -------- |
| Firebase Auth | Firebase Auth Component | Yes      |
| String        | Email address           | Yes      |

### sign out

Sign out the logged in user.

![sign out](assets/component-firebase-auth/sign-out.png)

## Events

### onCreateUserComplete

Triggered after create user block is used.

### onSignInUserComplete

Triggered after sign in user block is used.

### onResetPasswordEmailSent

Triggered after reset password block is used.