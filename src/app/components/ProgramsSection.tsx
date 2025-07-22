export default function OutPrograms() {
  return (
     <section className="max-w-xl h-auto w-100 d-flex flex-column justify-items-center mx-auto text-center text-white font-raleway py-10">
      <div className="d-flex flex-column justify-items-center mx-auto ">
        <strong>Programs</strong>
        <h5 className="pt-1">Our <span className="text-secondary-muted font-bold">Programs</span></h5>
      </div>
      
      <div className="program-cards  mx-auto">
        <div className="d-flex gap-4">
          <div className="verticle-card bg-black text-white">
            <div className="bg-white"></div>
            <h6>Startup Visa (SUV)</h6>
          </div>
          <div className="horzontal-card bg-white text-black mt-auto">
            <div className="bg-foreground-muted"></div>
            <h6>Business Immigration</h6>
          </div>
        </div>
        <div className="d-flex gap-4 mt-4">
          <div className="horzontal-card bg-white text-black">
            <div className="bg-foreground-muted"></div>
            <h6>Atlantic Immigration</h6>
          </div>
          <div className="verticle-card bg-black text-white">
            <div className="bg-white"></div>
            <h6>Agricultural Immigration</h6>
          </div>
          <div className="horzontal-card bg-white text-black mt-auto">
            <div className="bg-foreground-muted"></div>
            <h6>Express Entry</h6>
          </div>
        </div>
      </div>
    </section>
  )
}