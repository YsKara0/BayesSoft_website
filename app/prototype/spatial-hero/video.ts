// Self-contained: the isolated route serializes this function into its HTML.
export function initializeSpatialVideo() {
  const video = document.querySelector<HTMLVideoElement>(".hero-video");
  const fallback = document.querySelector<HTMLImageElement>(".hero-video-fallback");
  if (!video || !fallback) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let failed = false;

  function showFallback() {
    video!.hidden = true;
    fallback!.hidden = false;
  }

  function playbackFailed() {
    failed = true;
    video!.pause();
    showFallback();
  }

  function syncPlayback() {
    if (reducedMotion.matches || failed) {
      video!.pause();
      showFallback();
      return;
    }

    video!.muted = true;
    if (!video!.hasAttribute("src")) video!.src = video!.dataset.source!;
    void video!.play().catch(() => {
      // A preference change can cancel a pending play request without a media error.
      if (!reducedMotion.matches) playbackFailed();
    });
  }

  video.addEventListener("playing", () => {
    if (reducedMotion.matches || failed) return;
    video.hidden = false;
    fallback.hidden = true;
  });
  video.addEventListener("error", playbackFailed);
  reducedMotion.addEventListener("change", syncPlayback);
  syncPlayback();
}
