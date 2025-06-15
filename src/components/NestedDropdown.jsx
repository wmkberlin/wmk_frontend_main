import React, { useState } from "react";
import { Link } from "react-router-dom";

function DropdownItem({ item }) {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <li
      className="dropdown-item"
      onMouseEnter={() => setIsSubOpen(true)}
      onMouseLeave={() => setIsSubOpen(false)}
    >
      {/* Main Item */}
      <Link to={item.route} className="dropdown-link">
        {item.label}
      </Link>

      {/* If subItems exist, render nested submenu */}
      {item.subItems && item.subItems.length > 0 && (
        <ul className={`sub-dropdown ${isSubOpen ? "show" : ""}`}>
          {item.subItems.map((subItem, index) => (
            <DropdownItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

function NestedDropdown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="dropdown"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Parent NavLink */}
      <Link to={data.mainRoute} className="dropdown-title">
        {title}
        <svg
          width="11"
          height="7"
          viewBox="0 0 11 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.06067 4L1.06066 0L0 1.06066L4 5.06067L5.06066 6.12132L6.12132 5.06066L10.1213 1.06067L9.06066 8.79169e-06L5.06067 4Z"
            fill="black"
          ></path>
        </svg>
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="dropdown-menu">
          {data.items.map((item, index) => (
            <DropdownItem key={index} item={item} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default NestedDropdown;