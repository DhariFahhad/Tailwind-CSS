import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "tailwindcss/tailwind.css";
import axios from "axios";
import SearchContainer from "./SearchContainer";
import Text from "./text";

export default function Image() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "BfU4p51tNGHAJgFWN0pzXpTf4vRabnPGX5RfYFemn1MSBt8NmpUtLhQH",
    },
  };

  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        "https://api.pexels.com/v1/search?query=real estate",
        config
      );
      const data = response.data.photos;
      setImages(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="mt-">
      {images.length > 0 ? (
        <Swiper slidesPerView={1}>
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="relative">
                <img
                  src={image.src.original}
                  alt={image.photographer}
                  className="h-screen w-full sm:h-screen"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center">
                  <h1>
                    <Text />
                  </h1>

                  <div className="pl-9 ">
                    <SearchContainer />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
