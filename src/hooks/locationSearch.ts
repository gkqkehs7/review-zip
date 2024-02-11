import { PlaceInfo } from '@/types/common.types';
import { Status } from 'kakao-maps-sdk';
import React, { useEffect } from 'react';

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

var markers: kakao.maps.Marker[] = [];
var open = false;

// 키워드를 검색하는 함수
export const searchPlace = (
  keyword: string,
  resultList: React.RefObject<HTMLUListElement>,
  map: React.RefObject<kakao.maps.Map>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
) => {
  var ps = new kakao.maps.services.Places();

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
    alert('키워드를 입력해주세요');
    return false;
  }

  ps.keywordSearch(
    keyword,
    (PlaceData, status) =>
      placeSearchCB(PlaceData, status, resultList, map, setPlaceInfo),
    { useMapBounds: true },
  );
};

//검색결과를 전달받은 함수. 검색이 완료되었을떄 발생
export const placeSearchCB = (
  searchResult: SearchResult[], //data
  status: Status,
  resultList: React.RefObject<HTMLUListElement>,
  map: React.RefObject<kakao.maps.Map>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlace(searchResult, resultList, map, setPlaceInfo);
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
  //placeData
  result: SearchResult[], //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>,
  mapRef: React.RefObject<kakao.maps.Map>,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): void => {
  let fragment = document.createDocumentFragment();

  removeAllChildNodes(listEl);

  for (let i = 0; i < result.length; i++) {
    var itemEl = getListItem(i, result[i]);

    //검색지역 클릭시 좌표이동을 해주는 이벤트 리스너

    itemEl.addEventListener('click', () => {
      var lat = parseFloat(result[i].y); //위도
      var lng = parseFloat(result[i].x); //경도

      var placePostion = new kakao.maps.LatLng(lat, lng); //좌표객체
      if (mapRef.current) {
        const map: kakao.maps.Map = mapRef.current;
        map.setCenter(placePostion);
        map.setLevel(1);
        addMarker(lat, lng, map, i, result, setPlaceInfo); //클릭한 장소에대한 idx전달
      }
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

//마커를 지도에 생성해주는 함수
const addMarker = (
  lat: number,
  lng: number,
  map: kakao.maps.Map,
  idx: number,
  result: SearchResult[],
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
) => {
  const imageSrc = 'images/mapPage/Marker.png';
  let imageSize = new kakao.maps.Size(30, 30);

  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
  var markerPosition = new kakao.maps.LatLng(lat, lng);

  var marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  markers[idx] = marker; //이미지랑 위치만 가지고 있는 객체

  marker.setMap(map);

  var infoWindow = createInfoWindow(lat, lng, idx, result, setPlaceInfo);
  kakao.maps.event.addListener(markers[idx], 'click', () => {
    if (!open) {
      infoWindow.open(map, markers[idx]);
      open = !open;
    } else {
      infoWindow.close();
      open = !open;
    }
  });
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

//htmlString을 작성해주는 함수 jsx-> string으로 바꾸는
const setHtmlString = (
  // parmeter : idx, placeInfo , SavePlace(result , idx ,setPlaceInfo)
  idx: number,
  result: SearchResult[],
  savePlace: (
    idx: number,
    result: SearchResult[],
    setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
  ) => void,
  setPlaceInfo: React.Dispatch<React.SetStateAction<PlaceInfo>>,
): HTMLElement => {
  //Windfow Info에 들어갈 ELMENT========================
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

  saveBtn.addEventListener('click', () => savePlace(idx, result, setPlaceInfo));

  //========================Windfow Info에 들어갈 ELMENT
  return container;
};

// 저장버튼을 누르면 클릭되어있는 장소데이터를 서버에 전송한다.
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
