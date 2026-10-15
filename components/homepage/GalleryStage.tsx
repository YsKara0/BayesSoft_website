import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { SelectedProject } from "@/data/selectedProjects";
import { CYLINDER, cylinderGeometry } from "@/lib/homepage/gallery/geometry";
import type { HomepageCopy } from "@/data/homepage";
const WIDTH = 1280, HEIGHT = 1600;
const coverId = (id: string) => `homepage-${id}-cover`;
export function GalleryStage({ projects, activeName, t }: { projects: readonly SelectedProject[]; activeName: string; t: HomepageCopy }) {
  const figure = useRef<HTMLElement>(null);
  const [resolution, setResolution] = useState<0 | 640 | 1080>(0);
  useEffect(() => {
    const root = figure.current!;
    const stage = root.querySelector<HTMLElement>("[data-stage]")!;
    const abort = new AbortController();
    let nearViewport = false;
    function selectResolution() {
      if (!nearViewport) return;
      const geometry = cylinderGeometry(stage.getBoundingClientRect().width, matchMedia("(max-width: 699px)").matches);
      const pixels = geometry.radius * CYLINDER.arc * Math.PI / 180 * devicePixelRatio;
      setResolution(pixels <= 640 ? 640 : 1080);
    }
    const resize = new ResizeObserver(selectResolution);
    resize.observe(stage);
    window.addEventListener("resize", selectResolution, { signal: abort.signal });
    const intersection = typeof IntersectionObserver === "function" ? new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      nearViewport = true;
      selectResolution();
      intersection?.disconnect();
    }, { rootMargin: "300px 0px" }) : null;
    if (intersection) intersection.observe(root);
    else { nearViewport = true; selectResolution(); }
    return () => { abort.abort(); resize.disconnect(); intersection?.disconnect(); };
  }, []);
  return <figure className="cy-visual" ref={figure} data-poster-resolution={resolution}>
    <svg className="cy-definitions" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>{projects.map(project =>
        <symbol key={project.id} id={coverId(project.id)} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
          <image href={resolution ? resolution === 640 ? project.posterSmallSrc : project.posterSrc : undefined} width={WIDTH} height={HEIGHT} preserveAspectRatio="xMidYMid meet" />
        </symbol>)}</defs>
    </svg>
    <div className="cy-viewport">
      <div className="cy-stage" data-stage tabIndex={-1} role="group" aria-label={`${t.gallery}: ${activeName}`} aria-describedby="selected-projects-caption selected-projects-help">
        <div className="cy-ring" data-ring>{Array.from({ length: CYLINDER.slots }, (_, slot) =>
          <div key={slot} className={`cy-panel${slot === 0 ? " is-current" : ""}`} style={{ "--slot-angle": `${slot * CYLINDER.step}deg` } as CSSProperties} data-panel data-slot={slot} data-project-index={slot % 3} aria-hidden="true">{Array.from({ length: CYLINDER.strips }, (_, index) => {
            const width = WIDTH / CYLINDER.strips;
            const overscan = width * (CYLINDER.overlap - 1) / 2;
            const angle = -CYLINDER.arc / 2 + CYLINDER.arc / CYLINDER.strips * (index + .5);
            return <div key={index} className="cy-strip" style={{ "--strip-angle": `${angle}deg` } as CSSProperties} data-strip>
              <svg viewBox={`${index * width - overscan} 0 ${width * CYLINDER.overlap} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <use href={`#${coverId(projects[slot % 3].id)}`} width={WIDTH} height={HEIGHT} />
              </svg>
            </div>;
          })}</div>)}</div>
        <div className="cy-gesture" aria-hidden="true" />
      </div>
    </div>
    <figcaption id="selected-projects-caption">{t.galleryCaption}</figcaption>
    <p id="selected-projects-help" className="cy-sr-only">{t.galleryHelp}</p>
  </figure>;
}
