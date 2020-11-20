import React from "react";
import { InfoConsumer } from "../context";
import Footer from "../layouts/Footer";
import Info from "../Info";

function Home() {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <InfoConsumer>
            {(value) => {
              return value.info.map(item => {
                  return <Info key={item.id} item={item} />
              })
            }}
          </InfoConsumer>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
