import React from 'react'
import { Link } from "react-router-dom";
import '../css/Bcrumbs.css'


export default function Bcrumbs(props) {
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
  )
}
