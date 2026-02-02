"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CarouselItem from "./CarouselItem";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Item {
  imageUrl: string;
  title: string;
  desc: string;
  buttonText: string;
}

interface CarouselProps {
  items: Item[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    zIndex: 1,
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  }),
  center: {
    x: 0,
    zIndex: 2,
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    zIndex: 1,
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0
  })
};

const Carousel = ({ items }: CarouselProps) => {
  const [[currentIndex, direction], setState] = useState<[number, number]>([0, 0]);

  const next = () => setState([(currentIndex + 1) % items.length, 1]);
  const prev = () => setState([(currentIndex - 1 + items.length) % items.length, -1]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden 
    ">
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
          transition={{
            x: { type: "tween", duration: 0.45, ease: "easeInOut" }
          }}
          className="absolute w-full h-full"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        >
         
          <CarouselItem
            imageUrl={items[currentIndex].imageUrl}
            title={items[currentIndex].title}
            desc={items[currentIndex].desc}
            buttonText={items[currentIndex].buttonText}
          />
        </motion.div>
      </AnimatePresence>

      {/* NAV BUTTONS */}
      <div className="absolute bottom-6 right-6 flex gap-4 z-30">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronLeft className="text-black" size={22} />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center cursor-pointer"
        >
          <ChevronRight className="text-black" size={22} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;