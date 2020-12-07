import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgAvatar() {
  const svgMarkup = `<svg width="210" height="210" viewBox="0 0 210 210" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d)">
  <circle cx="105" cy="101" r="101" fill="#F0CDA4"/>
  </g>
  <circle cx="105" cy="101" r="80" fill="white"/>
  <circle cx="105.286" cy="101.286" r="34.2857" fill="#7E6200"/>
  <circle cx="105.285" cy="101.286" r="19.0476" fill="#333333"/>
  <circle cx="112.905" cy="86.0477" r="11.4286" fill="white"/>
  <rect x="90" y="137" width="31" height="40" rx="4" fill="#7E6200"/>
  <rect x="84" y="137" width="43" height="26" rx="4" fill="#7E6200"/>
  <defs>
  <filter id="filter0_d" x="0" y="0" width="210" height="210" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
  </filter>
  </defs>
  </svg>    
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="100px" />;

  return <SvgImage />;
}
