export const overlayPushVariants = {
  hidden: { y: "-100%" },
  visible: { y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  exit: { x: "-100%", transition: { duration: 0.5, ease: "easeInOut" } },
};

export const subLinkVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 0 },
};
