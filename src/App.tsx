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
// import NavBar from "./components2/navBar";
// import docalign from "./images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png"
import { BrowserRouter, Routes , Route} from "react-router-dom"
import LandingPage from "./pages/landingPage";
import LayOut from "./layout/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactPage from "./pages/contactPage";

function App() {

  return (
    <>
      <BrowserRouter basename="/wordpress-react-project" >
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<LandingPage />} />
            <Route path="contact-us" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    {/* <NavBar /> */}



    </>
  )
}

export default App
