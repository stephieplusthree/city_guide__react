import React, { Component } from "react";

class NotFoundPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="error-template">
                    <h1>Ops!</h1>
                    <h2></h2>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
