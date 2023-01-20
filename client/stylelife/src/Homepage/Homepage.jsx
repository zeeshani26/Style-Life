// import React, { Component } from 'react'
// import "./css/homepage.css"
// import {Box,Heading,Image,Text} from "@chakra-ui/react"
// import {useNavigate} from "react-router-dom"
// import "react-responsive-carousel/lib/styles/carousel.min.css"
// import {Carousel} from "react-responsive-carousel"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { brandsdata } from './requireddata'



// const navbararray=[
//     {src:"https://img4.nbstatic.in/tr:w-/60af2a061e2731000ba1096a.png",alt:"res",text:"Resturent Deals",go:"resturent"},
//     {src:"https://img4.nbstatic.in/tr:w-/639acd9b8db992000bac8a46.png",alt:"res",text:"Buffet Deals",go:"buffet"},
//     {src:"https://img4.nbstatic.in/tr:w-/60ac96c840e9df000b6cbf94.png",alt:"res",text:"Salon Deals",go:"saloon"},
//     {src:"https://img4.nbstatic.in/tr:w-/60ac96e240e9df000b6cbf95.png",alt:"res",text:"Spa Deals",go:"spa"},
//     {src:"https://img4.nbstatic.in/tr:w-/6201ec623b031b000b53e5b6.png",alt:"res",text:"Activities Deals",go:"activities"},
//     {src:"https://img4.nbstatic.in/tr:w-/62d67522edffcc000b060b5c.png",alt:"res",text:"Gift Deals",go:"gift"},
//     {src:"https://img4.nbstatic.in/tr:w-/62d6747fb3c621000b6fb633.png",alt:"res",text:"Health",go:"health"}
// ]
// let silderimages=[
//     {src:"https://img4.nbstatic.in/tr:w-2800/63c4f59222b317000b619c56.jpg"},
//     {src:"https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg"},
//     {src:"https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg"},
//     {src:"https://img4.nbstatic.in/tr:w-2800/63bfbb0d8db992000b7a17dc.jpg"},
//     {src:"https://img4.nbstatic.in/tr:w-2800/63b3af1e22b317000c1336a8.jpg"}
// ]

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", background: "red" }}
//         onClick={onClick}
//       />
//     );
//   }

// const Homepage = () => {
//     const navigate=useNavigate()

//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 7,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };
  
//   return (
//    <>
//      <div className='navbardiv'>
//      {navbararray.map((el)=>{
//         return <Box className='navbarbox' onClick={()=>navigate(`/${el.go}`)}>
//             <Image src={el.src} alt={el.alt} />
//             <Text>{el.text}</Text>
//         </Box>
//      })}
//    </div>
//    <div className='firstcrauser'>
//    <Carousel infiniteLoop autoPlay>
//    {silderimages.map((el)=>{
//     return <div id="sliderimages" key={el.src}>
//         <Image src={el.src}  alt="sliding" />
//     </div>
//    })}
//  </Carousel>
//    </div>


//    <div className='brands'>
//     <h1 as={"h2"}>Top Brands</h1>
//     <Slider {...settings}>
//     {brandsdata.map((el)=>{
//         return (
//             <div className='brandlogo' key={el.id}>
//                 <Image src={el.logo} alt="brands" />
//             </div>
//         )
//        })}
//     </Slider>
      
//       </div>
//    </>
//   )
// }

// export default Homepage