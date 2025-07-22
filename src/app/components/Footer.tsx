"use client";

import { useEffect } from "react"
import { setupAnimationObserver } from "../utils/animationObserver";

export default function Footer() {
  useEffect(()=> {
    setupAnimationObserver('.temp-scale-down', 'temp-scale-down-animated', { threshold: 0.1, once: true });
    setupAnimationObserver('.temp-hide-left', 'temp-hide-left-animated', { threshold: 0.3, once: true });
    setupAnimationObserver('.temp-hide-right', 'temp-hide-right-animated', { threshold: 0.3, once: true });
    setupAnimationObserver('.temp-hide-top', 'temp-hide-top-animated', { threshold: 0.2, once: true });
    setupAnimationObserver('.temp-hide-bottom', 'temp-hide-bottom-animated', { threshold: 0.2, once: true });
  }, []);
  return (
    <div className="bg-black footer text-white py-4 px-2">
      <div className="max-w-xl d-flex justify-content-between mx-auto align-items-center">
        <div className="text-s">© 2021 Copyright - Max  Venture Studio. A proud  UAE company.</div>
        <div className="d-flex gap-3">
          <img src={'social-1.png'}/>
          <img src={'social-2.png'}/>
          <img src={'social-3.png'}/>
        </div>
      </div>
    </div>
  )
}