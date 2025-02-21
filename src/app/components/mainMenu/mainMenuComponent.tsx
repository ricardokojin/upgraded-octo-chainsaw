// React and Imports
import { useState } from "react";

// MUI
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const options: MenuOptionInterface[] = [
  {
    name:"Home",
    path: "/"
  },
  {
    name:"About",
    path:"/about"
  }
];

const paper_height = 200;

interface MainMenuComponentProps {
  currentPage?: string;
}
interface MenuOptionInterface {
  name: string,
  path: string,
  customClass?:string,
}

export default function MainMenuComponent({
  currentPage,
}: MainMenuComponentProps) {
  console.log(currentPage);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const toggleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path:string | null) => {
    console.log(path)
    setAnchorEl(null);
  };

  return (
    <>
      <div style={{ marginRight: "60px" }}>
        <div style={{ textAlign: "left" }}>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={toggleMenu}
          >
            <MoreVertIcon sx={{ color: "white" }} />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            sx={{
              backgroundColor: "rgba(31, 29, 29, 0.16)",
              "& .MuiPaper-root": {
                backgroundColor: "rgb(58, 58, 58)",
              },
              "& .MuiMenuItem-root.Mui-selected":{
                backgroundColor:'rgba(39, 37, 37, 0.16)',
                "&:hover":{
                  backgroundColor:'rgba(43, 42, 42, 0.16)'
                }
              }
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose(null)}
            slotProps={{
              paper: {
                style: {
                  color: "white",
                  maxHeight: paper_height,
                  width: "24ch",
                },
              },
            }}
          >
            {options.map((option) => (
              <MenuItem
                key={option.name}
                selected={option.name === "Home"}
                onClick={() => handleClose(null)}
              >
                {option.name}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </>
  );
}
