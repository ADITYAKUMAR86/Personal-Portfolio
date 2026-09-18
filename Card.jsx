import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { TbExternalLink } from "react-icons/tb";

export const Card = ({ data}) => {

    const handleGithub = () => {
        window.open("https://github.com/ADITYAKUMAR86", "_blank")
    }
  return (
    <div className='singleCard'>
        {/* <h2  className='white'> VOLKSWAGEN GROUP</h2>
        <h4 className='white'>The Volkswagen Group's
            design system and
            component library, setting
            the standard for all internal
            Volkswagen applications.
            Recipient of the RedDot
            Design Award in 2019
        </h4>
        <h4 className='white lang'>Typescript Stencil.js
            Figma GitHub-Actions
            AWS Svelte
        </h4>
        <div className="githubIcon">
            <TbExternalLink id='iconLink'/>

            <IoLogoGithub id='iconGithub'/>
        </div> */}
        
        <h2  className='white'>{data.companyName}</h2>
        <h4 className='white'>{data.companyDetail}</h4>
        <h4 className='white lang'>
            {/* {data.workedOn.map((tech) => {
                <span key={tech}>{tech}</span>
            })} */}
            {data.workedOn.join(" ")}
        </h4>
        <div className="githubIcon">
            <TbExternalLink id='iconLink'/>
            <IoLogoGithub id='iconGithub' onClick={handleGithub}/>
        </div>
    </div>
  )
}
