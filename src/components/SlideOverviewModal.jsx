import React from 'react';
import { X, Layers, ArrowRight } from 'lucide-react';

export default function SlideOverviewModal({
  isOpen,
  onClose,
  slides,
  currentSlide,
  onSelectSlide
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gupta-dark/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in select-none">
      <div className="w-full max-w-6xl max-h-[90vh] bg-gupta-card border border-gupta-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-gupta-border flex items-center justify-between bg-gupta-cardLight/50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-gupta-sandstone">
                Огляд структури презентації
              </h2>
              <p className="text-xs text-gupta-sandstoneMuted">
                {slides.length} слайдів (регламент: 10 хв) за підручником О. П. Крижанівського «Історія Стародавнього Сходу»
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gupta-sandstoneMuted hover:text-gupta-sandstone hover:bg-gupta-dark border border-transparent hover:border-gupta-border transition-all"
            title="Закрити огляд (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Grid of Slides */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {slides.map((slide, idx) => {
            const isCurrent = currentSlide === idx;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(idx);
                  onClose();
                }}
                className={`group relative rounded-xl border p-3 flex flex-col justify-between cursor-pointer transition-all duration-200 overflow-hidden ${
                  isCurrent
                    ? 'bg-gupta-cardLight border-gupta-gold shadow-gold-glow scale-[1.02]'
                    : 'bg-gupta-dark/60 hover:bg-gupta-cardLight/50 border-gupta-border hover:border-gupta-gold/60'
                }`}
              >
                {/* Top preview bar */}
                <div>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-2.5 bg-black/40 border border-gupta-border/40">
                    <img
                      src={slide.image?.src}
                      alt={slide.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded bg-gupta-dark/80 backdrop-blur-sm border border-gupta-border text-[10px] font-mono font-bold text-gupta-gold">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    {isCurrent && (
                      <div className="absolute top-1.5 right-1.5 px-2 py-0.5 rounded bg-gupta-gold text-gupta-dark text-[10px] font-bold">
                        Поточний
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-gupta-gold font-medium block mb-1">
                    {slide.chapter}
                  </span>
                  <h3 className="text-xs font-semibold text-gupta-sandstone line-clamp-1 group-hover:text-gupta-gold transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-[11px] text-gupta-sandstoneMuted line-clamp-1 mt-0.5">
                    {slide.subtitle}
                  </p>
                </div>

                {/* Bottom meta */}
                <div className="mt-3 pt-2 border-t border-gupta-border/50 flex items-center justify-between text-[10px] text-gupta-sandstoneMuted">
                  <span>{slide.period}</span>
                  <ArrowRight className="w-3 h-3 text-gupta-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-gupta-dark/60 border-t border-gupta-border text-center text-xs text-gupta-sandstoneMuted">
          Клацніть на слайд для швидкого переходу • Натисніть <kbd className="px-1.5 py-0.5 rounded bg-gupta-card border border-gupta-border text-gupta-gold font-mono">O</kbd> або <kbd className="px-1.5 py-0.5 rounded bg-gupta-card border border-gupta-border text-gupta-gold font-mono">Esc</kbd> щоб закрити
        </div>
      </div>
    </div>
  );
}
