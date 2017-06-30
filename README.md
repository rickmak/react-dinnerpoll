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
*   Development:
    ```bash
    # find the url on this page
    git clone <project-git-url>
    cd react-dinnerpoll
    npm install
    npm start
    ```
*   Cloud Functions
    ```bash
    cd cloud
    # find the url on https://portal.skygear.io/app/dinnerpollpoly/cloud-functions
    git remote add skygear-portal ssh://<your-cloud-code-git-url>
    git push skygear-portal master
    ```
*   Production:
    ```bash
    npm run build
    ```

App components' hierarchy
-------------
```
App
├── Headline
└── Content
    ├── Form
    │   ├── SignInForm
    │   │   └── FormGroup
    │   │       └── FormControl
    │   └── SignUpForm
    │       └── FormGroup
    │           └── FormControl
    └── VotingOverview
        ├── Toolbar
        ├── PollingResultChart
        ├── VotingCardDeck
        │   └── VotingCard
        └── VotingForm
```

Tips for new contributors :heart:
-------------

*   Read docs of above dependencies
*   Draw components hierarchy design on paper first

### ES6
*   `export`: [guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
*  `import`: [guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

### React
*   **class -> className**
*   for -> htmlFor (usually used in form's `<label>`)
*   [中文tutorial](https://www.gitbook.com/book/kdchang/react101/details)

### Reflux
*   Create component using `Reflux.Component` instead of React's
*   `setState({wholeObj: wholeObj})` if your state is an object, e.g.
    ```javascript
    this.state = {
        property: /*foo*/,
        obj: {
            x: /*foo*/,
            y: /*foo*/,
        },
    }
    // obj still exists in this.state
    this.setState({property: /*new foo*/})
    // property still exists
    // but obj.y no longer exists
    this.setState({
        obj: {
            x: /*new foo*/,
        }
    })
    // correct way to setState for state in object type
    // if obj.y is not involved, use its existing value
    this.setState({
        obj: {
            x: /*new foo*/,
            y: this.state.obj.y,
        }
    })
    ```
*   Parent should not listen to store that is manipulated by children, re-rendering may cause strange behavior, e.g.
    1. `<input />` onChange
    2. set state that its parent is listening
    3. parent re-renders
    4. as well as `<input />` itself as a child
    5. **boom** :boom:
*   `storeKeys` could help prevent naming pollution or restricting access of state between store(s)

### Boostrap 4
*   Grid system
*   Flexbox
*   Media object
*   Image
*   Spacing

### Skygear
*   Use `skygear.ErrorCodes` instead of `skygearError` documented (wrong doc)
*   `/cloud` directory stores Cloud Functions running on Skygear server. It is **NOT** a part of the frontend and ignored in buildtime via `.npmignore`. Consult @david90 for more info.

### Github
*   [Github Markdown tutorial](https://guides.github.com/features/mastering-markdown)
*   [Github Markdown preview](https://jbt.github.io/markdown-editor)
*   [Emoji cheatsheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
