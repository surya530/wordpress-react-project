


// // Slider.tsx
// import React from "react";
// import Slider from "react-slick";

// const Carousel : React.FC<any> = (props) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   };

//   return (
//     <Slider {...settings}>
//       {/* <div>
//         <h3>Slide 1</h3>
//       </div>
//       <div>
//         <h3>Slide 2</h3>
//       </div>
//       <div>
//         <h3>Slide 3</h3>
//       </div>
//       <div>
//         <h3>Slide 4</h3>
//       </div> */}
//       {props.children}
//     </Slider>
//   );
// };

// export default Carousel;


// import React from "react";
import Slider from "react-slick";

export default function Carousel(props : any) {
  var settings = {
    dots: true,
    centerMode: props && props.centerMode,
    // centerPadding: "60px",
    infinite: true,
    speed: 500,
    slidesToShow: props && props.slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div 
        // className="h-[400px] w-[90%] m-auto"
        className={props.classs}
        >

    <Slider {...settings}>
      {/* <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
      {props.children}
    </Slider>
        </div>
  );
}