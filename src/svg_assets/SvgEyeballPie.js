import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgEyeballPie(props) {
  const svgMarkup = `<svg width="161" height="161" viewBox="0 0 160 161" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="80" cy="80.8605" r="80" fill="white"/>
  <circle cx="73.3333" cy="90.3843" r="34.2857" fill=${props.eyeColor} />
  <circle cx="73.3331" cy="90.3843" r="19.0476" fill="#51ADE0"/>
  <circle cx="80.9523" cy="75.1463" r="11.4286" fill="white"/>
  </svg>
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="130px" />;

  return <SvgImage />;
}
