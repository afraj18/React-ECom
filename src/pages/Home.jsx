
import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import { Slider1 } from '../components/Slider1';
import Category from '../components/Category';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';








export const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            {/* <Slider /> */}
            <Slider1 />
            <Category />
            <Products />
            <Newsletter />
            <Footer />

        </div>
    )
}
export default Home;
