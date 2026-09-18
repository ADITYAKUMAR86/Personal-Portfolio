import Skills from './Skills'
import { Work } from './Work'
import Contact from './Contact'
import { Main } from './Main'
import Links from './Links'

const Home = () => {
  return (
    <>

        <section id='links'>
            <Links/>
        </section>

        <section id='main'>
            <Main/>
        </section>

        <section id='skills'>
            <Skills/>
        </section>

        <section id='work'>
            <Work/>
        </section>
        
        {/* <section >
            <Experience/>
        </section> */}

        <section id='contact'>
            <Contact/>
        </section>

    </>
  )
}

export default Home