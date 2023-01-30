
# WebdriverIO + Appium - Mobile Automation Framework Sample

This repository contains the instructions to set WebdriverIO and Appium up to run automated end-to-end tests in a local machine for Android using the Sauce Demo Sample.


## Table of Contents
- [Tech Stack](#tech-stack)
- [Installing and Setup](#installing-and-setup)
- [Execution in local](#execution-in-local)
- [Framework's Structure](#frameworks-structure)

## Tech Stack
- [Node](https://nodejs.org/en/)
- [NPM]()
- [Appium](https://appium.io/)
    - [Appium Server](https://github.com/appium/appium-desktop/releases)
    - [Appium Inspector](https://github.com/appium/appium-inspector/releases)
- [WebdriverIO](https://webdriver.io/)
​

## Installing and Setup

Open a terminal and follow the next steps
to install the project:

1. Clone the repository:

   ```shell
   https://github.com/elopezcon/mobile-automation.git
   ```

2. Move into the newly created folder:

   ```shell
   cd mobile-automation
   ```

3. Install the project dependencies:

   ```shell
   npm install
    ```
4. You need to create a .env file with the following variables(use .env.example file as reference):

    ```bash
    APP_PATH= #Path to the apk file

    USER_EMAIL= #User used to login 
    USER_PASSWORD= #Password used to login 
    ```

## Execution in local

To run the tests:

```bash
npm run <test script>
```

For example:

```bash
npm run e2e:android:local
```

## Framework's Structure

```bash
.
├── config
├── functional-testing
│   ├── components
│   ├── screen-objects
│   │   ├── base-screen.js
│   │   ├── common-methods.js
│   │   └── login-screen.js
│   ├── specs
│   │   └── cart.spec.js
│   └── utils
└── .artifacts

```
