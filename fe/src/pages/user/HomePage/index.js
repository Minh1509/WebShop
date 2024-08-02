import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import Img1 from "assets/users/images/categrories/camtuoi.jpg";
import Img2 from "assets/users/images/categrories/hoaquatuoi.jpg";
import Img3 from "assets/users/images/categrories/sua.jpg";
import Img4 from "assets/users/images/categrories/suatuoi.jpg";
import Img5 from "assets/users/images/categrories/thitutoi.jpg";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const Categories_Item = [
    {
      name: "Cam tuơi",
      Img: Img1,
    },
    {
      name: "Hoa quả tưới",
      Img: Img2,
    },
    {
      name: "Sữa tươi",
      Img: Img3,
    },
    {
      name: "Sữa",
      Img: Img4,
    },
    {
      name: "Thịt tươi",
      Img: Img5,
    },
  ];
  return (
    <>
      {/* Categories Begin */}
      <div className="container container_categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {Categories_Item.map((item, key) => (
            <div
              key={key}
              className="categories_slider_item"
              style={{ backgroundImage: `url(${item.Img})` }}
            >
              <p>{item.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/* Categories End */}
    </>
  );
};

export default HomePage;
