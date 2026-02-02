import Navbar from "@/components/navbar/Navbar";
import Breadcrumb from "@/components/layout/Breadcrumb";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 relative">

      {/* Sidebar Navbar */}
      <aside
        className="
          z-50 bg-white shadow-lg w-full md:w-24
          flex md:flex-col fixed md:sticky md:top-0
          left-0 h-16 md:h-screen
        "
      >
        <Navbar />
      </aside>

      {/* Page Content */}
      <main className="flex-1 flex flex-col overflow-y-auto pt-16 md:pt-0 bg-white">
        <div className="fixed w-full ">
        <Breadcrumb />
        </div>

        <div className="pt-20">
          {children}
        </div>

      </main>
    </div>
  );
}
