import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="footer_about">
                <h1>WebShop</h1>
                <ul>
                  <li>Địa chỉ: 58 Tố Hữu, Nam Từ liêm , Hà Nội</li>
                  <li>Phone: 2909022</li>
                  <li>Email:nguyenquangminh</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="footer_widget">
                <h6 className="">Cửa hàng</h6>
                <ul>
                  <li>
                    <Link to="">Liên hệ</Link>
                  </li>
                  <li>
                    <Link to="">Thông tin về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to="">Sản phẩm kinh doanh</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="profile">Thông tin cá nhân</Link>
                  </li>
                  <li>
                    <Link to="">Giỏ hàng</Link>
                  </li>
                  <li>
                    <Link to="">Danh sách ưa thích</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="footer_widget">
                <h6>Khuyến mãi & ưu đãi</h6>
                <p>Đăng ký nhận thông tin tại đây</p>
                <div>
                  <form action="">
                    <div className="input_group">
                      <input type="text" placeholder="Nhập email"></input>
                      <button type="submit" className="button_submmit">
                        Đăng ký
                      </button>
                    </div>
                  </form>
                </div>
                <div className="footer_widget_social">
                  <div>
                    <CiFacebook />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
