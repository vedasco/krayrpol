import { MENUITEMS } from "../components/constant/menu";

const getMenuItems = () => {
  return MENUITEMS;
};

const findMenuItem = (menuItems, menuItemKey) => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i];
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey);
      if (found) return found;
    }
  }
  return null;
};

const findAllParent = (menuItems, menuItemKey) => {
  let parents = [];
  const parent = findMenuItem(menuItems, menuItem.parentKey);

  if (parent) {
    parents.push(parent.key);
    if (parent.parentKey)
      parents = [...parents, ...findAllParent(menuItems, parent)];
  }
  return parents;
};

export { getMenuItems, findAllParent, findMenuItem };
