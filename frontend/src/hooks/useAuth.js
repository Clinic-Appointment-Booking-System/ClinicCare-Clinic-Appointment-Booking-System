import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthGuard(allowedRoles = []) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("userRole");

    // If user is not logged in, redirect to login
    if (!token) {
      navigate("/login");
      return;
    }

    // If specific roles are required and user doesn't match
    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
      navigate("/unauthorized");
      return;
    }
  }, [navigate, allowedRoles]);
}
