import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">
          <h3>Contact</h3>
          <p>Phone: +918434120273</p>
          <p>Email: kumaramansagar01@gmail.com</p>
          <p>Area:  Bhagalpur</p>
          <p>State: Bihar</p>
        </div>
        <div className="about">
          <h3>About Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque ratione reiciendis hic porro doloribus aut laborum vero veritatis, laboriosam expedita enim iusto saepe repellendus aspernatur mollitia ea minima vitae.
          Velit vero dolor saepe harum quos pariatur tempora sint fugiat soluta, numquam molestias, fuga quaerat facere unde beatae veniam, architecto fugit nobis laudantium reprehenderit? Possimus nam voluptatem odio accusantium impedit.
         
         </p>
        </div>
      </div>
      <div className="blog" style={{padding:'10px'}}>
        <h3>Latest Blog Posts</h3>
        <ul>
          <li>
            <Link to="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ullam? Rem illum deserunt mollitia quis, voluptate a praesentium eius cupiditate quidem esse nostrum debitis ab fugiat commodi consequatur nemo quia.
           </Link>
          </li>
          <li>
            <Link to="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit aspernatur quibusdam saepe officiis eaque aut reiciendis ullam, commodi consequuntur a! Sunt accusantium repellendus magnam officiis asperiores, soluta excepturi. Neque!</Link>
          </li>
        </ul>
        <div className="social">
        <Link to="https://www.facebook.com/profile.php?id=100091592778824" className="social-link">
          Facebook
        </Link>
        <Link to="https://twitter.com/SagarKumar012" className="social-link">
          Twitter
        </Link>
        <Link to="https://www.instagram.com/art_ist_life_1/" className="social-link">
          Instagram
        </Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
