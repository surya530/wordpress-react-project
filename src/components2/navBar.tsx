// import './App.css'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // navigationMenuTriggerStyle
} from "../components/ui/navigation-menu";
import docalign from "../images/docalign-pnz85o4s8x1va7og9rruwpsvi6u966jrvexgy56ry8.png"


function NavBar() {

  return (
    <>
      <nav className="bg-[#FFFFFF] fixed top-0 left-0 w-full shadow-md z-50 p-3">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 px-16">
      {/* <div className="flex-shrink-0 font-bold text-xl">
        MyLogo
      </div> */}

      <div>
        <img src={docalign} />
      </div>



      <div className="flex items-center gap-2">

  {/* Dropdown item */}
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-semibold text-[#226878]">
          Typesetting and Formatting
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-36 flex flex-col gap-3 p-2 font-semibold text-sm">
            <p>How It Works</p>
            <p>Pricing</p>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  {/* Plain links */}
  <span className="font-semibold text-[#226878] px-3 text-sm">Custom Software Solutions</span>
  <span className="font-semibold text-[#226878] px-3 text-sm">Additional Services</span>

  {/* Separate NavigationMenu so viewport anchors to THIS trigger */}
  <NavigationMenu className="hidden md:flex">
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="font-semibold text-[#226878]">
          About Us
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-36 flex flex-col gap-3 p-2 font-semibold text-sm">
            <p>Contact Us</p>
            <p>Case Studies</p>
            <p>LinkdIn</p>
            <p>facebook</p>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <span className="font-semibold text-[#226878] px-3 text-sm">Blog</span>

</div>

    </div>
  </div>
</nav>



    </>
  )
}

export default NavBar
