import React, { Component } from "react";
import Footer from "../layouts/Footer";
import { InfoConsumer } from "../context";
import NewsCard from "../NewsCard";

class News extends Component {
  render() {
    return (
      <div>
        <InfoConsumer>
          {(value) => {
            return value.news.map((item) => {
              return <NewsCard key={item.id} item={item} />;
            });
          }}
        </InfoConsumer>
        <Footer />
      </div>
    );
  }
}

export default News;
