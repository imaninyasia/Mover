**MOVEWATCH**

```
npm install
```
This application is meant to assist people when moving out of their current homes. 

Once a user is logged in, the fetch that renders items to the page queries the database so that that user's items show up. Users can add items to the list, like lamps and the prices of the items. 

**TECHNOLOGIES USED**
- React
- React-router
- Node.js
- Express.js
- CSS
- PostgreSQL

**APPROACH**

Since this was the first fullstack application I created on my own with React, I started off by getting the user auth working. I made sure that certain paths were blocked with jwt, like the dashboard. Once that was cleaned up, I started implementing the apps functionalities, like the login page, and allowing links to browserHistory.push() to whatever page necessary. 

**UNRESOLVED ISSUES**

I currently have an issue where i'd like the plus sign on the dashboard page to create more tabs which would in turn open the respective item list for said tab. But that doesn't impede on the satisfaction of the project requirements. 

[landing page Wireframe](https://wireframe.cc/X7rCTC)


[dashboard wireframe](https://wireframe.cc/Iuz1xy)

![Landing page](http://i.imgur.com/qFF9bg2.png)

