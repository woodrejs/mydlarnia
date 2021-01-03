export const menuItemVriant = {
  initial: {
    opacity: 0,
  },
  animate: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.1, ease: "easeIn" },
  }),
  hover: { scale: 0.9, transition: { ease: "easeInOut" } },
};
export const MenuVariants = {
  initial: { x: "60vw" },
  animate: { x: 0, transition: { ease: "easeInOut" } },
};
export const ButtonVariants = {
  initial: { scale: 0 },
  animate: { scale: 1, transition: { ease: "easeIn", delay: 0.5 } },
  hover: { scale: 0.95, transition: { ease: "easeInOut", duration: 0.2 } },
};
export const TextVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { ease: "easeIn", duration: 0.5 } },
  hover: { scale: 1.1, transition: { ease: "easeInOut", duration: 0.2 } },
};
export const GalleryBoxVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { ease: "easeIn", duration: 0.5 } },
  hover: { scale: 0.95, transition: { ease: "easeInOut", duration: 0.2 } },
};
export const InputVariants = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1, transition: { ease: "easeIn" } },
};
export const ImageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { ease: "easeInOut", duration: 0.5 } },
};
