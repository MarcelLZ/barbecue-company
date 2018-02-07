# React Boilerplate

Hi everyone! This is the boilerplate that I use to start my React applications! Feel free to use it in your amazing apps! See you :D

## tl;dr
This boilerplate has 3 starter components included. The first one, **Dummy**, shows you a simple component. The second, **IHaveState**, shows you a simple component with its internal state. The last one, **SharedState**, shows you a component which state comes from the redux store. If you don't want to use redux, you'll need to remove some directories and components. I'll explain the structure in details in the next section.

## Structure
Considerations about the boilerplate structure:

![](https://github.com/MarcelLZ/react-boilerplate/blob/master/assets/general_structure.png)

We have three main directories inside **src** -> *components*, *containers* and *screens*. Inside the components directory, you must place super dummy components, such as a simple button. These components do NOT have state and you can use them to mount a slightly smarter component. Smarter components you must place inside the containers directory and these components have a simple state like togglers to show or hide something or these components can have state shared in the redux store. Finally, inside the *screen* directory, you must place the components that will be displayed to the user.

## Redux
I have placed a component connected to a redux store and an action to update the actual date. The actions, reducers and action-creators are inside the *redux-flow* directory. By default, ***react-redux***, ***redux*** and ***redux-thunk*** are installed. If you don't want use redux, uninstall these packages, remove *redux-flow* directory and edit the index.js file from the src directory, removing **Provider** component and some methods that configure the store.

## Webpack (v2+)

## Up and Running

## DIST version
