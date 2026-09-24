import React, { useState } from 'react';
import { X, Mic, Volume2, Copy, Check, Clock, Lightbulb, Bookmark } from 'lucide-react';

export default function SpeakerNotesDrawer({ isOpen, onClose, slide, slideIndex, totalSlides }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !slide) return null;

  const notes = slide.speechNotes || {};

  const handleCopy = () => {
    if (notes.fullText) {
      navigator.clipboard.writeText(notes.fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] lg:w-[540px] bg-gupta-card/95 backdrop-blur-xl border-l border-gupta-border shadow-2xl flex flex-col transition-all duration-300 animate-fade-in select-text">
      {/* Drawer Header */}
      <div className="p-4 sm:p-5 border-b border-gupta-border flex items-center justify-between bg-gupta-cardLight/50">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
            <Mic className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gupta-sandstone flex items-center gap-2">
              <span>Нотатки доповідача</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gupta-dark border border-gupta-border text-gupta-gold">
                Слайд {slideIndex + 1}/{totalSlides}
              </span>
            </h3>
            <p className="text-xs text-gupta-sandstoneMuted truncate max-w-[280px]">
              {slide.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-lg text-gupta-sandstoneMuted hover:text-gupta-gold hover:bg-gupta-dark border border-transparent hover:border-gupta-border transition-all"
            title="Скопіювати промову для цього слайду"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gupta-sandstoneMuted hover:text-gupta-sandstone hover:bg-gupta-dark border border-transparent hover:border-gupta-border transition-all"
            title="Закрити нотатки (N або Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
        {/* Recommended Pace Banner */}
        <div className="flex items-center justify-between bg-gupta-dark/80 border border-gupta-border/80 px-3.5 py-2.5 rounded-xl text-xs">
          <div className="flex items-center gap-2 text-gupta-sandstoneMuted">
            <Clock className="w-3.5 h-3.5 text-gupta-gold" />
            <span>Рекомендований хронометраж:</span>
          </div>
          <span className="font-mono font-semibold text-gupta-gold">
            ~{notes.timing || "1:20 хв"}
          </span>
        </div>

        {/* Quick Speaker Talking Points (Glanceable) */}
        {notes.talkingPoints && notes.talkingPoints.length > 0 && (
          <div className="bg-gupta-cardLight/40 border border-gupta-gold/20 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-gupta-gold uppercase tracking-wider">
              <Lightbulb className="w-3.5 h-3.5" />
              <span>Опорні тези (для швидкого зорового контакту):</span>
            </div>
            <ul className="space-y-1.5 text-xs text-gupta-sandstone">
              {notes.talkingPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gupta-gold font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Full Engaging Speech Text */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-gupta-sandstone uppercase tracking-wider">
              <Volume2 className="w-3.5 h-3.5 text-gupta-gold" />
              <span>Повний текст усної промови:</span>
            </div>
            <span className="text-[11px] text-gupta-sandstoneMuted">
              за О. П. Крижанівським
            </span>
          </div>
          <div className="p-4 rounded-xl bg-gupta-dark/90 border border-gupta-border text-sm leading-relaxed text-gupta-sandstone font-normal shadow-inner">
            <p className="whitespace-pre-line italic text-gupta-sandstone/95">
              "{notes.fullText}"
            </p>
          </div>
        </div>

        {/* Historical Context Hint */}
        {slide.sourceRef && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gupta-cardLight/20 border border-gupta-border text-[11px] text-gupta-sandstoneMuted">
            <Bookmark className="w-3.5 h-3.5 text-gupta-bronze flex-shrink-0 mt-0.5" />
            <span>
              <strong>Джерело:</strong> {slide.sourceRef}. Посилайтеся на сторінку під час відповіді на запитання викладача.
            </span>
          </div>
        )}
      </div>

      {/* Drawer Footer */}
      <div className="p-3 bg-gupta-dark/60 border-t border-gupta-border text-center text-[11px] text-gupta-sandstoneMuted">
        Натисніть <kbd className="px-1.5 py-0.5 rounded bg-gupta-card border border-gupta-border text-gupta-gold font-mono">N</kbd> щоб сховати нотатки
      </div>
    </div>
  );
}
