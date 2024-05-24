import { CarInfo } from "../../components/CarInfo";
import { SearchBar } from "../../components/SearchBar";
import { ActionsContainer } from "../../components/ActionsContainer";
import { HomeTemplate } from "../../templates/HomeTemplate";

export const HomePage = () => {
  return (
    <HomeTemplate>
      <CarInfo />
      <SearchBar />
      <ActionsContainer />
    </HomeTemplate>
  );
};
