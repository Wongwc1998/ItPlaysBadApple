import { notFound } from "next/navigation";
import { prismaDal } from "@/prismaDal";
import { Shell } from "@/components/shells/shell";
import Image from "next/image";
import { ItemCard } from "@/components/cards/item-card";
import CarouselWrapper from "@/components/CarouselWrapper";
const dal = prismaDal;
interface AuthorPageProps {
  params: {
    authorId: string;
  };
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  console.log({ params });
  const AuthorId = Number(params.authorId);
  const result = await dal.getAuthor(AuthorId);
  const items = await dal.getItemsByAuthor(AuthorId);
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
  if (!result) {
    return notFound();
  }

  return (
    <>
      <Shell>
        <div className="m-4 p-4">
          <div className="border flex flex-col md:flex-row dark:bg-slate-800 bg-gray-100 rounded authors-center justify-center">
            <div className="flex flex-col mx-4">
              <h1 className="text-xl font-bold">
                {" "}
                <div>
                  <Image
                    src={result?.thumbnail}
                    alt={result?.name}
                    layout="responsive"
                    width="0"
                    height="0"
                    className="w-full h-auto"
                  />
                </div>
                <a href={result?.url} className="text-blue-500 hover:underline">
                  {result?.name}
                </a>
              </h1>

              <p className="mt-4">{result.description}</p>
            </div>
          </div>
        </div>
      </Shell>
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
    </>
  );
}
