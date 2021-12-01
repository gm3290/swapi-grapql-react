import { InputWrapper, Input } from "./styled";
import SearchIcon from "../../assets/Icons/SearchIcon";

const SearchInput = ({ onChange, value }) => {
  return (
    <InputWrapper>
      <SearchIcon />
      <Input
        placeholder="Search"
        onChange={onChange}
        value={value}
        type="text"
        data-testid="search-input"
      />
    </InputWrapper>
  );
};

export default SearchInput;
