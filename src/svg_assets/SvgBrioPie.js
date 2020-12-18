import React from "react";
import { SvgXml } from "react-native-svg";
export default function SvgBrioPie() {
  const svgMarkup = `<svg width="351" height="144" viewBox="0 0 351 144" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M123.296 18.9052C123.296 14.0497 127.261 10.0872 132.117 10.0895L337 10.1849C344.732 10.1885 350.932 16.4591 350.847 24.1906L350.096 93.2249C350.011 100.956 343.675 107.221 335.943 107.218L208.934 107.158L190.595 107.15L155.629 107.118L136.623 107.118C128.743 107.118 122.483 100.617 122.778 92.7401L123.296 78.9314L123.296 50.1088C123.296 47.1683 120.351 45.169 117.602 46.2432L112.701 48.1587C108.627 49.7506 105.77 44.1604 109.422 41.7448V41.7448C109.6 41.6273 109.767 41.4945 109.922 41.348L116.136 35.4736C120.704 31.156 123.296 25.157 123.296 18.9052V18.9052V18.9052Z" fill="#ECC08D"/>
  <path d="M121.898 15.9479C121.898 8.14012 128.273 2.06259 136.068 2.43809L332.568 11.9038C340.291 12.2758 346.469 18.8449 346.367 26.5762L345.437 97.0012C345.335 104.733 338.992 110.698 331.269 110.326L206.132 104.298L188.039 103.427L134.4 100.843C126.749 100.474 120.599 94.0187 120.599 86.3551L120.6 72.9748L120.624 47.6742C120.626 45.3259 118.508 43.4723 116.199 43.802L106.125 45.2404C103.689 45.5883 102.546 42.2136 104.735 41.1335V41.1335C104.847 41.0783 104.953 41.0132 105.053 40.9389L110.348 37.0035C116.895 32.1377 121.07 24.7231 121.898 16.49V16.49L121.898 15.9479Z" fill="#FFFDFD"/>
  <path d="M70.5626 12.5471L87.731 46.1886C88.2663 47.2376 89.2709 47.9675 90.434 48.1525L127.734 54.0848C129.602 54.3818 130.345 56.6703 129.009 58.0081L102.319 84.732C101.487 85.5653 101.103 86.7463 101.287 87.9096L107.171 125.217C107.466 127.085 105.519 128.5 103.834 127.642L70.1705 110.517C69.1209 109.983 67.8791 109.983 66.8295 110.517L33.1659 127.642C31.4807 128.5 29.534 127.085 29.8286 125.217L35.713 87.9096C35.8965 86.7463 35.5128 85.5653 34.6806 84.732L7.9909 58.0081C6.65484 56.6703 7.39843 54.3818 9.26566 54.0848L46.566 48.1525C47.7291 47.9675 48.7337 47.2376 49.269 46.1886L66.4374 12.5471C67.2968 10.863 69.7032 10.863 70.5626 12.5471Z" fill="#FFCD1A" stroke="#CDA000" stroke-width="1.36866" stroke-linecap="square" stroke-linejoin="bevel"/>
  <circle cx="85.462" cy="63.7571" r="13.7" fill="white"/>
  <path d="M82.3365 83.5235C84.1909 89.0111 79.0464 99.7885 70.6578 102.623C62.2692 105.458 53.8242 99.5684 51.9698 94.0808C50.1155 88.5932 55.554 85.5855 63.9426 82.7508C72.3312 79.9162 80.4822 78.0359 82.3365 83.5235Z" fill="white"/>
  <circle cx="82.8524" cy="67.6714" r="5.87143" fill="#FFCC19"/>
  <circle cx="51.538" cy="67.6714" r="13.7" fill="white"/>
  <circle cx="54.1476" cy="70.2809" r="5.87143" fill="#FFCC19"/>
  <circle cx="68.4999" cy="102.9" r="1.95714" fill="#FFCC19"/>
  <circle cx="72.9571" cy="101.957" r="1.95714" fill="#FFCC19"/>
  <circle cx="54.1476" cy="70.2809" r="3.2619" fill="#51ADE0"/>
  <circle cx="82.8524" cy="67.6713" r="3.2619" fill="#51ADE0"/>
  <circle cx="84.1571" cy="65.0619" r="1.95714" fill="white"/>
  <circle cx="55.9571" cy="67.9571" r="1.95714" fill="white"/>
  </svg>
  
  `;
  const SvgImage = () => <SvgXml xml={svgMarkup} />;

  return <SvgImage />;
}
