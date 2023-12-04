import React from "react";
import * as Style from "./index.styled";
import { FaTimes } from 'react-icons/fa';
import {useState, useEffect} from 'react';

export type CommentProps = {
    // film_id: number;
    // comment_id: number
    userName: string;
    commentText: string;
  };

// Пока не работает
//   const CommentaryItem: React.FC<CommentProps & { comments: CommentProps[]; setComments: React.Dispatch<React.SetStateAction<CommentProps[]>> }> 
//   = ({ userName, commentText, comments, setComments }) => { // film_id,comment_id,
//     const [localComments, setLocalComments] = useState<CommentProps[]>(comments);

    const CommentaryItem: React.FC<CommentProps> = (props) => { 
  // film_id,comment_id,
    //   const [localComments, setLocalComments] = useState<CommentProps[]>(comments);


    // type CommentType = {
//     text: string;
//   };
//   const CommentaryItem: React.FC<CommentType> = (props) => {
//     return (
//       <Style.CommentaryItem>
//         <Style.Text>{props.text}</Style.Text>
//       </Style.CommentaryItem>
//     );
//   };

        return (
            <Style.CommentItem>
            <Style.CommentContent>
                <Style.UserName> {props.userName} </Style.UserName>
            </Style.CommentContent>
            <Style.CommentContent>
                <Style.CommentText>{props.commentText}</Style.CommentText>
                {/* <Style.deleteButton onClick={handleDelete}>x</Style.deleteButton> */}
            </Style.CommentContent>
            </Style.CommentItem>
        );
        };
export default CommentaryItem;