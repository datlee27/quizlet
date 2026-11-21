import { Icon, type IconProps } from "@chakra-ui/react";

const IcHamburger = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2z"
    />
  </Icon>
);

export default IcHamburger;
