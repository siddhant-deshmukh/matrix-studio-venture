export default function AboutUsSection() {
  return (
    <section className="min-vh-100 text-white font-raleway py-10">
      <div className="max-w-xl w-100 d-flex flex-column justify-items-center mx-auto text-center">
        <div className="d-flex flex-column justify-items-center mx-auto ">
          <strong>About Us</strong>
          <h5 className="pt-1">We turn Ideas to <span className="text-secondary-muted font-bold">Companies</span></h5>
          <p style={{ width: "1043px" }} className="pt-4 mx-auto text-primary-muted">
            We believe that entrepreneurship can unlock human potential and make the world a better place. We're strategists, technologists, entrepreneurs, and academics who partner with companies and individuals to productize dreams and create awesome experiences. We're often praised for our business-centric approach and how that differentiates us.
          </p>
        </div>
        {/*  */}
        <div className="pt-5">
          <strong className="s-1 pt-5">
            Core Business Principles
          </strong>
          <div className="about-section-cards pt-5 d-flex justify-content-center">
            <div className="bg-white text-black">
              <img className="mb-4" src={'/about-us-img-1.png'}></img>
              <div>Solve a real Human Problem</div>
              <p className="p-4">Successful companies need to deliver solutions that are “need to haves”, not just “nice to haves”.</p>
            </div>
            <div className="bg-black text-white dark mx-4">
              <img className="mb-4" src={'/about-us-img-2.png'}></img>
              <div>Unit economics that Scale</div>
              <p className="p-4 text-foreground-muted">Every business needs a clear path to profitability, enabling responsible growth and leading to financing options beyond just venture capital.</p>
            </div>
            <div className="bg-white text-black">
              <img className="mb-4" src={'/about-us-img-3.png'}></img>
              <div>Sense of Responsibility</div>
              <p className="p-4">Businesses should deliver value to all stakeholders, not just shareholders, taking care of employees, vendors, and customers alike.</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}