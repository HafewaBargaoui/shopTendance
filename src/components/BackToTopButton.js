import React, { useState, useEffect } from "react";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });
  const scrollApp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {backToTopButton && (
        <button
          className="fixed bottom-24 right-6 text-2xl h-12 w-12 rounded-full font-bold text-white bg-slate-200 hover:bg-slate-400 "
          onClick={scrollApp}
        >
          ^
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
