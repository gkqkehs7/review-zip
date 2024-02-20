import { PlaceInfo } from '@/types/common.types';
import { Status } from 'kakao-maps-sdk';

import React from 'react';

//카카오 공식문서 Sample "장소검색 후 목록으로 나타내기" 코드참고

var onlyDisplay = false;
// var marker: kakao.maps.Marker;

var map: kakao.maps.Map;

var clickPlace: PlaceInfo = {
  place_name: '',
  address_name: '',
  road_address_name: '',
  phone: '',
  x: '',
  y: '',
};

// 키워드를 검색하는 함수
export const searchPlace = (
  keyword: string,
  resultList: React.RefObject<HTMLUListElement>,
  mapRef: React.RefObject<kakao.maps.Map>,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  fullScreen: boolean,
) => {
  var ps = new kakao.maps.services.Places();

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
    alert('키워드를 입력해주세요');
    return false;
  }

  if (fullScreen) {
    onlyDisplay = true;
  }

  if (mapRef.current) {
    map = mapRef.current;
  }

  ps.keywordSearch(
    keyword,
    (PlaceData, status) =>
      placeSearchCB(PlaceData, status, resultList, setPlaceData),
    { useMapBounds: true },
  );
};

//검색결과를 전달받은 함수. 검색이 완료되었을떄 발생
export const placeSearchCB = (
  searchResult: PlaceInfo[], //data
  status: Status,
  resultList: React.RefObject<HTMLUListElement>,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlace(searchResult, resultList, setPlaceData);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert('검색 결과가 존재하지 않습니다.');
    return;
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert('검색 결과중 오류가 발생했습니다.');
    return;
  }
};

// 검색한 장소를 화면에 보여주는 함수
export const displayPlace = (
  result: PlaceInfo[], //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): void => {
  let fragment = document.createDocumentFragment();

  removeAllChildNodes(listEl);

  const clickCount: { [key: string]: number } = {};
  for (let i = 0; i < result.length; i++) {
    //검색된 장소 데이터 각각을  element형식으로 가져온뒤 자식 요소로 추가함.
    var itemEl = getListItem(i, result[i]);

    //검색지역 클릭시 좌표이동을 해주는 이벤트 리스너
    clickCount[result[i].place_name] = 0;
    itemEl.addEventListener('click', () => {
      clickCount[result[i].place_name]++;
      clickPlace.address_name = result[i].address_name;
      clickPlace.place_name = result[i].place_name;
      clickPlace.x = result[i].x;
      clickPlace.y = result[i].y;

      const lat = parseFloat(clickPlace.y); //위도
      const lng = parseFloat(clickPlace.x); //경도
      var placePostion = new kakao.maps.LatLng(lat, lng); //좌표객체

      map.setCenter(placePostion);
      map.setLevel(1);
      if (clickCount[result[i].place_name] < 2) {
        setMarker(clickPlace, setPlaceData, createMarker(lat, lng));
      }
    });

    fragment.appendChild(itemEl);
  }
  if (listEl.current) {
    listEl.current.appendChild(fragment);
  }
};

// PlaceData 객체를 element형태로 변환해주는 함수
export const getListItem = (idx: number, placeData: PlaceInfo): HTMLElement => {
  const char = String.fromCharCode(idx + 65);

  let el = document.createElement('li'),
    itemStr = `
      <div
        style="
          display: flex;
        "
        >
        <span
          style="
            color: blue;
            font-size: 120%;
            font-weight: bold;
          ">
          ${char}
        </span>
        <span
          style="
            font-size: 120%;
            font-weight: bold;
            margin-left: 10px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          "
        >
          ${placeData.place_name}
        </span>
      </div>
      
      `;

  if (!placeData.road_address_name) {
    itemStr += ` <div
        style="
          display: flex;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 90%;
          margin-top: 5px;
        "
      >
        ${placeData.address_name}
      </div>
      `;
  } else {
    itemStr += ` <div
        style="
          display: flex,
          overflow: hidden
          text-overflow: ellipsis
          font-size: 90%
          margin-top: 5px
        "
      >
        ${placeData.address_name}
      </div>

      <div
      style="
        display: flex;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 90%;
        margin-top: 1px;
      "
    >
     ${placeData.road_address_name}
    </div>
      
      `;
  }

  itemStr += `
      <div
        style="
          display: flex;
          font-size: 90%;
          margin-top: 0px;
          color: rgba(12, 147, 90, 0.9);
        "
      >
      ${placeData.phone}
    </div>
  
`;
  el.innerHTML = itemStr;
  el.className = 'item';

  styleElement(el);

  return el;
};

//이전 검색결과를 화면에서 지워주는 함수
export const removeAllChildNodes = (
  el: React.RefObject<HTMLUListElement>,
): void => {
  while (el.current && el.current.hasChildNodes()) {
    el.current.removeChild(el.current.lastChild!);
  }
};

// element에 css를 입혀주는 함수
const styleElement = (el: HTMLElement): void => {
  el.style.backgroundColor = 'white';
  el.style.listStyle = 'none';
  el.style.margin = '10px auto 0px auto';
  el.style.border = '5px solid rgba(255, 255, 255, 1)';
  el.style.width = '85%';
  el.style.height = '200px';
  el.style.borderRadius = '15px';
  el.style.border = '1px solid black';
  el.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  el.style.fontSize = '80%';
  el.style.padding = '15px';
};

//클릭한 장소의 좌표값을 가진 마커를 생성해줌
export const createMarker = (lat: number, lng: number): kakao.maps.Marker => {
  const imageSrc = 'images/mapPage/Marker.png';
  let imageSize = new kakao.maps.Size(30, 30);

  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  var markerPosition = new kakao.maps.LatLng(lat, lng);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  return marker;
};

//핫플레이스의 좌표값을 통해 마커를 생성하는 함수
const createHotplaceMarker = (lat: number, lng: number): kakao.maps.Marker => {
  const imageSrc = 'images/mapPage/Marker.png';
  let imageSize = new kakao.maps.Size(30, 30);

  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  var markerPosition = new kakao.maps.LatLng(lat, lng);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  return marker;
};

export const setMarker = (
  result: PlaceInfo,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  marker: kakao.maps.Marker,
) => {
  var open = false;
  marker.setMap(map);
  var infoWindow = createInfoWindow(result, setPlaceData);

  kakao.maps.event.addListener(marker, 'click', () => {
    //핫플레이스인지 아닌지에 따라 이벤트가 다르게 적용
    if (!open) {
      infoWindow.open(map, marker);
      open = !open;
    } else {
      infoWindow.close();
      open = !open;
    }
  });
};

const isHotPlace = async (result: PlaceInfo) => {};

// 윈도우 인포객체를 생성하는 함수
const createInfoWindow = (
  result: PlaceInfo,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): kakao.maps.InfoWindow => {
  const lat = parseFloat(result.y);
  const lng = parseFloat(result.x);

  var iwContent = windowContents(result, setPlaceData);
  var iwPosition = new kakao.maps.LatLng(lat, lng); //윈도우 인포를 띄울 위치

  var infoWindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  return infoWindow;
};

//윈도우 인포창에 들어갈 element를 문자열 형태로 전달해주는 함수
const windowContents = (
  result: PlaceInfo,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): HTMLElement => {
  return setHtmlString(
    result,
    () => savePlace(result, setPlaceData),
    setPlaceData,
  );
};

//htmlString을 작성해주는 함수
const setHtmlString = (
  result: PlaceInfo,
  savePlace: (
    result: PlaceInfo,
    setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  ) => void,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): HTMLElement => {
  var container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.width = '400px';
  container.style.height = '200px';
  container.style.backgroundColor = 'rgba(151, 102, 209, 0.8)';

  var topContainer = document.createElement('div');

  topContainer.style.display = 'flex';
  topContainer.style.alignItems = 'center';
  topContainer.style.height = '35%';
  topContainer.style.flexWrap = 'wrap';
  topContainer.style.marginTop = '8%';
  topContainer.style.color = 'white';
  topContainer.style.fontWeight = 'bold';
  topContainer.style.fontSize = '110%';
  topContainer.style.marginBottom = '-30px';
  topContainer.style.marginLeft = '20px';

  const markerImg = document.createElement('img');
  markerImg.src = 'images/mapPage/PlaceIcon.png';
  markerImg.style.width = '30px';
  markerImg.style.height = '30px';

  var placeContainer = document.createElement('div');
  placeContainer.style.marginLeft = '20px';
  placeContainer.style.overflowWrap = 'break-word';

  var placeName = document.createElement('div');
  placeName.innerHTML = result.place_name;

  var address_name = document.createElement('div');
  address_name.innerHTML = result.address_name;

  container.appendChild(topContainer);
  topContainer.appendChild(markerImg);
  topContainer.appendChild(placeContainer);
  placeContainer.appendChild(placeName);
  placeContainer.appendChild(address_name);

  if (onlyDisplay == false) {
    var bottomcontainer = document.createElement('div');

    bottomcontainer.style.display = 'flex';
    bottomcontainer.style.alignItems = 'center';
    bottomcontainer.style.height = '35%';
    bottomcontainer.style.marginTop = '8%';
    bottomcontainer.style.color = 'white';
    bottomcontainer.style.fontWeight = 'bold';
    bottomcontainer.style.fontSize = '110%';
    bottomcontainer.style.marginLeft = '20px';

    const starImg = document.createElement('img');
    starImg.src = 'images/mapPage/SaveStar.png';
    starImg.style.width = '30px';
    starImg.style.height = '30px';

    var saveBtn = document.createElement('div');
    saveBtn.innerHTML = '위치 저장하기';
    saveBtn.style.cursor = 'pointer';
    saveBtn.style.marginLeft = '20px';

    container.appendChild(bottomcontainer);
    bottomcontainer.appendChild(starImg);
    bottomcontainer.appendChild(saveBtn);

    saveBtn.addEventListener('click', function () {
      saveBtn.style.color = '#ffff00';

      setPlaceData(result);

      setTimeout(() => {
        saveBtn.style.color = ''; // 원래 색상으로 복원
      }, 200);

      return alert('장소 설정이 완료되었습니다.');
    });
  } else {
    /*클릭한 장소가 저잘되어있는 장소일때.
      저장된 장소가 아니면 removeIcon은 만들필요 없음.
    */
    var removeIcon = document.createElement('img');
    removeIcon.style.width = '15px';
    removeIcon.style.height = '15px';
    removeIcon.src = 'images/mapPage/Delete.png';
    removeIcon.style.margin = '100px 10px 0px 370px';
    removeIcon.style.cursor = 'pointer';
    container.appendChild(removeIcon);

    removeIcon.addEventListener('click', () => console.log('장소에서 제거'));
  }

  return container;
};

//제거한 다음. 윈도우 인포를 닫은뒤 마커를 삭제.
const removeHotplace = async (storeId: number) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// 클릭한 장소의 데이터를 변수에 저장
const savePlace = (
  result: PlaceInfo,
  setPlaceData: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): void => {
  const clickPlace: PlaceInfo = {
    place_name: result.place_name,
    address_name: result.address_name,
    road_address_name: result.road_address_name,
    phone: result.phone,
    x: result.x,
    y: result.y,
  };

  // setPlaceData((prevPlace) => {
  //   // 중복 여부를 확인합니다.
  //   const isDuplicate = prevPlace.some(
  //     (place) =>
  //       place.place_name === clickPlace.place_name &&
  //       place.address_name === clickPlace.address_name &&
  //       place.x === clickPlace.x &&
  //       place.y === clickPlace.y,
  //   );

  //   if (!isDuplicate) {
  //     return [...prevPlace, clickPlace];
  //   } else {
  //     return prevPlace;
  //   }
  // });
};
