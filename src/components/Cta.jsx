import React from 'react'
import '../css/Cta.css'

export default function Cta() {
  return (
    <section id="cta" className="cta">
        <div className="container">
            <div className="text-center">
                <h3 className="text-uppercase">In an emergency? Need help now?</h3>
                <p className="text-uppercase">" We take of your health for a better life. "</p>

                <div className="row">
                    <div className="col d-flex align-items-center justify-content-center">
                        <a href="./appointment.html" className="cta-appointment text-center">Make an appointment</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}
