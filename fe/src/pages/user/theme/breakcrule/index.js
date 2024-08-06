import React from "react";
import {Link} from "react-router-dom";
import "./style.scss"
import {ROUTER} from "../../../../utils/router";

const BreakCrule = (props) => {
    return (<div className="breakcrule">
        <div className="breakcrule_text">
            <h1>Web Shop</h1>
            <div className="breakcrule_item">
                <ul>
                    <li className="link">
                        <Link to={ROUTER.USER.HOME}>Trang chủ</Link>
                    </li>
                    <li>
                        <span>{props.name}</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>)
}
export default BreakCrule;






