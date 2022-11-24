import React, { useRef } from "react";
//slick slider imports
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Icon from "../../../Icon";
import Modal from "../../UI/Modal";
import Button from "../button/Button";

export default function LargeImagePopup({ contentInfo, onClose, products }) {
  //slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //slider arrows
  const customSlider = useRef();

  const renderArrows = () => {
    return (
      <div className="flex w-full justify-between">
        <div
          className="flex cursor-pointer"
          onClick={() => customSlider.current.slickPrev()}
        >
          <Icon icon="Arrow Left" size={38} className="text-darkBlue" />
        </div>
        <div
          className="flex cursor-pointer"
          onClick={() => customSlider.current.slickNext()}
        >
          <Icon icon="Arrow Right" size={38} className="text-darkBlue" />
        </div>
      </div>
    );
  };

  return (
    <Modal
      className="absolute w-full h-full bg-white z-30 text-center"
      onClose={onClose}
    >
      <div className="w-full max-w-[49.75rem] mx-auto">
        {/* close button */}
        <Button className="absolute top-8 right-8" onClick={onClose}>
          <Icon icon="Close" size={24} className="text-grayBlue" />
        </Button>
        <div className="mt-[7.25rem] text-left">
          <span className="text-2xl text-title leading-[1.875rem] font-medium">
            Facebook
          </span>
        </div>
        <Slider
          {...settings}
          ref={(slider) => (customSlider.current = slider)}
          className="mt-[2rem]"
        >
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.productImg} alt="product" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex w-full top-[31.25rem] px-8 absolute justify-between">
        {renderArrows()}
      </div>
    </Modal>
  );
}
