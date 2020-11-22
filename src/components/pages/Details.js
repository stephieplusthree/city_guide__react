import React, { Component } from "react";
import { InfoConsumer } from "../context";
import Footer from "../layouts/Footer";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;

          return (
            <React.Fragment>
              <div className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* social icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-reddit" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-whatsapp" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-facebook-messenger" />
                    </div>
                  </div>
                </div>
              </div>
              {/* nav link */}
              <div className="container">
                <ul className="nav nav-tabs">
                  {/* About Place Link */}
                  <li className="nav-item">
                    <a
                      href="#aboutPlace"
                      className="nave-link active"
                      role="tab"
                      data-toggle="tab"
                    >
                      About
                    </a>
                  </li>
                  {/* Reviews Link */}
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nave-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  {/* Map Link */}
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nave-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>

                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About Place Tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>

                  {/* Reviews */}
                  <div className="tab-pane" id="reviews" role="tabpanel">
                    Reviews Content 
                  </div>

                  {/* Map */}
                  <div className="tab-pane" id="map" role="tabpanel">
                    <iframe src={maps} style={{border: '0', height: '28.125rem', width: '100%', frameborder: '0' }}></iframe>
                  </div>
                </div>
              </div>
              <Footer />
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;
