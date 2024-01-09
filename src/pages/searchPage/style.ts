import styled from 'styled-components';
import { Link } from 'react-router-dom';
// SearchBar 컴포넌트에 대한 타입 정의
interface SearchBarProps {
  isFocused: boolean;
}
// SearchType 컴포넌트에 대한 타입 정의
interface SearchTypeProps {
  isBorder: boolean;
}
const Container = styled.div`
  // 화면 전체 사용하게
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('images/SearchBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

const SearchBar = styled.input<SearchBarProps>`
  height: 10vh;
  font-size: 20px;
  border: None;
  border-radius: 25px;
  background-color: ${(props) =>
    props.isFocused
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(255, 255, 255, 0.6)'}; // 흰색 배경에 투명도 60%
  background-size: cover;
  color: white;
  box-shadow: ${(props) =>
    props.isFocused ? '0' : '0px 4px 8px rgba(0, 0, 0, 0.3)'};
  padding-left: 5vw;
  outline: none;

  ::placeholder {
    color: white !important;
    opacity: 0.7;
  }

  &:focus {
    border-radius: 25px 25px 0 0;
  }
`;

const SearchBarExtends = styled.div`
  height: 70vh;
  font-size: 20px;
  border: None;
  background-color: rgba(255, 255, 255, 0.4); // 흰색 배경에 투명도 60%
  background-size: cover;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 100;
  border-radius: 0 0 25px 25px;
`;
const SearchBarContainer = styled.div`
  position: absolute;
  top: 13vh;
  left: 50%; // 왼쪽에서 50% 위치에 배치
  transform: translateX(-50%); // X축으로 -50% 만큼 이동하여 중앙 정렬
`;
const Search = styled.div`
  width: 2vw;
  height: 3.8vh;
  background-image: url('images/Search.png');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  margin: 2vw;
`;

const SearchType = styled.span<SearchTypeProps>`
  color: white;
  border-bottom: ${(props) => (props.isBorder ? 'solid white' : 'none')};
  padding: 0 15vw 0 15vw;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const HistoryContainer = styled.div`
  margin: 1.5vw 0 1.5vw 0;
  border-bottom: 1px solid white;
`;
const Hashtag = styled.img`
  border-radius: 10px;
  width: 2vw;
  height: 4vh;
  margin: 0 2vw 0 2vw;
  position: relative;
  bottom: 1vh;
`;

const UserName = styled.img`
  border-radius: 50px;
  width: 2vw;
  height: 4vh;
  margin: 0 2vw 0 2vw;
  position: relative;
  bottom: 1vh;
`;

const Content = styled.span`
  color: white;
  font-size: 20px;
  position: relative;
  bottom: 2vh;
`;
const PlusFriend = styled(Link)`
  position: relative;
  right: 50px;
  bottom: 2vh;
  width: 1.2vw;
  height: 2vh;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/PlusFriend.png');
  background-size: cover;
  background-position: center;
`;

const SeeReview = styled(Link)`
  position: relative;
  width: 3vw;
  height: 4vh;
  padding: 6px;
  z-index: 3;
  left: 50vw;
  font-size: 15px;
  color: black;
  bottom: 2vh;
  cursor: pointer;
  background-color: white;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
`;
const DeleteButton = styled.button`
  background: #a087bf;
  color: white;
  font-size: 1em;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  position: absolute;
  bottom: 4vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
`;

const ComponentBox = styled.div`
  position: absolute;
  bottom: 3vh;
  left: 7vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  padding: 2vh 0.3vw 2vh 0.3vw;
`;

const Union = styled(Link)`
  position: relative;
  width: 2vw;
  height: 3.8vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/UnionSmall.png');
  background-size: cover;
  background-position: center;
`;

const Plus = styled(Link)`
  position: relative;
  width: 2vw;
  height: 3.8vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/Plus.png');
  background-size: cover;
  background-position: center;
`;
const Home = styled(Link)`
  position: relative;
  width: 2vw;
  height: 3.8vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/Home.png');
  background-size: cover;
  background-position: center;
`;
const Find = styled(Link)`
  position: relative;
  width: 2vw;
  height: 4vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/Find.png');
  background-size: cover;
  background-position: center;
`;

const Map = styled(Link)`
  position: relative;
  width: 2vw;
  height: 3.8vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/Map.png');
  background-size: cover;
  background-position: center;
`;

const User = styled(Link)`
  position: relative;
  width: 2vw;
  height: 3.5vh;
  margin: 0.6vw;
  color: white;
  z-index: 3;
  cursor: pointer;
  background-image: url('images/User.png');
  background-size: cover;
  background-position: center;
`;
export default {
  Container,
  SearchBar,
  SearchBarContainer,
  Union,
  ComponentBox,
  Plus,
  Home,
  Find,
  Map,
  User,
  Search,
  SearchBarExtends,
  Hashtag,
  UserName,
  Content,
  HistoryContainer,
  DeleteButton,
  SearchType,
  Top,
  PlusFriend,
  SeeReview,
};
