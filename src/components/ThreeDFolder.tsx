import React, {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type FolderImage = {
  src: string;
  alt?: string;
  srcSet?: string;
};

export type ThreeDFolderItem = {
  id: string;
  title: string;
  link?: string;
  image?: FolderImage;
};

export type ThreeDFolderProps = {
  title: string;
  projects: ThreeDFolderItem[];
  folderBackColor?: string;
  folderFrontColor?: string;
  folderTabColor?: string;
};

const PLACEHOLDER_IMG_URL =
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800";

export default function ThreeDFolder({
  title,
  projects,
  folderBackColor = "#fb923c",
  folderFrontColor = "#fbbf24",
  folderTabColor = "#ea580c",
}: ThreeDFolderProps) {
  const [mainHovered, setMainHovered] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleProjectClick = (project: ThreeDFolderItem, index: number) => {
    const cardEl = cardRefs.current[index];
    if (cardEl) setSourceRect(cardEl.getBoundingClientRect());
    setSelectedIndex(index);
    setHiddenCardId(project.id);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedIndex(null);
    setSourceRect(null);
  }, []);

  const handleCloseComplete = useCallback(() => {
    setHiddenCardId(null);
  }, []);

  const handleNavigate = useCallback(
    (newIndex: number) => {
      setSelectedIndex(newIndex);
      setHiddenCardId(projects[newIndex]?.id ?? null);
    },
    [projects]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "28px",
          borderRadius: "16px",
          cursor: "pointer",
          backgroundColor: "#ffffff",
          border: `1px solid ${mainHovered ? folderBackColor : "#e5e7eb"}`,
          transition: "border-color 350ms ease, box-shadow 350ms ease",
          minWidth: "280px",
          minHeight: "320px",
          perspective: "1000px",
          boxShadow: mainHovered
            ? "0 25px 50px -12px rgba(17, 24, 39, 0.14)"
            : "none",
        }}
        onMouseEnter={() => setMainHovered(true)}
        onMouseLeave={() => setMainHovered(false)}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "16px",
            background:
              "radial-gradient(circle at 50% 70%, rgba(251, 146, 60, 0.08) 0%, transparent 70%)",
            opacity: mainHovered ? 1 : 0,
            transition: "opacity 450ms ease",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "12px",
            height: "160px",
            width: "200px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "128px",
              height: "96px",
              backgroundColor: folderBackColor,
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.12)",
              transformOrigin: "bottom center",
              transform: mainHovered ? "rotateX(-15deg)" : "rotateX(0deg)",
              transition:
                "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "48px",
              height: "16px",
              backgroundColor: folderTabColor,
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
              top: "calc(50% - 48px - 12px)",
              left: "calc(50% - 64px + 16px)",
              transformOrigin: "bottom center",
              transform: mainHovered
                ? "rotateX(-25deg) translateY(-2px)"
                : "rotateX(0deg)",
              transition:
                "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                image={project.image}
                title={project.title}
                delay={index * 80}
                isVisible={mainHovered}
                index={index}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>

          <div
            style={{
              position: "absolute",
              width: "128px",
              height: "96px",
              backgroundColor: folderFrontColor,
              borderRadius: "8px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.12)",
              top: "calc(50% - 48px + 4px)",
              transformOrigin: "bottom center",
              transform: mainHovered
                ? "rotateX(25deg) translateY(8px)"
                : "rotateX(0deg)",
              transition:
                "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 30,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "128px",
              height: "96px",
              borderRadius: "8px",
              overflow: "hidden",
              pointerEvents: "none",
              top: "calc(50% - 48px + 4px)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
              transformOrigin: "bottom center",
              transform: mainHovered
                ? "rotateX(25deg) translateY(8px)"
                : "rotateX(0deg)",
              transition:
                "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 31,
            }}
          />
        </div>

        <h3
          style={{
            fontSize: "18px",
            fontWeight: 600,
            letterSpacing: "0px",
            color: "#111827",
            marginTop: "10px",
            transition: "transform 300ms ease",
            transform: mainHovered ? "translateY(4px)" : "translateY(0)",
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            letterSpacing: "0px",
            color: "#6b7280",
            transition: "opacity 300ms ease",
            opacity: mainHovered ? 0.7 : 1,
            marginTop: "6px",
          }}
        >
          {projects.length} items
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: mainHovered
              ? "translate(-50%, 10px)"
              : "translate(-50%, 0)",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            color: "#6b7280",
            transition: "all 300ms ease",
            opacity: mainHovered ? 0 : 0.6,
          }}
        >
          <span>Hover to explore</span>
        </div>
      </div>

      <ImageLightbox
        projects={projects}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </div>
  );
}

type ProjectCardProps = {
  image?: FolderImage;
  title: string;
  delay: number;
  isVisible: boolean;
  index: number;
  onClick: () => void;
  isSelected: boolean;
};

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, onClick, isSelected }, ref) => {
    const rotations = [-12, 0, 12];
    const translations = [-55, 0, 55];
    const [cardHover, setCardHover] = useState(false);

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          width: "80px",
          height: "112px",
          borderRadius: "8px",
          overflow: "hidden",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
          border: `1px solid ${cardHover ? "#fb923c" : "#e5e7eb"}`,
          cursor: "pointer",
          transform: isVisible
            ? `translateY(-90px) translateX(${translations[index]}px) rotate(${rotations[index]}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.5)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
          zIndex: 10 - index,
          left: "-40px",
          top: "-56px",
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onMouseEnter={() => setCardHover(true)}
        onMouseLeave={() => setCardHover(false)}
      >
        <img
          src={image?.src || PLACEHOLDER_IMG_URL}
          srcSet={image?.srcSet}
          alt={image?.alt || title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
          }}
        />
        <p
          style={{
            position: "absolute",
            bottom: "6px",
            left: "6px",
            right: "6px",
            fontSize: "10px",
            fontWeight: 500,
            letterSpacing: "0px",
            color: "#ffffff",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            margin: 0,
          }}
        >
          {title || "Untitled"}
        </p>
      </div>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

type LightboxProps = {
  projects: ThreeDFolderItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  sourceRect: DOMRect | null;
  onCloseComplete?: () => void;
  onNavigate: (idx: number) => void;
};

function ImageLightbox({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}: LightboxProps) {
  const [animationPhase, setAnimationPhase] = useState<
    "initial" | "animating" | "complete"
  >("initial");
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [internalIndex, setInternalIndex] = useState(currentIndex);
  const [isSliding, setIsSliding] = useState(false);

  const totalProjects = projects.length;
  const hasNext = internalIndex < totalProjects - 1;
  const hasPrev = internalIndex > 0;
  const currentProject = projects[internalIndex];

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setIsSliding(true);
      const timer = window.setTimeout(() => {
        setInternalIndex(currentIndex);
        setIsSliding(false);
      }, 350);
      return () => window.clearTimeout(timer);
    }
  }, [currentIndex, isOpen, internalIndex, isSliding]);

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex);
      setIsSliding(false);
    }
  }, [isOpen, currentIndex]);

  const navigateNext = useCallback(() => {
    if (!hasNext || isSliding) return;
    onNavigate(internalIndex + 1);
  }, [hasNext, internalIndex, isSliding, onNavigate]);

  const navigatePrev = useCallback(() => {
    if (!hasPrev || isSliding) return;
    onNavigate(internalIndex - 1);
  }, [hasPrev, internalIndex, isSliding, onNavigate]);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    onClose();
    window.setTimeout(() => {
      setIsClosing(false);
      setShouldRender(false);
      setAnimationPhase("initial");
      onCloseComplete?.();
    }, 380);
  }, [onClose, onCloseComplete]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") navigateNext();
      if (e.key === "ArrowLeft") navigatePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleClose, navigateNext, navigatePrev]);

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true);
      setAnimationPhase("initial");
      setIsClosing(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimationPhase("animating"));
      });
      const timer = window.setTimeout(() => setAnimationPhase("complete"), 480);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen, sourceRect]);

  if (!shouldRender || !currentProject) return null;

  const getInitialStyles = () => {
    if (!sourceRect) return {};
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const targetWidth = Math.min(768, viewportWidth - 64);
    const targetHeight = Math.min(viewportHeight * 0.85, 600);
    const targetX = (viewportWidth - targetWidth) / 2;
    const targetY = (viewportHeight - targetHeight) / 2;

    const scaleX = sourceRect.width / targetWidth;
    const scaleY = sourceRect.height / targetHeight;
    const scale = Math.max(scaleX, scaleY);

    const translateX =
      sourceRect.left +
      sourceRect.width / 2 -
      (targetX + targetWidth / 2);
    const translateY =
      sourceRect.top +
      sourceRect.height / 2 -
      (targetY + targetHeight / 2);

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 1,
    } as React.CSSProperties;
  };

  const currentStyles: React.CSSProperties =
    animationPhase === "initial" && !isClosing
      ? getInitialStyles()
      : { transform: "translate(0, 0) scale(1)", opacity: 1 };

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px",
        opacity: isClosing ? 0 : 1,
        transition: "opacity 380ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(20px)",
          opacity: animationPhase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 380ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleClose();
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 50,
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          cursor: "pointer",
          padding: 0,
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform:
            animationPhase === "complete" && !isClosing
              ? "translateY(0)"
              : "translateY(-10px)",
          transition: "opacity 260ms ease-out, transform 260ms ease-out",
        }}
        aria-label="Close"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigatePrev();
        }}
        disabled={!hasPrev || isSliding}
        style={{
          position: "absolute",
          left: "32px",
          zIndex: 50,
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          cursor: hasPrev ? "pointer" : "default",
          fontSize: "28px",
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform:
            animationPhase === "complete" && !isClosing
              ? "translateX(0)"
              : "translateX(-20px)",
          transition: "opacity 260ms ease-out 120ms, transform 260ms ease-out 120ms",
          pointerEvents: !hasPrev || isSliding ? "none" : "auto",
        }}
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          navigateNext();
        }}
        disabled={!hasNext || isSliding}
        style={{
          position: "absolute",
          right: "32px",
          zIndex: 50,
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "999px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          cursor: hasNext ? "pointer" : "default",
          fontSize: "28px",
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform:
            animationPhase === "complete" && !isClosing
              ? "translateX(0)"
              : "translateX(20px)",
          transition: "opacity 260ms ease-out 120ms, transform 260ms ease-out 120ms",
          pointerEvents: !hasNext || isSliding ? "none" : "auto",
        }}
        aria-label="Next"
      >
        ›
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing
            ? "translate(0, 0) scale(0.96)"
            : currentStyles.transform,
          transition:
            animationPhase === "initial" && !isClosing
              ? "none"
              : "transform 380ms cubic-bezier(0.16, 1, 0.3, 1), opacity 380ms ease-out",
          transformOrigin: "center center",
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "768px",
        }}
      >
        <div
          style={{
            borderRadius: animationPhase === "initial" && !isClosing ? "8px" : "16px",
            transition: "border-radius 480ms cubic-bezier(0.16, 1, 0.3, 1)",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <div
              style={{
                display: "flex",
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding
                  ? "transform 350ms cubic-bezier(0.32, 0.72, 0, 1)"
                  : "none",
              }}
            >
              {projects.map((project) => (
                <img
                  key={project.id}
                  src={project.image?.src || PLACEHOLDER_IMG_URL}
                  srcSet={project.image?.srcSet}
                  alt={project.image?.alt || project.title}
                  style={{
                    minWidth: "100%",
                    width: "100%",
                    height: "100%",
                    maxHeight: "70vh",
                    objectFit: "cover",
                    flexShrink: 0,
                    display: "block",
                  }}
                />
              ))}
            </div>
          </div>

          <div
            style={{
              opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
              transform:
                animationPhase === "complete" && !isClosing
                  ? "translateY(0)"
                  : "translateY(20px)",
              transition: "opacity 260ms ease-out 90ms, transform 260ms ease-out 90ms",
              padding: "20px 22px",
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e5e7eb",
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111827",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  margin: "0 0 8px 0",
                }}
              >
                {currentProject.title || "Untitled"}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "13px", color: "#6b7280" }}>
                  ← / → to navigate
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {projects.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (isSliding || idx === internalIndex) return;
                        onNavigate(idx);
                      }}
                      style={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "999px",
                        backgroundColor:
                          idx === internalIndex ? "#111827" : "rgba(107, 114, 128, 0.35)",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        transform: idx === internalIndex ? "scale(1.2)" : "scale(1)",
                        transition: "all 240ms ease",
                      }}
                      aria-label={`Go to item ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                if (currentProject?.link) window.open(currentProject.link, "_blank");
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#6b7280",
                backgroundColor: "rgba(243, 244, 246, 0.5)",
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                cursor: currentProject?.link ? "pointer" : "default",
                whiteSpace: "nowrap",
                opacity: currentProject?.link ? 1 : 0.55,
              }}
              aria-label="Open link"
            >
              View ↗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

