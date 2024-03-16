import React, { useEffect } from "react";
import useAuthorize from "../feachures/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const navigate = useNavigate("/auth");
  // 1 . load the authnictated user
  const { isAuthenticated, isLoading, isAuthorized, user } = useAuthorize();
  // 2 . check if is authorized or not , check is authnicated or not
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate();
    ("/auth");
    if (!isAuthorized && !isLoading) navigate("/not-accessed");
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);
  // 3 . while loading => show loading
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondery-100">
        <Loading />
      </div>
    );
  // 4 . if user isAuthenticated and isAuthorized => render the app
  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
