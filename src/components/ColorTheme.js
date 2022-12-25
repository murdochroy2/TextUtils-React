import React from "react";

export default function ColorTheme(props) {
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault"
        onClick={props.handleToggleMode}
      />
      <label
        className={`form-check-label text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        htmlFor="flexSwitchCheckDefault"
      >
        Toggle Dark Mode
      </label>
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckRed"
        onClick={props.handleToggleMode}
      />
      <label
        className={`form-check-label text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
        htmlFor="flexSwitchCheckRed"
      >
        Toggle Red Mode
      </label>
    </div>
  );
}
