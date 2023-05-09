## 사이트

[glaxxkim.com](https://glaxxkim.com)

## 공통

1. 이미지 업로드 후, 사이트에 적용 여부 확인

   - [netlify](https://app.netlify.com/teams/glasskim0822/overview)에서 확인 가능
   - 접속 후 왼쪽 메뉴에서 `Build` 메뉴를 누르면, 목록이 나오는데 가장 최신 정보 옆에 `Completed` 태그가 달려있으면 적용 완료.
   - 이미지 업로드를 하면 자동으로 적용 과정에 들어갑니다.

2. 업로드 제한 기준: 빌드 시간 300분 ([netlify](https://app.netlify.com/teams/glasskim0822/overview)에서 확인)

   - 위 링크 들어가면 화면 중앙에 `Build minutes used`가 있습니다.

3. [프로젝트 저장소](https://github.com/glaxxkim/portfolio)

4. 모든 이미지는 포토샵 등으로 용량을 줄이고 올리는게 좋습니다.

---

<br />

## 대문 이미지 변경하기

1. 먼저 프로젝트 저장소에서 `src/assets/images` 폴더 경로 접속. ([경로 바로가기](https://github.com/glaxxkim/portfolio/tree/main/src/assets/images))

2. 상단의 `Add file` > `Upload files` 클릭 (상단 `Add file` 안누르고 그냥 파일을 드래그해도 자동으로 넘어갑니다.)

3. 파일 드래그나 `choose your files` 클릭해서 이미지 업로드

   \*\* 파일명은 `landing_bg.jpg` 그대로 업로드

<br />

## Contact 프로필 이미지 변경

대문 이미지와 같은 경로에서 `contact_profile.jpg` 이미지 변경

<br />

## Shooting Guide 목록 메뉴 추가 및 변경

`src/pages/Guide` 경로의 `guideList.js` 파일에서, 아래 항목 복사해서 추가 및 변경([파일 바로가기](https://github.com/glaxxkim/portfolio/blob/main/src/pages/Guide/guideList.js))

```jsx
{
  title: '여기에 메뉴 이름(따옴표 필수)',
  price: 20000,
},
```

<br />

## 포트폴리오 이미지 관리

1. 이미지 삽입: `src/assets/images` 경로에서 각각 `model`, `product` 폴더에 이미지 넣기

2. 각 이미지에 제목 넣기: `src/assets/images` 경로에서 `models.js`, `products.js` 각각 수정하기

   <br />
   <img width="332" alt="스크린샷 2023-05-06 오전 9 19 37" src="https://user-images.githubusercontent.com/131372838/236587944-f225b555-b5ef-4944-a62d-d8e0d28a5825.png">
   <br />

```jsx
const titles = [
  '제목1', // 1
  '제목2',
];

// titles 대괄호 안에 차례대로 형식처럼 적으면 제목 적용. (편의를 위해 '제목1' 옆처럼 처럼 번호 표기해주면 좋음)
```

<br />

## 이메일 템플릿 변경

1. https://dashboard.emailjs.com/admin/templates/rdw846w 여기에서 변경 가능
2. 템플릿에서 중괄호 안에 있는건 수정하면 안되고, 위치 변경은 가능(ex: `{{user_name}}`이걸 `{{name}}` 이런 식의 변경은 금지)
   - 중괄호 수정을 제외하고는 자유롭게 양식 변경 가능.
   - user_name: 이메일 양식의 Name
   - user_email: 이메일 양식의 Email Address
   - user_title: 이메일 양식의 Title
   - user_message: 이메일 양식의 Message
