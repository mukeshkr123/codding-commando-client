"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import apiClient from "lib/api-client";
import Image from "next/image";

export function CourseSlider() {
  const [banners, setBanners] = React.useState([]);

  const fetchCourseBanners = async () => {
    try {
      const { data } = await apiClient.get("/banners");
      setBanners(data?.banners);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchCourseBanners();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  if (!banners) {
    return null;
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className=" w-full max-w-[82%] lg:max-w-[95%]  "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="w-full">
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Image
                src={banner.banner}
                alt={banner.title}
                layout="responsive"
                ive
                width={300}
                height={200}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-2 h-6 w-6 lg:mr-2 lg:h-8 lg:w-8" />
      <CarouselNext className="mr-2 h-6 w-6 lg:h-8 lg:w-8" />
    </Carousel>
  );
}
