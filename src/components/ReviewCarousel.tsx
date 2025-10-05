"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  location: string;
  rating: number;
  text: string;
  source: string;
  date?: string;
}

interface ReviewCarouselProps {
  reviews: Review[];
}

export default function ReviewCarousel({ reviews }: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      return nextIndex >= reviews.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexCalc = prevIndex - 3;
      return prevIndexCalc < 0
        ? Math.max(0, reviews.length - 3)
        : prevIndexCalc;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Toon altijd 3 reviews tegelijk
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  if (visibleReviews.length < 3) {
    // Als we aan het einde zijn, vul aan met reviews van het begin
    visibleReviews.push(...reviews.slice(0, 3 - visibleReviews.length));
  }

  const totalSlides = Math.ceil(reviews.length / 3);

  return (
    <div className="relative">
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {visibleReviews.map((review, index) => (
          <div
            key={`${currentIndex}-${index}`}
            className="bg-[#1E1E1E] rounded-lg p-4 transition-all duration-300 hover:transform hover:scale-105"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-[#CADA44] fill-current"
                  />
                ))}
              </div>
              <span className="text-xs bg-[#CADA44] text-[#1E1E1E] px-2 py-1 rounded">
                {review.source}
              </span>
            </div>
            <p className="text-white mb-3 italic text-sm leading-relaxed">
              &ldquo;{review.text}&rdquo;
            </p>
            <div className="pt-3">
              <div className="font-semibold text-white text-sm">
                {review.name}
              </div>
              <div className="text-[#CADA44] text-xs">{review.location}</div>
              {review.date && (
                <div className="text-white text-xs mt-1">{review.date}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {reviews.length > 3 && (
        <>
          {/* Arrow Buttons */}
          <div className="flex justify-center items-center space-x-4 mb-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-[#1E1E1E] hover:bg-[#CADA44] hover:text-[#1E1E1E] transition-all duration-300"
              aria-label="Vorige reviews"
            >
              <ChevronLeft className="h-4 w-4 text-[#CADA44]" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * 3)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    Math.floor(currentIndex / 3) === index
                      ? "bg-[#CADA44]"
                      : "bg-[#1E1E1E]"
                  }`}
                  aria-label={`Ga naar slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-[#1E1E1E] hover:bg-[#CADA44] hover:text-[#1E1E1E] transition-all duration-300"
              aria-label="Volgende reviews"
            >
              <ChevronRight className="h-4 w-4 text-[#CADA44]" />
            </button>
          </div>

          {/* Progress indicator */}
          <div className="text-center text-xs text-white">
            {currentIndex + 1} - {Math.min(currentIndex + 3, reviews.length)}{" "}
            van {reviews.length} reviews
          </div>
        </>
      )}
    </div>
  );
}
