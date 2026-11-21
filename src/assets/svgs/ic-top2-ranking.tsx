import React, { useId } from "react";

type Props = React.SVGProps<SVGSVGElement>;

const IcTop2Ranking: React.FC<Props> = ({
  width = 52,
  height = 55,
  ...props
}) => {
  const uid = useId();
  const prefix = `top2_${uid}_`;

  // Prefix all ids + url(#...) references so multiple SVGs won't conflict
  const svg = TOP2_SVG_RAW
    .replace(/id="([^"]+)"/g, (_m, id) => `id="${prefix}${id}"`)
    .replace(/url\(#([^)]+)\)/g, (_m, id) => `url(#${prefix}${id})`)
    .replace(/href="#([^"]+)"/g, (_m, id) => `href="#${prefix}${id}"`)
    .replace(/xlink:href="#([^"]+)"/g, (_m, id) => `xlink:href="#${prefix}${id}"`);

  // Render as real <svg> by injecting markup (safe because it's your own SVG string)
  return (
    <span
      {...(props as any)}
      style={{ display: "inline-block", lineHeight: 0, ...props.style }}
      dangerouslySetInnerHTML={{
        __html: svg.replace(
          /<svg\b([^>]*)>/,
          `<svg $1 width="${width}" height="${height}">`
        ),
      }}
    />
  );
};

export default IcTop2Ranking;

const TOP2_SVG_RAW = `
<svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.1">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.9182 11.8843C23.2679 9.45066 27.8037 9.45066 31.1534 11.8843L36.7834 15.9748C40.1331 18.4085 41.5347 22.7223 40.2552 26.6601L38.1048 33.2786C36.8253 37.2164 33.1557 39.8825 29.0153 39.8825H22.0562C17.9158 39.8825 14.2462 37.2164 12.9668 33.2786L10.8163 26.6601C9.53681 22.7223 10.9385 18.4085 14.2881 15.9748L19.9182 11.8843Z" fill="#0298F3" style="mix-blend-mode:multiply"/>
</g>
<g filter="url(#filter0_d_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8613 25.5361H31.2105V47.0033C31.2105 48.2046 29.9313 48.9736 28.8704 48.41L25.5359 46.6386L22.2015 48.41C21.1406 48.9736 19.8613 48.2046 19.8613 47.0033V25.5361Z" fill="#7F45F6"/>
</g>
<mask id="mask0_0_9825" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="19" y="25" width="13" height="24">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8613 25.5361H31.2105V47.0033C31.2105 48.2046 29.9313 48.9736 28.8704 48.41L25.5359 46.6386L22.2015 48.41C21.1406 48.9736 19.8613 48.2046 19.8613 47.0033V25.5361Z" fill="white"/>
</mask>
<g mask="url(#mask0_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.6987 36.8857H28.3733V49.6536H22.6987V36.8857Z" fill="white"/>
</g>
<path style="mix-blend-mode:multiply" opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M21.7906 13.3607C24.0237 11.7383 27.0476 11.7383 29.2807 13.3607L37.3066 19.1919C39.5397 20.8143 40.4741 23.6902 39.6211 26.3154L36.5555 35.7504C35.7025 38.3756 33.2562 40.153 30.4959 40.153H20.5754C17.8151 40.153 15.3687 38.3756 14.5157 35.7504L11.4501 26.3154C10.5971 23.6902 11.5316 20.8143 13.7647 19.1919L21.7906 13.3607Z" fill="#0298F3"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7906 11.9417C24.0237 10.3192 27.0476 10.3192 29.2807 11.9417L37.3066 17.7728C39.5397 19.3952 40.4742 22.2711 39.6212 24.8963L36.5556 34.3313C35.7026 36.9565 33.2562 38.7339 30.4959 38.7339H20.5754C17.8151 38.7339 15.3688 36.9565 14.5158 34.3313L11.4502 24.8963C10.5972 22.2711 11.5316 19.3952 13.7647 17.7728L21.7906 11.9417Z" fill="url(#paint0_linear_0_9825)" stroke="#FEFFFF" stroke-opacity="0.2" stroke-width="1.59287"/>
<mask id="mask1_0_9825" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="10" y="9" width="31" height="31">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7906 11.9417C24.0237 10.3192 27.0476 10.3192 29.2807 11.9417L37.3066 17.7728C39.5397 19.3952 40.4742 22.2711 39.6212 24.8963L36.5556 34.3313C35.7026 36.9565 33.2562 38.7339 30.4959 38.7339H20.5754C17.8151 38.7339 15.3688 36.9565 14.5158 34.3313L11.4502 24.8963C10.5972 22.2711 11.5316 19.3952 13.7647 17.7728L21.7906 11.9417Z" fill="white" stroke="white" stroke-width="1.59287"/>
</mask>
<g mask="url(#mask1_0_9825)">
<path d="M26.9952 10.7193C26.125 10.0871 24.9468 10.0871 24.0767 10.7193L11.8961 19.5689C11.026 20.2011 10.6619 21.3217 10.9942 22.3446L15.6468 36.6637C15.9792 37.6866 16.9324 38.3792 18.0079 38.3792H33.0639C34.1395 38.3792 35.0927 37.6866 35.425 36.6637L40.0776 22.3446C40.41 21.3217 40.0459 20.2011 39.1757 19.5689L26.9952 10.7193Z" stroke="#94B4BD" stroke-width="1.59287" stroke-linecap="round"/>
<path d="M35.4248 36.6638L40.0774 22.3447" stroke="#B1CDD0" stroke-width="1.59287" stroke-linecap="round"/>
<path d="M10.9941 22.3447L15.6467 36.6638" stroke="#B1CDD0" stroke-width="1.59287" stroke-linecap="round"/>
<path d="M40.0776 22.3446C40.41 21.3217 40.0459 20.2011 39.1757 19.5689L26.9952 10.7193C26.125 10.0871 24.9468 10.0871 24.0767 10.7193L11.8961 19.5689C11.026 20.2011 10.6619 21.3217 10.9942 22.3446" stroke="#C3E6E7" stroke-width="1.59287" stroke-linecap="round"/>
<path opacity="0.4" d="M26.9951 10.7193C26.1249 10.0871 24.9467 10.0871 24.0765 10.7193L11.896 19.5689" stroke="#E5FEFF" stroke-width="1.59287" stroke-linecap="round"/>
<path d="M24.0769 10.7197L21.0317 12.9321" stroke="white" stroke-width="1.59287" stroke-linecap="round"/>
</g>
<g filter="url(#filter1_d_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6632 15.547C24.7798 14.7358 26.2917 14.7358 27.4083 15.547L34.4569 20.6682C35.5735 21.4794 36.0407 22.9173 35.6142 24.2299L32.9219 32.5161C32.4954 33.8287 31.2722 34.7174 29.892 34.7174H21.1794C19.7993 34.7174 18.5761 33.8287 18.1496 32.5161L15.4572 24.2299C15.0307 22.9173 15.498 21.4794 16.6145 20.6682L23.6632 15.547Z" fill="url(#paint1_linear_0_9825)"/>
<path d="M23.1953 14.9023C24.5908 13.8886 26.4804 13.8887 27.876 14.9023L34.9248 20.0234C36.3204 21.0374 36.9049 22.835 36.3721 24.4756L33.6797 32.7627C33.1465 34.4033 31.6167 35.5137 29.8916 35.5137H21.1797C19.4547 35.5137 17.9258 34.4031 17.3926 32.7627L14.7002 24.4756C14.1672 22.8349 14.7509 21.0374 16.1465 20.0234L23.1953 14.9023Z" stroke="#94A0A4" stroke-opacity="0.06" stroke-width="1.59287"/>
</g>
<mask id="mask2_0_9825" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="14" width="21" height="21">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.6632 15.547C24.7798 14.7358 26.2917 14.7358 27.4083 15.547L34.4569 20.6682C35.5735 21.4794 36.0407 22.9173 35.6142 24.2299L32.9219 32.5161C32.4954 33.8287 31.2722 34.7174 29.892 34.7174H21.1794C19.7993 34.7174 18.5761 33.8287 18.1496 32.5161L15.4572 24.2299C15.0307 22.9173 15.498 21.4794 16.6145 20.6682L23.6632 15.547Z" fill="white"/>
</mask>
<g mask="url(#mask2_0_9825)">
<g style="mix-blend-mode:multiply" opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5357 25.5357L14.1865 28.373V22.6984L25.5357 25.5357ZM25.5357 25.5357L28.373 14.1865H22.6984L25.5357 25.5357ZM25.5357 25.5357L36.8849 22.6984V28.373L25.5357 25.5357ZM25.5357 25.5357L31.5546 15.5044L35.5671 19.5169L25.5357 25.5357ZM25.5357 25.5357L31.5546 35.5671L35.5671 31.5546L25.5357 25.5357ZM25.5357 25.5357L22.6984 36.8849H28.373L25.5357 25.5357ZM25.5357 25.5357L19.5169 35.5671L15.5044 31.5546L25.5357 25.5357Z" fill="url(#paint2_linear_0_9825)"/>
<path d="M19.5169 15.5044L15.5044 19.5169L25.5357 25.5357L19.5169 15.5044Z" fill="url(#paint3_linear_0_9825)"/>
</g>
<path d="M23.7697 15.9082C23.2773 16.266 22.897 16.5423 22.6289 16.7371" stroke="white" stroke-width="1.59287" stroke-linecap="round"/>
</g>
<g filter="url(#filter2_d_0_9825)">
<path d="M23.7265 23.0457L25.5354 20.4062L27.3443 23.0457L30.4135 23.9504L28.4623 26.4865L28.5502 29.6851L25.5354 28.613L22.5205 29.6851L22.6085 26.4865L20.6572 23.9504L23.7265 23.0457Z" fill="white"/>
<path d="M25.5352 18.8135C26.0605 18.8135 26.5526 19.0725 26.8496 19.5059L28.3369 21.6768L30.8643 22.4229C31.368 22.5715 31.7664 22.9585 31.9287 23.458C32.0911 23.9576 31.9961 24.5055 31.6758 24.9219L30.0693 27.0078L30.1426 29.6416C30.1569 30.1666 29.9113 30.6649 29.4863 30.9736C29.0613 31.2824 28.5116 31.3616 28.0166 31.1855L25.5352 30.3037L23.0547 31.1855C22.5597 31.3616 22.009 31.2824 21.584 30.9736C21.1592 30.6649 20.9144 30.1665 20.9287 29.6416L21.001 27.0098L19.3945 24.9219C19.0742 24.5055 18.9802 23.9576 19.1426 23.458C19.305 22.9585 19.7032 22.5714 20.207 22.4229L22.7324 21.6777L24.2217 19.5059L24.3418 19.3516C24.642 19.0118 25.0756 18.8135 25.5352 18.8135Z" stroke="white" stroke-width="3.18574" stroke-linejoin="round"/>
</g>
<g filter="url(#filter3_i_0_9825)">
<path d="M23.7265 23.0457L25.5354 20.4062L27.3443 23.0457L30.4135 23.9504L28.4623 26.4865L28.5502 29.6851L25.5354 28.613L22.5205 29.6851L22.6085 26.4865L20.6572 23.9504L23.7265 23.0457Z" fill="url(#paint4_linear_0_9825)"/>
</g>
<g filter="url(#filter4_d_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7105 35.1263L21.465 35.0295C21.3148 34.9702 21.241 34.8005 21.3003 34.6503C21.33 34.5749 21.3896 34.5153 21.465 34.4856L21.7105 34.3887C21.9937 34.277 22.2179 34.0528 22.3296 33.7696L22.4265 33.524C22.4857 33.3738 22.6555 33.3001 22.8057 33.3593C22.881 33.389 22.9407 33.4487 22.9704 33.524L23.0673 33.7696C23.1789 34.0528 23.4031 34.277 23.6863 34.3887L23.9319 34.4856C24.0821 34.5448 24.1559 34.7146 24.0966 34.8648C24.0669 34.9401 24.0073 34.9998 23.9319 35.0295L23.6863 35.1263C23.4031 35.238 23.1789 35.4622 23.0673 35.7454L22.9704 35.991C22.9112 36.1412 22.7414 36.2149 22.5912 36.1557C22.5158 36.126 22.4562 36.0663 22.4265 35.991L22.3296 35.7454C22.2179 35.4622 21.9937 35.238 21.7105 35.1263Z" fill="white"/>
</g>
<g filter="url(#filter5_d_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.8768 22.8046L33.5698 22.6836C33.3821 22.6095 33.2899 22.3973 33.364 22.2096C33.4011 22.1154 33.4757 22.0408 33.5698 22.0037L33.8768 21.8826C34.2308 21.743 34.5111 21.4628 34.6507 21.1088L34.7717 20.8018C34.8458 20.614 35.058 20.5218 35.2458 20.5959C35.3399 20.633 35.4145 20.7076 35.4516 20.8018L35.5727 21.1088C35.7123 21.4628 35.9926 21.743 36.3466 21.8826L36.6535 22.0037C36.8413 22.0777 36.9335 22.29 36.8594 22.4777C36.8223 22.5719 36.7477 22.6464 36.6535 22.6836L36.3466 22.8046C35.9926 22.9443 35.7123 23.2245 35.5727 23.5785L35.4516 23.8855C35.3776 24.0732 35.1654 24.1654 34.9776 24.0914C34.8834 24.0542 34.8089 23.9797 34.7717 23.8855L34.6507 23.5785C34.5111 23.2245 34.2308 22.9443 33.8768 22.8046Z" fill="white"/>
</g>
<g filter="url(#filter6_d_0_9825)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6375 26.1668L16.4533 26.0941C16.3407 26.0497 16.2854 25.9224 16.3298 25.8097C16.3521 25.7532 16.3968 25.7085 16.4533 25.6862L16.6375 25.6135C16.8499 25.5298 17.0181 25.3616 17.1018 25.1492L17.1745 24.965C17.2189 24.8524 17.3462 24.7971 17.4589 24.8415C17.5154 24.8638 17.5601 24.9085 17.5824 24.965L17.6551 25.1492C17.7388 25.3616 17.907 25.5298 18.1194 25.6135L18.3036 25.6862C18.4162 25.7306 18.4715 25.858 18.4271 25.9706C18.4048 26.0271 18.3601 26.0718 18.3036 26.0941L18.1194 26.1668C17.907 26.2505 17.7388 26.4187 17.6551 26.6311L17.5824 26.8153C17.538 26.9279 17.4106 26.9832 17.298 26.9388C17.2415 26.9165 17.1968 26.8718 17.1745 26.8153L17.1018 26.6311C17.0181 26.4187 16.8499 26.2505 16.6375 26.1668Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_0_9825" x="16.6756" y="25.5361" width="17.7206" height="29.434" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.18574"/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.790431 0 0 0 0 0.819608 0 0 0 0.2 0"/>
<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<filter id="filter1_d_0_9825" x="10.5223" y="11.7528" width="30.0268" height="29.3363" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.59287"/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0196078 0 0 0 0 0.443137 0 0 0 0 0.643137 0 0 0 0.12 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<filter id="filter2_d_0_9825" x="14.2859" y="15.6278" width="22.4989" height="22.0219" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.59287"/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.596078 0 0 0 0 0.745098 0 0 0 0 0.780392 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<filter id="filter3_i_0_9825" x="20.6572" y="20.4062" width="9.75635" height="10.8712" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.59287"/>
<feGaussianBlur stdDeviation="0.796435"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.508286 0 0 0 0 0.694443 0 0 0 0 0.72829 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9825"/>
</filter>
<filter id="filter4_d_0_9825" x="18.094" y="30.1531" width="9.20889" height="9.2084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<filter id="filter5_d_0_9825" x="30.1526" y="17.3846" width="9.91787" height="9.91836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<filter id="filter6_d_0_9825" x="13.1287" y="21.6404" width="8.49941" height="8.49941" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.59287"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.705882 0 0 0 0 0.823529 0 0 0 0 0.831373 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9825"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9825" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_9825" x1="9.22119" y1="9.2207" x2="9.22119" y2="41.8497" gradientUnits="userSpaceOnUse">
<stop stop-color="#C4ECEB"/>
<stop offset="1" stop-color="#A7BCC1"/>
</linearGradient>
<linearGradient id="paint1_linear_0_9825" x1="14.1865" y1="14.1865" x2="14.1865" y2="36.8849" gradientUnits="userSpaceOnUse">
<stop stop-color="#F0FBFE"/>
<stop offset="1" stop-color="#C0DCDC"/>
</linearGradient>
<linearGradient id="paint2_linear_0_9825" x1="15.2361" y1="14.1865" x2="15.2361" y2="34.7858" gradientUnits="userSpaceOnUse">
<stop stop-color="#AFD4D6"/>
<stop offset="1" stop-color="#B9D9DB" stop-opacity="0.57"/>
</linearGradient>
<linearGradient id="paint3_linear_0_9825" x1="15.2361" y1="14.1865" x2="15.2361" y2="34.7858" gradientUnits="userSpaceOnUse">
<stop stop-color="#AFD4D6"/>
<stop offset="1" stop-color="#B9D9DB" stop-opacity="0.57"/>
</linearGradient>
<linearGradient id="paint4_linear_0_9825" x1="20.6572" y1="20.4062" x2="20.6572" y2="29.6851" gradientUnits="userSpaceOnUse">
<stop stop-color="#B7D6D8"/>
<stop offset="1" stop-color="#A7BCC1"/>
</linearGradient>
</defs>
</svg>
`;
