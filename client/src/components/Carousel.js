import React, { Component } from "react";
import InfiniteCarousel from "react-leaf-carousel";
export default class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cities = this.props.cities;
    return (
      <div>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          {cities.map((city, index) => {
            return (
              <div key={city.id}>
                <img
                  className="imgCarsoul rounded  d-block w-100"
                  // style={style.img}
                  src={city.picture}
                  alt=""
                />
                <p className="p-4 mt-4 card-title">{city.name}</p>
              </div>
            );
          })}
        </InfiniteCarousel>
      </div>
    );
  }
}
