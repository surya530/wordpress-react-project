import React from "react"
// import { Button } from "../components/ui/button"
import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  // DrawerDescription,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerTitle,
  // DrawerTrigger,
} from "../components/ui/drawer"
import { CollapsibleFileTree } from "./treeView"

// const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const

// export function DrawerWithSides() {
    
let Drower : React.FC<any> = (props)=>{

  return (
    
        <Drawer
          open={props.openOrClosePopUp}
          // key={side}
          onOpenChange={()=>{
            props.y()
          }}
          //onClose={props.y}
          
          direction={
            "right"
          }
        >
          {/* <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </DrawerTrigger> */}
          <DrawerContent className="data-[vaul-drawer-direction=bottom]:max-h-[30vh] data-[vaul-drawer-direction=top]:max-h-[30vh]">

            {/* <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader> */}


            {/* <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline" onClick={props.y} >Cancel</Button>
              </DrawerClose>
            </DrawerFooter> */}

                                                        <CollapsibleFileTree />

          </DrawerContent>
        </Drawer>
  )
}

export default Drower;
