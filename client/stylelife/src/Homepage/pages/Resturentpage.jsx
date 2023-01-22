

import React from 'react'
import { Box, Text,Image } from '@chakra-ui/react'
import "../css/resturentpage.css"
import {useNavigate} from "react-router-dom"
import { nearbydata, promocodedata, resbrandsdata, saloonservicedata } from '../requireddata'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const navbararray=[
  {src:"https://img4.nbstatic.in/tr:w-/636ce20122156b000b884b63.png",alt:"res",text:"Buffet Deals",go:"buffet"},
  {src:"https://img4.nbstatic.in/tr:w-/5fa225165cc6f2000bcb6dbb.png",alt:"res",text:"All Deals",go:""}
]

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

const Resturentpage = () => {
  const navigate=useNavigate()

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
     <div className='resnavbardiv'>
     {navbararray.map((el)=>{
        return <Box className='resnavbarbox' onClick={()=>navigate(`/${el.go}`)}>
            <Image src={el.src} alt={el.alt} />
            <Text>{el.text}</Text>
        </Box>
     })}
   </div>

    <Box className='resbrandheading'>
      <h1>Top Brands</h1>
    </Box>

   <Box className='resbrandsbox'>
      {resbrandsdata.map((el)=>{
        return (
          <Box className='insideresbrand' >
            <Image src={el.logo} alt={el.alt} />
            
        </Box>
        )
      })}
   
   </Box>

   <Box className='discountlogo'>
  <Image src="https://img4.nbstatic.in/tr:w-2800/627b504f3b031b000b774d6d.jpg" alt="dis" />
   </Box>

   <Box className='nearbyheading'>
     <h1>Top Rated Resturent!</h1>
     </Box>

      <Box className='dealbox'>
     
       {nearbydata.map((el)=>{
  return (
    <Box className='insidenearby' key={el.id}>
    <Image src={el.logo} alt={el.alt} />
    <hr />
    <Text  >{el.tag}</Text>
    <hr />
    <Text fontSize='sm' style={{color:"tomato"}}> {el.offers}</Text>
    <hr />
          <Box className='nearbypricebox'>
          <p >₹{el.Rs}</p>
          <p >₹{el.discount}</p>
          </Box>

  </Box>
  )
       })}
 </Box>



 <div className='promobox'>
    <h1 >Top Brands</h1>
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

export default Resturentpage