"use client";
import Link from "next/link";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
export default function page() {
  const menuItems = [
    { text: "Dashboard", href: "/myaccount" },
    { text: "Orders", href: "/orders" },
    { text: "Download", href: "/download" },
    { text: "Address", href: "/address" },
    { text: "Account details", href: "/account" },
    { text: "Wishlist", href: "/wishlist" },
    { text: "Inquiries", href: "/inquires" },
    { text: "Logout", href: "/logout" },
  ];
  return (
    <div className="w-full py-10">
      <div className="w-full flex h-screen">
        <div className="w-1/4 bg-white">
          {menuItems &&
            menuItems.map(({text, href}, index) => (
              <div key={index} className="border-b-2 py-5 ml-10">
                <Link href={href} className="" >
                  <h2 className="text-lg font-bold">{text}</h2>
                </Link>
              </div>
            ))}
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-[575px]:grid-cols-1  px-3 py-5 gap-5 pt-20">
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <GradingOutlinedIcon className="w-28 h-28" />
                <h2 className="text-xl">ORDERS</h2>
              </div>
            </Link>
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <CloudDownloadOutlinedIcon className="w-28 h-28" />

                <h2 className="text-xl">DOWNLOAD</h2>
              </div>
            </Link>
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <LocationOnOutlinedIcon className="w-28 h-28" />
                <h2 className="text-xl">ADDRES</h2>
              </div>
            </Link>
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <PersonOutlinedIcon className="w-28 h-28" />
                <h2 className="text-xl">ACCAUNT DETAILS</h2>
              </div>
            </Link>
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <FavoriteBorderOutlinedIcon className="w-28 h-28" />
                <h2 className="text-xl">WISHLIST</h2>
              </div>
            </Link>
            <Link
              href=""
              className="border-2 rounded-md hover:text-blue-500 hover:shadow-md"
            >
              <div className="flex flex-col justify-center items-center py-16">
                <LogoutOutlinedIcon className="w-28 h-28" />
                <h2 className="text-xl">LOGOUT</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
