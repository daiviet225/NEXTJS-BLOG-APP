import MainNavBar from "./MainNavBar.js";
import { Fragment } from "react";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavBar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
