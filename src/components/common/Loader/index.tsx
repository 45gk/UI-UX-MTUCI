import { GiFilmStrip } from "react-icons/gi";
import { TbClock } from "react-icons/tb";
import * as Style from "./index.styled";

const Loader = () => {
  return (
    <Style.Loader>
      <Style.Icon>
        <TbClock  />
      </Style.Icon>
      <Style.Text>Идёт загрузка...</Style.Text>
    </Style.Loader>
  );
};

export default Loader;
