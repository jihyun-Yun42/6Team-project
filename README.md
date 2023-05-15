# 🍔 Burgerking-Clone

> [버거킹 홈페이지](https://www.burgerking.co.kr/#/home)의 메인페이지, 매장찾기, 딜리버리 주문 메뉴 CRUD, 소셜(카카오,네이버)로그인

- URL : [BURGERKING-CLONE](http://cloneburgerking.s3-website.ap-northeast-2.amazonaws.com/)

<br/>

### 📆 프로젝트 기간

- 2023/03/24 ~ 2023/03/30 (7일)

<br/>

### 💻 프론트엔드 기술 스택

<center>
<br/>
<div style="display: inline;">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white">
</div>

<div style="display: inline;">
<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/axios-6236FF?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

<div style="display: inline;">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"></div>
</center>
<br>

### 🔧 주요 기능
![메인페이지](https://user-images.githubusercontent.com/122543836/228762149-fda0e16f-9907-42fd-823b-2e3c36ef2c87.gif)

![매장찾기](https://user-images.githubusercontent.com/122543836/228762167-7a76f9ec-5dc3-46cf-aeda-4649b163ba0d.gif)

![딜리버리페이지](https://user-images.githubusercontent.com/122543836/228762196-20b3efc3-9201-4e0f-ac02-fa5de426e64a.gif)

![회원가입페이지](https://user-images.githubusercontent.com/122543836/228762226-73db016a-ae1c-476b-963e-96998d3300cc.gif)


## 📝 기능 구현

### 1. 회원가입
- 회원가입 시 유효성 검사를 진행한 값을 서버에 전송.
- 회원가입 시 유효성 검사 완료시 버튼 생성

### 2. 로그인

- 로그인 & 로그아웃 기능
- 쿠키 저장 및 로그인 상태 유지
- 카카오 소셜로그인 API 기능 백앤드와 협업
- 네이버 accesstoken 받아오기 성공
- 토큰값을 활용한 Admin 계정 구분

### 3. 카카오 지도 API
- 광역시에 따른 버거킹 매장 검색 
- 검색 매장 목록 표시
- 매장이름 클릭시 매장정보 카카오MAP으로 이동

### 4. Admin계정 메뉴 CRUD

#### - [CREATE]
모달창에서 사진, 이름, 가격, 카테고리 설정

작성버튼 클릭시 2중 모달창 에서 완료 여부 확인


#### - [READ]
(일반회원)카테고리별 버거사진 보여주기
(관리자) 글추가, 수정, 삭제버튼 보이기

#### [UPDATE & DELETE]
모달창에서 기존 사진, 이름, 가격, 카테고리를 불러와 수정

수정버튼 클릭시 2중 모달로 수정 여부 확인



<hr/>

### 😀 About Front-end

#### 👪 &nbsp; 팀원

|   이름    |          깃허브 주소          |                            역할 분담                             |
| :-------: | :---------------------------: | :--------------------------------------------------------------: |
| 👦 백승호 |https://github.com/seunghowhite |로그인, 카카오 로그인API|
| 👧 윤지현 |https://github.com/jihyun-Yun42|Admin CRUD,카카오 지도API  |

<hr/>

## 트러블 슈팅

### 1. 자동슬라이더 라이브러리없이 구현
처음엔 이미지에 index번호를 붙이고 렌더링을위해 번호를 state로 관리한뒤 setTimeout을 사용해서 자동으로 슬라이드가 되게끔 구현

문제 발생: 다음 이미지로 이동하는 버튼을 누르면 현재 바뀐 state의 값과 이미 비동기함수로 넘어간 state의 값이 충돌이 발생하여 슬라이더 속도가 설정한 값에비해 너무 빠르게 동작하는걸 알게됨

해결: setTimeout을 setInterval로 바꾸고 state의 값이 변할때마다 cleanup효과를 주기위해 cleanInterval을 사용하였다.

### 2. 이중모달창 구현
context와 state를 이용해서 모달창이 켜지고 꺼지도록 구현하고 글작성과 수정을 모달창에서 하도록 함

문제발생: 모달창에서 글작성을 하였을때 onSubmit(서버와의 통신)보다 onClick(모달 on/off) 이벤트가 먼저 발생되서 글작성이나 수정이 안됨

해결: action모달버튼을 만들어서 onClick을 강제로 중단시키고 submit을 실행시킨다음 모달 off를 실행시켜주었다. 이러면 정상적으로 서버와의 통신이 된 후 모달이 닫힌다. 하지만 에러가 났을때도 모달이 닫히는 현상이 발생. UX를 고려하여 이중모달창을 만들고 서버와의 요청 결과를 사용자에게 알려주도록 함.


### 3. 카카오 로그인 하기 구현.

문제발생:카카오 api 로그인을 구현시 개념이 처음이라 따로 code를 받는 페이지를 만들어야 하는 이유를 이해 못함.  기존에 사용하는 페이지를 리다이렉트 페이지로 사용하여  기존 페이지에 kako 에서 받은 code를 백앤드로 줘야하는 상황 이었음.

해결: 중간에 code를 주는 페이지 컴포넌트를 만들어서 code전송이 성공하여 token을 받아오면 기존 페이지로 이동할 수 있도록 중간에 code를 주는 페이지를 만듬

