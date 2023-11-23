
import { ItemCard } from "@/components/cards/item-card";
import { prismaDal } from "@/prismaDal";
import CarouselWrapper from "@/components/CarouselWrapper";
import React from "react";

const dal = prismaDal;

export default async function Home() {
  const items = await dal.getItems();
  // Responsive breakpoints
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <CarouselWrapper
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {items?.map((item) => (
          <ItemCard Item={item} key={item.id} />
        ))}
      </CarouselWrapper>
    </main>
  );
}
