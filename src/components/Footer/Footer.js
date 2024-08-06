import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="Footer_content">
      <Link to={"https://draquioportfolio.vercel.app/"} target="_blank">
        © Jonathan Voeffray | Fullstack Developer
      </Link>
    </div>
  );
}
