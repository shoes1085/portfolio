import "./gallery_styles.css"
import "./styles.css"
import React, { useState, useEffect } from 'react';
// import content from './data.json';

export default function Gallery({ item, openGallery }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        openGallery();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  },);

  // const content =
  // {
  //   title: 'Title Test',
  //   subtitle: 'Subtitle Test',
  //   description: 'Description Test',
  //   category: '',
  //   ctaLabel: ['Download Here', 'Download On Steam'],
  //   ctaLink: ['https://google.com', 'https://google.com'],
  //   imageList: [page4, page5, summoner1, summoner2, summoner3, summoner4],
  //   imageDescription: ['First Image', 'Second Image', 'Third Image', '4th', '5th']
  // };

  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path  fill="white" d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg> */}
      <section className="gallery-parent">
        <section className="gallery-container">
          <div className="gallery-box">
            <div className="gallery-titlebar">
              <svg onClick={openGallery} className="gallery-titlebarbtn" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
              <h1 className="works-title">{item.title}</h1>
              <div className="works-subtitle">{item.subtitle}</div>
              <p className="works-subtitle">{item.description}</p>

              {item.ctaLabel.map((text, index) => {
                const isLast = index === item.ctaLabel.length - 1;
                const isGallery = text === "gallery";
                return (
                  <GalleryLink text={text} isGallery={isGallery} link={item.ctaLink[index]} isLast={isLast} />
                )
              })}

            </div>
            <div className={`gallery-photos gallery-photos--column-count-${item.column_count}`}>
              {item.imageList.map((image, index) => {
                return (
                  <>
                    <GalleryImages image={image.src} spanAll={image.spanall} description={item.imageDescription[index]} />
                  </>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

const GalleryLink = ({ text, link, isLast, isGallery }) => {
  const className = isLast ? 'works-cta' : 'works-cta white-cta';
  return (
    isGallery ?
      (
        <a href={link}>
          <div className={className}>
            {text}<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg>
          </div>
        </a>
      ) : (
        <></>
      )
  )
}

const GalleryImages = ({ image, description, spanAll }) => {
  return (
    <div className={`gallery-imagecont ${spanAll ? "gallery-imagecont--span-all" : ""}`}>
      {image.includes("https://") ? (
        <iframe className="gallery-video" src={`${image}`}></iframe>
      ) : (
        <img className="gallery-image" src={image} loading='lazy' />
      )}
      <div className="gallery-description">
        {description}
      </div>
    </div >
  )
}
