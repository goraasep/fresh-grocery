import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header: FC = () => {
  return (
    <div className="h-[96px] flex items-end justify-between px-4">
      <div className="font-semibold text-xl">Vegetables</div>
      <div className="flex gap-7">
        <FontAwesomeIcon icon={faSliders} className="h-6 w-6 text-black" />
        <FontAwesomeIcon icon={faSearch} className="h-6 w-6 text-black" />
      </div>
    </div>
  );
};
export default Header;
