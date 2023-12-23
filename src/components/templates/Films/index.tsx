import { useFilmList } from "@/lib/hooks/useFilmList";
import { useBestFilmList } from "@/lib/hooks/useBestFilmList";

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
  
  const { bestFilms} = useBestFilmList(String(page), String(pageSize));
  
  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  // const bestsFilms = bestFilms?.data.movies.map((film1) => {
  //   return <Film key={film1.id} {...film1}></Film>;
  // });



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
      
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
