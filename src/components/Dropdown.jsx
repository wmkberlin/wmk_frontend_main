import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Dropdown({ title, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="dropdown"
    >
      {/* Parent NavLink with mainRoute */}
      <Link to={data.mainRoute} className={({ isActive }) => (isActive ? "active "  : "")} class="">
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
      {/* Dropdown menu with items */}
      {isOpen && (
        <ul className="dropdown-menu">
          {data.items.map((item, index) => (
            <li key={index}>
              <Link to={item.route} className="dropdown-item">
              <span>
                {item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Dropdown;