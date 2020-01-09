import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
export default function index() {
  const date = new Date().getFullYear();
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <span id="year">
        {date} Built by Victor Jonah |{"  "}
        <Link to="/privacy">Privacy </Link> |{"  "}
        <Link to="/terms">Terms</Link>
      </span>
    </footer>
  );
}
