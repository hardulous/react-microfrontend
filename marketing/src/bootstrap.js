import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory }) => {
  // will use BrowserHistory in developement mode
  const history = defaultHistory || createMemoryHistory();

  // here listen() execute when changes history object is made
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const { pathname } = history.location;
      if (pathname !== nextPathname) history.push(nextPathname);
    },
  };
};

// If we are in development and in isolation call mount immediately

if (process.env.NODE_ENV == "development") {
  const devRoot = document.querySelector("#marketing-dev-root");

  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// If we are running through container or host then export the mount function
export { mount };
