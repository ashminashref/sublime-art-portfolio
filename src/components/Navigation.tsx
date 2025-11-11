import { Link, useLocation } from "react-router-dom";
import { useState } from "react"; // 1. Import useState

// 2. Define links in an array to avoid repetition
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// 3. SVG Icon components for the button
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 4. Add state for menu toggle

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* 5. Add 'relative' for positioning the absolute mobile menu */}
      <div className="container mx-auto px-6 py-6 relative">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-serif font-semibold tracking-tight hover:opacity-70 transition-opacity"
            // Also close menu if logo is clicked
            onClick={() => setIsMenuOpen(false)}
          >
            Lines of paar
          </Link>

          {/* 6. Mobile menu button (hidden on medium screens and up) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>

          {/* 7. Unified Nav List.
            - Mobile (default): Hidden, but becomes a flex-col when 'isMenuOpen' is true.
            - Desktop (md:): Becomes a static flex-row.
          */}
          <ul
            className={`
              ${isMenuOpen ? "flex" : "hidden"}
              flex-col absolute top-full left-0 right-0 w-full p-6 pb-8 bg-background/95 border-b border-border shadow-md gap-6
              md:flex md:flex-row md:static md:top-auto md:left-auto md:right-auto md:w-auto md:p-0 md:bg-transparent md:border-none md:shadow-none md:gap-8
            `}
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  // 8. Close menu on link click
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium tracking-wide transition-colors ${
                    isActive(link.to)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;