import { BsFillPersonFill } from "react-icons/bs";


export const Header = () => {
    return (
        <div className="Header" id="header">

            
            <div className="profile">
                <BsFillPersonFill style={{scale: '1.5', backgroundColor: '#fcf4d7'}}  className="icon"/>
                <h2 id="headerName">Profile</h2>
            </div>
            <div className="headerNav">
                <h5><a href="#skills" className="anchor1">Skills</a></h5>
                <h5><a href="#work" className="anchor2">My Work</a></h5>
                <h5><a href="#experience" className="anchor3">Experience</a></h5>
                <h5><a href="#contact" className="anchor4">Contact</a></h5>
            </div>
        </div>
    )
}
