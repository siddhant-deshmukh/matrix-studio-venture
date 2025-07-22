export default function ProcessSection() {
  return <section className="max-w-xl w-100 d-flex flex-column justify-items-center mx-auto text-center text-white font-raleway py-10">
    <div className="section-header">
      <strong>Process</strong>
      <h5>Our approach is <span>Iterative</span></h5>
      <p>
        We believe a product should deliver incremental value quickly so the market can decide where it fits.
        <br />
        We help turn good ideas to great products, here’s how:
      </p>
    </div>

    <div className="d-flex hex-section justify-content-center align-items-center">
      <div>
        <div className="d-flex gap-2 position-relative">
          <div className="hex bg-secondary-muted text-secondary-muted">
            <img src="/process-img-1.png"/>
            <div className="info-card temp-hide-left bg-white text-black top-left">
              <h6>Discovery</h6>
              <p>Successful companies need to deliver solutions that are “need to haves”, not just “nice to haves”.</p>
            </div>
          </div>
          <div className="hex bg-white text-white">
            <img src="/process-img-2.png"/>
            <div className="info-card temp-hide-top bg-black text-white top-right">
              <h6>Design</h6>
              <p>Every business needs a clear path to profitability, enabling responsible growth and leading to financing options beyond just venture capital.</p>
            </div>
          </div>
        </div>
        <div style={{ paddingLeft: "56px" }} className="d-flex gap-2 mt-2">
          <div className="hex bg-white text-white">
            <img src="/process-img-3.png"/>
            <div className="info-card temp-hide-bottom text-white bg-black bottom-left">
              <h6>Development</h6>
              <p>Businesses should deliver value to all stakeholders, not just shareholders, taking care of employees, vendors, and customers alike.</p>
            </div>
          </div>
          <div className="hex bg-secondary-muted text-secondary-muted">
            <img src="/process-img-4.png"/>
            <div className="info-card temp-hide-right bg-white text-black bottom-right">
              <h6>Delivery</h6>
              <p>Businesses should deliver value to all stakeholders, not just shareholders, taking care of employees, vendors, and customers alike.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}