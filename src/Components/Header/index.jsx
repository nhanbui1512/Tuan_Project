import React from "react";
import "./header.css";
export default function Header() {
  return (
    <header className="px-4 flex justify-between text-base">
      <div className="container">
        <div className="logo">
          <h1>
            <a href="/">DocShare</a>
          </h1>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Explore</a>
          </li>
          <li>
            <a href="/">Upload</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
