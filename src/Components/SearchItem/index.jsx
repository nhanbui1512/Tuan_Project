import React from "react";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function SearchItem() {
  return (
    <div className="flex gap-4 hover:bg-[#f1f7fe] p-4 rounded-lg ">
      <div className="w-[116px] h-[96px] flex p-2 bg-[#e6ebef] rounded-lg">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/bd8c13c9fafb69ab9019c55836e14331/thumb_115_163.webp"
        />
      </div>

      <div>
        <h3 className="text-base text-[#3092FA] hover:underline cursor-pointer font-bold">
          Tiểu luận Giáo dục Quốc phòng và An ninh
        </h3>

        <div className="flex text-sm gap-4 text-[#4c5966] items-center mt-3">
          <Link className="flex items-center gap-2">
            <FolderIcon />
            <span>Kinh tế tài nguyên và môi trường</span>
          </Link>
          <Link className="flex items-center gap-2">
            <AccountBalanceIcon />
            <span>Học viện báo chí</span>
          </Link>
        </div>
        <div className="flex text-sm gap-4 text-[#4c5966] items-center mt-3">
          <Link className="flex items-center gap-2">
            <InsertDriveFileIcon />
            <span>Pages</span>
          </Link>

          <Link className="flex items-center gap-2">
            <CalendarMonthIcon />
            <span>2020/2021</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
