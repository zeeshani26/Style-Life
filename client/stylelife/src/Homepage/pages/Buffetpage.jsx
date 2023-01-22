import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import {useNavigate} from "react-router-dom"
import { SampleNextArrow, SamplePrevArrow } from '../Homepage'
import { buffetbrandsdata, buffetdinnerdata, buffetplandata, buffetspecialdata, nextthingdata, quickstartdata } from '../requireddata'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/buffetpage.css"
import Footer from "../../Footer/Footer";
const navbararray=[
  {src:"https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png",alt:"res",text:"Saloon Deals",go:"saloon"},
  {src:"https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png",alt:"res",text:"Spa Deals",go:"spa"}
]
const Buffetpage = () => {
  const navigate=useNavigate()

  const quick = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
   <>
    <div className='resnavbardiv' style={{display:"flex",justifyContent:"space-around"}}>
     {navbararray.map((el)=>{
        return <Box className='resnavbarbox' onClick={()=>navigate(`/${el.go}`)} >
            <Image src={el.src} alt={el.alt} />
        </Box>
     })}
   </div>

   <Box className='discountlogo'>
  <Image src="https://img4.nbstatic.in/tr:w-2800/63077be254f372000b30d468.jpeg" alt="dis" />
   </Box>

   <Box className='nearbyheading'>
     <h1>Buffet Specials! 🤩🤤</h1>
     </Box>
      <div className='nextthingbox'>
        {buffetspecialdata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='nearbyheading'>
     <h1>When Do You Plan To Go? ⏰🥞</h1>
     </Box>
      <div className='nextthingbox'>
        {buffetplandata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <Box className='nearbyheading'>
     <h1>Top Brands Around You</h1>
     </Box>
      <div className='nextthingbox'>
        {buffetbrandsdata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

  
      <div className='quickstartbox'>
    <h1 >All Dinner Buffets </h1>
    <Slider {...quick}>
    {buffetdinnerdata.map((el)=>{
        return (
            <div className='buffetdinner' key={el.id}>
                <Image src={el.logo} alt="brands" />
                <hr />
    <Text  >{el.tag}</Text>
    <hr />
    <Text fontSize='sm' style={{color:"tomato"}}> {el.des}</Text>
    <hr />
          <Box className='nearbypricebox'>
          <p >{el.Rs}</p>
         
          </Box>
            </div>
        )
       })}
    </Slider>
      
      </div>
      <Footer/>
   </>
  )
}

export default Buffetpage