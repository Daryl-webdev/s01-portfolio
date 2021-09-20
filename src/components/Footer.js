import React from 'react'
import "./Footer.css"


export default function Footer() { 
    let date = new Date().getFullYear()
    return (
        <section id="footer">
               

            
                <img src="https://paperpillar.com/assets/images/footer-white-mask.png" className="img-fluid bg-primary main-bg" alt="wave_design" />
                <p className="footer-text"> All rights reserved {date}</p>
                <img src="https://paperpillar.com/assets/images/footer-pattern-bg-lg.png" alt="pattern_design" className="img-fluid bg-primary pattern-bg" />
        
        </section>
    )
}