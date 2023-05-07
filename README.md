glaxxkim.com

## 공통

업로드 제한 기준: 빌드 시간 300분 (https://app.netlify.com/teams/glasskim0822/overview)
\*\* 위 링크 들어가면 화면 중앙에 `Build minutes used`가 있습니다.

프로젝트 저장소: https://github.com/glaxxkim/portfolio

이미지 저장소: https://github.com/glaxxkim/images

모든 이미지는 포토샵 등으로 용량을 작게해서 올리는게 좋습니다.

---

<br />

## 대문 이미지 변경하기

1. 먼저 프로젝트 저장소에서 `src/assets/images` 폴더 경로 접속. (아래 링크 누르면 바로 접속)

   https://github.com/glaxxkim/portfolio/tree/main/src/assets/images

2. 상단의 `Add file` > `Upload files` 클릭 (상단 `Add file` 안누르고 그냥 파일을 드래그해도 자동으로 넘어갑니다.)

3. 파일 드래그나 `choose your files` 클릭해서 이미지 업로드

\*\* 파일명은 `landing_bg.jpg` 그대로 업로드

<br />

## Contact 프로필 이미지 변경

대문 이미지와 같은 경로에서 `contact_profile.jpg` 이미지 변경

<br />

## Shooting Guide 목록 메뉴 추가 및 변경

`src/pages/Guide` 경로의 `guideList.js` 파일에서, 아래 항목 복사해서 추가 및 변경

```
{
  title: '여기에 메뉴 이름(따옴표 필수)',
  price: 여기는 금액(따옴표 없이 숫자만 입력),
},

위 형태 그대로 복사해서 텍스트만 변경하면 편함
```

<br />

## 포트폴리오 이미지 관리

1. https://github.com/glaxxkim/images 링크 접속

2. model은 model 폴더 안에, product는 product 폴더 안에 형식 맞춰서 넣은 후에,

3. `src/pages/Portfolio` 경로 접속

- 링크 https://github.com/glaxxkim/portfolio/tree/main/src/pages/Portfolio
- 위 경로에서 models.js, products.js 각각 수정하기

   <br />
   <img width="332" alt="스크린샷 2023-05-06 오전 9 19 37" src="https://user-images.githubusercontent.com/131372838/236587944-f225b555-b5ef-4944-a62d-d8e0d28a5825.png">
   <br />

```
url에는 파일명 형태 작성 (아래 예시 참고, 따옴표 필수)
title에는 해당 사진 제목 작성 (따옴표 필수)

{
  url: "model_01.jpg",
  title: "여기에 제목 작성",
},

위 슈팅 가이드 추가하는 것 처럼, 중괄호 범위 그대로 복사 후 붙여넣고 추가할 수 있음
```
