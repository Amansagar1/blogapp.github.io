import React from 'react';
import './Single.css';
import userImage from '../Images/IMG_9873.JPG';
import banner from '../Images/sabri-tuzcu-wunVFNvqhfE-unsplash.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen,faTrash} from "@fortawesome/free-solid-svg-icons";
import{Link} from 'react-router-dom'
import Menu from '../components/Menu';
const Single = () => {
  return (
   <>
    <div className="single">
      <div className="content">
        <img className='banner' src={banner} alt="" />
        <div className="user">
          <img className='userimg
          ' src={userImage} alt="userimage" />
          <div className="info">
            <span>sagar</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <span>
              <Link to='/write'>
          <FontAwesomeIcon icon={faPen} />
          </Link></span>
          <FontAwesomeIcon icon={faTrash} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo voluptatem tempore suscipit earum similique nesciunt delectus, magnam molestias beatae ab,<br /> eaque soluta repellat, cum id dolores fugit at? Nemo?</h1>
        <br />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis reiciendis, deserunt quasi inventore neque hic dicta exercitationem iste culpa error asperiores eligendi? Labore, nam! Velit placeat quas numquam dicta!
  <br />
Saepe suscipit, exercitationem eum at rem corporis itaque id odio inventore distinctio error facere cupiditate totam aperiam ab atque? Eveniet aliquid deserunt labore et laborum architecto dolore dolorem dicta. Iure!
<br />
Molestiae sunt doloribus quidem id repellendus consectetur praesentium sequi ut sint nihil, accusamus debitis dolorem nisi ipsum ea. Numquam libero accusamus vitae sed perspiciatis, veritatis repudiandae sunt id maiores doloribus! <br />
Optio quod praesentium repudiandae assumenda est quam molestiae hic id. Cum, velit! Veritatis modi mollitia excepturi, inventore expedita iusto illum aut beatae facere alias pariatur repellat sit enim recusandae? Iusto.  abou
</p> <br /><br /><br />
<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo voluptatem tempore suscipit earum similique nesciunt delectus, magnam molestias beatae ab,<br /> eaque soluta repellat, cum id dolores fugit at? Nemo?</h1>
        <br />
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus nobis reiciendis, deserunt quasi inventore neque hic dicta exercitationem iste culpa error asperiores eligendi? Labore, nam! Velit placeat quas numquam dicta!
  <br />
Saepe suscipit, exercitationem eum at rem corporis itaque id odio inventore distinctio error facere cupiditate totam aperiam ab atque? Eveniet aliquid deserunt labore et laborum architecto dolore dolorem dicta. Iure!
<br />
Molestiae sunt doloribus quidem id repellendus consectetur praesentium sequi ut sint nihil, accusamus debitis dolorem nisi ipsum ea. Numquam libero accusamus vitae sed perspiciatis, veritatis repudiandae sunt id maiores doloribus! <br />
Optio quod praesentium repudiandae assumenda est quam molestiae hic id. Cum, velit! Veritatis modi mollitia excepturi, inventore expedita iusto illum aut beatae facere alias pariatur repellat sit enim recusandae? Iusto.  abou


</p> 
       
      </div>
     
    <Menu />
    </div>
    </>
  
  );
};

export default Single;
