import React from "react";
import styles from "./DrawerTopContent.module.scss";
import Cities from "./Cities";

const DrawerTopContent = ({ name }) => {
  return <>{name === "cities" ? <Cities /> : <h1>123</h1>}</>;
};

export default DrawerTopContent;
