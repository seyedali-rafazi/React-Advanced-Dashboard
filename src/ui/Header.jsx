import React from "react";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../feachures/authentication/UserAvatar";
import useUser from "../feachures/authentication/useUser";

function Header() {
  const { isLoading, user } = useUser();
  return (
    <div className="bg-secondery-0 py-4 px-8 border-b border-secondery-200">
      <div
        className={`container xl: max-w-screen-lg flex items-center justify-end gap-x-8
        ${isLoading ? "blur-sm opacity-50" : ""} `}>
        <UserAvatar />
        <HeaderMenu />
      </div>
    </div>
  );
}

export default Header;
