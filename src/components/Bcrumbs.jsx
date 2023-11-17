import React from "react";
import { Link } from "react-router-dom";
import "../css/Bcrumbs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Bcrumbs(props) {
  return (
    <>
      <div className="breadcrumbs d-flex justify-content-between align-items-center">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="bcrumb-icon">
            <FontAwesomeIcon icon={faChevronRight} />
          </li>
          <li>{props.breadcrumbspage}</li>
        </ol>
      </div>
    </>
  );
}
