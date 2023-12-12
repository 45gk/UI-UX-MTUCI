import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";
import CommentaryItem from "./CommentaryItem/CommentaryItem";

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import {useState, useEffect} from 'react';
// import {Button as SecButton} from "@/components/common/Button/Button";
import {CommentProps} from "./CommentaryItem/CommentaryItem";
import Button  from 'react-bootstrap/Button';
const Details = () => {
  
  
  
  var pageKey = "";

  if (typeof window !== 'undefined' && window.localStorage) {
    pageKey = window.location.href;
  }

  const[comments, setComments] = useState<CommentProps[]> (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
  });

  const [userName, setUserName] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect (() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments, pageKey]);
  
  
  
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || ""
  );

  if (isLoading) {
    return <Loader />;
  }

  // const hardCode_comment1 = () => {
  //   return (
  //     <CommentaryItem
  //       fi
  //       userName = "Игорь"
  //       commentText = "Отличный фильм, мне очень понравилось!"
  //     />
      
      
  //   );
  // };


  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  
  // const handleError = () => {
  //   setImageSrc('https://svgx.ru/svg/1289544.svg'); // Заменить URL на изображение-заглушку
  // };


  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  function commentsList(){
    // Функция для добавления нового комментария
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      const newComment: CommentProps = {
        film_id: comments.length + 1,
        userName: "User " + userName,
        commentText: "Wrote: " + commentText
      };
      setComments([...comments, newComment]);
      setUserName('');
      setCommentText('');

      
    }

    //Функция для удаления комментария

    // Обработчик изменения поля ввода имени пользователя
    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    // Обработчик изменения поля ввода текста комментария
    function handleCommentTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
      setCommentText(event.target.value);
    }
    const commentItems = comments.map((comment) => (
      <CommentaryItem
        key = {comment.film_id}
        film_id = {comment.film_id}
        userName = {comment.userName}
        commentText = {comment.commentText}
        comments={comments}
        setComments={setComments}
      />
    ));
    return(
    <div>
      <form onSubmit={addComment}>
              <Style.YourNameLabel>Your Name:</Style.YourNameLabel>
                <input className="name_form_control" type="text" value={userName} onChange={handleUserNameChange} />
            <Style.CommentTextLabel>Your Comment:</Style.CommentTextLabel>
                <textarea className="comment_form_control" value={commentText} onChange={(e) => handleCommentTextChange(e)}/>
            <Button type="submit">Add comment</Button>
        </form>
        {commentItems}
    </div>
    );
    }

  return (
    <Style.Details>
      <Style.BackgroundImage
        // src={filmRetrieve?.data.movie.background_image_original}
        src = "https://svgx.ru/svg/1289544.svg"
      ></Style.BackgroundImage>
      <Style.Content>
      <Style.ContentTitle>
          <Link href={"/"}> &lt; Назад</Link>
        </Style.ContentTitle>

        {/* <Style.ContentTitle>
          <Link href={"/"}>Главная/  {filmRetrieve?.data.movie.title}</Link>
        </Style.ContentTitle> */}

        <Style.Data>
          {/* <Style.Image> */}
            {/* <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img> */}
            {/* <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Скачать
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Смотреть онлайн
              </Style.WatchButton>
            </Style.Buttons>
          </Style.Image> */}

          <Style.Description>
              <Style.Img
                src={filmRetrieve?.data.movie.large_cover_image}
                // onError={handleError}
              ></Style.Img>

            <Style.Title>{filmRetrieve?.data.movie.title}</Style.Title>
            
            <Style.Year>
            {filmRetrieve?.data.movie.rating+ "          " +
             filmRetrieve?.data.movie.year +
                "          " +
                filmRetrieve?.data.movie.language}
            </Style.Year>
            
            <Style.Title>Категории</Style.Title>
            <Style.Genres>{genresList}</Style.Genres>
            <Style.Title>Описание:</Style.Title>
            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>

            <Style.Title>Загрузки:</Style.Title>

            <Style.Torrents>{torrentsList}</Style.Torrents>

            <Style.Title>Коментарии:</Style.Title>
            {/* <form >
              <label>
                Имя:
                  <input type="text" />
              </label>
                <input type="submit" value="Отправить" onClick={addComment}/>
            </form> */}


            {/* <Style.CommentaryItem>{hardCode_comment1()}</Style.CommentaryItem> */}
            <Style.CommentaryItem>{commentsList()}</Style.CommentaryItem>
            2023 Unicorn Entertainment
          </Style.Description>
        </Style.Data>
      
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
