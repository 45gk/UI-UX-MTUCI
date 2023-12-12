import Button from "@/components/common/Button/Button";
import React from "react";

// import { VscSymbolColor } from "react-icons/vsc";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdPerson } from "react-icons/io";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

import * as Style from "./index.styled";
import Link from "next/link";
import { PassThrough } from "stream";
type HeaderProps = {
  switchTheme: () => void;
};
const handleButtonClick = () => {
  // Ничего не делаем
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
      <Style.Buttons>
          <Button
            action={handleButtonClick}
            name={<TfiAlignJustify />}
          />
        </Style.Buttons>
        <Style.Logo>
          <Style.Img src="https://svgx.ru/svg/1289544.svg">
            {/* <Link href={"/"}></Link> */}
          </Style.Img>
          <Style.Name >Unicorn films - Самые свежие фильмы
          </Style.Name>
        </Style.Logo>
        <Style.Text>
          Главная
        </Style.Text>
        <Style.Text>
          Лучшее
        </Style.Text>
        <Style.Text>
          О нас
        </Style.Text>

        <Style.Buttons>
          <Button
            name={<IoMdPerson />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>

        <Style.Buttons>
          <Button
            name={<WiMoonAltThirdQuarter />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>

      </Style.Content>
    </Style.Header>
  );
};
export default Header;
