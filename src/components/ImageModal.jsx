import React from 'react';
import { X, ZoomIn, MapPin, Landmark, Award } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, image, title }) {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-gupta-dark/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-gupta-card border border-gupta-gold/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-gupta-border flex items-center justify-between bg-gupta-cardLight/60">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-gupta-gold" />
            <h3 className="text-sm sm:text-base font-serif font-bold text-gupta-sandstone">
              {image.caption || title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gupta-sandstoneMuted hover:text-gupta-sandstone hover:bg-gupta-dark border border-transparent hover:border-gupta-border transition-all"
            title="Закрити (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-res Image View */}
        <div className="flex-1 bg-black/60 flex items-center justify-center p-4 overflow-hidden min-h-[300px]">
          <img
            src={image.src}
            alt={image.caption}
            className="max-h-[62vh] max-w-full object-contain rounded-lg shadow-2xl border border-gupta-border/50"
          />
        </div>

        {/* Footer / Attribution */}
        <div className="p-4 bg-gupta-cardLight/40 border-t border-gupta-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-gupta-sandstoneMuted">
            <MapPin className="w-4 h-4 text-gupta-bronze flex-shrink-0" />
            <span>{image.location || "Історична пам'ятка доби Гуптів"}</span>
          </div>
          {image.badge && (
            <span className="self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30 text-[11px] font-medium flex items-center gap-1.5">
              <Award className="w-3 h-3" />
              {image.badge}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
