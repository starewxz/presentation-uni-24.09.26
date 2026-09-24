import React from 'react';
import { 
  Crown, 
  MapPin, 
  ZoomIn, 
  Sparkles, 
  Calendar, 
  BookMarked, 
  ShieldCheck, 
  Award,
  ChevronRight,
  TrendingUp,
  Compass,
  Building2,
  Users
} from 'lucide-react';

export default function SlideRenderer({ slide, onZoomImage }) {
  if (!slide) return null;

  const isTitleSlide = slide.id === 1;
  const isFinalSlide = slide.id === 12;

  return (
    <div className="w-full h-full flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-6 max-w-7xl mx-auto select-none animate-fade-in">
      {/* Top Meta Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
            <Crown className="w-3 h-3 text-gupta-gold" />
            {slide.chapter}
          </span>
          <span className="hidden sm:flex items-center gap-1 text-xs text-gupta-sandstoneMuted px-2.5 py-0.5 rounded-full bg-gupta-cardLight/50 border border-gupta-border">
            <Calendar className="w-3 h-3 text-gupta-gold" />
            {slide.period}
          </span>
        </div>

        {slide.sourceRef && (
          <div className="hidden md:flex items-center gap-1.5 text-[11px] text-gupta-sandstoneMuted bg-gupta-dark/60 border border-gupta-border px-3 py-1 rounded-full">
            <BookMarked className="w-3 h-3 text-gupta-bronze" />
            <span className="truncate max-w-xs">{slide.sourceRef}</span>
          </div>
        )}
      </div>

      {/* Main Title Section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gupta-sandstone via-gupta-goldLight to-gupta-gold">
          {slide.title}
        </h1>
        <p className="text-sm sm:text-base text-gupta-sandstoneMuted mt-1 font-sans">
          {slide.subtitle}
        </p>
        <div className="gold-separator mt-3" />
      </div>

      {/* Content Body: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Minimalistic Bullet Cards & Stats (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Key Bullet Cards (High impact, minimal text) */}
          <div className="space-y-2.5">
            {slide.keyPoints.map((point, index) => (
              <div 
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-3.5 flex items-start gap-3.5 group"
              >
                <div className="mt-0.5 w-6 h-6 rounded-lg bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30 flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold group-hover:bg-gupta-gold group-hover:text-gupta-dark transition-colors">
                  0{index + 1}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gupta-gold tracking-wide">
                    {point.label}
                  </h4>
                  <p className="text-xs sm:text-sm text-gupta-sandstone/90 mt-0.5 leading-relaxed font-sans">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Element: Slide 5 Comparison Table */}
          {slide.comparisonTable && (
            <div className="glass-panel rounded-xl p-3 border border-gupta-gold/30 overflow-hidden">
              <div className="text-[11px] uppercase tracking-wider text-gupta-gold font-semibold mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                <span>Порівняльна таблиця експансії Самудрагупти:</span>
              </div>
              <div className="space-y-1.5 text-xs">
                {slide.comparisonTable.map((row, idx) => (
                  <div key={idx} className="p-2 rounded bg-gupta-dark/70 border border-gupta-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-gupta-gold">{row.region}</span>
                    <span className="text-gupta-sandstone/80 text-[11px] sm:text-right">{row.result}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Element: Slide 8 Administrative Hierarchy Tree */}
          {slide.hierarchy && (
            <div className="glass-panel rounded-xl p-3 border border-gupta-gold/30">
              <div className="text-[11px] uppercase tracking-wider text-gupta-gold font-semibold mb-2 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Вертикаль влади в імперії:</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                {slide.hierarchy.map((item, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-gupta-dark/80 border border-gupta-border">
                    <div className="text-gupta-gold font-semibold text-[11px]">{item.level}</div>
                    <div className="text-gupta-sandstone text-[10px] mt-0.5 font-medium">{item.leader}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Metric / Highlight Cards */}
          {slide.stats && (
            <div className="grid grid-cols-3 gap-2.5 pt-1">
              {slide.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-gupta-dark/75 border border-gupta-border/80 rounded-xl p-2.5 sm:p-3 text-center transition-all hover:border-gupta-gold/50"
                >
                  <div className="text-sm sm:text-base font-serif font-bold text-gupta-gold tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gupta-sandstoneMuted mt-0.5 line-clamp-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Real Thematic Artifact Card (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div 
            onClick={() => onZoomImage(slide.image, slide.title)}
            className="group relative rounded-2xl overflow-hidden border border-gupta-border hover:border-gupta-gold/70 shadow-2xl transition-all duration-300 bg-black/40 cursor-pointer"
          >
            {/* Artifact Image Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden flex items-center justify-center bg-black/60">
              <img
                src={slide.image?.src}
                alt={slide.image?.caption || slide.title}
                className="w-full h-full object-cover sm:object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gupta-dark via-transparent to-transparent opacity-60" />

              {/* Badge top-left */}
              {slide.image?.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-gupta-dark/80 backdrop-blur-md border border-gupta-gold/40 text-[11px] font-medium text-gupta-gold flex items-center gap-1.5 shadow-lg">
                  <Award className="w-3 h-3" />
                  <span>{slide.image.badge}</span>
                </div>
              )}

              {/* Zoom hint top-right */}
              <div className="absolute top-3 right-3 p-2 rounded-full bg-gupta-dark/80 backdrop-blur-md border border-gupta-border text-gupta-sandstone group-hover:text-gupta-gold group-hover:border-gupta-gold/50 transition-colors shadow-lg">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Artifact Caption & Attribution Footer */}
            <div className="p-3.5 bg-gupta-card/90 backdrop-blur-md border-t border-gupta-border">
              <h4 className="text-xs font-semibold text-gupta-sandstone group-hover:text-gupta-gold transition-colors flex items-center justify-between">
                <span>{slide.image?.caption}</span>
              </h4>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-gupta-sandstoneMuted">
                <MapPin className="w-3 h-3 text-gupta-bronze flex-shrink-0" />
                <span className="truncate">{slide.image?.location}</span>
              </div>
            </div>
          </div>
          
          <p className="text-[11px] text-center text-gupta-sandstoneMuted/80 mt-2 italic">
            * Натисніть на зображення для детального огляду артефакту
          </p>
        </div>
      </div>
    </div>
  );
}
