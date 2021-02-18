import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function NavItem(props) {
  const { label, link, click, active } = props;
  return (
    <Link to={`/${link}`}>
      <li
        onClick={click}
        className={`font-semibold dark:hover:text-green-400 hover:text-green-600 p-2 rounded-lg ${
          active === label
            ? "  text-green-600 dark:text-green-400"
            : "dark:text-gray-300"
        }`}
      >
        {label}
      </li>
    </Link>
  );
}
export default function Header() {
  const [active, setActive] = React.useState("Work");
  const [dark, setDark] = React.useState(false);
  const makeProps = (label) => {
    return {
      label: label,
      active: active,
      click: () => {
        setActive(label);
      },
    };
  };
  const toggleDark = () => {
    let body = document.getElementsByTagName("body")[0];

    body.classList.toggle("dark");
    if (
      body.classList.contains("bg-gray-900") &&
      !body.classList.contains("dark")
    ) {
      body.classList.add("bg-gray-100");
      body.classList.remove("bg-gray-900");
      setDark(!dark);
    } else {
      body.classList.add("bg-gray-900");
      body.classList.remove("bg-gray-100");
      setDark(!dark);
    }
  };
  return (
    <header
      className={
        "pt-6 w-full flex-col sm:flex-row gap-8 sm:gap-0 flex items-center justify-between"
      }
    >
      <div style={{ height: 60, width: 60 }}>
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="56"
            height="56"
            stroke="rgba(16, 185, 129, 1)"
            stroke-width="4"
          />
          <path
            d="M37.1155 21.0457H33.4422V32.023H33.2888L25.7547 21.0457H22.5161V38.5002H26.2064V27.5144H26.3343L33.928 38.5002H37.1155V21.0457Z"
            fill="rgba(16, 185, 129, 1)"
          />
        </svg>
      </div>
      <nav>
        <ul className={"flex content-center gap-8 sm:gap-16 justify-center"}>
          <NavItem {...makeProps("Work")} link={""} />
          <NavItem {...makeProps("Experiments")} link={"experiments"} />
          <NavItem {...makeProps("About")} link={"about"} />
          <NavItem {...makeProps("Resume")} link={"resume"} />
        </ul>
      </nav>
      <button className={"bg-green-400 p-2"} onClick={toggleDark}>
        {dark ? "Dark" : "Light"}
      </button>
    </header>
  );
}
