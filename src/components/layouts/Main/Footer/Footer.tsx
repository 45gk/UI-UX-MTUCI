import Button from "@/components/common/Button/Button";
import React from "react";

import { TfiYoutube } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { IoLogoVk } from "react-icons/io";

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
const Footer: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
      
        <Style.Logo>
          <Style.Img src="https://svgx.ru/svg/1289544.svg">
            {/* <Link href={"/"}></Link> */}
          </Style.Img>
          <Style.Name >Unicorn films - Самые свежие фильмы
          </Style.Name>
        </Style.Logo>
        <Style.Text>
          Лицензия
        </Style.Text>
        <Style.Text>
          Пользовательское соглашение
        </Style.Text>
        <Style.Text>
          Поддержка
        </Style.Text>
        <Style.Text>
          Связаться с нами
        </Style.Text>
        <Style.Container>
          <Style.Img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/01/2.png">
          </Style.Img>
          
          <Style.Img src="http://preview.gentechtreedesign.com/streamlab/red-demo/wp-content/uploads/sites/2/2021/01/1.png">
          </Style.Img>

        </Style.Container>
        
        
        
        <Style.Buttons>
          <Button
            name={<TfiYoutube />}
            action={handleButtonClick}
          />
        </Style.Buttons>

        <Style.Buttons>
          <Button
            name={<TfiTwitterAlt />}
            action={handleButtonClick}
          />
        </Style.Buttons>

        <Style.Buttons>
          <Button
            name={<IoLogoVk />}
            action={handleButtonClick}
          />
        </Style.Buttons>

        

      </Style.Content>
      2023 Unicorn Entertainment
    </Style.Header>
  );
};
export default Footer;
