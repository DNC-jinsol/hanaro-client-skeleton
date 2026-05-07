# Hanaro Frontend Skeleton

건강검진 차세대 시스템의 프론트엔드 구현을 위한 React 기반 스켈레톤 프로젝트입니다.

이 저장소는 동선관리, 영업관리, 마케팅 CRM 3개 도메인이 공통으로 사용할 수 있는 최소한의 프론트엔드 기반을 제공하는 것을 목표로 합니다. 실서비스 구현 전에 공통 기술 선택, 라우팅 방식, API 호출 구조, TanStack Query 연결 패턴을 검증하는 용도로 사용합니다.

## 1. 목적

- React SPA 기반 프론트엔드 기본 골격 제공
- TypeScript 기반 구현 패턴 정립
- 공통 라우팅 구조 검증
- Axios 기반 API client 구조 검증
- TanStack Query 기반 조회/변경 패턴 검증
- 실서비스 저장소로 확장 가능한 초기 템플릿 제공

## 2. 현재 기술 스택

- React 19
- TypeScript
- Vite
- React Router DOM
- TanStack Query
- Zustand
- Axios

## 3. 현재 구현 범위

현재 스켈레톤에는 아래 항목이 포함되어 있습니다.

- 공통 앱 엔트리 및 전역 스타일
- `BrowserRouter` 기반 SPA 라우팅
- 도메인별 placeholder 페이지
- `routeConfig.ts` 기반 라우트 설정 관리
- `AppNav` 기반 공통 이동 버튼
- Zustand 기반 전역 상태 샘플 적용
- Axios 기반 공통 API client
- TanStack Query `QueryClientProvider` 연결
- Query key 작성 규칙 초안
- 샘플 API 조회/등록 페이지

## 4. 포함된 라우트

현재 라우트는 `src/routes/routeConfig.ts`에서 관리합니다.

- `/` : 메인
- `/route-management` : 동선관리 placeholder
- `/sales` : 영업관리 placeholder
- `/crm` : 마케팅 CRM placeholder
- `/sample` : 샘플 API 테스트 페이지

각 라우트는 lazy loading 방식으로 연결되어 있습니다.

## 5. 디렉토리 구조

현재 `src` 구조는 아래와 같습니다.

```text
src/
  api/
    client.ts
    sample/
      getCustomers.ts
      insertCustomer.ts
      types.ts
  app/
    AppRouter.tsx
  components/
    AppNav.tsx
    SelectedDomainStatus.tsx
  lib/
    QueryClient.ts
  pages/
    HomePage.tsx
    RouteManagementPage.tsx
    SalesPage.tsx
    CrmPage.tsx
    SampleApiPage.tsx
  queries/
    queryKeys.ts
    sample/
      useSampleCustomersQuery.ts
      useInsertSampleCustomerMutation.ts
  routes/
    routeConfig.ts
  store/
    appStore.ts
  App.css
  App.tsx
  index.css
  main.tsx
```

## 6. 핵심 파일 설명

### `src/App.tsx`

- 앱의 최상위 엔트리 컴포넌트
- 전역 `App.css`를 로드
- 실제 라우팅 렌더링은 `AppRouter`에 위임

### `src/app/AppRouter.tsx`

- 실제 `Routes` 구성 담당
- `routeConfig.ts`에 정의된 라우트 설정을 읽어 렌더링
- `Suspense` fallback 처리 담당

### `src/routes/routeConfig.ts`

- 현재 라우트 목록을 한 곳에서 관리
- 각 route는 아래 메타데이터를 가짐
  - `key`
  - `path`
  - `label`
  - `Component`

### `src/components/AppNav.tsx`

- 공통 내비게이션 버튼 컴포넌트
- `APP_ROUTES`를 기반으로 메인 / 동선관리 / 영업관리 / 마케팅 CRM / 샘플 API 버튼을 출력
- 버튼 클릭 시 `navigate()`로 이동
- 현재 URL과 Zustand store의 선택 도메인 키를 동기화
- 현재 선택된 도메인 버튼에 active 스타일 적용

### `src/components/SelectedDomainStatus.tsx`

- Zustand store에 저장된 현재 선택 도메인 상태를 화면에 표시
- `AppNav`와 별도 컴포넌트가 같은 전역 상태를 동시에 읽고 있다는 점을 시각적으로 확인하는 용도

### `src/api/client.ts`

- Axios 공통 인스턴스
- `VITE_API_BASE_URL` 기반 base URL 사용
- 공통 `ApiError` 제공
- `get`, `post`, `put`, `patch`, `del` helper 제공

### `src/lib/QueryClient.ts`

- TanStack Query 전역 클라이언트 설정
- 기본 옵션
  - `staleTime`: 1분
  - `gcTime`: 10분
  - `retry`: 1회
  - `refetchOnWindowFocus`: `false`

### `src/queries/queryKeys.ts`

- query key 작성 규칙 정의
- 스켈레톤 단계용 공통 helper 제공
- 규칙:
  - 배열 형태 사용
  - `domain -> resource -> view -> identifier/filter`
  - 목록은 `list`, 단건은 `detail`

### `src/store/appStore.ts`

- Zustand 기반 전역 상태 store
- 현재는 스켈레톤 검증 목적의 최소 상태만 관리
  - `selectedDomainKey`
  - `setSelectedDomainKey`
- 서버 상태는 TanStack Query가 맡고, 전역 UI 상태는 Zustand가 맡는 역할 분리 예시로 사용

## 7. 샘플 API 테스트 흐름

현재 `/sample` 페이지는 API 조회/변경 패턴 검증을 위한 테스트 화면입니다.

### 조회

- API 함수: `src/api/sample/getCustomers.ts`
- Query 훅: `src/queries/sample/useSampleCustomersQuery.ts`
- 요청: `GET /customers`

### 등록

- API 함수: `src/api/sample/insertCustomer.ts`
- Mutation 훅: `src/queries/sample/useInsertSampleCustomerMutation.ts`
- 요청: `POST /customers`

### 화면 동작

`SampleApiPage.tsx`는 아래를 수행합니다.

- 마운트 시 고객 목록 조회
- 조회 성공 시 응답을 `JSON.stringify(..., null, 2)`로 화면 출력
- `샘플 고객 1건 INSERT` 버튼 클릭 시 임의 고객 1건 등록
- 등록 성공 시 `invalidateQueries`로 고객 목록 재조회
- 조회 실패 시 에러 정보를 JSON 형태로 표시

## 8. API 타입 정리 방식

샘플 API 기준으로 응답 타입도 분리해두었습니다.

파일:

- `src/api/sample/types.ts`

포함 타입:

- `SampleCustomer`
- `GetSampleCustomersResponse`
- `InsertSampleCustomerRequest`
- `InsertSampleCustomerResponse`

이 패턴은 이후 실제 도메인 API 구현 시 그대로 확장하는 것을 권장합니다.

## 9. 환경 변수

현재 `.env`에 아래 값이 설정되어 있습니다.

```env
VITE_API_BASE_URL=http://localhost:8080
```

프론트 API 호출은 기본적으로 이 주소를 기준으로 동작합니다.

## 10. Zustand 적용 범위

현재 스켈레톤에는 Vue.js의 Vuex와 유사한 역할을 하는 전역 상태관리 예시로 Zustand를 최소 범위만 도입했습니다.

현재 store에서 검증하는 항목:

- 현재 선택된 도메인 키

현재 확인 가능한 동작:

- `AppNav`에서 버튼을 클릭하면 선택된 도메인 키가 전역 store에 저장됨
- 각 페이지에 배치된 `SelectedDomainStatus`가 같은 값을 즉시 읽어 표시함
- 하나의 상태값이 여러 컴포넌트에서 공유된다는 점을 화면에서 직접 확인 가능

현재 단계에서는 서버 응답 데이터는 Zustand에 저장하지 않으며, 계속 TanStack Query가 담당합니다.

## 11. 실행 방법

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

기본적으로 Vite 개발 서버는 `5173` 포트를 사용합니다.

## 12. 샘플 API 테스트 서버

현재 샘플 API 페이지는 별도 테스트 서버와 연동됩니다.

테스트 서버 정보:

- 별도 디렉토리: `../test-server`
- 기본 포트: `8080`
- 샘플 엔드포인트:
  - `GET /customers`
  - `POST /customers`

프론트 `/sample` 페이지를 검증하려면 테스트 서버가 실행 중이어야 합니다.

## 13. 스켈레톤 범위와 보류한 항목

현재 스켈레톤은 아래까지를 범위로 봅니다.

- 공통 기술 스택
- 라우팅 구조
- Zustand 기반 전역 UI 상태 샘플
- 공통 API client
- Query 연결 구조
- 샘플 조회/등록 흐름

아래 항목은 실서비스 구현 단계에서 결정하는 것을 전제로 보류했습니다.

- 공통 레이아웃 구조 확정
- 대규모 도메인별 route 분리
- 인증/권한 처리
- 디자인 시스템
- 전역 로딩 UX 방식
- 실제 도메인별 API 명세
- 도메인별 전역 상태 구조 확정
- Zustand persist/devtools 적용 여부

## 14. 현재 코드 패턴 요약

실서비스 구현 시 현재 스켈레톤은 아래 패턴을 기준으로 확장하는 것을 권장합니다.

1. 라우트는 `src/routes/routeConfig.ts`에서 관리
2. 공통 UI는 `src/components` 아래에 위치
3. 화면은 `src/pages` 아래에 위치
4. API 호출 함수는 `src/api/<domain>` 아래에 위치
5. TanStack Query 훅은 `src/queries/<domain>` 아래에 위치
6. 전역 UI 상태는 `src/store` 아래에 위치
7. API 응답/요청 타입은 `src/api/<domain>/types.ts`에 위치

## 15. 현재 상태 요약

이 저장소는 “실서비스 구현 전 검증 가능한 프론트엔드 스켈레톤” 수준까지 정리된 상태입니다.

특히 아래가 이미 검증되었습니다.

- 라우트 기반 화면 이동
- lazy loading 구조
- Axios 공통 client
- TanStack Query 조회/등록 패턴
- Zustand 전역 상태 공유 패턴
- 서버 데이터 재조회 흐름
- 샘플 API를 통한 실제 백엔드 연동
