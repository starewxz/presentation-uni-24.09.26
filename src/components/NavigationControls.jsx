import React from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export default function NavigationControls({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  slides
}) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 py-2.5 px-4 bg-gradient-to-t from-gupta-dark via-gupta-dark/95 to-transparent backdrop-blur-sm pointer-events-none">
      <div className="max-w-4xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Left: Previous Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            currentSlide === 0
              ? 'opacity-35 cursor-not-allowed bg-gupta-card/40 text-gupta-sandstoneMuted border border-gupta-border/30'
              : 'bg-gupta-card hover:bg-gupta-cardLight text-gupta-sandstone border border-gupta-border hover:border-gupta-gold shadow-md active:scale-95'
          }`}
          title="Попередній слайд (Стрілка вліво)"
        >
          <ChevronLeft className="w-4 h-4 text-gupta-gold" />
          <span className="hidden sm:inline">Назад</span>
          <span className="hidden md:inline text-[10px] text-gupta-sandstoneMuted font-mono">←</span>
        </button>

        {/* Center: Slide dots / Quick selector */}
        <div className="flex items-center gap-1.5 sm:gap-2 bg-gupta-card/90 border border-gupta-border px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(idx)}
              className={`group relative transition-all duration-200 ${
                currentSlide === idx
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-gradient-to-r from-gupta-gold to-gupta-bronze rounded-full shadow-gold-glow'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gupta-sandstoneMuted/30 hover:bg-gupta-gold/70 rounded-full'
              }`}
              title={`Перейти до слайду ${idx + 1}: ${slide.title}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap bg-gupta-card border border-gupta-border text-[11px] text-gupta-sandstone px-2 py-1 rounded shadow-xl z-30 pointer-events-none">
                {idx + 1}. {slide.title}
              </span>
            </button>
          ))}
        </div>

        {/* Right: Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
            currentSlide === totalSlides - 1
              ? 'opacity-35 cursor-not-allowed bg-gupta-card/40 text-gupta-sandstoneMuted border border-gupta-border/30'
              : 'bg-gradient-to-r from-gupta-gold to-gupta-bronze hover:from-gupta-goldLight hover:to-gupta-gold text-gupta-dark font-semibold shadow-gold-glow active:scale-95'
          }`}
          title="Наступний слайд (Стрілка вправо / Пробіл)"
        >
          <span className="hidden sm:inline">
            {currentSlide === totalSlides - 1 ? 'Фінал' : 'Далі'}
          </span>
          <span className="hidden md:inline text-[10px] opacity-75 font-mono">→</span>
          <ChevronRight className="w-4 h-4 text-gupta-dark" />
        </button>
      </div>
    </footer>
  );
}
