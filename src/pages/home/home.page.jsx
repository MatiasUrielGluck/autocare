import { CarInfo } from "../../components/CarInfo";
import { SearchBar } from "../../components/SearchBar";
import { ActionsContainer } from "../../components/ActionsContainer";
import { HomeTemplate } from "../../templates/HomeTemplate";
import { useSelector } from "react-redux";
import { perfilSelectors } from "../../store/perfil/perfilSlice";

export const HomePage = () => {
    const selectedCardInfo = useSelector(perfilSelectors.getSelectedCarInfo)
console.log(selectedCardInfo)
    return (
      <HomeTemplate hideGoBackButton>
        <CarInfo info={selectedCardInfo} />
        <SearchBar allowRouteBack />
        <ActionsContainer />
      </HomeTemplate>
    );
};
