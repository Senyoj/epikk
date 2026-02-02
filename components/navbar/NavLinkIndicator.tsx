import { motion } from "framer-motion";

export default function NavLinkIndicator({
  activeIndex,
  itemRefs,
}: {
  activeIndex: number | null;
  itemRefs: React.MutableRefObject<{ [key: number]: HTMLDivElement | null }>;
}) {
  if (activeIndex === null || !itemRefs.current[activeIndex]) return null;

  const elem = itemRefs.current[activeIndex];
  const top = elem.offsetTop + elem.offsetHeight / 2;
  const left = elem.offsetLeft;
  const width = elem.offsetWidth;

  return (
    <motion.div
      className="h-px bg-blue-400 absolute"
      style={{ top, left }}
      initial={{ width: 0 }}
      animate={{ width }}
      exit={{ width: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  );
}
