import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../Utils/Constant";
import SearchBar from "./SearchBar";

function Navbar() {
  return (  
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{ 
        backgroundColor: "#000",
        color: "#fff",
        position: "sticky",
        top: 0,
        justifyContent: "space-between"
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} width={35}/>
      </Link>
      <SearchBar/>
    </Stack>
  );
}

export default Navbar;

