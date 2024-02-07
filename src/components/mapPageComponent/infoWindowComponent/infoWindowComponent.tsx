import React from 'react';

// 인포윈도를 구성하는 컴포넌트. 그러나 JSX->HTMLString으로 변환해야하는데. 그 과정이 막혀서 현재 보류중
// 인포윈도우를 반응형으로 만들려면 여기서 checkDevice()를 한뒤 width height값을 정해야하는데 그것도 막힌거같음
//signinPage 서버먼저 연결한뒤 해결 고민중.
const InfoWindowComponent: React.FC = () => {
  return (
    <li
      style={{
        width: '261px',
        height: '100px',
        listStyle: 'none',
        padding: '12.5px 0px 0px 10px',
        border: '1px solid black',
      }}
    >
      {/* 장소명 */}
      <div
        style={{
          display: 'flex',
        }}
      >
        <span
          style={{
            color: 'blue',
            fontSize: '120%',
            fontWeight: 'bold',
          }}
        >
          {' '}
          A
        </span>
        <span
          style={{
            fontSize: '120%',
            fontWeight: 'bold',
            marginLeft: '10px',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {/* placeData.Placename */}
          고강사거리라고 해주세요
        </span>
      </div>
      {/* 주소 */}
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '90%',
          marginTop: '5px',
        }}
      >
        {/* placeData.adressName */}
        서울강남구 강남대로 지하차도
      </div>

      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontSize: '90%',
          marginTop: '1px',
        }}
      >
        강남로 2030140
      </div>
      {/* placeData.phone */}
      <div
        style={{
          display: 'flex',
          fontSize: '90%',
          marginTop: '0px',
          color: 'rgba(12, 147, 90, 0.9)',
        }}
      >
        02-6222-1255
      </div>
    </li>
  );
};

export default InfoWindowComponent;
