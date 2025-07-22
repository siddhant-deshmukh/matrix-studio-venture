import Image from "next/image";

export default function Navbar() {
  return (
    <div className="py-3 bg-transparent position-absolute top-0 w-100">
      <div className="d-flex justify-content-between mx-auto max-w-xl align-items-center">
        <Image src='/logo.png' alt="logo" width={102} height={94}></Image>
        <div className="font-roboto nav-links d-flex h-auto align-items-center justify-content-end">
          <a className="text-secondary-muted" href="#">Home</a>
          <a className="text-white" href="#">About Us</a>
          <a className="text-white" href="#">Services</a>
          <a className="text-white" href="#">Programs</a>
          <a className="text-white bg-btn-gradient px-4 py-3 rounded-3" href="#">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}