"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import avatar from "../../public/avatar.png";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
import ListIcon from "@mui/icons-material/List";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AlignVerticalBottomOutlinedIcon from "@mui/icons-material/AlignVerticalBottomOutlined";

const menuItems = [
  {
    title: "OTHER",
    items: [
      {
        icon: SettingsOutlinedIcon,
        label: "Settings",
        href: "/settings",
        visible: ["admin"],
      },
      {
        icon: AccountCircleOutlinedIcon,
        label: "Team",
        href: "/profile",
        visible: ["admin"],
      },
    ],
  },
  {
    title: "MENU",
    items: [
      {
        icon: DashboardRoundedIcon,
        label: "Dashboard",
        href: "/dashboard/admin",
      },
      {
        icon: AlignVerticalBottomOutlinedIcon,
        label: "Campaigns",
        href: "#",
      },
      {
        icon: AccountTreeOutlinedIcon,
        label: "Flows",
        href: "#",
      },
      {
        icon: PowerOutlinedIcon,
        label: "Integrations",
        href: "#",
      },
      {
        icon: ListIcon,
        label: "Customers",
        href: "#",
      },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen w-64 bg-gray-50 flex flex-col justify-between py-4">
      {/* Logo */}
      <div>
        <h2 className="text-xl font-semibold px-6">Salesway</h2>

        {menuItems.map((section) => (
          <div className="mt-8 " key={section.title}>
            <span className="px-6 text-gray-400 text-xs font-medium uppercase tracking-wide font-bold ">
              {section.title}
            </span>
            <div className="mt-2 space-y-1 w-[220px] pl-4">
              {section.items.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    href={item.href}
                    key={item.label}
                    className={`flex items-center gap-3 py-2 px-6 rounded-lg transition-all ${
                      isActive
                        ? "bg-white text-black font-bold shadow-sm"
                        : "text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive ? "text-blue-500" : "text-gray-500"
                      }`}
                    />
                    <span className="text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Profile Section */}
      <div className="absolute bottom-[50px] left-[90px] flex items-center gap-3">
        <Image
          src={avatar}
          alt="User Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-sm font-medium">Tom Wang</span>
      </div>
    </div>
  );
};

export default Menu;
