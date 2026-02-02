"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const path = usePathname();

  if (path === "/") return null;

  const segments = path.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    return { href, label };
  });

  return (
    <div className="px-8 py-4 bg-blue-100 border-b border-b-gray-50 text-sm">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>

        {crumbs.map((crumb, i) => (
          <div key={i} className="flex items-center gap-2">
            <span>/</span>
            <Link
              href={crumb.href}
              className="text-gray-700 hover:text-black capitalize"
            >
              {crumb.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumb;
