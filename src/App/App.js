import { makeStyles } from "@material-ui/styles";
import React from "react";
import SideMenu from "../components/SideMenu";
import "./App.css";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>here we go</div>
    </>
  );
}

export default App;
