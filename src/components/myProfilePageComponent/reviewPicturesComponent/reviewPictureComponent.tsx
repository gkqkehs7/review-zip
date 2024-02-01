import styles from './style';
import StarImage from '/images/myProfilePage/StarImage.png';
import Storage from '/images/myProfilePage/StorageImage.png';
import Union from '/images/myProfilePage/Union.png';
import { PictureType } from '@/pages/myProfilePage/myProfilePage';

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from '@/api/apiInstance';

const storage = [
  {
    postImageUrl: 'images/myProfilePage/Component1.png',
    postId: 1,
    likeNum: 103,
    scrabNum: 47,
  },
  {
    postImageUrl: 'images/myProfilePage/Component2.png',
    postId: 2,
    likeNum: 380,
    scrabNum: 31,
  },
  {
    postImageUrl: 'images/myProfilePage/Component3.png',
    postId: 3,
    likeNum: 84,
    scrabNum: 79,
  },
];

interface ChangePageProps {
  storageIsClicked: boolean;
  setPostISClicked: React.Dispatch<React.SetStateAction<boolean>>;
  picture?: PictureType[];
}

const ReviewPictureComponent: React.FC<ChangePageProps> = ({
  storageIsClicked,
  picture,
  setPostISClicked,
}) => {
  // 서버로부터 받아올 유저 데이터
  const [userData, setUserData] = useState({
    isSuccess: true,
    code: 'string',
    message: 'string',
    result: {
      postList: [
        {
          postId: 0,
          postImageUrl: 'string',
          likeNum: 0,
          scrabNum: 0,
        },
      ],
      listSize: 0,
      totalPage: 0,
      totalElements: 0,
      isFirst: true,
      isLast: true,
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await axiosInstance.get(`/v1/users/${1}/posts`);

        console.log('user: ', response.data);

        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, []);

  return (
    <styles.RveiwPicturesContainer>
      {/*props를 받아서 저장소 버튼이 클릭이 되어있으면 저장소 데이터 배열을 map에 전달하고 게시물을 클릭하면 해당 데이터를 전달 */}
      {(storageIsClicked
        ? storage
        : picture
          ? picture
          : userData.result.postList
      ).map((post, index) => (
        <styles.PictureContainer
          key={index}
          onClick={() => {
            setPostISClicked(true);
          }}
        >
          <styles.PictureBorder>
            <styles.Picture
              src={post.postImageUrl}
              alt={'Picture' + String(post.postId)}
            />
          </styles.PictureBorder>
          {/* 게시물의 좋아요가 100개 이상인 경우 Union 아이콘 표시 */}
          {post.likeNum > 100 ? (
            <styles.IconUnion src={Union} alt="Union" />
          ) : (
            <styles.IconUnion style={{ visibility: 'hidden' }} />
          )}
          {/* 게시물에 마우스 hover시에만 보일 아이콘들 */}
          <styles.IconContainer>
            <styles.IconBox>
              <styles.Icon src={StarImage} />
              <styles.Count>{post.likeNum}</styles.Count>
            </styles.IconBox>
            <styles.IconBox>
              <styles.Icon src={Storage} />
              <styles.Count>{post.scrabNum}</styles.Count>
            </styles.IconBox>
          </styles.IconContainer>
        </styles.PictureContainer>
      ))}
    </styles.RveiwPicturesContainer>
  );
};

export default ReviewPictureComponent;
