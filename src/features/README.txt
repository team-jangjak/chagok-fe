# features 폴더
Feature-Sliced Design(FSD) 기반의 기능 단위 모듈을 모아둔 폴더입니다.
- auth/, home/, calendar/, ranking/, mypage/ 등 도메인 단위로 구분
- 각 도메인 내부에는 components, hooks, api 등 세부 구조를 가짐
- mockdata.ts -> 임시로 컴포넌트가 제대로 데이터와 함께 렌더링 되는지 확인하기 위한 목데이터 모아두는 곳
즉, 특정 기능(Feature)을 중심으로 모듈화된 코드들을 모아둔 곳입니다.
