import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
              >
              
            </Style.Card1>

            <Style.Card2>
            <Style.Name>{props.title}</Style.Name>
              <Style.Rating>
                <Style.RatingIcon>
                  <VscStarFull /> Рейтинг
                </Style.RatingIcon>
                <Style.RatingText> {props.rating}</Style.RatingText>
              </Style.Rating>
              Возрастной рейтинг - {props.mpa_rating}
              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0]}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1]}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2]}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              <Style.Details>Подробнее</Style.Details>
            </Style.Card2>
          </Style.Cards>

          {/* <Style.Name>{props.title}</Style.Name> */}

          {/* <Style.Text>
            {props.year} {props.language}
          </Style.Text> */}
          {/* 2023 Unicorn Entertainment */}
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
