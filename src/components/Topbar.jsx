import React from 'react'

export default function Topbar() {
  return (
    <>
        <div className="topbar w-100 bg-danger d-flex justify-content-around align-items-center ">
        <div className="hospital-contact  text-white">
            <i className='bx bx-phone '></i>
            <span className="me-2">0469-2782262</span>
            <i className='bx bx-envelope '></i>
            <span> gmmhospital@gmail.com</span>
        </div>
        <div className="hospital-social d-none d-md-block">
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-facebook"></i>

        </div>

    </div>
    </>
  )
}
