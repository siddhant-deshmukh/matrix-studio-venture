"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;

      setVisible(scrollingUp || currentScrollPos < 100); // Show if scrolling up or near the top
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`py-3 px-2 bg-transparent fixed-top w-100 navbar-animated ${
        visible ? 'navbar-slide-down' : 'navbar-slide-up'
      }`}
      style={{ zIndex: 1000 }} // Ensure it stays on top of other content
    >
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