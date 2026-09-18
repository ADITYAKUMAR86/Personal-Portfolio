import { Typewriter } from "react-simple-typewriter";

export const Main = () => {
    return (
        <div className="mainContainer">
            <div className="info">
                <h2 id="hey">Heyy ✌️</h2>
                <h2>My Name is  Aditya </h2>
                <h2>
                    I am a{" "}
                    <span style={{ color: 'orangered' }}>
                    <Typewriter
                        words={["UI/UX Designer" , "Backend Developer"]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        cursorColor="gray"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                    </span>
                </h2>
                <h5>I'm from Jhansi with a passion for systems design and FULL Stack development</h5>
                <button id="btn">GET IN TOUCH</button>
            </div>
            <div className="image">
                {/* <img src="src\APP\adityaONG.jpeg" alt="" /> */}
                <img src="/adittya-removebg-preview.jpg" alt="" />
                {/* <img src="src\APP\adityaStand-removebg-preview.jpg" alt="" style={{height: '400px', width: '400px'}} /> */}
                {/* <img src='https://www.tim-gesemann.dev/me.png.jpeg' alt="" /> */}
            </div>
        </div>
    )
}