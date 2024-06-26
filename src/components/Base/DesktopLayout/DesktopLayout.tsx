import React from "react";
import LeftSidebar from "../../Home/LeftSidebar/LeftSidebar";
import RightSidebar from "../../Home/RightSidebar/RightSidebar";
import { ReactComponent } from "../../../types/types";

const DesktopLayout: ReactComponent<unknown> = (props) => {
  const { children } = props;
  return (
    <React.Fragment>
      <LeftSidebar />
      {children}
      <RightSidebar />
    </React.Fragment>
  );
};

export default DesktopLayout;
