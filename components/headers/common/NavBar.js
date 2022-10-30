import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MENUITEMS } from "../../constant/menu";
import { Container, Row } from "reactstrap";

const NavBar = () => {
  const [navClose, setNavClose] = useState({ right: "0px" });

  useEffect(() => {
    if (window.innerWidth < 750) {
      setNavClose({ right: "-410px" });
    }
    if (window.innerWidth < 1199) {
      setNavClose({ right: "-300px" });
    }
  }, []);

  const openNav = () => {
    setNavClose({ right: "0px" });
  };

  const closeNav = () => {
    setNavClose({ right: "-410px" });
  };

  const [mainmenu, setMainMenu] = useState(MENUITEMS);

  useEffect(() => {
    const currentUrl = location.pathname;
    MENUITEMS.filter((items) => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = (item) => {
    MENUITEMS.filter((menuItem) => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });

    setMainMenu({ mainmenu: MENUITEMS });
  };

  // Click Toggle menu
  const toggletNavActive = (item) => {
    if (!item.active) {
      MENUITEMS.forEach((a) => {
        if (MENUITEMS.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) return false;
          b.children.forEach((c) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };

  return (
    <div>
      <div className="main-navbar">
        <div id="mainnav">
          <div className="toggle-nav" onClick={openNav.bind(this)}>
            <i className="fa fa-bars sidebar-bar"></i>
          </div>
          <ul className="nav-menu" style={navClose}>
            <li className="back-btn" onClick={closeNav.bind(this)}>
              <div className="mobile-back text-right">
                <span>Back navbar</span>
                <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
              </div>
            </li>
            {MENUITEMS.map((menuItem, i) => {
              return (
                <li key={i}>
                  {menuItem.children ? (
                    <>
                      <a className="nav-link">
                        {menuItem.title}
                        <i className="fa fa-angle-down sub-arrow"></i>
                      </a>
                      <ul className="nav-submenu">
                        {menuItem.children.map((childrenItem, j) => {
                          return (
                            <li key={j} className="sub-menu">
                              <Link href={childrenItem.path}>
                                <a className="nav-link">{childrenItem.title}</a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <Link href={`${menuItem.path}`}>
                      <a>{menuItem.title}</a>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
