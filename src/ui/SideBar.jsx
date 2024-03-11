import React, { Children } from "react";
import { HiCollection, HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="bg-secondery-0 row-start-1 row-span-2">
      <ul className="flex flex-col gap-y-4 p-5">
        <li>
          <CustomeNavlink path="/owner/dashboard">
            <HiHome />
            <span>خانه</span>
          </CustomeNavlink>
        </li>
        <li>
          <CustomeNavlink path="/owner/projects">
            <HiCollection />
            <span>پروژه ها</span>
          </CustomeNavlink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

function CustomeNavlink({ children, path }) {
  const sidebarStyles =
    "flex items-center gap-x-2 text-secondery-600 hover:bg-primary-100/50 hover:text-primary-600 py-1 px-2 transition-all duration-300 rounded-xl";
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${sidebarStyles} bg-primary-100/50 text-primary-600`
          : `${sidebarStyles}`
      }>
      {children}
    </NavLink>
  );
}
