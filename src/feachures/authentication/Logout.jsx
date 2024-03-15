import React from "react";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { logout, isPending } = useLogout();
  return (
    <div>
      {isPending ? (
        <Loading />
      ) : (
        <button onClick={logout} className="flex items-center">
          <HiArrowRightOnRectangle className="icon  icon--primary hover:icon--error transition-all duration-300" />
        </button>
      )}
    </div>
  );
}

export default Logout;
