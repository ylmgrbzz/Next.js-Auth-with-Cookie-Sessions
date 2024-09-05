import { logout } from "@/actions";
import React from "react";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default LogoutForm;
