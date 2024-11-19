---
sidebar_position: 1
---

# Getting started

## Get the package

Install shucream using npm

```bash
npm i shucream
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Shucream.

## Create a `cream.js` file

In the root of your project (next to `package.json`), create a `cream.js` file. This file defines your API requests.

**Example `cream.js`:**
```javascript
module.exports = {
    baseUrl: 'http://localhost:3000',
    baseSuccessCode: 200,
    requests: {
        1: {
            method: 'POST',
            url: '/data',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                name: 'Sample 1',
            },
        },
    },
}
```
## Run a command
Use the shu CLI to call the requests defined in cream.js.

**Example command:**
```bash
shu ask 1 --responses
```