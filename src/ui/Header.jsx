import React from "react";
import useUser from "../feachures/authentication/useUser";

function Header() {
  const { data } = useUser();
  return <div className="bg-secondery-0 py-4 px-8 ">App header</div>;
}

export default Header;
