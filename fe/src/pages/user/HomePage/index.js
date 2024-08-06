import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {AiOutlineEye} from "react-icons/ai";
import {Link} from "react-router-dom";

import Img1 from "assets/users/images/categrories/camtuoi.jpg";
import Img2 from "assets/users/images/categrories/hoaquatuoi.jpg";
import Img3 from "assets/users/images/categrories/sua.jpg";
import Img4 from "assets/users/images/categrories/suatuoi.jpg";
import Img5 from "assets/users/images/categrories/thitutoi.jpg";
import FeatImg1 from "assets/users/images/features/thịt nạc.jpg";
import FeatImg2 from "assets/users/images/features/chuối.jpg";
import FeatImg3 from "assets/users/images/features/ổi.jpg";
import FeatImg4 from "assets/users/images/features/táo.jpg";
import FeatImg5 from "assets/users/images/features/mít.jpg";
import FeatImg6 from "assets/users/images/features/thịt bò.jpg";
import FeatImg7 from "assets/users/images/features/hamburger.jpg";
import FeatImg8 from "assets/users/images/features/xúc xích.jpg";
import bannerImg1 from "assets/users/images/banner/banner1.jpg";
import bannerImg2 from "assets/users/images/banner/banner2.jpg";
import {formatter} from "utils/formatter";
import {IoCartOutline} from "react-icons/io5";


const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000}, items: 5,
        }, desktop: {
            breakpoint: {max: 3000, min: 1024}, items: 4,
        }, tablet: {
            breakpoint: {max: 1024, min: 464}, items: 2,
        }, mobile: {
            breakpoint: {max: 464, min: 0}, items: 1,
        },
    };
    const Categories_Item = [{
        name: "Cam tuơi", Img: Img1,
    }, {
        name: "Hoa quả tưới", Img: Img2,
    }, {
        name: "Sữa tươi", Img: Img3,
    }, {
        name: "Sữa", Img: Img4,
    }, {
        name: "Thịt tươi", Img: Img5,
    },];
    const featureProduct = {
        all: {
            title: "Toàn bộ", products: [

                {
                    name: "Chuối", img: FeatImg2, price: 17800,
                }, {
                    name: "Thịt nạc", img: FeatImg1, price: 20000,
                }, {
                    name: "Thịt bò", img: FeatImg6, price: 20000,
                }, {
                    name: "Hamburger", img: FeatImg7, price: 30000,
                }, {
                    name: "Xúc xích", img: FeatImg8, price: 30000,
                }, {
                    name: "Ổi", img: FeatImg3, price: 17800,
                }, {
                    name: "Táo", img: FeatImg4, price: 17800,
                }, {
                    name: "Mít", img: FeatImg5, price: 17800,
                },],
        }, fruits: {
            title: "Hoa quả", products: [{
                name: "Chuối", img: FeatImg2, price: 17800,
            }, {
                name: "Ổi", img: FeatImg3, price: 17800,
            }, {
                name: "Táo", img: FeatImg4, price: 17800,
            }, {
                name: "Mít", img: FeatImg5, price: 17800,
            },],
        }, meat: {
            title: "Thịt tươi", products: [{
                name: "Thịt nạc", img: FeatImg1, price: 20000,
            }, {
                name: "Thịt bò", img: FeatImg6, price: 20000,
            }]
        }, food: {
            title: "Thức ăn nhanh", products: [{
                name: "Hamburger", img: FeatImg7, price: 30000,
            }, {
                name: "Xúc xích", img: FeatImg8, price: 30000,
            },]
        }
    };
    const renderFeaturedProduct = (data) => {
        const tabList = [];
        const tabPanels = [];
        Object.keys(data).forEach((key, index) => {
            tabList.push(<Tab key={index}>{data[key].title}</Tab>);
            const tabPanel = [];
            data[key].products.forEach((item, j) => {
                tabPanel.push(<div className="col-lg-3" key={j}>
                    <div className="feature_item">
                        <div
                            className="feature_item_pic"
                            style={{backgroundImage: `url(${item.img})`}}
                        >
                            <ul className="feature_item_pic_hover">
                                <li>
                                    <AiOutlineEye/>
                                </li>
                                <li>
                                    <IoCartOutline/>
                                </li>
                            </ul>
                        </div>
                        <div className="feature_item_text">
                            <h6>
                                <Link to="">{item.name}</Link>
                            </h6>
                            <span>{formatter(item.price)}</span>
                        </div>
                    </div>
                </div>);
            });
            tabPanels.push(tabPanel);
        });

        return (<Tabs>
                <TabList>{tabList}</TabList>
                {tabPanels.map((item, key) => (<TabPanel key={key} className="row">
                        {item}
                    </TabPanel>))}
            </Tabs>);
    };
    return (<>
            {/* Categories Begin */}
            <div className="container container_categories_slider">
                <Carousel responsive={responsive} className="categories_slider">
                    {Categories_Item.map((item, key) => (<div
                            key={key}
                            className="categories_slider_item"
                            style={{backgroundImage: `url(${item.Img})`}}
                        >
                            <p>{item.name}</p>
                        </div>))}
                </Carousel>
            </div>
            {/* Categories End */}
            {/* Features Begin */}
            <div className="container">
                <div className="features">
                    <div className="section_title">
                        <h2>Sản phẩm nổi bật</h2>
                    </div>
                    {renderFeaturedProduct(featureProduct)}
                </div>
            </div>
            {/* Features End */}
            <div className="container">
                <div className="banner ">
                    <div className="banner_pic col-lg-6">
                        <img src={bannerImg1} alt="banner"/>

                    </div>
                    <div className="banner_pic col-lg-6">
                        <img src={bannerImg2} alt="banner"/>

                    </div>
                </div>
            </div>
        </>);
};

export default HomePage;
