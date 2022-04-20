import React from 'react'

export default function ContactUsPage({burger}) {
  return (
    <div className={`resumeWrapper ${burger ? "active" : " "}`}>
        <img src="./images/Kairat's resume.png" alt="resume"/>
    </div>
  )
}
