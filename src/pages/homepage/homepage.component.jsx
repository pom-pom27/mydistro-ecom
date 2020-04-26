import React from "react";
import { homepage } from "./homepage.module.scss";
import Directory from "../../components/directory/directory.component";

const Homepage = () => {
  return (
    <div className={homepage}>
      <Directory />
    </div>
  );
};
export default Homepage;
