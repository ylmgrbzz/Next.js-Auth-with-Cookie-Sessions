import Link from "next/link";
import React from "react";
import LogoutForm from "./logoutForm";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/login">Login</Link>
      <LogoutForm />
    </nav>
  );
};

export default Navbar;
