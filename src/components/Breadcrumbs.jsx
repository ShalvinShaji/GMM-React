import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  return (
    <>
      <div className="breadcrumbs d-flex justify-content-between align-items-center">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>{props.breadcrumbspage}</li>
        </ol>
      </div>
    </>
  );
}
