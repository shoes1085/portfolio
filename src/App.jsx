import cloud from './assets/cloud.png';
import footer_cloud from './assets/footer_cloud.png';
import ss1 from './assets/ss1.png';
import ss2 from './assets/ss2.png';
import ss3 from './assets/ss6.png';
import ss4 from './assets/ss5.png';
import ss5 from './assets/ss3.png';
import ss6 from './assets/ss7.png';

import c171 from './assets/c17hotline1.png';
import c172 from './assets/c17hotline2.png';
import c173 from './assets/c17hotline3.png';
import c174 from './assets/c17hotline4.png';

import cu1 from './assets/civilunrest1.png';
import cu2 from './assets/civilunrest2.png';
import cu3 from './assets/civilunrest3.png';
import cu4 from './assets/civilunrest4.png';

import cyber1 from './assets/cyber1.png';
import cyber2 from './assets/cyber2.png';
import cyber3 from './assets/cyber3.png';
import cyber4 from './assets/cyber4.png';

import gcans1 from './assets/gcans1.png'
import gcans2 from './assets/gcans2.png'
import gcans3 from './assets/gcans3.png'
import gcans4 from './assets/gcans4.png'

import ravenholm1 from './assets/ravenholm1.png'
import ravenholm2 from './assets/ravenholm2.png'
import ravenholm3 from './assets/ravenholm3.png'
import ravenholm4 from './assets/ravenholm4.png'

import hotlinecop1 from './assets/hotlinecop1.png'
import hotlinecop2 from './assets/hotlinecop2.png'
import hotlinecop3 from './assets/hotlinecop3.png'
import hotlinecop4 from './assets/hotlinecop4.png'

import melos1 from './assets/melos1.png'
import melos2 from './assets/melos2.png'
import melos3 from './assets/melos3.png'
import melos4 from './assets/melos4.png'

import pp1 from './assets/papersplease1.png'
import pp2 from './assets/papersplease2.png'
import pp3 from './assets/papersplease3.png'
import pp4 from './assets/papersplease4.png'

import psychopomp1 from './assets/psychopomp1.png'
import psychopomp2 from './assets/psychopomp2.png'
import psychopomp3 from './assets/psychopomp3.png'
import psychopomp4 from './assets/psychopomp4.png'

import summoner1 from './assets/summoner1.png'
import summoner2 from './assets/summoner2.png'
import summoner3 from './assets/summoner3.png'
import summoner4 from './assets/summoner4.png'

import vendetta1 from './assets/vendetta1.png'
import vendetta2 from './assets/vendetta2.png'
import vendetta3 from './assets/vendetta3.png'
import vendetta4 from './assets/vendetta4.png'

import nn1 from './assets/nn1.png'
import nn2 from './assets/nn2.png'
import nn3 from './assets/nn3.png'

import rl1 from './assets/roguelike1.png'
import pz1 from './assets/puzzle1.png'
import space1 from './assets/spaceshooter1.png'

import wichita1 from './assets/wichita1.png'
import wichita2 from './assets/wichita2.png'
import wichita3 from './assets/wichita3.png'
import wichita4 from './assets/wichita4.png'

import page1 from './assets/pages_about-us.png'
import page2 from './assets/pages_custom-gifts.png'
import page3 from './assets/pages_valentines.png'
import ImageViewer from "./ImageViewer";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./styles.css"
import { useState } from "react";

import img_ss1 from "./assets/shopsuki/ss1.png";
import img_ss2 from "./assets/shopsuki/ss2.png";
import img_ss3 from "./assets/shopsuki/ss3.png";
import img_ss4 from "./assets/shopsuki/ss4.png";
import img_ss5 from "./assets/shopsuki/ss5.png";
import img_ss6 from "./assets/shopsuki/ss6.png";
import img_ss7 from "./assets/shopsuki/ss7.png";
import img_ss8 from "./assets/shopsuki/ss8.png";
import img_ss9 from "./assets/shopsuki/ss9.png";
import img_ss10 from "./assets/shopsuki/ss10.png";
import img_ss11 from "./assets/shopsuki/ss11.png";
import img_ss12 from "./assets/shopsuki/ss12.png";
import img_ss13 from "./assets/shopsuki/ss13.png";
import img_ss14 from "./assets/shopsuki/ss14.png";
import img_ss15 from "./assets/shopsuki/ss15.png";
import img_ss16 from "./assets/shopsuki/ss16.png";
import img_ss17 from "./assets/shopsuki/ss17.png";
import img_ss18 from "./assets/shopsuki/ss18.png";
import img_ss19 from "./assets/shopsuki/ss19.png";
import img_ss20 from "./assets/shopsuki/ss20.png";
import img_ss21 from "./assets/shopsuki/ss21.png";
import img_ss22 from "./assets/shopsuki/ss22.png";
import img_ss23 from "./assets/shopsuki/ss23.png";
import img_ss24 from "./assets/shopsuki/ss24.png";
import img_ss25 from "./assets/shopsuki/ss25.png";
import img_ss26 from "./assets/shopsuki/ss26.png";
import img_ss27 from "./assets/shopsuki/ss27.png";
import img_ss28 from "./assets/shopsuki/ss28.png";
import img_ss29 from "./assets/shopsuki/ss29.png";
import img_ss30 from "./assets/shopsuki/ss30.png";
import img_ss31 from "./assets/shopsuki/ss31.png";
import img_ss32 from "./assets/shopsuki/ss32.png";
import img_ss33 from "./assets/shopsuki/ss33.png";
import img_ss34 from "./assets/shopsuki/ss34.png";
import img_ss35 from "./assets/shopsuki/ss35.png";
import img_ss36 from "./assets/shopsuki/ss36.png";
import img_ss37 from "./assets/shopsuki/ss37.png";
import img_ss38 from "./assets/shopsuki/ss38.png";
import img_ss39 from "./assets/shopsuki/ss39.png";
import img_ss40 from "./assets/shopsuki/ss40.png";

export default function App()
{
  const [open, setOpen] = useState();

  const ss_slides = [
    { src: ss1, title: "Site Banner"},
    { src: ss2, title: "Facebook Paid Ad" },
    { src: ss3, title: "Facebook Paid Ad" },
    { src: ss4, title: "Offline Banner" },
    { src: ss5, title: "Offline Ad" },
    { src: img_ss1, title: "Facebook Organic Post" },
    { src: img_ss2, title: "Store Banner" },
    { src: img_ss3, title: "Store Banner" },
    { src: img_ss4, title: "Flyer (Inside)" },
    { src: img_ss5, title: "Flyer (Outside)" },
    { src: img_ss6, title: "Booth Design" },
    { src: img_ss7, title: "Cart Signage 1" },
    { src: img_ss8, title: "Cart Signage 2" },
    { src: img_ss9, title: "Facebook Ad" },
    { src: img_ss10, title: "Site Banner" },
    { src: img_ss11, title: "Site Banner" },
    { src: ss6, title: "Offline Standee Ad 1" },
    { src: img_ss12, title: "Offline Standee Ad 2" },
    { src: img_ss13, title: "Offline Standee Ad 3" },
    { src: img_ss14, title: "Offline Standee Ad 4" },
    { src: img_ss15, title: "Bank Partnership Site Banner 1" },
    { src: img_ss16, title: "Bank Partnership Site Banner 2" },
    { src: img_ss17, title: "Facebook Paid Ad" },
    { src: img_ss18, title: "Fastfood Partnership Offline Standee" },
    { src: img_ss19, title: "Facebook Organic Post" },
    { src: img_ss20, title: "Offline Tarpaulin Ad" },
    { src: img_ss21, title: "Facebook Organic Post" },
    { src: img_ss22, title: "Facebook Organic Post" },
    { src: img_ss23, title: "Facebook Organic Post" },
    { src: img_ss24, title: "Public Transport Sticker 1" },
    { src: img_ss25, title: "Public Transport Sticker 2" },
    { src: img_ss26, title: "Public Transport Sticker 3" },
    { src: img_ss27, title: "Facebook Paid Ad" },
    { src: img_ss28, title: "Facebook Paid Ad" },
    { src: img_ss29, title: "Facebook Paid Ad" },
    { src: img_ss30, title: "Site Banner" },
    { src: img_ss31, title: "Site Banner" },
    { src: img_ss32, title: "Valentine's Day Landing Page Banner" },
    { src: img_ss33, title: "App Store / Play Store App Preview 1" },
    { src: img_ss34, title: "App Store / Play Store App Preview 2" },
    { src: img_ss35, title: "App Store / Play Store App Preview 3" },
    { src: img_ss36, title: "App Store / Play Store App Preview 4" },
    { src: img_ss37, title: "App Store / Play Store App Preview 5" },
    { src: img_ss38, title: "App Store / Play Store App Preview 6" },
    { src: img_ss39, title: "App Store / Play Store App Preview 7" },
    { src: img_ss40, title: "App Store / Play Store App Preview Full" },
  ];

  const vendetta_slides = [
    {src: vendetta1},
    {src: vendetta2},
    {src: vendetta3},
    {src: vendetta4},
  ];

  const unrest_slides = [
    {src: cu1},
    {src: cu2},
    {src: cu3},
    {src: cu4}
  ];

  const ravenholm_slides = 
  [
    {src: ravenholm1},
    {src: ravenholm2},
    {src: ravenholm3},
    {src: ravenholm4},
  ];

  const cyber_slides = [
    {src: cyber1},
    {src: cyber2},
    {src: cyber3},
    {src: cyber4},
  ];

  const melos_slides = [
    {src: melos1},
    {src: melos2},
    {src: melos3},
    {src: melos4},
  ];

  const summoner_slides = [
    {src: summoner1},
    {src: summoner2},
    {src: summoner3},
    {src: summoner4},
  ];

  const crossfire_slides = [
    {src: c171},
    {src: c172},
    {src: c173},
    {src: c174},
  ]

  const psychopomp_slides = [
    {src: psychopomp1},
    {src: psychopomp2},
    {src: psychopomp3},
    {src: psychopomp4},
  ];
  
  const papers_slides = [
    {src: pp1},
    {src: pp2},
    {src: pp3},
    {src: pp4},
  ];

  const c17_slides = [
    {src: hotlinecop1},
    {src: hotlinecop2},
    {src: hotlinecop3},
    {src: hotlinecop4},
  ];

  const gcans_slides = [
    {src: gcans1},
    {src: gcans2},
    {src: gcans3},
    {src: gcans4},
  ];

  const nn_slides = [
    {src: nn1},
    {src: nn2},
    {src: nn3},
  ];

  const page_slides = [
    {src: page1, title: "Shop Suki About Us Page"},
    {src: page2, title: "Shop Suki Holiday Gift Packs Landing Page"},
    {src: page3, title: "Shop Suki Valentine's Day Landing Page"},
  ];

  const slides = [
  ];

  const [currentslides, setCurrentslides] = useState();

  return(
  <>
    <div className="lightbox-cont">
      <Lightbox
          styles={{ container: { backgroundColor: "rgba(0, 0, 0, .9)" } }}
          plugins={[Thumbnails, Zoom, Captions]}
          thumbnails={{ borderColor: "none" }}
          open={open}
          close={() => setOpen(false)}
          slides={currentslides}
      />
    </div>
    {/* <ImageViewer/> */}
    <div className="master-body">
      <div className="slave-body" style={{backgroundImage: `url("${footer_cloud}")`, backgroundRepeat: "no-repeat", backgroundPosition: "bottom"}}>
        <div className="real-body">
          <div className='stickie-parent'>
            <div className='stickie'>
              <div className="header" style={{backgroundImage: `url("${cloud}")`, backgroundSize: "45%", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom"}}>
                <h1>Christian Andrew del Rosario</h1>
                <p>Portfolio</p>
              </div>
                <div className="navbar">
                  <a className="navbar-button" href="#graphic-design" >
                    GRAPHIC DESIGN
                  </a>
                  <a className="navbar-button" href="#landing-pages">
                    LANDING PAGES
                  </a>
                  <a className="navbar-button" href="#level-design">
                    LEVEL DESIGN
                  </a>
                  <a className="navbar-button" href="#games">
                    GAMES
                  </a>
                  <a className="navbar-button" href="#contact">
                    CONTACT
                  </a>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-body">
              <div id = "graphic-design" className="content-header">
                <h1>Graphic Design</h1>
              </div>
              
              <div className="item-container">
                <h1 className="item-title">Shop Suki</h1>
                <p className="item-subtitle">2022 - 2023</p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(ss_slides)}}>
                  <div className="gallery-container">
                    <a>
                      <img src={ss1} alt="" className="gallery-image"/>
                    </a>
                  </div>
                  <div className="gallery-container gallery-two">
                    <a>
                      <img src={ss2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={ss3} alt="" className="gallery-image"/>
                    </a>
                  </div>
                  <div className="gallery-container gallery-two">
                    <a>
                      <img src={ss6} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={ss5} alt="" className="gallery-image"/>
                    </a>
                  </div>
                  <div className="gallery-container">
                    <a>
                      <img src={ss4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
                <button className='button' type="button" onClick={() => {setOpen(true); setCurrentslides(ss_slides);}}>View full gallery</button>
              </div>
           
              <div id = "landing-pages" className="content-header">
                <h1>Landing Pages</h1>
              </div>
              <div className="item-container">
                <h1 className="item-title">Shop Suki</h1>
                <p className="item-subtitle">2022 - 2023</p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(page_slides)}}>
                  <div className="gallery-container gallery-two">
                    <a>
                      <img src={page1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={page2} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div id = "level-design" className="content-header">
                <h1>Level Design</h1>
              </div>
              <div className="item-container">
                <h1 className="item-title">Vendetta</h1>
                <p className="item-subtitle">June 2023</p>
                <p>Part of a Half-Life 2 level design competition</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/operation-forcc-map-labs-test-tube-19/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(vendetta_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={vendetta1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={vendetta2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={vendetta3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={vendetta4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Unrest Procedure</h1>
                <p className="item-subtitle">April 2022</p>
                <p>Part of a Half-Life 2 level design competition.</p>
                <p><a target="_blank" href="https://www.moddb.com/mods/lambdabuilds/downloads/lambdabuilds-info-comp-start">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(unrest_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={cu1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cu2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cu3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cu4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Ravenholm Reconaissance Squad</h1>
                <p className="item-subtitle">February 2022</p>
                <p>Part of a Half-Life 2 level design competition, later ported to Garry's Mod.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/the-layout-map-labs-17/">Download</a></p>
                <p><a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2827824052">Steam Workshop</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(ravenholm_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={ravenholm1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={ravenholm2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={ravenholm3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={ravenholm4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Cyber Trauma</h1>
                <p className="item-subtitle">November 2021</p>
                <p>Part of TWHL Tower Source</p>
                <p><a target="_blank" href="https://www.moddb.com/mods/twhl-tower-source">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(cyber_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={cyber1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cyber2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cyber3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={cyber4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">レーベンホルムには行きたい... (I Want to Go to Ravenholm)</h1>
                <p className="item-subtitle">April 2021</p>
                <p>Part of a 48-Hour Half-Life 2 level design competition.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/a-place-in-the-west-the-wrap-up-two-map-labs-test-tubes-14-15/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(melos_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={melos1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={melos2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={melos3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={melos4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">The Summoner</h1>
                <p className="item-subtitle">October 2021</p>
                <p>Part of a Half-Life 2 level design competition, later ported to Garry's Mod.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/a-place-in-the-west-the-wrap-up-two-map-labs-test-tubes-14-15/">Download</a></p>
                <p><a target="_blank" href="https://steamcommunity.com/sharedfiles/filedetails/?id=2829138126">Steam Workshop</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(summoner_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={summoner1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={summoner2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={summoner3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={summoner4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Operation C.R.O.S.S.F.I.R.E.</h1>
                <p className="item-subtitle">March 2021</p>
                <p>Part of a Half-Life 2 level design competition. Inspired by the game Hotline Miami</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/crossfire-map-labs-test-tube-12/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(crossfire_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={c171} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={c172} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={c173} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={c174} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">The Psychopomp and the Incessant Hounding of the Eternal Nocturne Sky</h1>
                <p className="item-subtitle">October 2020</p>
                <p>A second-person-perspective map for a 48-Hour horror-themed Half-Life 2 level design competition.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/halloween-horror-3-bone-room/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(psychopomp_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={psychopomp1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={psychopomp2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={psychopomp3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={psychopomp4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Citadel Core Meltdown Evacuation Protocol</h1>
                <p className="item-subtitle">September 2020</p>
                <p>Part of a Half-Life 2 level design competition. Inspired by the game Papers Please.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/fusionville-2-map-labs-10/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(papers_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={pp1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={pp2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={pp3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={pp4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">Combine Overwatch Dispatch City Seventeen</h1>
                <p className="item-subtitle">June 2020</p>
                <p>Part of a Half-Life 2 level design competition. Inspired by the game Hotline Miami.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/back-on-track/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(c17_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={hotlinecop1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={hotlinecop2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={hotlinecop3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={hotlinecop4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item-container">
                <h1 className="item-title">G-Cans Project</h1>
                <p className="item-subtitle">May 2020</p>
                <p>Part of a Half-Life 2 level design competition.</p>
                <p><a target="_blank" href="https://www.runthinkshootlive.com/posts/eye-candy/">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(gcans_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={gcans1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={gcans2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={gcans3} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={gcans4} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>   
              <div id = "games" className="content-header">
                <h1>Games</h1>
              </div>
              <div className="item-container">
                <h1 className="item-title">New Normal</h1>
                <p className="item-subtitle">October 2021</p>
                <p>An entry for the 2021 MCM YES: RESILIEMC Game Creation Contest to Beat the Pandemic.</p>
                <p><a target="_blank" href="https://fish012.itch.io/new-normal">Download</a></p>
                <div className='image_gallery' onClick={() => {setOpen(true); setCurrentslides(nn_slides)}}>
                  <div className="gallery-container gallery-four">
                    <a>
                      <img src={nn1} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={nn2} alt="" className="gallery-image"/>
                    </a>
                    <a>
                      <img src={nn3} alt="" className="gallery-image"/>
                    </a>
                  </div>
                </div>
              </div>
              <div id = "contact" className="content-header">
                <h1>Contact</h1>
              </div>
              <div className="item-container">
               <p>Email: cadrosario98@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}