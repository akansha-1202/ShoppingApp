// import React, { useState } from "react";
// import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// const Component = styled(Menu)`
//   margin-top: 7px;
// `;
// const Logout = styled(Typography)`
//       font-size : 14px;
//       margin-left 20px:
// `


// export default function Profile({ account, setAccount }) {
//   const [open, setOpen] = useState(false);

//   const handleClick = (e) => {
//     setOpen(e.currentTarget); //you want to open with respect to
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const logoutUser = () =>{
//       localStorage.removeItem('token');
//       console.log('User logged out');
//       setAccount("")
//   }
//   return (
//     <>
//       <Box onClick={handleClick}>
//         <Typography style={{ marginTop: 2, cursor:"pointer" }}>{account}</Typography>
//       </Box>
//       <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
//         <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
//           <PowerSettingsNewIcon color="primary" fontSize="small" />
//           <Logout>Logout</Logout>
//         </MenuItem>
//       </Component>
//     </>
//   );
// }



import React, { useState } from "react";
import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import {useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/cartActions";
import { toast } from "react-toastify";

// Adjust the CSS properties here
const Component = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(1), // Use theme spacing
}));

const Logout = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  marginLeft: theme.spacing(2), // Use theme spacing
}));

export default function Profile({ account, setAccount,name }) {
  const [open, setOpen] = useState(null);
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const logoutUser = () => {
    // localStorage.removeItem('signupToken');
    // localStorage.removeItem('loginToken');
    // localStorage.removeItem('firstName');
    localStorage.clear()
    
    dispatch(clearCart())
    toast("User Logout Successfully");
    
    console.log('User logged out');
    setAccount("");
    handleClose(); // Close the menu after logout
    navigate("/")
  };

  return (
    <>
      <Box onClick={handleClick} sx={{ cursor: "pointer", marginTop: 2 }}>
        <Typography>{name}</Typography>
      </Box>
      <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem onClick={logoutUser}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
}
