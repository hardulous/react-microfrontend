import { mount } from "marketing/marketingIndex";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);

  const history = useHistory(); // return copy of history object currently used by app

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // Here we are providing some callback function to child mf app to communicate with container
      onNavigate: ({ pathname: nextPathname }) => {
        // change to history only if container and marketing are in diff route
        if (history.location.pathname !== nextPathname) {
          history.push(nextPathname); // Sync history object of container with marketing
        }
      },
    });

    history.listen(onParentNavigate); // execute when container route is changed to change route in marketing app

  }, []);
  // Also we need to call this mount function only one time

  return <diV ref={ref}></diV>; // In this div mount function will mount the marketing mf
};
