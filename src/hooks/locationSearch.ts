import { Places } from 'kakao-maps-sdk';
import React from 'react';

//아직 마커를 표시하는 작업은 완성X push후 다시진행

// 키워드를 검색하는 함수
export const searchPlace = (
  keyword: string,
  placeList: React.RefObject<HTMLUListElement>,
) => {
  var ps = new kakao.maps.services.Places();

  if (!keyword.replace(/^\s+|\s+$/g, '')) {
    alert('키워드를 입력해주세요');
    return false;
  }

  ps.keywordSearch(
    keyword,
    (placeData, status, pagination) =>
      placeSearchCB(placeData, status, placeList),
    { useMapBounds: true },
  );
};

//검색결과를 전달받은 함수. 검색이 완료되었을떄 발생
export const placeSearchCB = (
  placeData: any,
  status: string | null,
  // pagnitation: number, number 타입 경고발생
  placeList: React.RefObject<HTMLUListElement>,
) => {
  if (status === kakao.maps.services.Status.OK) {
    displayPlace(placeData, placeList);
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
  placeData: any, //검색한 장소의 데이터
  listEl: React.RefObject<HTMLUListElement>, //element값을 받아줄 ul 엘리먼트
  //   searchContainer?: React.RefObject<HTMLDivElement>, 스크롤 하기위해 넣은 매개변수
): void => {
  var fragment = document.createDocumentFragment();

  for (let i = 0; i < placeData.length; i++) {
    var itemEl = getListItem(i, placeData[i]);
    fragment.appendChild(itemEl);
  }
  if (listEl.current) {
    listEl.current.appendChild(fragment);
  }
};

// PlaceData 객체를 element형태로 변환해주는 함수
export const getListItem = (index: number, placeData: any): HTMLElement => {
  var el = document.createElement('li'),
    itemStr = '<div class = "info" >' + '<h5>' + placeData.place_name + '</h5>';

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

  return el;
};

export const removeAllChildNodes = (el: HTMLElement): void => {
  while (el.hasChildNodes()) {
    // el.removeChild(el.lastChild); lastchild 경고떠서 일단 주석처리
  }
};
