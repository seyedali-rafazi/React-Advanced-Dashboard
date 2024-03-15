import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkmodeToggle from "./DarkmodeToggle";
import Logout from "../feachures/authentication/Logout";

function HeaderMenu() {
  return (
    <ul className="flex gap-x-6 items-center">
      <li>
        <Link to="dashboard">
          <HiOutlineUser className="icon text-primary-900" />
        </Link>
      </li>
      <li>
        <DarkmodeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
