import React from "react";
import Row from "../components/Row";
import Header from "../containers/Header";
import requests from "../Request";

function Home() {
  return (
    <div className="home">
      <Header />
      <Row
        title="Trending"
        fetchURL={requests.requestTrending}
        movieNumber={6}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.requestTopRated}
        movieNumber={6}
      />
      <Row
        title="Up Coming"
        fetchURL={requests.requestUpcoming}
        movieNumber={6}
      />
      <Row title="Popular" fetchURL={requests.requestPopular} movieNumber={6} />
    </div>
  );
}

export default Home;
