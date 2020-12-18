import React from "react";
import { SvgXml } from "react-native-svg";  
export default function SvgBrioFront(){  
  const svgMarkup = `<svg width="150" height="150" viewBox="0 0 316 316" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M142.638 34.6836L185.741 93.2218C187.428 95.5135 190.109 96.8603 192.955 96.8459L265.649 96.4765C270.218 96.4533 272.887 101.619 270.225 105.332L227.871 164.414C226.213 166.727 225.761 169.693 226.654 172.395L249.469 241.417C250.903 245.755 246.815 249.89 242.461 248.506L173.182 226.482C170.47 225.62 167.509 226.107 165.216 227.791L106.622 270.818C102.94 273.522 97.7438 270.912 97.7147 266.344L97.2521 193.65C97.234 190.805 95.8565 188.139 93.5457 186.478L34.518 144.048C30.8082 141.382 31.685 135.634 36.021 134.194L105.014 111.291C107.714 110.394 109.824 108.26 110.69 105.549L132.802 36.2993C134.192 31.9471 139.929 31.0046 142.638 34.6836Z" fill="#FFCD1A" stroke="#CDA000" stroke-width="3.30724" stroke-linecap="square" stroke-linejoin="bevel"/>
  <circle cx="187.559" cy="129.062" r="27.4728" transform="rotate(-9.32789 187.559 129.062)" fill="white"/>
  <path d="M187.799 169.192C193.252 179.448 186.575 202.446 170.898 210.782C155.22 219.118 136.594 210.209 131.141 199.953C125.688 189.696 135.472 181.977 151.15 173.641C166.828 165.306 182.346 158.936 187.799 169.192Z" fill="white"/>
  <circle cx="183.668" cy="137.656" r="11.774" transform="rotate(-9.32789 183.668 137.656)" fill="#FFCC19"/>
  <circle cx="121.703" cy="147.834" r="27.4728" transform="rotate(-9.32789 121.703 147.834)" fill="white"/>
  <circle cx="127.715" cy="152.149" r="11.774" transform="rotate(-9.32789 127.715 152.149)" fill="#FFCC19"/>
  <circle cx="127.715" cy="152.15" r="6.54113" transform="rotate(-9.32789 127.715 152.15)" fill="#3CB9FF"/>
  <circle cx="183.668" cy="137.656" r="6.54113" transform="rotate(-9.32789 183.668 137.656)" fill="#3CB9FF"/>
  <circle cx="187.509" cy="137.133" r="3.92468" transform="rotate(-9.32789 187.509 137.133)" fill="white"/>
  <circle cx="131.509" cy="151.133" r="3.92468" transform="rotate(-9.32789 131.509 151.133)" fill="white"/>
  <circle cx="168" cy="212" r="9" fill="#FFCC19"/>
  <circle cx="182.5" cy="201.5" r="6.5" fill="#FFCC19"/>
  </svg>
  
  
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="125px" />;  

  return <SvgImage />;
}