export default function ContactUs() {
  return <section className="">
    <div className="p-5 bg-black contact-us mx-auto">
      <div className="d-flex justify-content-between align-items-center">
        <div className="contact-form-text w-50 d-flex flex-column text-white">
          <div>LET’S START</div>
          <h6 className="pt-3 pb-3">WORKING TOGETHER?</h6>
          <p>Fill in the form and a Matrix Venture Studio representative will be in touch soon!</p>
        </div>
        <div className="w-50">
          <form className="contact-form ml-auto">
            <div className="mb-3">
              <label htmlFor="yourName" className="form-label visually-hidden">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="yourName"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label visually-hidden">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="yourMessage" className="form-label visually-hidden">Your Message</label>
              <textarea
                className="form-control"
                id="yourMessage"
                rows={5}
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn bg-btn-gradient w-100"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
}