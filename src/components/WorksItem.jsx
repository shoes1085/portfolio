import '../styles.css'
import React, { useState, useEffect } from 'react';

export default function WorksItem({ workItem, currentItem, setCurrentItem, openGalleryHandler }) {
    return (
        <div className="works-card">
            <div className="works-subtitle">{workItem.subtitle}</div>
            <div className="works-title">{workItem.title}</div>
            <div className="works-subtitle">{workItem.description}</div>

            {workItem.ctaLabel && workItem.ctaLabel.map((label, index) => (
                workItem.ctaLink[index] === "gallery" ? (
                    <div key={index} onClick={() => { openGalleryHandler(); setCurrentItem(workItem) }} className={`works-cta ${index != workItem.ctaLabel.length - 1 ? 'white-cta' : ''}`}>{label} <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" /></svg></div>
                ) : (
                    <a key={index} target='_blank' href={workItem.ctaLink[index]}><div className={`works-cta ${index != workItem.ctaLabel.length - 1 ? 'white-cta' : ''}`}>{label} <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" /></svg></div></a>
                )
            ))}

            {/* <div onClick={() => { }} className="works-cta">View gallery <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" /></svg></div> */}
        </div>
    )
}
