import React, { useEffect } from 'react';
import '../../../scss/cart.scss'

function Cart(props) {

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;

        let heightScreen = window.screen.height;
        var body = document.body,
            html = document.documentElement;
        var height = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);
        var dynamicHeight = height - heightScreen 
        console.log(dynamicHeight)
        console.log(offset)
        if (offset > dynamicHeight) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let cartClasses = ["cart__product__wrapper "]
    if (scrolled) {
        cartClasses.push("cartScrolled");
    }
    else {
        cartClasses.push("cart__product__fixedInBottom");
    }

    return (
        <div className={cartClasses.join("")}>
            <div className="cart__product__sub">
                <span className="iconify" data-icon="ps:cart-supermarket" data-inline="false"></span>
                <span className="cart__price__product">0 $</span>
            </div>
        </div>
    );
}




export default Cart;