import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css"
import { Applayout } from "./APP/Applayout";
import Home from "./APP/Home";

const App = () => {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <Applayout/>,
      children : [
        {
          path : '/',
          element : <Home/>
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;