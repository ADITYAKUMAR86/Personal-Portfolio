import { Card } from './Card'
import apidata from '../API/API.json' 


export const Work = () => {


  return (
    <div className='workContainer'>
        <h2>THING'S I WORKED ON</h2>
        <div className="cards">
          {/* <Card className="cards"/> */}
          {apidata.map((item) => {
            return (
              <Card key={item.id} data = {item}/>
            )
          })}
        </div>
    </div>
  )
}

