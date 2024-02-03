import { Carousel } from "flowbite-react";
import Image from "next/image";


const HomeBanner = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8">
          <div className="mx-auto px-8 py-12  flex flex-col gap-2 md:flex-row items-center justify-evenly">
            <div className="text-center mb-8 md:mb-0">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
                Summer Sale
              </h1>
              <p className="text-lg md:text-xl text-white">
                Enjoy discounts on selected items
              </p>
              <p className="text-2xl md:text-5xl text-yellow-300 font-bold">
                GET 50% OFF
              </p>
            </div>
            <div className="w-1/3 relative aspect-video ">
              <Image
                              src="/public/images/Only B- Logo-01.svg"
                              fill
                              alt="Picture of fashion & mobile devices "
                              className="object-contain"           />
            </div>
          </div>
        </div>

    
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
};

export default HomeBanner;
