import { Component, Suspense, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Scene } from "./Scene";
import { fallbackSvg } from "./fallback";
import "./experiment.css";

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function App() {
  const [reduced, setReduced] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [pointerCamera, setPointerCamera] = useState(() => matchMedia("(hover: hover) and (pointer: fine)").matches);
  const [playing, setPlaying] = useState(true);
  const [staticView, setStaticView] = useState(false);
  const [active, setActive] = useState(!document.hidden);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); }, []);

  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    const onMotion = () => setReduced(motion.matches);
    const onPointer = () => setPointerCamera(pointer.matches);
    motion.addEventListener("change", onMotion);
    pointer.addEventListener("change", onPointer);
    return () => { motion.removeEventListener("change", onMotion); pointer.removeEventListener("change", onPointer); };
  }, []);

  useEffect(() => {
    let inView = true;
    const update = () => setActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    if (stage.current) observer.observe(stage.current);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);

  const togglePlayback = () => {
    if (staticView) { setStaticView(false); setPlaying(true); }
    else setPlaying((value) => !value);
  };
  const showAssembled = () => { setStaticView(true); setPlaying(false); };

  return (
    <div className="experiment-shell">
      <div className="study-mark"><span>BayesSoft</span><span>4.0 / Deney 01</span></div>
      <div className="stage" ref={stage} role="img"
        aria-label="Dört farklı mimari modül; basamaklı beyaz kaide, mineral gri dikme, beyaz kiriş ve yumuşak mavi dönüş parçası ortak bir boşluğun çevresinde birleşiyor."
        data-renderer={failed ? "fallback" : ready ? "webgl" : "loading"}
        data-reduced-motion={reduced} data-playing={playing && !reduced && !failed}>
        <div className={`static-fallback ${ready && !failed ? "is-hidden" : ""}`} aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: fallbackSvg() }} />
        {!failed && <SceneBoundary onError={onFailure}><Suspense fallback={null}>
          <Scene playing={playing} reduced={reduced} staticView={staticView} active={active}
            pointerCamera={pointerCamera} onReady={onReady} onContextLost={onFailure} />
        </Suspense></SceneBoundary>}
      </div>
      <footer className="study-caption">
        <div className="description"><h1>Modular Assembly</h1><p>Dört modül. Ortak bir yapı.</p>
          <ul className="capabilities" aria-label="Temsil edilen yazılım yetkinlikleri">
            <li>Web</li><li>Mobil</li><li>Yapay zekâ</li><li>Özel yazılım</li>
          </ul>
        </div>
        <div className="motion-controls">
          <div className="buttons">
            <button onClick={togglePlayback} disabled={reduced || failed} aria-controls="experiment"
              aria-label={playing && !staticView && !reduced && !failed ? "Animasyonu durdur" : "Animasyonu oynat"}>
              <svg viewBox="0 0 20 20" aria-hidden="true">{playing && !staticView && !reduced && !failed
                ? <path d="M7 5v10M13 5v10" /> : <path d="m7 5 8 5-8 5Z" />}</svg>
              {playing && !staticView && !reduced && !failed ? "Durdur" : "Oynat"}
            </button>
            <button onClick={showAssembled} disabled={reduced || failed} aria-pressed={staticView || reduced || failed}>
              Birleşmiş görünüm
            </button>
          </div>
          <p className="motion-note">{failed ? "Statik alternatif" : reduced ? "Azaltılmış hareket · durağan sahne" : "10,8 saniyelik çalışma"}</p>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("experiment")!).render(<App />);
