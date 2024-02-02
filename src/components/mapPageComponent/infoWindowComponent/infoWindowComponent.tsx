import React from 'react';

// 인포윈도를 구성하는 컴포넌트. 그러나 JSX->HTMLString으로 변환해야하는데. 그 과정이 막혀서 현재 보류중
// 인포윈도우를 반응형으로 만들려면 여기서 checkDevice()를 한뒤 width height값을 정해야하는데 그것도 막힌거같음
//signinPage 서버먼저 연결한뒤 해결 고민중.
const InfoWindowComponent: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '330px',
        height: '160px',

        backgroundColor: 'rgba(151, 102, 209, 0.8)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '35%',

          marginTop: '8%',
          flexWrap: 'wrap',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '110%',
          marginBottom: '-30px',
          marginLeft: '20px',
        }}
      >
        <img
          src="images/mapPage/PlaceIcon.png"
          style={{ width: '30px', height: '30px' }}
        />
        <div
          style={{
            marginLeft: '20px',
            overflowWrap: 'break-word',
          }}
        >
          <div></div>
          <div>역곡로.................</div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          height: '35%',

          color: 'white',
          fontWeight: 'bold',
          marginTop: '8%',
          fontSize: '110%',
          alignItems: 'center',
          marginLeft: '20px',
        }}
      >
        <img
          src="images/mapPage/SaveStar.png"
          style={{ width: '30px', height: '30px' }}
        />
        <div
          style={{
            marginLeft: '20px',
          }}
        >
          <div
            style={{
              cursor: 'pointer',
            }}
          >
            위치저장하기
          </div>
        </div>
      </div>
      <img
        src="images/mapPage/Delete.png"
        style={{
          display: 'none',
          width: '15px',
          height: '15px',
          marginLeft: '90%',
        }}
      />
    </div>
  );
};

export default InfoWindowComponent;
