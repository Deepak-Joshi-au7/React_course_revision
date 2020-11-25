import React, { useEffect, memo } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    const timer = setTimeout(() => {
      console.log("saved data to the cloud!");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("this is cleanUp for the cockpit");
    };
  }, []);
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("this is cleanUp work of the 2nd useEffect");
    };
  });

  const assignedClasses = [];
  console.log(props);
  let btnCls = "";
  if (props.showPersons) {
    btnCls = classes.red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>and this is really working!!!</p>
      <button className={btnCls} onClick={props.clicked}>
        toggle Persons
      </button>
    </div>
  );
};

export default memo(Cockpit);
