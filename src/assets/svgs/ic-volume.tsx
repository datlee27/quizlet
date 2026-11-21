import { Image } from "@chakra-ui/react";
import icon from "@assets/images/SP_Voice_Icon.png";

interface IcVolumeProps {
  size?: string;
}

const IcVolume = ({ size }: IcVolumeProps) => {
  return (
    <Image
      width={size || "2rem"}
      height={"auto"}
      objectFit={"contain"}
      src={icon}
    ></Image>
  );
};

export default IcVolume;
