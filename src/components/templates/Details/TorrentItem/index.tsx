import { VscSave, VscSymbolFile, VscVm } from "react-icons/vsc";
import * as Style from "./index.styled";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoBrowsersOutline } from "react-icons/io5";

type TorrentProps = {
  href: string;
  quality: string;
  type: string;
  size: string;
};
const Torrent: React.FC<TorrentProps> = (props) => {
  return (
    <Style.Torrent href={props.href}>
      <Style.Content>
        <Style.Icon>
          <IoBrowsersOutline /> 
        </Style.Icon>
        <Style.Text>{props.quality}</Style.Text>
      </Style.Content>
      <Style.Content>
        <Style.Icon>
          <VscSymbolFile />
        </Style.Icon>
        <Style.Text>{props.type}</Style.Text>
      </Style.Content>
      <Style.Content>
        <Style.Icon>
          <IoArrowDownOutline />
        </Style.Icon>
        <Style.Text>{props.size}</Style.Text>
      </Style.Content>
    </Style.Torrent>
  );
};
export default Torrent;
