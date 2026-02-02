import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "../../data/navData";
import { subLinkVariants } from "./variants";

export default function SubNavPanel({ navItem }: { navItem?: NavItem }) {
  if (!navItem?.subLinks) return <div className="w-full" />;

  return (
    <div className="flex flex-col gap-4 p-8 md:w-2/3 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={navItem.label}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-4 p-8 w-2/3">
            {navItem.subLinks.map((subItem, subIndex) => (
              <motion.a
                key={subIndex}
                href={subItem.href}
                variants={subLinkVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="text-2xl text-gray-300 cursor-pointer py-2 hover:text-blue-200 transition"
              >
                <div className="flex gap-2 items-center">

                <span className="text-2xl text-blue-200 w-10 h-10 border border-blue-200 flex items-center justify-center rounded-full">0{subIndex + 1 + " "}</span>
                {subItem.label}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
