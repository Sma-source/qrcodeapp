import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../contexts/AuthContext";
import { SidebarData } from "./SidebarData";
import Alert from "./Alert";

function Sidebar() {
  const [error, setError] = useState("");
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {/* //Mobile menu */}
      <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
        {/* <!-- logo --> */}
        <a href="#" className="block p-4 text-white font-bold">
          LOGO
        </a>

        {/* <!-- mobile menu button --> */}
        <button
          onClick={showSidebar}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* // sidebar */}
      <div
        className={
          sidebar
            ? "bg-black w-72 absolute inset-y-0 left-0 md:relative transform  md:relative md:translate-x-0 transition duration-200 ease-in-out z-40"
            : "bg-black w-72 absolute inset-y-0 left-0 md:relative transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out z-40"
        }
      >
        {/* Logo */}
        <div className="mt-10 px-6 text-white flex justify-center">
          <div className="bg-purple md:w-[190px] md:h-[190px] flex justify-center items-center">
            <p className="font-bold font-Poppins md:text-[32px]">LOGO</p>
          </div>
        </div>
        <nav className="mt-10 px-6 mx-2">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${item.cName} text-purple` : `${item.cName}`
                }
                to={item.path}
                key={index}
              >
                {item.title}
              </NavLink>
            );
          })}
        </nav>
        <div className="mt-32 md:px-8 md:mx-4 px-6 mx-2">
          {error && <Alert props={error} />}
          <button
            onClick={handleLogout}
            className="text-white uppercase font-bold text-xs md:text-[20px] font-Poppins"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
