import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgEyeball(props) {
  const svgMarkup = `<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="13" cy="13" r="13" fill=${props.eyeColor}/>
  <circle cx="12.9999" cy="13.0001" r="7.22222" fill="#333333"/>
  <circle cx="15.8889" cy="7.22213" r="4.33334" fill="white"/>
  </svg>  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="30px" />;

  return <SvgImage />;
}
