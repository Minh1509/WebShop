import React, {useState} from "react";
import "./style.scss";
import BreakCrule from "../theme/breakcrule/index.js";

const ProductPage = () => {
    const search = [
        "Giá thấp đến cao",
        "Cũ đến mới",
        "Mới đến cu",
        "Gia cao den thap",
        "San pham moi nhat",
    ];
    const typeOther = [
        'Thit tuoi', 'Rau cu', "Nuoc trai cay", "Trai cay", "Hai san",
    ]
    return (
        <>
            <BreakCrule name="Sản phẩm"/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 search_price">
                        <div className="search_price_item">
                            <h2>Tìm kiếm</h2>
                            <input type="text"/>
                        </div>
                        <div className="search_price_item">
                            <h2>Mức giá</h2>
                            <div className="search_price_item_all">
                                <div className="search_price_item_all_1">
                                    <p>Từ</p>
                                    <input type="text" min={0}/>
                                </div>
                                <div className="search_price_item_all_2">
                                    <p>Đến</p>
                                    <input type="text" min={0}/>
                                </div>
                            </div>
                        </div>
                        <div className="search_price_item">
                            <h2>Sắp xếp</h2>
                            <ul className="search_price_item_sort">
                                {search.map((item, key) => (
                                    <li key={key}>{item}</li>
                                ))}
                            </ul>

                        </div>
                        <div className="search_price_item">
                            <h2>The loai khac</h2>
                            <ul className="type_other">
                                {typeOther.map((item, key) => (
                                    <li key={key}>{item}</li>
                                ))};
                            </ul>

                        </div>

                        <div className="col-lg-9">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductPage;