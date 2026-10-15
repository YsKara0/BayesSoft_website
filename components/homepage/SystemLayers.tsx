// Approved scene overlay composition; decorative UI is not a client product.
export function SystemLayers() {
  return <>
    <div className="surface-ui data-ui" data-surface="data">
      <div className="surface-title">
        <span className="layer-number">01</span>Veri</div>
      <div className="data-table">
        <div>
          <i>
          </i>
          <span>Talep</span>
          <em>Girdi</em>
        </div>
        <div className="selected">
          <i>
          </i>
          <span>Kayıt</span>
          <em>Düzenli</em>
        </div>
        <div>
          <i>
          </i>
          <span>Kaynak</span>
          <em>Bağlı</em>
        </div>
      </div>
      <div className="data-baseline">
        <span>
        </span>
        <span>
        </span>
        <span>
        </span>
      </div>
    </div>
    <div className="surface-ui rules-ui" data-surface="rules">
      <div className="surface-title">
        <span className="layer-number">02</span>İş kuralları</div>
      <div className="rule-flow">
        <span>Girdi</span>
        <b aria-hidden="true">
        </b>
        <span className="rule-gate">Koşul</span>
        <b aria-hidden="true">
        </b>
        <span className="rule-result">Sonuç</span>
      </div>
      <div className="rule-branch">
        <i>
        </i>
        <span>İhtiyaca göre</span>
      </div>
    </div>
    <div className="surface-ui web-ui" data-surface="web">
      <div className="browser-bar">
        <span className="browser-dots">
          <i>
          </i>
          <i>
          </i>
          <i>
          </i>
        </span>
        <span>Web</span>
        <b>
        </b>
      </div>
      <div className="workspace">
        <div className="side-nav">
          <i className="nav-active">
          </i>
          <i>
          </i>
          <i>
          </i>
        </div>
        <div className="web-content">
          <div className="content-heading">Talep akışı<span>Özel akış</span>
          </div>
          <div className="record">
            <i>
            </i>
            <span>Talep alındı</span>
            <b>Girdi</b>
          </div>
          <div className="record record-active">
            <i>
            </i>
            <span>Kayıt işlendi</span>
            <b>Sonuç</b>
          </div>
          <div className="record">
            <i>
            </i>
            <span>Kullanıma hazır</span>
            <b>Hazır</b>
          </div>
          <div className="content-footer">
            <span>
            </span>
            <span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="surface-ui mobile-ui" data-surface="mobile">
      <div className="mobile-header">
        <span>Mobil</span>
        <i>
        </i>
      </div>
      <div className="mobile-title">Talep akışı</div>
      <div className="mobile-record">
        <i>
        </i>
        <span>Kayıt işlendi</span>
      </div>
      <div className="mobile-lines">
        <span>Aynı kayıt.</span>
        <span>Aynı sistem.</span>
      </div>
      <div className="mobile-action">
      </div>
    </div>
  </>;
}
