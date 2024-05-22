import React from "react";
// import Meta from "@/components/Meta";
import { TooltipProvider } from "@/components/ui/tooltip";
import SideBar from "@/components/SideBar";
import Hydration from "./hydration";
import Header from "./users/_components/header";

// export const metadata = {
//   ...Meta({
//     title: "Users",
//   }),
// };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TooltipProvider>
      <Hydration />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <SideBar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />
          {children}
        </div>
      </div>
    </TooltipProvider>
  );
}
