import { Status } from 'kakao-maps-sdk';
import React from 'react';

//카카오 공식문서 Sample "장소검색 후 목록으로 나타내기" 코드참고

// 검색장소에 대한 데이터
export interface PlaceData {
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

export var clickData: PlaceData[] = []; //내가 클릭한 장소만 저장해두는 배열

var markers: kakao.maps.Marker[] = [];
var open = false;

// 키워드를 검색하는 함수
export const searchPlace = (
  keyword: string,
  placeList: React.RefObject<HTMLUListElement>,
  map: React.RefObject<kakao.maps.Map>,
) => {
  var ps = new kakao.maps.services.Places();

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
    alert('키워드를 입력해주세요');
    return false;
  }

  ps.keywordSearch(
    keyword,
    (PlaceData, status) => placeSearchCB(PlaceData, status, placeList, map),
    { useMapBounds: true },
  );
};

//검색결과를 전달받은 함수. 검색이 완료되었을떄 발생
export const placeSearchCB = (
  placeData: PlaceData[],
  status: Status,
  placeList: React.RefObject<HTMLUListElement>,
  map: React.RefObject<kakao.maps.Map>,
) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlace(placeData, placeList, map);
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
  placeData: PlaceData[], //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>,
  mapRef: React.RefObject<kakao.maps.Map>,
): void => {
  let fragment = document.createDocumentFragment();

  removeAllChildNodes(listEl);

  for (let i = 0; i < placeData.length; i++) {
    var itemEl = getListItem(placeData[i]);

    //검색지역 클릭시 좌표이동을 해주는 이벤트 리스너

    itemEl.addEventListener('click', () => {
      //내가 클릭한 placeData[]
      var lat = parseFloat(placeData[i].y);
      var lng = parseFloat(placeData[i].x);

      clickData[i] = placeData[i];
      console.log(clickData[i]);
      var placePostion = new kakao.maps.LatLng(lat, lng); //좌표객체

      if (mapRef.current) {
        const map: kakao.maps.Map = mapRef.current;
        map.setCenter(placePostion);
        map.setLevel(1);
        addMarker(lat, lng, map, i, clickData);
      }
    });

    fragment.appendChild(itemEl);
  }

  if (listEl.current) {
    listEl.current.appendChild(fragment);
  }
};

// PlaceData 객체를 element형태로 변환해주는 함수
export const getListItem = (placeData: PlaceData): HTMLElement => {
  let el = document.createElement('li'),
    itemStr =
      '<div class = "placeName" >' + '<h2>' + placeData.place_name + '</h2>';

  if (placeData.road_address_name) {
    itemStr +=
      '<span>' +
      placeData.road_address_name +
      '</span>' +
      '<span>' +
      placeData.address_name +
      '</span>';
  } else {
    itemStr += '<span>' + placeData.address_name + '</span>';
  }

  itemStr += '  <span class="tel">' + placeData.phone + '</span>' + '</div>';

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
  el.style.margin = '0px 0px 30px 0px';
  el.style.width = '100%';
  el.style.height = 'fit-content';
};

//마커를 지도에 생성해주는 함수
const addMarker = (
  lat: number,
  lng: number,
  map: kakao.maps.Map,
  idx: number,
  clickData: PlaceData[],
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

  var infoWindow = createInfoWindow(lat, lng, idx, clickData);
  kakao.maps.event.addListener(markers[idx], 'click', () => {
    if (!open) {
      infoWindow.open(map, markers[idx]);
      open = !open;
    } else {
      infoWindow.close();
      open = !open;
    }
  });

  marker.setMap(map);
};

// 윈도우 인포객체를 생성하는 함수
const createInfoWindow = (
  lat: number,
  lng: number,
  idx: number,
  clickData: PlaceData[],
): kakao.maps.InfoWindow => {
  var iwContent = windowContents(idx, clickData); //윈도우의 HTML String

  var iwPosition = new kakao.maps.LatLng(lat, lng); //윈도우 인포를 띄울 위치

  var infoWindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent,
  });

  return infoWindow;
};

//윈도우 인포창에 들어갈 element를 문자열 형태로 전달해주는 함수
const windowContents = (idx: number, clickData: PlaceData[]): string => {
  return setHtmlString(idx, clickData);
};

//htmlString을 작성해주는 함수 jsx-> string으로 바꾸는
const setHtmlString = (idx: number, clickData: PlaceData[]): string => {
  var htmlString = `
  <div style="
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 200px;
    background-color: rgba(151, 102, 209, 0.8);
  ">
    <div style="
      display: flex;
      align-items: center;
      height: 35%;
      margin-top: 8%;
      flex-wrap: wrap;
      color: white;
      font-weight: bold;
      font-size: 110%;
      margin-bottom: -30px;
      margin-left: 20px;
    ">
      <img src="images/mapPage/PlaceIcon.png" style="width: 30px; height: 30px;">
      <div style="margin-left: 20px; overflow-wrap: break-word;">
        <div>${clickData[idx].place_name}</div>
        <div>${clickData[idx].address_name}</div>
      </div>
    </div>

    <div style="
      display: flex;
      height: 35%;
      color: white;
      font-weight: bold;
      margin-top: 8%;
      font-size: 110%;
      align-items: center;
      margin-left: 20px;
    ">
      <img src="images/mapPage/SaveStar.png" style="width: 30px; height: 30px;">
      <div style="margin-left: 20px;">
        <div style="cursor: pointer;">위치저장하기</div>
      </div>
    </div>
    <img src="images/mapPage/Delete.png" style="display: none; width: 15px; height: 15px; margin-left: 90%;">
  </div>
`;

  return htmlString;
};
