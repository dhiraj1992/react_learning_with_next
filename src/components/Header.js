"use client"; // ← add this line to mark the component as client-side

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mountain", label: "Snowtooth Mountain" },
    { href: "/hotels", label: "Hotels" },
    { href: "/contact", label: "Contact Us" },
    { href: "/dmountain", label: "D mountain" },
  ];

  return (
    <header className="flex items-center justify-between w-full max-w-4xl px-4 py-2 mx-auto">
      <h1 className="text-2xl font-bold">My App</h1>
      <nav>
        <ul className="flex space-x-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${
                  pathname === href
                    ? "text-blue-600 underline font-bold"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
