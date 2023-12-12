import { useFilmList } from "@/lib/hooks/useFilmList";

import { TfiYoutube } from "react-icons/tfi";
import { TfiTwitterAlt } from "react-icons/tfi";
import { IoLogoVk } from "react-icons/io";

import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";
import Button from "@/components/common/Button/Button";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));
  
  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });
  const splitList = filmList?.data.movies || [];

  // Получаем первые 5 элементов
  const slicedFilms = splitList.slice(0, 5);

  // Маппим отфильтрованный массив
  const renderedFilms = slicedFilms.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  })
  const handleButtonClick = () => {
    // Ничего не делаем
  };

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>Новинки</Style.Title>
        <Style.List>{renderedFilms}</Style.List>
        <Style.Title>Лучшие рейтинги</Style.Title>
        <Style.List>{renderedFilms}</Style.List>
        <Style.Title>Доступные фильмы</Style.Title>
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
        <Style.Buttons>
        <Button
            action={handleButtonClick}
            name={<TfiYoutube />}
          /> 
        </Style.Buttons>

        <Style.Buttons>
        <Button
            action={handleButtonClick}
            name={<TfiTwitterAlt />}
          /> 
        </Style.Buttons>

        <Style.Buttons>
        <Button
            action={handleButtonClick}
            name={<IoLogoVk />}
          /> 
        </Style.Buttons>
      2023 Unicorn Entertainment
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
