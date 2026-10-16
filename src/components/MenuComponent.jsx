import React, { Component } from "react";
import { NavLink } from "react-router-dom";
export default class MenuComponent extends Component {
  render() {
    return (
      
<div className="min-h-screen bg-gray-100">
  <header className="bg-slate-900 shadow-lg">
    <div className="mx-auto max-w-7xl px-6 py-5">

      <h1 className="mb-4 text-2xl font-bold tracking-wide text-white">
        Menu Component
      </h1>

      <nav className="flex flex-wrap items-center gap-3 rounded-xl bg-slate-800 p-2">

        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          🏠 Home
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-blue-600 text-white shadow-md"
                : "text-slate-300 hover:bg-slate-700 hover:text-white"
            }`
          }
        >
          🏢 Coches
        </NavLink>

      </nav>
    </div>
  </header>
</div>

    );
  }
}
