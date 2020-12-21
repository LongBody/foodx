import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from '../../components/header/navbar';
import Footer from '../../components/footer/footer';
import ProductGrid from '../../components/body/product/productGrid';
import Cart from '../../components/body/cart/cart';
import Banner from '../../components/body/banner/index';
import ProductCategory from '../../components/body/product/productCategory';
import '../../scss/app.scss'
import '../../scss/cart.scss'

export default function HomeLayout() {


  return (
    <div>
      <Navbar />
      <Banner/>
      <ProductCategory/>
    
    
      <Container className="paddingTop__Food">
      <ProductGrid />
      </Container>

      <Container >
        <div className="cart__app">
            <Cart />
          </div>
        </Container>
     

      <Footer />
    </div>
  );
}
