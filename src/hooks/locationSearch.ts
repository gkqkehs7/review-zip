import { Status } from 'kakao-maps-sdk';
import React from 'react';

//아직 마커를 표시하는 작업은 완성X push후 다시진행
// 키워드를 검색하는 함수

var marker = []; //marker의 위치를 담을

interface PlaceData {
  place_name: string;
  address_name: string;
  road_address_name: string;
  phone: string;
  x: string;
  y: string;
}

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
  placeData: PlaceData[], //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>,
  map: React.RefObject<kakao.maps.Map>,
): void => {
  var fragment = document.createDocumentFragment();
  var bounds = new kakao.maps.LatLngBounds();

  removeAllChildNodes(listEl);

  for (let i = 0; i < placeData.length; i++) {
    var itemEl = getListItem(i, placeData[i]);

    //검색지역 클릭시 좌표이동을 해주는 이벤트 리스너

    itemEl.addEventListener('click', () => {
      var placePostion = new kakao.maps.LatLng( //좌표객체
        parseFloat(placeData[i].y),
        parseFloat(placeData[i].x),
      );

      if (map.current) {
        map.current.setCenter(placePostion);
        map.current.setLevel(1);
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
  index: number,
  placeData: PlaceData,
): HTMLElement => {
  var el = document.createElement('li'),
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
  console.log('el : ' + el);

  return el; //<li>info </li>를 리턴하는 함수
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
  // el.onclick= ()=>
};

const addMarker = () => {};
