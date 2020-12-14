import React from "react";
import { SvgXml } from "react-native-svg";

export default function SvgDotSliderBlue() {
  const svgMarkup = `<svg width="86" height="14" viewBox="0 0 86 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 0C3.13306 0 0 3.13306 0 7C0 10.8669 3.13306 14 7 14C10.8669 14 14 10.8669 14 7C14 3.13306 10.8669 0 7 0Z" fill="#ECC08D"/>
  <path d="M31 0C27.1331 0 24 3.13306 24 7C24 10.8669 27.1331 14 31 14C34.8669 14 38 10.8669 38 7C38 3.13306 34.8669 0 31 0Z" fill="#51ADE0"/>
  <path d="M55 0C51.1331 0 48 3.13306 48 7C48 10.8669 51.1331 14 55 14C58.8669 14 62 10.8669 62 7C62 3.13306 58.8669 0 55 0Z" fill="#ECC08D"/>
  <path d="M79 0C75.1331 0 72 3.13306 72 7C72 10.8669 75.1331 14 79 14C82.8669 14 86 10.8669 86 7C86 3.13306 82.8669 0 79 0Z" fill="#ECC08D"/>
  </svg>
  
 `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="768px" />;

  return <SvgImage />;
}
