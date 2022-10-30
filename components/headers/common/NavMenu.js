// @flow
import React from "react";
import AppMenu from "./Menu.js";
import { Collapse } from "react-bootstrap";
import classNames from "classnames";

import { getMenuItems } from "../../../helpers/menu";

const NavMenu = (props) => {
  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className={classNames(
              "navbar",
              "navbar-expand-lg",
              "topnav-menu",
              "navbar-light"
            )}
          >
            <Collapse
              in={props.isMenuOpened}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <div>
                <AppMenu menuItems={getMenuItems()} />
              </div>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavMenu;
