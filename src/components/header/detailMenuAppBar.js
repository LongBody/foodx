import React from 'react';
import '../../scss/appbar.scss'




export default function DetailMenu() {


    return (<div className="detail__menu__wrap">
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/ga-gion-vui-ve.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >CHICKENENJOY</h3>
        </div>
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/ga-sot-cay.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >CHILICHICKEN</h3>
        </div>
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/mi-y.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >SPAGHETTI</h3>
        </div>
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/burger-sandwich.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >BURGER & RICE</h3>
        </div>
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/phan-an-phu.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >SNACKS</h3>
        </div>
        <div>
            <img src="https://jollibee.com.vn/upload/files/menu/mon-trang-mieng.png" className="detail__menu__image" />
            <h3 className="detail__menu__title" >DESSERTS</h3>
        </div>
    </div>

    );
}

