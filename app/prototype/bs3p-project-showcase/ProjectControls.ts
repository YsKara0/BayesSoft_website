export function ProjectControls(): string {
  return `<div class="ps-controls" data-controls hidden>
    <button type="button" data-direction="-1" aria-label="Önceki proje"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M19 12H5m6-6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
    <button type="button" data-direction="1" aria-label="Sonraki proje"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg></button>
  </div>`;
}
