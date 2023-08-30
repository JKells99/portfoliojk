import React from "react";
import { Carousel } from "react-bootstrap";

const CustomCarousel = () => {
  return (
    <Carousel  className=" d-block ">
     <Carousel.Item className="d-flex justify-content-center align-items-center">
  <img
    className="img-fluid rounded-circle shadow p-5"
    src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/221852688_10157732688340728_2945249185064982377_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tlbB7EFYv68AX_s_kj8&_nc_ht=scontent-lga3-1.xx&oh=00_AfCci2ZBkezqRW1I7wXYTGU7mTO89X9nmcoOFeOoAPrdZw&oe=64F4FA10"
    alt="First slide"
    style={{ maxHeight: '1200px', maxWidth: '100%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}
  />
</Carousel.Item>

      {/* <Carousel.Item>
        <img
          className=""
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.6435-9/163054375_10157497089850728_5081867938553674443_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=EiJZ8tcHy60AX_qdIwx&_nc_ht=scontent-lga3-1.xx&oh=00_AfAJZ5j_jS8v5ygRxXkYAwAyQIsO_9eOwzh-FIpBhRCJkw&oe=6516C489"
          alt="Second slide"
        />
      </Carousel.Item> */}

      {/* Add more Carousel.Item for additional images */}
    </Carousel>
  );
};

export default CustomCarousel;
