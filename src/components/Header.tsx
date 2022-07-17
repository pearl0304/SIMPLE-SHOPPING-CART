import { Wrappter } from "../css/header.styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

export const Header = () => {
  return (
    <Wrappter>
      <div className="header-left">
        <div>
          <p>R</p>
        </div>
        <div>RINE FRIENDS</div>
      </div>
      <div className="header-right">
        <div>
          <SearchIcon />
        </div>
        <div>
          <ShoppingBasketOutlinedIcon />
        </div>
        <div>
          <ViewHeadlineIcon />
        </div>
      </div>
    </Wrappter>
  );
};
