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
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
// Define the type for the button group functions if available or use 'any'
interface CustomButtonGroupProps {
  next: () => void;
  previous: () => void;
}

const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 left-4 right-4 flex justify-between w-full">
      <button
        onClick={previous}
        className="text-black" // Style your button accordingly
      >
        {"<"}
      </button>
      <button
        onClick={next}
        className="text-black" // Style your button accordingly
      >
        {">"}
      </button>
    </div>
  );
};



  return (
    <main className="min-h-screen items-center justify-between p-24">
      <CarouselWrapper
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s ease"
        transitionDuration={500}
        containerClass="carousel-container relative" // Center align carousel
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px px-2" // Add horizontal space between items
      >
        {items?.map((item) => (
          <ItemCard Item={item} key={item.id} className="px-2" /> // Add padding to each item
        ))}
      </CarouselWrapper>
    </main>
  );
}
