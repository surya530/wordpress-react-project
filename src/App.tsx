// import './App.css'
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle
// } from "./components/ui/navigation-menu";
import NavBar from "./components2/navBar";
// import docalign from "./images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png"
import { BrowserRouter, Routes , Route} from "react-router-dom"
import LandingPage from "./pages/landingPage";
import LayOut from "./layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    {/* <NavBar /> */}



    </>
  )
}

export default App
