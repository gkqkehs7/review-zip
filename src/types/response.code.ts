export enum ResponseCode {
  GLOBAL501 = '서버오류',
  GLOBAL502 = '토큰관련 서버 에러',
  GLOBAL401 = '잘못된 입력',
  OAUTH401 = '기존 토큰이 만료되었습니다. 토큰을 재발급해주세요.',
  USER401 = '중복된 이메일입니다.',
  USER402 = '중복된 이름입니다.',
  USER403 = '비밀번호가 잘못되었습니다.',
  USER404 = '유저를 찾을 수 없습니다.',
  USER405 = '팔로워 목록을 찾을 수 없습니다.',
  USER406 = '팔로잉 목록을 찾을 수 없습니다.',
  USER407 = '존재하지 않는 유저 닉네임입니다.',
  USER408 = '존재하지 않는 유저 이름입니다.',
  USER409 = '유저 생성에 실패하였습니다.',
  USER410 = '유저 삭제에 실패하였습니다.',
  POST401 = '게시글을 찾을 수 없습니다.',
  POST402 = '공감 누른 사람을 찾을 수 없습니다.',
  POST403 = '게시글 작성에 실패하였습니다',
  POST404 = '스크랩 목록을 찾을 수 없습니다.',
  POST405 = '사용자가 작성하지 않은 게시글이 최소 3개 이상 존재해야합니다.',
  POST406 = '게시글 목록이 존재하지 않습니다.',
  HASHTAG401 = '존재하지 않는 해쉬태그입니다.',
  STORE401 = '존재하지 않는 가게입니다.',
  STORE402 = '존재하지 않는 가게 위치입니다.',
  POSTLIKE401 = '공감 누르기에 실패하였습니다',
  POSTLIKE402 = '이미 공감한 게시물입니다',
  POSTLIKE403 = '존재하지 않는 공감입니다.',
  IMAGE401 = '파일이 존재하지 않습니다.',
  IMAGE402 = '이미지 업로드에 실패하였습니다.',
  FOLLOW401 = '이미 팔로우한 상태입니다.',
}
