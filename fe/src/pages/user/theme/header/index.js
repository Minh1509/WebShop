import React from "react";
import "./style.scss";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { formatter } from "utils/formatter";

const Header = () => {
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
                  <li>Miễn phí vận chuyển cho đơn hàng trên {formatter(200000)}</li>
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
    </>
  );
};

export default Header;
