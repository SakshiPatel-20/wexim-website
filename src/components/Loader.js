import React, { useEffect } from 'react';
import './Loader.css';

function Loader() {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.style.transition = 'opacity 0.6s';
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 600);
      }
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const load = [
    { class: 'block-1' },
    { class: 'block-2' },
    { class: 'block-3' },
    { class: 'block-4' },
    { class: 'block-5' },
    { class: 'block-6' },
    { class: 'block-7' },
    { class: 'block-8' },
    { class: 'block-9' },
    { class: 'block-10' },
    { class: 'block-11' },
    { class: 'block-12' },
    { class: 'block-13' },
    { class: 'block-14' },
    { class: 'block-15' },
    { class: 'block-16' },
  ];

  return (
    <div className="loader">
      <div className="loader-inner">
        <div className="loader-blocks">
          {load.map((loader, index) => (
            <span key={index} className={loader.class}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;
