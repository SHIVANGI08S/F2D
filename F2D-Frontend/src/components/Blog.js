import React from "react";
import img1 from "../image/gallery-img-01.jpg";
import img2 from "../image/gallery-img-02.jpg";
import img3 from "../image/gallery-img-03.jpg";

const Blog = () => {
  return (
    <div className="row blog-container container">
    <p className="headline">
        Latest Blog
    </p>
    <div className="container delight">
      <div className="card blog-card my-3 mx-3 col-lg-3 card-custom" >
        <img src={img1} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Empowering Indian Farmers Through Online Platforms</h5>
          <p className="card-text">
          In India, the agricultural sector has undergone a significant transformation, thanks to the proliferation of online platforms. These platforms are playing a pivotal role in empowering Indian farmers by giving them greater control over their sales and income.
          </p>
          {/* <a href="http://www.columbia.edu/itc/sipa/nelson/newmediadev/Empowering%20Farmers%20-%20India.html" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div className="card blog-card my-3 mx-3 col-lg-3 card-custom" >
        <img src={img2} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">The Digital Shift: How E-Agri Markets are Transforming Indian Agriculture</h5>
          <p className="card-text">
          India's agriculture is undergoing a remarkable transformation as farmers embrace e-agricultural markets. These digital platforms are revolutionizing the way agricultural products are bought and sold, bringing unprecedented benefits to both farmers and consumers.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      <div className="card blog-card my-3 mx-3 col-lg-3 card-custom" >
        <img src={img3} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">From Fields to Screens: Farmers Thriving in the Digital Age</h5>
          <p className="card-text">
          The digital age has brought about a paradigm shift in the way Indian farmers conduct their businesses. Today, they are not just cultivators of the land; they are also entrepreneurs, thanks to the proliferation of e-commerce platforms tailored to their needs.
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Blog;
