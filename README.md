Web app: Polling for dinner
=============
A web-based serverless polling app using Skygear as cloud database.

Required dependencies
-------------
*   [React](https://facebook.github.io/react)
*   [Reflux](https://github.com/reflux/refluxjs)
*   [Bootstrap 4](https://v4-alpha.getbootstrap.com)
*   [Skygear](https://skygear.io)
*   [Chart.js](http://www.chartjs.org)

Recommended dependencies
-------------
*   [Chrome plugin: React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
*   [IDE: Visual Studio Code](https://code.visualstudio.com/)
*   [VSC extensions: Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)

Quick start
-------------
```bash
git clone
npm install
npm start
```

Tips for new contributors <3
-------------

*   Read docs of above dependencies
*   Draw components hierarchy design on paper first

### ES6
*   [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
*  [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### React
*   **class -> className**
*   for -> htmlFor `<label>`
*   [中文tutorial](https://www.gitbook.com/book/kdchang/react101/details)

### Reflux
*   Create component using `Reflux.Component` instead of React's
*   Use storeKeys when hooking multiple stores into a component -> prevent pollution
*   Mind not to change state that will render input element when user is typing

### Boostrap 4
*   Grid system
*   Flexbox
*   Media object
*   Image
*   Spacing