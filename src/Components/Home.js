import React from "react";
import { Link } from "react-router-dom";

import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import theme from '../images/bootstrap.png';
import Header from "./Header";
import Footer from "./Footer";


const Home = () => {

    return (<React.Fragment>
        <Header />
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={theme} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the  most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
            </div>
        </div>
        <section className="bg-secondary">
            <div className="container px-4 py-5" id="hanging-icons">
                <h2 className="pb-2 border-bottom">Features</h2>
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">

                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <Link to="#" className="btn btn-primary">
                                Primary button
                            </Link>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">

                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <Link to="#" className="btn btn-primary">
                                Primary button
                            </Link>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">

                        </div>
                        <div>
                            <h3 className="fs-2 text-body-emphasis">Featured title</h3>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <Link to="#" className="btn btn-primary">
                                Primary button
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       <Footer />
    </React.Fragment>)
}

export default Home;