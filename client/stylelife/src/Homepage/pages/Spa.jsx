import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { promocodedata, saloonofferformendata, saloonslider, sparelaxingdata, spaslider, spatrendingdata } from '../requireddata'
import {Carousel} from "react-responsive-carousel"
import "../css/spa.css"
import { SampleNextArrow, SamplePrevArrow } from '../Homepage'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const navbararray=[
  {id:1,src:"https://img4.nbstatic.in/tr:w-/5ed9247e4cedfd000b21d698.png",alt:"res",text:"Full Body Massage",go:"buffet"},
  {id:2,src:"https://img4.nbstatic.in/tr:w-/5ed9249a4cedfd000b21d69a.png",alt:"res",text:"Couple Massage",go:""},
  {id:3,src:"https://img4.nbstatic.in/tr:w-/5ed924b64cedfd000b21d69c.png",alt:"res",text:"Ayurvedic Massage",go:"buffet"},
  {id:4,src:"https://img4.nbstatic.in/tr:w-/5ed924cc4cedfd000b21d69e.png",alt:"res",text:"Thai Massage",go:""},
  {id:5,src:"https://img4.nbstatic.in/tr:w-/5ed924ec4cedfd000b21d6a0.png",alt:"res",text:"All Massage ",go:""},
 
]
const Spa = () => {
  const promo = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
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
   {spaslider.map((el)=>{
    return <div id="sliderimages" key={el.src}>
        <Image src={el.logo}  alt="sliding" />
    </div>
   })}
 </Carousel>
   </div>

   <Box className='relaxingmasssagebox'>
      {sparelaxingdata.map((el)=>{
        return (
          <Box className='insiderelax' key={el.id}>
            <Image src={el.logo} />
            <Text as='b'>{el.tag}</Text>
          </Box>
        )
      })}
   </Box>

   <Box className='nearbyheading'>
     <h1>Trending Collections!</h1>
     </Box>
      <div className='nextthingbox'>
        {spatrendingdata.map((el)=>{
            return (
                <Box className='insidenextthing' key={el.id}>
           <Image src={el.logo} />
                </Box>
            )
        })}
      </div>

      <div className='promobox'>
    <h1 >More Savings!</h1>
    <Slider {...promo}>
    {promocodedata.map((el)=>{
        return (
            <>
            <div className='promologo' key={el.id}>
                <Image src={el.logo} alt="brands" />
               
            </div>
            <Text fontSize='xs' as='samp' ml={"10px"}>Valid Till {el.valid}</Text>
            </>
        )
       })}
    </Slider>

    <Box className='offerdatebox'>

    </Box>
      
      </div>
   </>
  )
}

export default Spa