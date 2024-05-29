import { useContext } from "react";
import { ActionsContainer } from "../../components/ActionsContainer";
import { CarInfo } from "../../components/CarInfo";
import { ResultBox } from "../../components/ResultBox";
import { SearchBar } from "../../components/SearchBar";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { ReactReduxContext, useSelector } from "react-redux";
import { LinearProgress } from "@mui/material";

export const SearchResultPage = () => {
  const searchStore = useSelector((state) => state.searchResult);

  return (
    <HomeTemplate>
      <SearchBar />
      {searchStore.loading ? <LinearProgress /> : <ResultBox />}
    </HomeTemplate>
  );
};
