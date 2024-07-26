import React, { useState } from "react";
import "./style.scss";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { formatter } from "utils/formatter";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTER } from "utils/router";

const Header = () => {
  const [menus, setMenus] = useState([
    {
      name: "Trang chủ",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Sản phẩm",
      path: ROUTER.USER.PRODUCT,
      isShowMenu: false,
      child: [
        {
          name: "Thịt",
          path: "",
        },
        {
          name: "Cá",
          path: "",
        },
        {
          name: "Rau củ",
          path: "",
        },
      ],
    },
    {
      name: "Cửa hàng",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Bài viết",
      path: ROUTER.USER.HOME,
    },
    {
      name: "Liên hệ",
      path: ROUTER.USER.HOME,
    },
  ]);
  return (
    <>
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-6 header-top-left">
              <div>
                <ul>
                  <li>
                    <MdOutlineMail />
                    minh@gmail.com
                  </li>
                  <li>
                    Miễn phí vận chuyển cho đơn hàng trên {formatter(200000)}
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 header-top-right">
              <div>
                <ul>
                  <li>
                    <Link to="">
                      <CiFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link to="">
                      <CiUser />
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header-logo">
              <h1>WebShop</h1>
            </div>
          </div>
          <div className="col-lg-6">
            <nav className="header_menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu.child && (
                      <ul className="header_menu_dropdown">
                        {menu.child.map((childItem, childKey) => (
                          <li key={`${childKey}-${childKey}`}>
                            <Link to={childItem.path}>{childItem.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-lg-3">
            <div className="header_cart">
              <div className="header_cart_price">
                <span>{formatter(10020030)}</span>
              </div>
              <ul>
                <li>
                  <Link to="">
                    <FaShoppingCart /> <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
