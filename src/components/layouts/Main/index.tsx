import { PropsWithChildren, useContext } from "react";

import { ThemeContext } from "@/components/providers/ThemeProvider";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import * as Style from "./index.styled";
export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <Style.App>
      <Style.Content>
        <Header switchTheme={() => context?.switchTheme()}></Header>
        {children}
        <Footer switchTheme={() => context?.switchTheme()}></Footer>
      </Style.Content>
    </Style.App>
  );
};
