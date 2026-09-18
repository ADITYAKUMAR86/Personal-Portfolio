import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";
import { FiArrowLeft } from "react-icons/fi";

const Links = () => {

  const handleGithub = () => {
    window.open("https://github.com/ADITYAKUMAR86", "_blank")
  }
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/aditya-kumar-524928419", "_blank")
  }
  const handleInsta = () => {
    window.open("https://www.instagram.com/gautam_.099?stkn=MTk2YWN5MXhwMmhyeg==", "_blank")
  }
  const handleTwitter = () => {
    window.open("https://x.com/adityamaurya_86", "_blank")
  }

  return (
    <div className='movingButton' id="links">
       <div className="topButton">
                 <FiArrowLeft className='back' id="arrow"/>
                <button className='back' onClick={() => document.getElementById("header").scrollIntoView({behavior : "smooth"})}>Back to Top</button>
       </div>
      <div className="icons">

            <SiGithub id='githubId' onClick={handleGithub}/>
            <FaLinkedin id='linkId' onClick={handleLinkedIn}/>
            <RiInstagramFill id='instaId' onClick={handleInsta}/>
            <FaTwitter id='twitterId'onClick={handleTwitter}/>
            <PiLineVertical id='lineId'/>
      </div>
    </div>
  ) 
}

export default Links
