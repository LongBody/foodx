import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import '../../../scss/productCategory.scss'


function ProductCategory() {

    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 550) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['navbar'] ;
    if (scrolled) {
        navbarClasses.push('scrolled');
    }
    else {
        navbarClasses.push('product-category-wrapper');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <Container>
                <ul className="product-category-list">
                    <li className="product-category-item">COMBO</li>
                    <li className="product-category-item">CHICKENJOY</li>
                    <li className="product-category-item">SPAGHETTI</li>
                    <li className="product-category-item">BURGER & RICE</li>
                    <li className="product-category-item">SNACKS</li>
                    <li className="product-category-item">DESSERTS</li>
                </ul>
            </Container>
        </div>
    );
}




export default ProductCategory;