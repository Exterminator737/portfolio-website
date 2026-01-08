"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MainNav() {
  // Defining the links
  const NavLinks = [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  console.log(NavLinks);
  //   STYLING THE NAV LINKS
  const pathname = usePathname();

  return (
    <div>
      {/* Nav of my smartphone */}
      <nav className="bg-amber-700">
        {NavLinks?.map((item, index) => {
          <p
            key={index}
            // href={item.href}
            // className={`${pathname == item.href ? "bg-red-600" : ""}`}
          >
            {item.label}
          </p>;
        })}
      </nav>
    </div>
  );
}

export default MainNav;
