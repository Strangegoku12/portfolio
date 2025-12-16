import { NavLink } from "react-router-dom";

function TopMenu() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "text-white hover:text-yellow-400 transition";

  return (
    <div className="absolute top-16 right-6 z-50">
      <div
        className="bg-zinc-800/80 backdrop-blur
        border border-zinc-700
        rounded-2xl px-4 py-2"
      >
        <ul className="flex gap-4 items-center">
          <li>
            <NavLink to="/" className={linkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className={linkClass}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={linkClass}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
