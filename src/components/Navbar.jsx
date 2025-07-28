import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Vikas Pal</Link>
        <div className="hidden md:flex gap-8">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600 transition"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col items-center bg-gray-100 py-4">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="py-2 text-lg hover:text-blue-600"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
