import React, { useId, useMemo } from "react";

const RAW_SVG = `<svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.594 43.5956C38.3775 43.5956 39.0127 44.2252 39.0127 45.0019C39.0127 45.7786 38.3775 46.4082 37.594 46.4082H24.8261C24.7428 46.4082 24.6611 46.4011 24.5816 46.3874C20.0244 46.1881 15.8396 44.5679 12.467 41.9628C12.1927 41.7509 11.7793 41.3997 11.4729 41.1354C11.2109 40.9094 10.876 40.7829 10.5287 40.7829H7.09301C6.30951 40.7829 5.67436 40.1533 5.67436 39.3766C5.67436 38.5999 6.30951 37.9703 7.09301 37.9703H8.51166C9.29516 37.9703 9.93032 37.3407 9.93032 36.564C9.93032 35.7873 9.29516 35.1577 8.51166 35.1577H4.96504C4.18154 35.1577 3.54639 34.528 3.54639 33.7514C3.54639 32.9747 4.18154 32.345 4.96504 32.345H5.67436C6.45786 32.345 7.09301 31.7154 7.09301 30.9387C7.09301 30.162 6.45786 29.5324 5.67436 29.5324C5.10073 29.5324 4.6101 29.1225 4.51466 28.5618C4.47998 28.3581 4.45243 28.194 4.44789 28.1607C4.32116 27.2295 4.25571 26.2791 4.25571 25.3135C4.25571 13.6632 13.783 4.21875 25.5355 4.21875C29.0821 4.21875 32.6287 4.21875 36.1754 4.21875C36.9589 4.21875 37.594 4.84838 37.594 5.62506C37.594 6.40175 36.9589 7.03138 36.1754 7.03138H34.0474C33.2639 7.03138 32.6287 7.66101 32.6287 8.43769C32.6287 9.21438 33.2639 9.84401 34.0474 9.84401H42.5593C43.3428 9.84401 43.9779 10.4736 43.9779 11.2503C43.9779 12.0265 43.3436 12.6558 42.5608 12.6566L40.4313 12.6566C39.6478 12.6566 39.0127 13.2863 39.0127 14.063C39.0127 14.8396 39.6478 15.4693 40.4313 15.4693H43.4857C44.0222 15.4693 44.5139 15.7687 44.7465 16.248C44.8863 16.536 45.0334 16.8467 45.1296 17.0713C46.2149 19.6033 46.8152 22.3889 46.8152 25.3135C46.8152 26.2324 46.756 27.1376 46.641 28.0255C46.6217 28.1748 46.592 28.3664 46.5597 28.5626C46.4672 29.1255 45.9719 29.5324 45.3966 29.5324C44.6131 29.5324 43.9779 30.162 43.9779 30.9387C43.9779 31.7154 44.6131 32.345 45.3966 32.345H46.1059C46.8894 32.345 47.5246 32.9747 47.5246 33.7514C47.5246 34.528 46.8894 35.1577 46.1059 35.1577H45.1953C44.6802 35.1577 44.2066 35.4349 43.9493 35.8771C43.7822 36.1644 43.5964 36.4769 43.4584 36.6902C43.1348 37.19 42.7905 37.6755 42.4268 38.1453C42.0614 38.6173 41.6764 39.0734 41.2729 39.5126C41.0514 39.7537 40.6927 40.1107 40.4129 40.385C40.1511 40.6416 39.7973 40.7829 39.4291 40.7829H35.466C34.6825 40.7829 34.0474 41.4126 34.0474 42.1892C34.0474 42.9605 34.6737 43.5868 35.4497 43.5955L37.594 43.5956Z" fill="url(#paint0_linear_0_9817)"/>
<g opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8288 10.3893C23.7443 8.72071 27.3254 8.72071 30.2409 10.3893L36.1581 13.7759C39.1069 15.4636 40.9262 18.601 40.9262 21.9986V28.6289C40.9262 32.0265 39.1069 35.1639 36.1581 36.8515L30.2409 40.2381C27.3254 41.9068 23.7443 41.9068 20.8288 40.2381L14.9116 36.8515C11.9629 35.1639 10.1436 32.0265 10.1436 28.6289L10.1436 21.9986C10.1436 18.601 11.9629 15.4636 14.9116 13.7759L20.8288 10.3893Z" fill="#A4053A" fill-opacity="0.2" style="mix-blend-mode:multiply"/>
</g>
<g filter="url(#filter0_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.605 23.2041H26.9542V43.1602C26.9542 44.3316 25.7235 45.0951 24.6739 44.5749L21.2796 42.8925L17.8852 44.5749C16.8357 45.0951 15.605 44.3316 15.605 43.1602V23.2041Z" fill="#7F45F6"/>
</g>
<g filter="url(#filter1_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.1167 23.2041H35.4659V43.1602C35.4659 44.3316 34.2352 45.0951 33.1857 44.5749L29.7913 42.8925L26.397 44.5749C25.3474 45.0951 24.1167 44.3316 24.1167 43.1602V23.2041Z" fill="#7F45F6"/>
</g>
<g filter="url(#filter2_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8608 26.7197H31.21V46.6758C31.21 47.8472 29.9794 48.6108 28.9298 48.0905L25.5354 46.4081L22.1411 48.0905C21.0915 48.6108 19.8608 47.8472 19.8608 46.6758V26.7197Z" fill="white"/>
</g>
<mask id="mask0_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="19" y="26" width="13" height="23">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.8608 26.7197H31.21V46.6758C31.21 47.8472 29.9794 48.6108 28.9298 48.0905L25.5354 46.4081L22.1411 48.0905C21.0915 48.6108 19.8608 47.8472 19.8608 46.6758V26.7197Z" fill="white"/>
</mask>
<g mask="url(#mask0_0_9817)">
<rect x="22.6982" y="26.7197" width="5.6746" height="22.501" fill="#F55462"/>
</g>
<path style="mix-blend-mode:multiply" opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M22.3981 12.3429C24.3418 11.2305 26.7292 11.2305 28.6729 12.3429L36.4856 16.8144C38.4514 17.9395 39.6643 20.0311 39.6643 22.2961V31.1437C39.6643 33.4088 38.4514 35.5004 36.4856 36.6255L28.6729 41.0969C26.7292 42.2094 24.3418 42.2094 22.3981 41.0969L14.5854 36.6255C12.6196 35.5004 11.4067 33.4088 11.4067 31.1437L11.4067 22.2961C11.4067 20.0311 12.6196 17.9395 14.5854 16.8143L22.3981 12.3429Z" fill="#A4053A" fill-opacity="0.2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4774 17.2267L9.93076 15.8204V15.1173L7.56816 14.1414C6.82178 13.8331 6.05658 14.5402 6.30502 15.3085L9.85682 26.2938C10.0144 26.7812 10.3987 27.1619 10.8875 27.3149L13.4774 28.1257V17.2267Z" fill="url(#paint1_linear_0_9817)" stroke="url(#paint2_linear_0_9817)" stroke-width="1.57902" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask1_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="5" y="13" width="10" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4774 19.1344C13.4774 17.9829 12.7745 16.948 11.7041 16.5236L10.2601 15.951C10.0613 15.8722 9.93076 15.68 9.93076 15.4662C9.93076 15.255 9.80345 15.0647 9.60829 14.9841L8.92521 14.7019C7.64386 14.1727 6.33021 15.3865 6.75671 16.7056L9.80896 26.1458C9.99657 26.726 10.454 27.1792 11.036 27.3614C12.2466 27.7404 13.4774 26.836 13.4774 25.5675V19.1344Z" fill="white" stroke="white" stroke-width="1.57902"/>
</mask>
<g mask="url(#mask1_0_9817)">
<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter3_i_0_9817)">
<path d="M13.6089 21.1192C13.7907 21.1913 13.8792 21.3959 13.8065 21.5762C13.7337 21.7565 13.5273 21.8441 13.3454 21.772L9.79881 20.3657C9.66416 20.3123 9.57587 20.183 9.57587 20.0393V19.5705L5.53817 17.9028C5.35736 17.8281 5.27186 17.6222 5.3472 17.443C5.42253 17.2638 5.63018 17.179 5.81099 17.2537L10.0669 19.0116C10.1991 19.0662 10.2852 19.1942 10.2852 19.3361V19.8013L13.6089 21.1192Z" fill="#FABC10"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter4_i_0_9817)">
<path d="M14.3183 25.3379C14.5002 25.41 14.5887 25.6146 14.5159 25.7949C14.4432 25.9752 14.2368 26.0629 14.0549 25.9908L10.5083 24.5845C10.3736 24.5311 10.2853 24.4018 10.2853 24.258V23.7893L6.24764 22.1215C6.06684 22.0468 5.98133 21.841 6.05667 21.6618C6.13201 21.4825 6.33965 21.3978 6.52046 21.4724L10.7764 23.2303C10.9086 23.2849 10.9947 23.4129 10.9947 23.5549V24.02L14.3183 25.3379Z" fill="#FABC10"/>
</g>
<g opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8288 10.3893C23.7443 8.72071 27.3254 8.72071 30.2409 10.3893L36.1581 13.7759C39.1069 15.4636 40.9262 18.601 40.9262 21.9986V28.6289C40.9262 32.0265 39.1069 35.1639 36.1581 36.8515L30.2409 40.2381C27.3254 41.9068 23.7443 41.9068 20.8288 40.2381L14.9116 36.8515C11.9629 35.1639 10.1436 32.0265 10.1436 28.6289L10.1436 21.9986C10.1436 18.601 11.9629 15.4636 14.9116 13.7759L20.8288 10.3893Z" fill="#A4053A" fill-opacity="0.2" style="mix-blend-mode:multiply"/>
</g>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5944 17.2267L41.141 15.8204V15.1173L43.5036 14.1414C44.25 13.8331 45.0152 14.5402 44.7668 15.3085L41.215 26.2938C41.0574 26.7812 40.6731 27.1619 40.1842 27.3149L37.5944 28.1257V17.2267Z" fill="url(#paint3_linear_0_9817)" stroke="url(#paint4_linear_0_9817)" stroke-width="1.57902" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask2_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="36" y="13" width="10" height="16">
<path fill-rule="evenodd" clip-rule="evenodd" d="M37.5944 19.1344C37.5944 17.9829 38.2973 16.948 39.3677 16.5236L40.8117 15.951C41.0105 15.8722 41.141 15.68 41.141 15.4662C41.141 15.255 41.2683 15.0647 41.4635 14.9841L42.1466 14.7019C43.4279 14.1727 44.7416 15.3865 44.3151 16.7056L41.2628 26.1458C41.0752 26.726 40.6178 27.1792 40.0358 27.3614C38.8251 27.7404 37.5944 26.836 37.5944 25.5675V19.1344Z" fill="white" stroke="white" stroke-width="1.57902"/>
</mask>
<g mask="url(#mask2_0_9817)">
<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter5_i_0_9817)">
<path d="M37.4629 21.1192C37.281 21.1913 37.1926 21.3959 37.2653 21.5762C37.3381 21.7565 37.5445 21.8441 37.7263 21.772L41.273 20.3657C41.4076 20.3123 41.4959 20.183 41.4959 20.0393V19.5705L45.5336 17.9028C45.7144 17.8281 45.7999 17.6222 45.7246 17.443C45.6492 17.2638 45.4416 17.179 45.2608 17.2537L41.0048 19.0116C40.8727 19.0662 40.7866 19.1942 40.7866 19.3361V19.8013L37.4629 21.1192Z" fill="#FABC10"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.6" filter="url(#filter6_i_0_9817)">
<path d="M36.7534 25.3379C36.5716 25.41 36.4831 25.6146 36.5558 25.7949C36.6286 25.9752 36.835 26.0629 37.0169 25.9908L40.5635 24.5845C40.6981 24.5311 40.7864 24.4018 40.7864 24.258V23.7893L44.8241 22.1215C45.0049 22.0468 45.0904 21.841 45.0151 21.6618C44.9398 21.4825 44.7321 21.3978 44.5513 21.4724L40.2954 23.2303C40.1632 23.2849 40.0771 23.4129 40.0771 23.5549V24.02L36.7534 25.3379Z" fill="#FABC10"/>
</g>
<g opacity="0.2">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.243 10.3893C27.3275 8.72071 23.7464 8.72071 20.8308 10.3893L14.9137 13.7759C11.9649 15.4636 10.1456 18.601 10.1456 21.9986V28.6289C10.1456 32.0265 11.9649 35.1639 14.9137 36.8515L20.8308 40.2381C23.7464 41.9068 27.3275 41.9068 30.243 40.2381L36.1602 36.8515C39.1089 35.1639 40.9282 32.0265 40.9282 28.6289L40.9282 21.9986C40.9282 18.601 39.1089 15.4636 36.1602 13.7759L30.243 10.3893Z" fill="#A4053A" fill-opacity="0.2" style="mix-blend-mode:multiply"/>
</g>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7678 29.5322L10.6824 30.5659C10.2123 30.7989 9.8886 31.2502 9.81866 31.7702L9.47555 34.3211C9.37116 35.0973 10.2 35.6577 10.8815 35.2717L14.1865 33.3996L12.7678 29.5322Z" fill="url(#paint5_linear_0_9817)" stroke="url(#paint6_linear_0_9817)" stroke-width="1.57902" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask3_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="8" y="29" width="7" height="7">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5064 31.5456C13.1121 30.4708 11.8721 29.9762 10.8464 30.4846C10.2737 30.7684 9.87946 31.3182 9.79426 31.9516L9.75645 32.2327C9.53677 33.866 11.281 35.0454 12.715 34.2331C13.5638 33.7523 13.94 32.7278 13.604 31.8119L13.5064 31.5456Z" fill="white" stroke="white" stroke-width="1.57902"/>
</mask>
<g mask="url(#mask3_0_9817)">
<g opacity="0.1">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.6735 10.3884C23.589 8.71974 27.1702 8.71974 30.0857 10.3884L36.0029 13.775C38.9516 15.4626 40.7709 18.6 40.7709 21.9976V28.6279C40.7709 32.0255 38.9516 35.1629 36.0029 36.8506L30.0857 40.2372C27.1702 41.9058 23.589 41.9058 20.6735 40.2372L14.7563 36.8506C11.8076 35.1629 9.98828 32.0255 9.98828 28.6279L9.98828 21.9976C9.98828 18.6 11.8076 15.4626 14.7563 13.775L20.6735 10.3884Z" fill="#F37E02" style="mix-blend-mode:multiply"/>
</g>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.304 29.5322L40.3894 30.5659C40.8595 30.7989 41.1832 31.2502 41.2531 31.7702L41.5962 34.3211C41.7006 35.0973 40.8717 35.6577 40.1903 35.2717L36.8853 33.3996L38.304 29.5322Z" fill="url(#paint7_linear_0_9817)" stroke="url(#paint8_linear_0_9817)" stroke-width="1.57902" stroke-linecap="round" stroke-linejoin="round"/>
<mask id="mask4_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="36" y="28" width="7" height="9">
<path fill-rule="evenodd" clip-rule="evenodd" d="M38.304 29.5322L40.3894 30.5659C40.8595 30.7989 41.1832 31.2502 41.2531 31.7702L41.5962 34.3211C41.7006 35.0973 40.8717 35.6577 40.1903 35.2717L36.8853 33.3996L38.304 29.5322Z" fill="white" stroke="white" stroke-width="1.57902" stroke-linecap="round" stroke-linejoin="round"/>
</mask>
<g mask="url(#mask4_0_9817)">
<g opacity="0.1">
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.3982 10.3884C27.4827 8.71974 23.9016 8.71974 20.9861 10.3884L15.0689 13.775C12.1202 15.4626 10.3009 18.6 10.3009 21.9976V28.6279C10.3009 32.0255 12.1202 35.1629 15.0689 36.8506L20.9861 40.2372C23.9016 41.9058 27.4827 41.9058 30.3982 40.2372L36.3154 36.8506C39.2642 35.1629 41.0835 32.0255 41.0835 28.6279L41.0835 21.9976C41.0835 18.6 39.2642 15.4626 36.3154 13.775L30.3982 10.3884Z" fill="#F37E02" style="mix-blend-mode:multiply"/>
</g>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2944 16.187C21.2944 17.5461 20.5146 18.7846 19.2891 19.3721C16.9444 20.4962 14.23 18.7872 14.23 16.187V14.4391C14.23 13.6084 14.6748 12.8413 15.3957 12.4287L18.931 10.4054C19.9837 9.8029 21.2944 10.5629 21.2944 11.7758V16.187Z" fill="url(#paint9_linear_0_9817)"/>
<path opacity="0.4" d="M15.043 13.0364L20.4158 9.96191" stroke="#FDEDAC" stroke-width="1.57902" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.7774 16.187C29.7774 17.5461 30.5572 18.7846 31.7827 19.3721C34.1273 20.4962 36.8418 18.7872 36.8418 16.187V14.4391C36.8418 13.6084 36.397 12.8413 35.6761 12.4287L32.1408 10.4054C31.0881 9.8029 29.7774 10.5629 29.7774 11.7758V16.187Z" fill="url(#paint10_linear_0_9817)"/>
<path opacity="0.4" d="M36.0293 13.0364L30.6564 9.96191" stroke="#FDEDAC" stroke-width="1.57902" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M22.3983 10.9372C24.342 9.82479 26.7294 9.82479 28.6731 10.9372L36.4857 15.4086C38.4516 16.5338 39.6644 18.6254 39.6644 20.8904V29.738C39.6644 32.0031 38.4516 34.0947 36.4857 35.2198L28.6731 39.6912C26.7294 40.8036 24.342 40.8036 22.3983 39.6912L14.5856 35.2198C12.6198 34.0947 11.4069 32.0031 11.4069 29.738V20.8904C11.4069 18.6254 12.6198 16.5338 14.5856 15.4086L22.3983 10.9372Z" fill="url(#paint11_linear_0_9817)" stroke="#FFF04D" stroke-opacity="0.4" stroke-width="1.57902"/>
<mask id="mask5_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="11" y="9" width="29" height="33">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.967 10.0394C24.9388 9.4832 26.1325 9.4832 27.1044 10.0394L38.0751 16.3183C39.058 16.8808 39.6644 17.9266 39.6644 19.0592V31.5693C39.6644 32.7018 39.058 33.7476 38.0751 34.3102L27.1044 40.589C26.1325 41.1452 24.9388 41.1452 23.967 40.589L12.9963 34.3102C12.0133 33.7476 11.4069 32.7018 11.4069 31.5693V19.0592C11.4069 17.9266 12.0134 16.8808 12.9963 16.3183L23.967 10.0394Z" fill="white"/>
</mask>
<g mask="url(#mask5_0_9817)">
<g style="mix-blend-mode:multiply" opacity="0.8" filter="url(#filter7_i_0_9817)">
<path d="M24.4609 11.958C25.1265 11.5769 25.9468 11.5767 26.6123 11.958L36.6523 17.7109C37.3178 18.0924 37.7285 18.7978 37.7285 19.5605V23.7109L38.2119 24.4316C38.5695 24.9641 38.5695 25.6599 38.2119 26.1924L37.7285 26.9121V31.0664C37.7285 31.829 37.3176 32.5336 36.6523 32.915L26.6123 38.6689C25.9469 39.0502 25.1264 39.05 24.4609 38.6689L14.4209 32.915C13.7553 32.5336 13.3448 31.8292 13.3447 31.0664V26.9131L12.8604 26.1924C12.5027 25.6599 12.5027 24.9641 12.8604 24.4316L13.3447 23.71V19.5605C13.3447 18.7977 13.7552 18.0924 14.4209 17.7109L24.4609 11.958ZM26.2539 12.5742C25.8103 12.32 25.263 12.3202 24.8193 12.5742L14.7793 18.3271C14.3355 18.5814 14.0625 19.052 14.0625 19.5605V23.7109L14.5459 24.4316C14.9035 24.9641 14.9035 25.6599 14.5459 26.1924L14.0625 26.9121V31.0664C14.0626 31.5749 14.3356 32.0446 14.7793 32.2988L24.8193 38.0518C25.263 38.3058 25.8103 38.306 26.2539 38.0518L36.2939 32.2988C36.7373 32.0445 37.0107 31.5747 37.0107 31.0664V26.9131L36.5264 26.1924C36.1687 25.6599 36.1687 24.9641 36.5264 24.4316L37.0107 23.71V19.5605C37.0107 19.0521 36.7375 18.5815 36.2939 18.3271L26.2539 12.5742Z" fill="#FABC10"/>
</g>
<path d="M26.7771 10.2575C26.009 9.81783 25.0626 9.81783 24.2945 10.2575L13.003 16.7199C12.2349 17.1595 11.7617 17.972 11.7617 18.8512L11.7617 31.7761C11.7617 32.6553 12.2349 33.4678 13.003 33.9074L24.2945 40.3699C25.0626 40.8095 26.009 40.8095 26.7771 40.3699L38.0686 33.9074C38.8367 33.4678 39.3099 32.6553 39.3099 31.7761V18.8512C39.3099 17.972 38.8367 17.1595 38.0686 16.7199L26.7771 10.2575Z" stroke="#FAB90A" stroke-width="1.57902"/>
<path opacity="0.4" d="M26.7773 40.3695C28.1053 39.6095 29.0463 39.0709 29.6002 38.7539" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
<path d="M39.3099 31.7761V18.8512C39.3099 17.972 38.8367 17.1595 38.0686 16.7199L26.7771 10.2575C26.009 9.81783 25.0626 9.81783 24.2945 10.2575L13.003 16.7199C12.2349 17.1595 11.7617 17.972 11.7617 18.8512L11.7617 31.7761" stroke="#FAC81C" stroke-width="1.57902" stroke-linecap="round"/>
<path opacity="0.6" d="M39.3099 18.8512C39.3099 17.972 38.8367 17.1595 38.0686 16.7199L26.7771 10.2575C26.009 9.81783 25.0626 9.81783 24.2945 10.2575L13.003 16.7199C12.2349 17.1595 11.7617 17.972 11.7617 18.8512" stroke="#FDDB3D" stroke-width="1.57902" stroke-linecap="round"/>
<path opacity="0.6" d="M26.7773 10.2575C26.0092 9.81783 25.0628 9.81783 24.2947 10.2575C24.2947 10.2575 20.5308 12.4116 18.6489 13.4887" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
<path d="M24.2945 10.2578C24.2945 10.2578 22.3026 11.3979 21.4717 11.8734" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
</g>
<g filter="url(#filter8_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.967 14.9603C24.9389 14.4041 26.1326 14.4041 27.1044 14.9603L33.7751 18.7781C34.758 19.3407 35.3644 20.3865 35.3644 21.519V29.107C35.3644 30.2395 34.758 31.2854 33.7751 31.8479L27.1044 35.6657C26.1326 36.2219 24.9389 36.2219 23.967 35.6657L17.2964 31.8479C16.3135 31.2854 15.707 30.2395 15.707 29.107V21.519C15.707 20.3865 16.3135 19.3407 17.2964 18.7781L23.967 14.9603Z" fill="url(#paint12_linear_0_9817)"/>
<path d="M23.5752 14.2754C24.79 13.5802 26.2823 13.5801 27.4971 14.2754L34.167 18.0928C35.3955 18.7959 36.1541 20.1031 36.1543 21.5186V29.1074C36.1542 30.5229 35.3955 31.8301 34.167 32.5332L27.4971 36.3506C26.2823 37.0458 24.79 37.0458 23.5752 36.3506L16.9043 32.5332C15.6758 31.8301 14.9181 30.5229 14.918 29.1074V21.5186C14.9181 20.1031 15.6758 18.7959 16.9043 18.0928L23.5752 14.2754Z" stroke="#F5900D" stroke-opacity="0.1" stroke-width="1.57902" style="mix-blend-mode:multiply"/>
</g>
<mask id="mask6_0_9817" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="15" y="14" width="21" height="23">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.967 14.9603C24.9389 14.4041 26.1326 14.4041 27.1044 14.9603L33.7751 18.7781C34.758 19.3407 35.3644 20.3865 35.3644 21.519V29.107C35.3644 30.2395 34.758 31.2854 33.7751 31.8479L27.1044 35.6657C26.1326 36.2219 24.9389 36.2219 23.967 35.6657L17.2964 31.8479C16.3135 31.2854 15.707 30.2395 15.707 29.107V21.519C15.707 20.3865 16.3135 19.3407 17.2964 18.7781L23.967 14.9603Z" fill="white"/>
</mask>
<g mask="url(#mask6_0_9817)">
<g style="mix-blend-mode:multiply" opacity="0.3">
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5357 25.313L14.1865 28.1256V22.5004L25.5357 25.313ZM25.5357 25.313L28.373 14.0625H22.6984L25.5357 25.313ZM25.5357 25.313L36.8849 22.5004V28.1256L25.5357 25.313ZM25.5357 25.313L31.5546 15.3689L35.5671 19.3465L25.5357 25.313ZM25.5357 25.313L31.5546 35.2572L35.5671 31.2795L25.5357 25.313ZM25.5357 25.313L22.6984 36.5635H28.373L25.5357 25.313ZM25.5357 25.313L19.5169 35.2572L15.5044 31.2795L25.5357 25.313Z" fill="#FFD640"/>
<path d="M19.5169 15.3689L15.5044 19.3465L25.5357 25.313L19.5169 15.3689Z" fill="#FFD640"/>
</g>
<path opacity="0.4" d="M34.4778 19.5865L26.0678 14.7731C25.7386 14.5847 25.333 14.5847 25.0038 14.7731C24.0147 15.3392 23.3139 15.7403 22.9013 15.9765C22.0427 16.4679 21.3418 16.869 20.7988 17.1798C19.8643 17.7146 18.4627 18.5168 16.5938 19.5865" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
<path d="M25.0039 14.7734C24.0148 15.3395 23.3139 15.7406 22.9014 15.9768" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
<path opacity="0.4" d="M34.4779 31.0161L26.0679 35.8294C25.7387 36.0178 25.3331 36.0178 25.0039 35.8294" stroke="white" stroke-width="1.57902" stroke-linecap="round"/>
</g>
<g filter="url(#filter9_d_0_9817)">
<path d="M21.1221 21.4867L25.5357 18.8682L29.9492 21.4867V29.1409L25.5357 31.7594L21.1221 29.1409V21.4867Z" fill="white"/>
<path d="M31.5283 29.1406C31.5283 29.6981 31.2343 30.2146 30.7549 30.499L26.3418 33.1172C25.8451 33.4119 25.2262 33.4119 24.7295 33.1172L20.3164 30.499C19.837 30.2146 19.543 29.6981 19.543 29.1406V21.4863C19.5431 20.9291 19.8371 20.4133 20.3164 20.1289L24.7295 17.5098L24.9219 17.4131C25.3796 17.2199 25.9073 17.252 26.3418 17.5098L30.7549 20.1289C31.2342 20.4133 31.5282 20.9291 31.5283 21.4863V29.1406Z" stroke="white" stroke-width="3.15804" stroke-linejoin="round"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1221 21.4867L25.5357 18.8682V21.6881L23.5295 22.8967L21.1221 21.4867Z" fill="url(#paint13_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.1221 21.4863V29.1405L23.5295 27.7305V22.8963L21.1221 21.4863Z" fill="url(#paint14_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5357 31.759L21.1221 29.1404L23.5295 27.7305L25.5357 28.939V31.759Z" fill="url(#paint15_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M25.5356 31.759L29.9492 29.1404L27.5418 27.7305L25.5356 28.939V31.759Z" fill="url(#paint16_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9489 21.4863V29.1405L27.5415 27.7305V22.8963L29.9489 21.4863Z" fill="url(#paint17_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.9492 21.4867L25.5356 18.8682V21.6881L27.5418 22.8967L29.9492 21.4867Z" fill="url(#paint18_linear_0_9817)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.5293 27.7303L25.5355 28.9388L27.5416 27.7303V22.8961L25.5355 21.6875L23.5293 22.8961V27.7303Z" fill="url(#paint19_linear_0_9817)"/>
<g filter="url(#filter10_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.275 20.9401L32.9067 20.7961C32.6814 20.708 32.5707 20.4555 32.6596 20.2322C32.7042 20.1202 32.7936 20.0315 32.9067 19.9873L33.275 19.8433C33.6998 19.6772 34.0361 19.3439 34.2037 18.9227L34.3489 18.5576C34.4378 18.3342 34.6925 18.2246 34.9178 18.3127C35.0308 18.3568 35.1202 18.4455 35.1648 18.5576L35.3101 18.9227C35.4777 19.3439 35.8139 19.6772 36.2387 19.8433L36.6071 19.9873C36.8324 20.0754 36.943 20.3278 36.8542 20.5512C36.8096 20.6632 36.7201 20.7519 36.6071 20.7961L36.2387 20.9401C35.8139 21.1062 35.4777 21.4395 35.3101 21.8607L35.1648 22.2258C35.076 22.4492 34.8213 22.5588 34.596 22.4707C34.483 22.4266 34.3935 22.3379 34.3489 22.2258L34.2037 21.8607C34.0361 21.4395 33.6998 21.1062 33.275 20.9401Z" fill="white"/>
</g>
<g filter="url(#filter11_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.4547 32.7114L17.2091 32.6154C17.0589 32.5566 16.9852 32.3883 17.0444 32.2394C17.0741 32.1648 17.1337 32.1056 17.2091 32.0762L17.4547 31.9802C17.7379 31.8694 17.9621 31.6472 18.0738 31.3665L18.1706 31.123C18.2299 30.9741 18.3996 30.901 18.5498 30.9597C18.6252 30.9892 18.6848 31.0483 18.7145 31.123L18.8114 31.3665C18.9231 31.6472 19.1473 31.8694 19.4305 31.9802L19.6761 32.0762C19.8263 32.1349 19.9 32.3032 19.8408 32.4521C19.811 32.5268 19.7514 32.5859 19.6761 32.6154L19.4305 32.7114C19.1473 32.8221 18.9231 33.0443 18.8114 33.3251L18.7145 33.5685C18.6553 33.7174 18.4855 33.7905 18.3353 33.7318C18.26 33.7023 18.2003 33.6432 18.1706 33.5685L18.0738 33.3251C17.9621 33.0443 17.7379 32.8221 17.4547 32.7114Z" fill="white"/>
</g>
<g filter="url(#filter12_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.725 21.9034L14.418 21.7834C14.2302 21.71 14.1381 21.4996 14.2121 21.3135C14.2492 21.2201 14.3238 21.1462 14.418 21.1094L14.725 20.9894C15.079 20.851 15.3592 20.5732 15.4988 20.2222L15.6199 19.9179C15.6939 19.7318 15.9062 19.6404 16.0939 19.7138C16.1881 19.7507 16.2626 19.8246 16.2998 19.9179L16.4209 20.2222C16.5605 20.5732 16.8407 20.851 17.1947 20.9894L17.5017 21.1094C17.6894 21.1828 17.7816 21.3932 17.7076 21.5793C17.6704 21.6726 17.5959 21.7465 17.5017 21.7834L17.1947 21.9034C16.8407 22.0418 16.5605 22.3196 16.4209 22.6705L16.2998 22.9748C16.2257 23.1609 16.0135 23.2523 15.8258 23.1789C15.7316 23.1421 15.657 23.0682 15.6199 22.9748L15.4988 22.6705C15.3592 22.3196 15.079 22.0418 14.725 21.9034Z" fill="white"/>
</g>
<g filter="url(#filter13_d_0_9817)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.952 31.5653L32.7678 31.4933C32.6551 31.4492 32.5998 31.323 32.6443 31.2113C32.6665 31.1553 32.7113 31.111 32.7678 31.0889L32.952 31.0169C33.1644 30.9338 33.3325 30.7671 33.4163 30.5566L33.4889 30.374C33.5334 30.2623 33.6607 30.2075 33.7733 30.2515C33.8298 30.2736 33.8746 30.318 33.8969 30.374L33.9695 30.5566C34.0533 30.7671 34.2214 30.9338 34.4338 31.0169L34.618 31.0889C34.7307 31.1329 34.786 31.2591 34.7415 31.3708C34.7192 31.4268 34.6745 31.4712 34.618 31.4933L34.4338 31.5653C34.2214 31.6483 34.0533 31.815 33.9695 32.0255L33.8969 32.2081C33.8524 32.3198 33.7251 32.3746 33.6124 32.3306C33.5559 32.3085 33.5112 32.2642 33.4889 32.2081L33.4163 32.0255C33.3325 31.815 33.1644 31.6483 32.952 31.5653Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_0_9817" x="12.4469" y="23.2041" width="17.6652" height="27.8532" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.15804"/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter1_d_0_9817" x="20.9587" y="23.2041" width="17.6652" height="27.8532" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.15804"/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter2_d_0_9817" x="16.7028" y="26.7197" width="17.6652" height="27.8532" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.15804"/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.921569 0 0 0 0 0.215686 0 0 0 0 0.305882 0 0 0 0.2 0"/>
<feBlend mode="darken" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter3_i_0_9817" x="5.31982" y="17.2266" width="8.51221" height="6.14933" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="0.78951"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9817"/>
</filter>
<filter id="filter4_i_0_9817" x="6.0293" y="21.4453" width="8.51221" height="6.14933" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="0.78951"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9817"/>
</filter>
<filter id="filter5_i_0_9817" x="37.2397" y="17.2266" width="8.51221" height="6.14933" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="0.78951"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9817"/>
</filter>
<filter id="filter6_i_0_9817" x="36.5303" y="21.4453" width="8.51221" height="6.14933" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="0.78951"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9817"/>
</filter>
<filter id="filter7_i_0_9817" x="12.5923" y="11.6719" width="25.8877" height="28.8622" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="0.78951"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.713726 0 0 0 0 0.0352941 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_9817"/>
</filter>
<filter id="filter8_d_0_9817" x="10.9699" y="11.3848" width="29.1315" height="31.0143" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.927721 0 0 0 0 0.665867 0 0 0 0 0.0535899 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter9_d_0_9817" x="14.8058" y="14.1309" width="21.4596" height="25.5231" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.57902"/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.996078 0 0 0 0 0.733333 0 0 0 0 0.105882 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter10_d_0_9817" x="29.4709" y="15.1242" width="10.5719" height="10.5348" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter11_d_0_9817" x="13.8659" y="27.7814" width="9.15348" height="9.12858" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter12_d_0_9817" x="11.0285" y="16.5304" width="9.86247" height="9.83171" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<filter id="filter13_d_0_9817" x="29.4709" y="27.0783" width="8.44401" height="8.42546" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="1.57902"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.94902 0 0 0 0 0.305882 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_9817"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_9817" result="shape"/>
</filter>
<linearGradient id="paint0_linear_0_9817" x1="3.54639" y1="4.21875" x2="3.54639" y2="46.4082" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7F7D"/>
<stop offset="1" stop-color="#EC2E4A"/>
</linearGradient>
<linearGradient id="paint1_linear_0_9817" x1="5.6748" y1="13.3594" x2="5.6748" y2="28.1257" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7C71A"/>
<stop offset="1" stop-color="#FBAA00"/>
</linearGradient>
<linearGradient id="paint2_linear_0_9817" x1="5.6748" y1="13.3594" x2="5.6748" y2="28.1257" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDF6B"/>
<stop offset="1" stop-color="#F8A60A"/>
</linearGradient>
<linearGradient id="paint3_linear_0_9817" x1="45.397" y1="13.3594" x2="45.397" y2="28.1257" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7C71A"/>
<stop offset="1" stop-color="#FBAA00"/>
</linearGradient>
<linearGradient id="paint4_linear_0_9817" x1="45.397" y1="13.3594" x2="45.397" y2="28.1257" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDF6B"/>
<stop offset="1" stop-color="#F8A60A"/>
</linearGradient>
<linearGradient id="paint5_linear_0_9817" x1="9.22119" y1="29.5322" x2="9.22119" y2="36.2122" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7C71A"/>
<stop offset="1" stop-color="#FBAA00"/>
</linearGradient>
<linearGradient id="paint6_linear_0_9817" x1="9.22119" y1="29.5322" x2="9.22119" y2="36.2122" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDF6B"/>
<stop offset="1" stop-color="#F8A60A"/>
</linearGradient>
<linearGradient id="paint7_linear_0_9817" x1="41.8506" y1="29.5322" x2="41.8506" y2="36.2122" gradientUnits="userSpaceOnUse">
<stop stop-color="#F7C71A"/>
<stop offset="1" stop-color="#FBAA00"/>
</linearGradient>
<linearGradient id="paint8_linear_0_9817" x1="41.8506" y1="29.5322" x2="41.8506" y2="36.2122" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFDF6B"/>
<stop offset="1" stop-color="#F8A60A"/>
</linearGradient>
<linearGradient id="paint9_linear_0_9817" x1="14.23" y1="9.56738" x2="14.23" y2="20.348" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBCC24"/>
<stop offset="1" stop-color="#F9B800"/>
</linearGradient>
<linearGradient id="paint10_linear_0_9817" x1="36.8418" y1="9.56738" x2="36.8418" y2="20.348" gradientUnits="userSpaceOnUse">
<stop stop-color="#FBCC24"/>
<stop offset="1" stop-color="#F9B800"/>
</linearGradient>
<linearGradient id="paint11_linear_0_9817" x1="9.22119" y1="9.1416" x2="9.22119" y2="41.4868" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDE046"/>
<stop offset="1" stop-color="#F9B800"/>
</linearGradient>
<linearGradient id="paint12_linear_0_9817" x1="14.1865" y1="14.0625" x2="14.1865" y2="36.5635" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFF550"/>
<stop offset="1" stop-color="#FFD541"/>
</linearGradient>
<linearGradient id="paint13_linear_0_9817" x1="25.869" y1="21.6477" x2="24.6837" y2="19.405" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD3D3"/>
<stop offset="1" stop-color="#FF7E8A"/>
</linearGradient>
<linearGradient id="paint14_linear_0_9817" x1="23.5295" y1="29.1405" x2="23.5295" y2="21.4863" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8B89"/>
<stop offset="1" stop-color="#F34C5D"/>
</linearGradient>
<linearGradient id="paint15_linear_0_9817" x1="24.4671" y1="30.9069" x2="25.4223" y2="28.7601" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7F7D"/>
<stop offset="1" stop-color="#F21248"/>
</linearGradient>
<linearGradient id="paint16_linear_0_9817" x1="29.9492" y1="31.759" x2="29.9492" y2="27.7305" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8B89"/>
<stop offset="1" stop-color="#F34C5D"/>
</linearGradient>
<linearGradient id="paint17_linear_0_9817" x1="29.9489" y1="29.1405" x2="29.9489" y2="21.4863" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF8B89"/>
<stop offset="1" stop-color="#F34C5D"/>
</linearGradient>
<linearGradient id="paint18_linear_0_9817" x1="27.6084" y1="22.8443" x2="28.6816" y2="20.7475" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7F7D"/>
<stop offset="1" stop-color="#F21248"/>
</linearGradient>
<linearGradient id="paint19_linear_0_9817" x1="27.5416" y1="28.9388" x2="27.5416" y2="21.6875" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF7F7D"/>
<stop offset="1" stop-color="#F21248"/>
</linearGradient>
</defs>
</svg>
`;

function prefixSvgIds(svgText: string, uid: string) {
  const ids = new Set<string>();

  svgText.replace(/\sid="([^"]+)"/g, (_, id) => {
    ids.add(id);
    return _;
  });

  let out = svgText;

  ids.forEach((id) => {
    const next = `${uid}__${id}`;
    out = out.replaceAll(`id="${id}"`, `id="${next}"`);
  });

  ids.forEach((id) => {
    const next = `${uid}__${id}`;
    out = out.replaceAll(`url(#${id})`, `url(#${next})`);
    out = out.replaceAll(`href="#${id}"`, `href="#${next}"`);
    out = out.replaceAll(`xlink:href="#${id}"`, `xlink:href="#${next}"`);
    // thêm 2 cái hay gặp:
    out = out.replaceAll(`mask="url(#${id})"`, `mask="url(#${next})"`);
    out = out.replaceAll(`filter="url(#${id})"`, `filter="url(#${next})"`);
    out = out.replaceAll(`clip-path="url(#${id})"`, `clip-path="url(#${next})"`);
  });

  return out;
}

type Props = {
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

export default function IcTop1Ranking(props: Props) {
  const uid = useId();
  const processed = useMemo(() => prefixSvgIds(RAW_SVG, uid), [uid]);

  // Ép size (nếu bạn muốn đổi size mà vẫn giữ svg gốc)
  const sized = useMemo(() => {
    let s = processed;

    if (props.width != null) {
      s = s.replace(/<svg\b([^>]*?)\bwidth="[^"]*"/, `<svg$1width="${props.width}"`);
      if (!/width="/.test(s)) s = s.replace("<svg", `<svg width="${props.width}"`);
    }
    if (props.height != null) {
      s = s.replace(/<svg\b([^>]*?)\bheight="[^"]*"/, `<svg$1height="${props.height}"`);
      if (!/height="/.test(s)) s = s.replace("<svg", `<svg height="${props.height}"`);
    }

    // để không bị “cắt” glow/blur ở rìa
    if (!/overflow=/.test(s)) {
      s = s.replace("<svg", `<svg overflow="visible"`);
    }

    return s;
  }, [processed, props.width, props.height]);

  return (
    <span
      className={props.className}
      style={{ display: "inline-block", lineHeight: 0, ...props.style }}
      dangerouslySetInnerHTML={{ __html: sized }}
    />
  );
}
