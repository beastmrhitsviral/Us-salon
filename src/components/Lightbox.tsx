import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, MessageSquare, Info } from "lucide-react";
import { GalleryItem } from "@/src/data/gallery";
import { buildSmsLink } from "@/src/config/business";

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !currentItem) return null;

  const smsLink = buildSmsLink(
    `${currentItem.title} (${currentItem.category})`,
    "I was looking at the styling inspiration on your website"
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${currentItem.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200"
    >
      {/* Background click to close */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close button top right */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox (Escape)"
        className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white/90 hover:text-white hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image (Left Arrow)"
        className="absolute left-2 sm:left-6 z-20 p-2.5 rounded-full bg-black/50 text-white/90 hover:text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image (Right Arrow)"
        className="absolute right-2 sm:right-6 z-20 p-2.5 rounded-full bg-black/50 text-white/90 hover:text-white hover:bg-black/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main modal content container */}
      <div
        className="relative z-10 max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image frame */}
        <div className="relative max-h-[68vh] sm:max-h-[74vh] flex items-center justify-center rounded-lg overflow-hidden bg-black/40">
          <img
            src={currentItem.imageSrc}
            alt={currentItem.altText}
            referrerPolicy="no-referrer"
            className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain rounded-lg shadow-2xl select-none"
          />
        </div>

        {/* Caption & Controls bar */}
        <div className="w-full mt-3 bg-[#242424]/90 border border-white/10 rounded-xl p-4 sm:p-5 text-white max-w-3xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-[#D8CFC3]">
              <span className="font-semibold uppercase tracking-wider text-[#D8CFC3]">
                {currentItem.category}
              </span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                {currentIndex + 1} of {items.length}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#D8CFC3]/80 inline-flex items-center gap-1 text-[11px]">
                <Info className="w-3 h-3 text-[#777A63]" />
                Inspirational Photography
              </span>
            </div>
            <h3 className="font-serif-display text-lg sm:text-xl font-medium tracking-tight text-white">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CFC3] max-w-xl">
              {currentItem.description}
            </p>
          </div>

          <div className="shrink-0 pt-2 sm:pt-0">
            <a
              href={smsLink}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#242424] bg-[#F7F5F0] hover:bg-[#D8CFC3] rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#777A63]" />
              <span>Inquire via SMS</span>
            </a>
          </div>
        </div>

        {/* Mobile helper hint */}
        <div className="text-[11px] text-[#D8CFC3]/60 mt-2 text-center hidden sm:block">
          Use Left/Right arrow keys to navigate · Escape to close
        </div>
      </div>
    </div>
  );
}
