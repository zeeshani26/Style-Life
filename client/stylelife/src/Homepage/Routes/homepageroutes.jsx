import {Routes,Route} from "react-router-dom"

import React from 'react'
import Resturentpage from "../pages/Resturentpage"
import Buffetpage from "../pages/Buffetpage"
import Homepage from "../Homepage"
import Saloon from "../pages/Saloon"
import Spa from "../pages/Spa"
import Activities from "../pages/Activities"
import Gift from "../pages/Gift"
import Health from "../pages/Health"

const Homepageroutes = () => {
  return (
   <>
   <Routes>
   <Route path="/" element={<Homepage />} ></Route>
 <Route path="/resturent" element={<Resturentpage />} ></Route>
 <Route path="/buffet" element={<Buffetpage />} ></Route>
 <Route path="/saloon" element={<Saloon />} ></Route>
 <Route path="/spa" element={<Spa />} ></Route>
 <Route path="/activities" element={<Activities />} ></Route>
 <Route path="/gift" element={<Gift />} ></Route>
 <Route path="/health" element={<Health />} ></Route>
 

   </Routes>
   </>
  )
}

export default Homepageroutes