export default function OurServices() {
  return (
    <section className="max-w-xl h-auto w-100 d-flex flex-column justify-items-center mx-auto text-center text-white font-raleway py-10">
      <div className="section-header">
        <strong>OUr Services</strong>
        <h5>Stuff we do <span>Best</span></h5>
        <p>
          Drawing on many years of experience on both sides of the negotiation table, as investors and an entrepreneurs, the Matrix team provides critical insight to help you achieve your company's growth and capital raising goals.
        </p>
      </div>
      <div className="service-cards pt-lg-5">
        <div className="pt-5"></div>
        <div className="d-flex mx-auto pt-lg-5 justify-content-center">
          <div className="">
            <div className="d-flex gap-3">
              <div className="verticle-card d-none d-xl-block p-0 mt-auto">
                <h3 className="text-left">Strategic Consulting
                </h3>
              </div>
              <div className="d-flex gap-3 flex-column">
                <div className="d-block d-xl-none px-2">
                  <h3 className="text-left py-5 px-2">Strategic<br />Consulting
                  </h3>
                </div>
                <div className="temp-hide-top verticle-card bg-black text-white mt-0 mt-xl-auto">
                  <img src={'/service-img-1.png'}></img>
                  <h6>Holistic Business Assessment</h6>
                  <p>An overall look at your business to understand challenges and opportunities for growth, cost reduction, and potentially uncovering new revenue streams.</p>
                </div>
              </div>
              <div className="temp-hide-left d-flex flex-column mt-auto mt-xl-0">
                <div className="horizontal-card bg-black text-white">
                  <img src={'/service-img-2.svg'}></img>
                  <h6>Corporate Research</h6>
                  <p>Is there a specific topic you would like to learn more about within your industry / market?</p>
                </div>
                <div className="temp-hide-left horizontal-card bg-white mt-3 text-black">
                  <img src={'/service-img-3.svg'}></img>
                  <h6>Go-To-Market Assessment</h6>
                  <p>Are you ready to launch your business?</p>
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mt-3">
              <div className="d-none d-xl-flex temp-hide-left verticle-card bg-white text-black">
                <img src={'/service-img-4.svg'}></img>
                <h6>Financial and operational Assessment</h6>
                <p>Are there areas where costs can be reduced or efficiencies can be found?</p>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="temp-hide-bottom horizontal-card bg-white text-black">
                  <img src={'/service-img-5.svg'}></img>
                  <h6>New Market Opportunity Assessment</h6>
                  <p>Are there new customers or areas you can be serving?</p>
                </div>
                <div className="horizontal-card d-flex d-xl-none  temp-hide-left bg-black text-white">
                  <img src={'/service-img-4.svg'}></img>
                  <h6>Financial and operational Assessment</h6>
                  <p>Are there areas where costs can be reduced or efficiencies can be found?</p>
                </div>
              </div>
              <div className="temp-hide-top verticle-card bg-white text-black">
                <img src={'/service-img-6.png'}></img>
                <h6>Marketing & Messaging Assessment</h6>
                <p>Are you communicating effectively with your customers?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '885px' }} className="pt-lg-5 our-services-list mx-auto w-100">
        <div className="pt-lg-5"></div>
        <h3 className="mr-auto pt-5 text-right">Corporate &nbsp;&nbsp;<br />Finance</h3>
        <div className="d-flex justify-content-between gap-5">
          <ul className="text-left ">
            <li>Financial Modelling with forecasting, stress testing, and scenario analysis.</li>
            <li>Performing a Company Valuation to determine how much a company is worth forequity financing and also to create a blueprint for growing shareholder value.</li>
            <li>Creating an effective Investor Presentation.</li>
            <li>Outlining a Growth Curve & Financial Roadmap for identifying growth milestones and financial requirements.</li>
          </ul>
          <div className="pt-5">
            <img src='/img-big-1.png' />
          </div>
        </div>


        <div className="pt-lg-5"></div>
        <h3 className="mr-auto pt-5 text-left">Raising<br />Capital</h3>
        <div className="d-flex justify-content-between gap-5">
          <div>
            <img src='/img-big-2.png' />
          </div>
          <ul className="text-left pt-5">
            <li>Venture capital.</li>
            <li>Debt Financing.</li>
            <li>Private equity.</li>
            <li>Crowdfunding.</li>
            <li>Angel investors.</li>
            <li>Factoring and purchase order financing.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}