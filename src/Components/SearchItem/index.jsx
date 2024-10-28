import React, { useState } from "react";
import { Link } from "react-router-dom";
import FolderIcon from "@mui/icons-material/Folder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Box, Button, Modal } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 5,
  p: 4,
};

export default function SearchItem({ data }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex gap-4 hover:bg-[#f1f7fe] p-4 rounded-lg  relative">
      <div className="w-[116px] h-[96px] flex p-2 bg-[#e6ebef] rounded-lg">
        <img
          alt=""
          className="w-full h-full object-cover"
          src={data.imageUrl}
        />
      </div>

      <div>
        <h3 className="text-base text-[#3092FA] hover:underline cursor-pointer font-bold">
          {data.documentName}
        </h3>

        <div className="flex text-sm gap-4 text-[#4c5966] items-center mt-3">
          <Link className="flex items-center gap-2">
            <FolderIcon />
            <span>{data.folderName}</span>
          </Link>
          <Link className="flex items-center gap-2">
            <AccountBalanceIcon />
            <span>{data.schoolName}</span>
          </Link>
        </div>
        <div className="flex text-sm gap-4 text-[#4c5966] items-center mt-3">
          <Link className="flex items-center gap-2">
            <InsertDriveFileIcon />
            <span>{data.pageCount} Pages</span>
          </Link>

          <Link className="flex items-center gap-2">
            <CalendarMonthIcon />
            <span>2020/2021</span>
          </Link>
        </div>
      </div>
      <div className="absolute top-4 right-4">
        <Button
          onClick={() => setOpen(true)}
          startIcon={<FileDownloadIcon fontSize="medium" />}
          sx={{
            height: "40px",
            color: "#fff",
            fontWeight: 600,
            bgcolor: "#2cc302",
          }}
        >
          Download
        </Button>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {}}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Box sx={style}>
          <div className="relative">
            <h1 className="text-xl font-bold">Download this document?</h1>
            <p className="text-base text-[#4c5966]">
              Upload your study materials to download all documents.
            </p>
            <Button
              startIcon={<FileDownloadIcon />}
              variant="contained"
              sx={{
                color: "#fff",
                fontWeight: 600,
                width: "100%",
                marginTop: 4,
              }}
            >
              Upload to unlock downloads
            </Button>

            <button
              onClick={() => setOpen(false)}
              className="w-6 h-6 flex items-center justify-center absolute top-0 right-0 bg-slate-400 hover:bg-[#ccc]"
            >
              <CloseIcon />
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
