import Section from "@/components/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Gallery = ({ images = [], showThumbnail, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className={cn("relative pb-12 bg-neutral-100 overflow-hidden", className)}
    >
      <img
        src="/orange-dots.png"
        alt="pontinhos laranja"
        className="absolute z-10 w-44 -right-20 top-8 md:-right-8 lg:right-8"
      />

      <Carousel className="px-8 z-40 lg:px-20" opts={{ align: "start" }}>
        <CarouselContent
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Section
                title={
                  <>
                    <div className="lg:text-amber-500 text-primary text-xl">
                      Melhores ofertas personalizadas
                    </div>
                    <div className="md:text-5xl lg:text-7xl text-stone-900">
                      Queima de stoque Nike 🔥{" "}
                    </div>
                  </>
                }
                link={{ text: "Ver ofertas", href: "/productlist" }}
                image={
                  <div className="flex items-center justify-center h-72 md:w-1/2">
                    <img
                      src={img.src}
                      alt="sapato em promocao"
                      className="w-96 lg:w-[400px] lg:-mb-12"
                    />
                  </div>
                }
                className="py-8 gap-4 md:flex-row-reverse"
              >
                <div className="text-lg mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
                </div>
              </Section>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          onClick={goToPrev}
          disabled={currentIndex < 0}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
        >
          <img src={"/Search.png"} alt="Anterior" />
        </CarouselPrevious>

        <CarouselNext
          onClick={goToNext}
          disabled={currentIndex >= images.length}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
        >
          <img src={"/Search.png"} alt="Próxima" />
        </CarouselNext>
      </Carousel>

      <div className="flex gap-4 overflow-auto w-full justify-center absolute bottom-8">
        {images.map((img, index) =>
          showThumbnail ? (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "w-28 h-24  rounded-lg flex items-center justify-center p-2",
                currentIndex === index && "border-2 border-pink-600"
              )}
            >
              <img
                src={img.src}
                alt="imagem do carrousel"
                className="max-w-20"
              />
            </button>
          ) : (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className={cn(
                "size-3 rounded-full",
                currentIndex === index ? "bg-primary" : "bg-stone-300"
              )}
            ></button>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
