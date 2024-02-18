import { PlaceInfo } from '@/components/mapPageComponent/mapComponent/mapComponent';
import { Status } from 'kakao-maps-sdk';
import React from 'react';

//카카오 공식문서 Sample "장소검색 후 목록으로 나타내기" 코드참고

// 검색장소에 대한 데이터
export interface SearchResult {
  //장소검색에대한 검색결과
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

var onlyDisplay = false;
// var marker: kakao.maps.Marker;
var open = false;
var map: kakao.maps.Map;
// var lat: number;
// var lng: number;

// 키워드를 검색하는 함수
export const searchPlace = (
  keyword: string,
  resultList: React.RefObject<HTMLUListElement>,
  mapRef: React.RefObject<kakao.maps.Map>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
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
      placeSearchCB(PlaceData, status, resultList, setPlaceInfo),
    { useMapBounds: true },
  );
};

//검색결과를 전달받은 함수. 검색이 완료되었을떄 발생
export const placeSearchCB = (
  searchResult: SearchResult[], //data
  status: Status,
  resultList: React.RefObject<HTMLUListElement>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlace(searchResult, resultList, setPlaceInfo);
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
  result: SearchResult[], //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): void => {
  let fragment = document.createDocumentFragment();

  removeAllChildNodes(listEl);

  for (let i = 0; i < result.length; i++) {
    //검색된 장소 데이터 각각을  element형식으로 가져온뒤 자식 요소로 추가함.
    var itemEl = getListItem(i, result[i]);

    //검색지역 클릭시 좌표이동을 해주는 이벤트 리스너

    itemEl.addEventListener('click', () => {
      var lat = parseFloat(result[i].y); //위도
      var lng = parseFloat(result[i].x); //경도
      var placePostion = new kakao.maps.LatLng(lat, lng); //좌표객체
      map.setCenter(placePostion);
      map.setLevel(1);
      setMarker(lat, lng, i, result, setPlaceInfo, createMarker(lat, lng));
    });

    fragment.appendChild(itemEl);
  }
  if (listEl.current) {
    listEl.current.appendChild(fragment);
  }
};

// PlaceData 객체를 element형태로 변환해주는 함수
export const getListItem = (
  idx: number,
  placeData: SearchResult,
): HTMLElement => {
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
const createMarker = (lat: number, lng: number): kakao.maps.Marker => {
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
  lat: number,
  lng: number,
  idx: number,
  result: SearchResult[],
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  marker: kakao.maps.Marker,
) => {
  marker.setMap(map);

  var infoWindow = createInfoWindow(lat, lng, idx, result, setPlaceInfo);
  kakao.maps.event.addListener(marker, 'click', () => {
    /*마커의 좌표값을 서버에  전송해 핫플레이스인지 아닌지 판단함. 
      lat  , lng를 서버에 전송하여 값을 받아온다.
      값에따라서 infoWindow의 객체가 다르다.
    */

    if (!open) {
      infoWindow.open(map, marker);
      open = !open;
    } else {
      infoWindow.close();
      open = !open;
    }
  });
  //핫플레이스인지 아닌지에 따라 로직이 다르게 적용될것.
  //핫플레이스의 좌표값을 데이터로 받아서 그 위치에 마커를 생성함.
};

// 윈도우 인포객체를 생성하는 함수
const createInfoWindow = (
  lat: number,
  lng: number,
  idx: number,
  result: SearchResult[],
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): kakao.maps.InfoWindow => {
  var iwContent = windowContents(idx, result, setPlaceInfo);
  var iwPosition = new kakao.maps.LatLng(lat, lng); //윈도우 인포를 띄울 위치

  var infoWindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  return infoWindow;
};

//윈도우 인포창에 들어갈 element를 문자열 형태로 전달해주는 함수
const windowContents = (
  idx: number,
  result: SearchResult[],
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): HTMLElement => {
  return setHtmlString(
    idx,
    result,
    () => savePlace(idx, result, setPlaceInfo),
    setPlaceInfo,
  );
};

//htmlString을 작성해주는 함수
const setHtmlString = (
  idx: number,
  result: SearchResult[],
  savePlace: (
    idx: number,
    result: SearchResult[],
    setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  ) => void,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
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
  placeName.innerHTML = result[idx].place_name;

  var address_name = document.createElement('div');
  address_name.innerHTML = result[idx].address_name;

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

    saveBtn.addEventListener('click', () =>
      savePlace(idx, result, setPlaceInfo),
    );
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

// 클릭한 장소의 데이터를 변수에 저장
const savePlace = (
  idx: number,
  result: SearchResult[],
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): void => {
  setPlaceInfo({
    place_name: result[idx].place_name,
    address_name: result[idx].address_name,
    road_address_name: result[idx].road_address_name,
    phone: result[idx].phone,
    x: result[idx].x,
    y: result[idx].y,
  });
};

const removeMyPlace = () => {
  //서버에서 해당장소를 제거함.
};
