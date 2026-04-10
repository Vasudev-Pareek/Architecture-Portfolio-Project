import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex flex-1 overflow-y-auto py-16">

      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r p-6 lg:flex">
        <div className="flex flex-col gap-2">

          <NavLink
            to=""
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg 
              ${isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"}`
            }
          >
            <span className="material-symbols-outlined">folder_open</span> Projects
          </NavLink>

          <NavLink
            to="categories"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg 
              ${isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"}`
            }
          >
            <span className="material-symbols-outlined">category</span> Categories
          </NavLink>

          <NavLink
            to="responses"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg 
              ${isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"}`
            }
          >
            <span className="material-symbols-outlined">dashboard</span> Customer Response
          </NavLink>

        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
};

export default AdminLayout;