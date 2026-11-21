import { useEffect, useMemo, useState, memo } from "react";
import {
  Box,
  Button,
  Center,
  Stack,
  Text,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Switch,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "@contexts/sound-context";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type SliderRowProps = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
};

const SliderRow = memo(({ label, value, onChange, disabled }: SliderRowProps) => {
  const [draft, setDraft] = useState(value);

  useEffect(() => setDraft(value), [value]);

  return (
    <HStack spacing="14px" align="center" userSelect="none" opacity={disabled ? 0.4 : 1}>
      <Text
        w={{ base: "130px", md: "160px" }}
        fontWeight={800}
        fontSize={{ base: "14px", md: "16px" }}
        color="white"
      >
        {label}
      </Text>

      <Slider
        value={draft}
        onChange={setDraft}
        onChangeEnd={onChange}
        min={0}
        max={100}
        step={1}
        focusThumbOnChange={false}
        isDisabled={disabled}
        flex="1"
        py="10px"
      >
        <SliderTrack bg="rgba(255,255,255,0.25)" h="12px" borderRadius="999px">
          <SliderFilledTrack bg="#4F6DFF" />
        </SliderTrack>

        <SliderThumb
          boxSize="26px"
          bg="#4F6DFF"
          border="3px solid white"
          boxShadow="0 6px 14px rgba(0,0,0,0.25)"
          cursor="grab"
          transition="transform .12s ease"
          _active={{
            cursor: "grabbing",
            transform: "scale(1.08)",
          }}
        />
      </Slider>

      <Text
        w="44px"
        textAlign="right"
        fontWeight={800}
        fontSize={{ base: "14px", md: "16px" }}
        color="white"
      >
        {draft}%
      </Text>
    </HStack>
  );
});

SliderRow.displayName = "SliderRow";

export const SettingsModal = ({ isOpen, onClose }: Props) => {
  const {
    settings,
    setMasterVolume,
    setMusicVolume,
    setSfxVolume,
    setIsMuted,
    playSfx,
    toggleBgm,
    isBgmPlaying,
  } = useSound();

  const panelStyle = useMemo(
    () => ({
      bg: "rgba(0,0,0,0.22)",
      borderRadius: "14px",
      p: "18px",
      boxShadow: "inset 0 6px 16px rgba(0,0,0,0.25)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
    }),
    []
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <Center
          width="100dvw"
          height="100dvh"
          position="fixed"
          inset={0}
          zIndex={1000}
          p="20px"
        >
          {/* Backdrop with fade-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(20px)",
              zIndex: 1,
            }}
            onClick={onClose}
          />

          {/* Modal Dialog with spring scale-up */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              maxWidth: "600px",
              width: "100%",
              zIndex: 2,
              position: "relative",
            }}
          >
            <Stack
              width="100%"
              bg="#283191"
              border="1px solid rgba(255, 255, 255, 0.2)"
              boxShadow="0 24px 60px rgba(0, 0, 0, 0.6)"
              p={{ md: "36px 40px", base: "24px 20px" }}
              gap="20px"
              alignItems="center"
              overflow="auto"
              maxH="90dvh"
              borderRadius="1.6rem"
            >
            <Text
              fontWeight={900}
              fontSize={{ lg: "2.4rem", base: "2rem" }}
              textAlign="center"
              color="white"
              letterSpacing="0.5px"
            >
              CÀI ĐẶT ÂM THANH
            </Text>

            <Stack width="100%" gap="20px">
              {/* Mute Switch */}
              <HStack
                justify="space-between"
                bg="rgba(0,0,0,0.18)"
                p="14px 18px"
                borderRadius="12px"
              >
                <Text fontWeight={800} fontSize="16px" color="white">
                  Bật âm thanh
                </Text>
                <Switch
                  isChecked={!settings.isMuted}
                  onChange={(e) => {
                    setIsMuted(!e.target.checked);
                    if (e.target.checked) playSfx("click");
                  }}
                  colorScheme="purple"
                  size="lg"
                />
              </HStack>

              {/* Volume Panel */}
              <Box {...panelStyle}>
                <Stack spacing="16px">
                  <SliderRow
                    label="Âm lượng tổng"
                    value={settings.masterVolume}
                    onChange={(v) => {
                      setMasterVolume(v);
                      playSfx("click");
                    }}
                    disabled={settings.isMuted}
                  />
                  <SliderRow
                    label="Hiệu ứng (SFX)"
                    value={settings.sfxVolume}
                    onChange={(v) => {
                      setSfxVolume(v);
                      playSfx("correct");
                    }}
                    disabled={settings.isMuted}
                  />
                  <SliderRow
                    label="Nhạc nền (BGM)"
                    value={settings.musicVolume}
                    onChange={(v) => setMusicVolume(v)}
                    disabled={settings.isMuted}
                  />
                </Stack>
              </Box>

              {/* Music Toggle */}
              <HStack
                justify="space-between"
                bg="rgba(0,0,0,0.18)"
                p="14px 18px"
                borderRadius="12px"
              >
                <Box>
                  <Text fontWeight={800} fontSize="15px" color="white">
                    Nhạc nền thư giãn
                  </Text>
                  <Text fontSize="12px" color="rgba(255,255,255,0.7)">
                    {isBgmPlaying ? "Đang phát nhạc nền nhẹ" : "Nhạc nền đang tắt"}
                  </Text>
                </Box>
                <Button
                  size="sm"
                  bg={isBgmPlaying ? "#4F6DFF" : "rgba(255,255,255,0.15)"}
                  color="white"
                  borderRadius="8px"
                  fontWeight={700}
                  onClick={toggleBgm}
                  _hover={{ bg: isBgmPlaying ? "#3b55d9" : "rgba(255,255,255,0.25)" }}
                >
                  {isBgmPlaying ? "Tắt BGM" : "Bật BGM"}
                </Button>
              </HStack>
            </Stack>

            <HStack w="100%" spacing="12px" mt="10px">
              <Button
                w="100%"
                h="48px"
                bg="linear-gradient(103.24deg, #9F73FF 30.95%, #8954FF 69.05%)"
                color="white"
                borderRadius="10px"
                fontWeight={800}
                fontSize="16px"
                onClick={() => {
                  playSfx("click");
                  onClose();
                }}
                _hover={{
                  filter: "brightness(1.1)",
                  transform: "translateY(-1px)",
                }}
              >
                Đóng
              </Button>
            </HStack>
          </Stack>
        </motion.div>
      </Center>
      )}
    </AnimatePresence>
  );
};
