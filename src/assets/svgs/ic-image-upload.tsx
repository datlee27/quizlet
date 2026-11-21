import { Icon, type IconProps } from "@chakra-ui/react";

// Icon hình ảnh (SVG của bạn)
export const IcImageUpload = (props: IconProps) => (
  <Icon
    viewBox="0 0 24 24"
    fill="none"
    boxSize="40px" // Kích thước mặc định
    {...props}
  >
    <path
      d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
      stroke="currentColor" // Dùng currentColor để đổi màu từ bên ngoài qua prop color
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 15L16 10L5 21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
export default IcImageUpload ;

// Bạn có thể thêm Icon nốt nhạc hoặc các icon khác vào đây tương tự...