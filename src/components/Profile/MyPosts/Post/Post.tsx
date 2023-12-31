import React from "react";
import smallUnknownPhoto from "./../../../../assets/images/UnknowIcon.svg"
import styled from "styled-components";
import {Icon} from "../../../Commons/Icon/Icon";

export const Post: React.FC<{ post: string, likesCount: number, dislikesCount: number }> =
    ({post, likesCount, dislikesCount}) => {
        return (<>
                <PostWrapper>
                    <PostInfoWrapper>
                        <SmallProfilePhoto src={smallUnknownPhoto} alt={"Small user's photo  is here"}/>
                        <StyledPost>{post}</StyledPost>
                    </PostInfoWrapper>
                    <LikeAndDislikeButtonList>
                        <li>
                            <button><Icon iconId="like" width="20" height="20"/></button>
                            <span>{likesCount}</span>
                        </li>
                        <li>
                            <button><Icon iconId="dislike" width="20" height="20"/></button>
                            <span>{dislikesCount}</span>
                        </li>
                        <li>
                            <button><Icon iconId="delete" width="20" height="20" viewBox="0 0 70 70"/></button>
                        </li>
                    </LikeAndDislikeButtonList>
                </PostWrapper>
            </>
        )
            ;
    };

const SmallProfilePhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;

`
const StyledPost = styled.p`

`
const PostInfoWrapper = styled.div`
  display: flex;
  gap: 10px;
`

const PostWrapper = styled.div`
  max-width: 700px;
  background-color: lightblue;
  border-radius: 5px;

  button {
    background-color: unset;
    border: none;
  }
`
const LikeAndDislikeButtonList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: end;
  padding: 5px 0 0 350px;
`