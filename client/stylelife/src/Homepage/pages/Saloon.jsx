import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { saloonofferformendata, saloonofferfortraetmentdata, saloonofferforwomendata, saloonotrendingdata, saloonslider } from '../requireddata';


const navbararray=[
  {id:1,src:"https://img4.nbstatic.in/tr:w-/5ed9141d4cedfd000b21d66a.png",alt:"res",text:"Haircut Deals",go:"buffet"},
  {id:2,src:"https://img4.nbstatic.in/tr:w-/5ed9143c4cedfd000b21d66c.png",alt:"res",text:"Waxing Deals",go:""},
  {id:3,src:"https://img4.nbstatic.in/tr:w-/5ed914604cedfd000b21d66e.png",alt:"res",text:"Shave/Trim Deals",go:"buffet"},
  {id:4,src:"https://img4.nbstatic.in/tr:w-/5ed914784cedfd000b21d670.png",alt:"res",text:"Facial Deals",go:""},
  {id:5,src:"https://img4.nbstatic.in/tr:w-/5fe0dfe45cc6f2000b960e2d.png",alt:"res",text:"Hair Spa ",go:"buffet"},
  {id:6,src:"https://img4.nbstatic.in/tr:w-/5fe0e011c4d55d000b8a2073.png",alt:"res",text:"Hair Treatment",go:""},
  {id:7,src:"https://img4.nbstatic.in/tr:w-/5fe0e03cc4d55d000b8a2075.png",alt:"res",text:"Head Deals",go:""},
 
 

]
const Saloon = () => {
  return (
   <>
     <div className='navbardiv'>
     {navbararray.map((el)=>{
        return <Box className='navbarbox' >
            <Image src={el.src} alt={el.alt} />
            <Text>{el.text}</Text>
        </Box>
     })}
   </div>

   <div className='firstcrauser'>
   <Carousel infiniteLoop autoPlay>
   {saloonslider.map((el)=>{
    return <div id="sliderimages" key={el.src}>
        <Image src={el.logo}  alt="sliding" />
    </div>
   })}
 </Carousel>
   </div>

   <Box className='nearbyheading'>
     <h1>Offers For Women!</h1>
     </Box>
      <div className='nextthingbox'>
        {saloonofferforwomendata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='nearbyheading'>
     <h1>Offers For Men!</h1>
     </Box>
      <div className='nextthingbox'>
        {saloonofferformendata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='nearbyheading'>
     <h1>Offers On Hair Treatment</h1>
     </Box>
      <div className='nextthingbox'>
        {saloonofferfortraetmentdata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='nearbyheading'>
     <h1>Trending Collections</h1>
     </Box>
      <div className='nextthingbox'>
        {saloonotrendingdata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='saloonfacialbox'>
  <Image src="https://img4.nbstatic.in/tr:w-2800/611b71ed40e9df000b81097f.jpg" alt="dis" />
   </Box>

   </>
  )
}

export default Saloon