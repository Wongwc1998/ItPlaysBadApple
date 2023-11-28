"use client";

import React, { forwardRef } from 'react';
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";

// Import CarouselProps type if available from 'react-multi-carousel'
import { CarouselProps } from "react-multi-carousel";

interface CarouselWrapperProps extends CarouselProps {
  children: React.ReactNode;
}

const Carousel = dynamic(
  () => import("react-multi-carousel").then((mod) => mod.default),
  {
    ssr: false,
  }
);

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="carousel-wrapper py-5">
      <Carousel {...props}>{children}</Carousel>
    </div>
  );
};

export default CarouselWrapper;
