import { Component, Suspense, useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { Scene } from "./Scene";
import type { Configuration } from "./Scene";
import { fallbackSvg } from "./fallback";
import "./experiment.css";

class SceneBoundary extends Component<{ children: ReactNode; onError: () => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function App() {
  const [initial] = useState<Configuration>(() => matchMedia("(max-width: 600px)").matches ? 1 : 0);
  const [reduced, setReduced] = useState(() => matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [playing, setPlaying] = useState(initial === 0);
  const [automatic, setAutomatic] = useState(true);
  const [stable, setStable] = useState<Configuration>(initial);
  const [request, setRequest] = useState({ token: 0, target: initial });
  const [active, setActive] = useState(!document.hidden);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); setPlaying(false); }, []);
  const onStable = useCallback((configuration: Configuration) => setStable(configuration), []);
  const onManualComplete = useCallback(() => setPlaying(false), []);

  useEffect(() => {
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(preference.matches);
    preference.addEventListener("change", change);
    return () => preference.removeEventListener("change", change);
  }, []);

  useEffect(() => {
    let inView = true;
    const visibility = () => setActive(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; visibility(); });
    if (stage.current) observer.observe(stage.current);
    document.addEventListener("visibilitychange", visibility);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", visibility); };
  }, []);

  const choose = (configuration: Configuration) => {
    setAutomatic(false);
    setRequest((previous) => ({ token: previous.token + 1, target: configuration }));
    if (failed) setStable(configuration);
    // Explicit state selection makes one transition; it does not restart the loop.
    setPlaying(!reduced && !failed);
  };
  const toggle = () => {
    if (playing) setPlaying(false);
    else { setAutomatic(true); setPlaying(true); }
  };

  return <div className="kinetic-shell">
    <div className="study-mark"><span>BayesSoft</span><span>4.0 / Deney 02</span></div>
    <div className="kinetic-stage" ref={stage} role="img"
      aria-label="Tek arayüz gövdesi: yan kanatlar menteşelerde katlanıyor, raylı taban daralıyor ve aynı içerik blokları geniş düzenden dikey kompakt düzene geçiyor."
      data-renderer={failed ? "fallback" : ready ? "webgl" : "loading"}
      data-reduced-motion={reduced} data-playing={playing && !reduced && !failed}>
      <div className={`static-fallback ${ready && !failed ? "is-hidden" : ""}`} aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: fallbackSvg(stable === 1) }} />
      {!failed && <SceneBoundary onError={onFailure}><Suspense fallback={null}>
        <Scene playing={playing} automatic={automatic} reduced={reduced} active={active}
          initial={initial} request={request} onReady={onReady} onFailure={onFailure}
          onStable={onStable} onManualComplete={onManualComplete} />
      </Suspense></SceneBoundary>}
    </div>
    <footer className="study-caption">
      <h1>Kinetic Architecture</h1>
      <div className="controls">
        <button onClick={toggle} disabled={reduced || failed}
          aria-label={playing && !reduced && !failed ? "Animasyonu durdur" : "Animasyonu oynat"}>
          <svg viewBox="0 0 20 20" aria-hidden="true">{playing && !reduced && !failed
            ? <path d="M7 5v10M13 5v10" /> : <path d="m7 5 8 5-8 5Z" />}</svg>
          {playing && !reduced && !failed ? "Durdur" : "Oynat"}
        </button>
        <div className="states" role="group" aria-label="Kararlı düzeni seç">
          <button onClick={() => choose(0)} aria-pressed={stable === 0}>Geniş</button>
          <button onClick={() => choose(1)} aria-pressed={stable === 1}>Kompakt</button>
        </div>
        {(reduced || failed) && <span className="static-note">Durağan görünüm</span>}
      </div>
    </footer>
  </div>;
}

createRoot(document.getElementById("kinetic-experiment")!).render(<App />);
