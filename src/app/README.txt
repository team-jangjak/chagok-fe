# app 폴더
앱 레벨 초기 세팅을 담당하는 폴더입니다.
- layouts/: MainLayout 등 큰 도메인 별로, Layout들을 관리, 이를 해당하는 각 routes에 갖다 붙인다
- providers/: QueryClientProvider, ThemeProvider 등 전역 Provider 관리
- router/: react-router 설정 및 라우팅 로직 관리
- App.tsx: App 컴포넌트 엔트리, 앱 전체 세팅 담당
즉, 앱의 "진입점"과 "전역 설정"을 정의하는 공간입니다.