import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Maximize, 
  Minimize, 
  Grid, 
  Mic, 
  HelpCircle, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function Header({ 
  currentSlide, 
  totalSlides, 
  onToggleNotes, 
  isNotesOpen, 
  onToggleOverview, 
  onToggleQA,
  isFullscreen, 
  onToggleFullscreen 
}) {
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setSeconds(0);
  };

  return (
    <header className="w-full bg-gupta-card/90 backdrop-blur-md border-b border-gupta-border px-4 py-2.5 z-30 transition-all select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: Branding & University Badge */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gupta-gold to-gupta-bronze p-[1px] shadow-gold-glow flex items-center justify-center">
            <div className="w-full h-full bg-gupta-dark rounded-[7px] flex items-center justify-center text-gupta-gold font-serif font-bold text-sm">
              Г
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold tracking-wide text-gupta-sandstone font-serif">
                Держава Гуптів
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gupta-gold/15 text-gupta-gold border border-gupta-gold/30">
                IV–VI ст. н.е.
              </span>
            </div>
            <p className="text-[11px] text-gupta-sandstoneMuted hidden sm:block truncate max-w-md">
              О. П. Крижанівський «Історія Стародавнього Сходу»
            </p>
          </div>
        </div>

        {/* Center: Slide indicator & Timer */}
        <div className="flex items-center gap-4">
          {/* Presentation Timer */}
          <div className="hidden md:flex items-center gap-1.5 bg-gupta-dark/70 border border-gupta-border px-2.5 py-1 rounded-full text-xs">
            <Clock className="w-3.5 h-3.5 text-gupta-gold" />
            <span className="font-mono text-gupta-gold font-medium w-12 text-center">
              {formatTime(seconds)}
            </span>
            <button 
              onClick={() => setIsTimerRunning(!isTimerRunning)} 
              title={isTimerRunning ? "Пауза таймера" : "Запустити таймер виступу"}
              className="p-1 hover:text-gupta-gold text-gupta-sandstoneMuted transition-colors"
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button 
              onClick={resetTimer} 
              title="Скинути таймер"
              className="p-1 hover:text-gupta-gold text-gupta-sandstoneMuted transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>

          {/* Slide counter */}
          <div className="bg-gupta-dark/80 border border-gupta-border px-3 py-1 rounded-full text-xs font-medium text-gupta-sandstone flex items-center gap-1.5">
            <span className="text-gupta-gold font-bold">
              {String(currentSlide + 1).padStart(2, '0')}
            </span>
            <span className="text-gupta-sandstoneMuted">/</span>
            <span className="text-gupta-sandstoneMuted">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Speaker notes button */}
          <button
            onClick={onToggleNotes}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              isNotesOpen 
                ? 'bg-gupta-gold text-gupta-dark font-semibold shadow-gold-glow' 
                : 'bg-gupta-cardLight/70 hover:bg-gupta-cardLight text-gupta-sandstone border border-gupta-border'
            }`}
            title="Нотатки доповідача (гаряча клавіша: N)"
          >
            <Mic className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Нотатки</span>
            <span className="text-[10px] opacity-70 hidden md:inline">[N]</span>
          </button>

          {/* Overview button */}
          <button
            onClick={onToggleOverview}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gupta-cardLight/70 hover:bg-gupta-cardLight text-gupta-sandstone border border-gupta-border transition-all"
            title="Огляд усіх слайдів (гаряча клавіша: O)"
          >
            <Grid className="w-3.5 h-3.5 text-gupta-gold" />
            <span className="hidden sm:inline">Огляд</span>
            <span className="text-[10px] opacity-70 hidden md:inline">[O]</span>
          </button>

          {/* Q&A Cheatsheet button */}
          <button
            onClick={onToggleQA}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gupta-cardLight/70 hover:bg-gupta-cardLight text-gupta-gold border border-gupta-border transition-all"
            title="Відповіді на запитання викладача (Q&A)"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Q&A</span>
          </button>

          {/* Fullscreen toggle */}
          <button
            onClick={onToggleFullscreen}
            className="p-1.5 rounded-lg text-xs font-medium bg-gupta-cardLight/70 hover:bg-gupta-cardLight text-gupta-sandstone border border-gupta-border transition-all"
            title={isFullscreen ? "Вийти з повноекранного режиму (F)" : "Повноекранний режим (F)"}
          >
            {isFullscreen ? <Minimize className="w-3.5 h-3.5" /> : <Maximize className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </header>
  );
}
