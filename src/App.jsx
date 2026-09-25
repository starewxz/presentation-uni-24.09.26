import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './components/Header';
import NavigationControls from './components/NavigationControls';
import SlideRenderer from './components/SlideRenderer';
import SpeakerNotesDrawer from './components/SpeakerNotesDrawer';
import SlideOverviewModal from './components/SlideOverviewModal';
import ImageModal from './components/ImageModal';
import QAModal from './components/QAModal';
import SourcesModal from './components/SourcesModal';
import { slidesData } from './data/slidesData';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isQAOpen, setIsQAOpen] = useState(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomedTitle, setZoomedTitle] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const touchStartX = useRef(null);

  const totalSlides = slidesData.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error('Fullscreen error:', err);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is inside an input or typing in a field
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setCurrentSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setCurrentSlide(totalSlides - 1);
      } else if (e.key === 'n' || e.key === 'N' || e.key === 'т' || e.key === 'Т') {
        e.preventDefault();
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'o' || e.key === 'O' || e.key === 'щ' || e.key === 'Щ') {
        e.preventDefault();
        setIsOverviewOpen((prev) => !prev);
      } else if (e.key === 'q' || e.key === 'Q' || e.key === 'й' || e.key === 'Й') {
        e.preventDefault();
        setIsQAOpen((prev) => !prev);
      } else if (e.key === 'b' || e.key === 'B' || e.key === 'и' || e.key === 'И') {
        e.preventDefault();
        setIsSourcesOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F' || e.key === 'а' || e.key === 'А') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === 'Escape') {
        setIsNotesOpen(false);
        setIsOverviewOpen(false);
        setIsQAOpen(false);
        setIsSourcesOpen(false);
        setZoomedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, totalSlides]);

  // Touch Swipe for mobile/tablets
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Minimum swipe threshold: 50px
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  const currentSlideData = slidesData[currentSlide];
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div 
      className="relative w-screen h-screen overflow-hidden flex flex-col imperial-bg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Gold Progress Bar */}
      <div className="w-full h-1 bg-gupta-card relative z-40">
        <div 
          className="h-full bg-gradient-to-r from-gupta-gold to-gupta-goldLight transition-all duration-300 ease-out shadow-gold-glow"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Main Header */}
      <Header
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onToggleNotes={() => setIsNotesOpen(!isNotesOpen)}
        isNotesOpen={isNotesOpen}
        onToggleOverview={() => setIsOverviewOpen(true)}
        onToggleQA={() => setIsQAOpen(true)}
        onToggleSources={() => setIsSourcesOpen(!isSourcesOpen)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
      />

      {/* Slide Presentation Area */}
      <main className="flex-1 w-full overflow-y-auto pb-20 flex items-center justify-center relative">
        <SlideRenderer
          slide={currentSlideData}
          onZoomImage={(img, title) => {
            setZoomedImage(img);
            setZoomedTitle(title);
          }}
          onOpenSources={() => setIsSourcesOpen(true)}
        />
      </main>

      {/* Bottom Navigation Dock */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={goToSlide}
        slides={slidesData}
      />

      {/* Modals & Drawers */}
      <SpeakerNotesDrawer
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlideData}
        slideIndex={currentSlide}
        totalSlides={totalSlides}
      />

      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        slides={slidesData}
        currentSlide={currentSlide}
        onSelectSlide={goToSlide}
      />

      <ImageModal
        isOpen={!!zoomedImage}
        onClose={() => setZoomedImage(null)}
        image={zoomedImage}
        title={zoomedTitle}
      />

      <QAModal
        isOpen={isQAOpen}
        onClose={() => setIsQAOpen(false)}
      />

      <SourcesModal
        isOpen={isSourcesOpen}
        onClose={() => setIsSourcesOpen(false)}
      />
    </div>
  );
}
