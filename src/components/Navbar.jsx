// import {Link} from "react-router-dom";
// export default function Navbar() {
//     return (
//         <nav className="navbar">
//       <div className="navbar-container">
//         <div className="navbar-content">
//           {/* Logo */}
//           <div className="logo">
//             <a href="#">
//               <img src="logo_png1.png" alt="Company Logo" />
//             </a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="nav-menu">
//             <Link to="/home" className="nav-link">Home</Link>
//             <Link to="/about" className="nav-link">About</Link>
//             <Link to="/services" className="nav-link">Services</Link>
//             <a href="#" className="nav-link">Blog</a>
//             <Link to="/contact" className="nav-link">Contact</Link>
//           </div>

          
//         </div>
//       </div>

      
//     </nav>
//       );
// }

import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="logo">
            <a href="#">
              <img src="logo_png1.png" alt="Company Logo" />
            </a>
          </div>

          {/* Hamburger Button (visible on small screens) */}
          <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

          {/* Menu (hidden on small screens, toggled by the hamburger button) */}
          <div className={`nav-menu ${isOpen ? "active" : ""}`}>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <a href="#" className="nav-link">Blog</a>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
