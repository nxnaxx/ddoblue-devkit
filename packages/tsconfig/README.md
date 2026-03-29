# @ddoblue/tsconfig

여러 프로젝트에서 일관된 타입 정책과 실행 환경을 적용하기 위한 공통 tsconfig 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/tsconfig
```

## Usage

프로젝트의 `tsconfig.json`에서 다음과 같이 사용합니다.

```json
{
  "extends": "@ddoblue/tsconfig/react.json"
}
```

## Configuration

### base.json

TypeScript 타입 정책의 기준이 되는 설정입니다.

- strict mode 활성화
- 안전한 타입 옵션 기본 적용
- emit 비활성화 (type-check only)
- modern module syntax 유지

### react.json

React 환경을 위한 프리셋입니다.

- DOM 환경 지원
- ES module 기반 (Bundler)
- JSX 변환
- 전역 타입 차단

대상: React App (Vite, SPA) / UI 컴포넌트 패키지 / Frontend 공통 모듈

### next.json

Next.js App Router 환경을 위한 프리셋입니다.

- react 프리셋 기반 확장
- JSX 변환 비활성화
- TypeScript emit 비활성화
- Next plugin 연결

대상: Next.js App

### node.json

Node.js 런타임 환경을 위한 프리셋입니다.

- `NodeNext` module resolution
- Node 전역 타입 제공
- 브라우저 API 제외 (순수 서버 환경)
- type-check only (`noEmit`)

대상: Backend 서버, 서버사이드 공통 패키지

### nest.json

NestJS를 위한 프리셋입니다.

- node 프리셋 기반 확장
- 데코레이터 문법 활성화
- 런타임 metadata 생성

대상: NestJS App

> reflect-metadata 런타임 의존성이 필요합니다.

### library.json

배포용 라이브러리를 위한 프리셋입니다.

- 타입 선언 파일(`.d.ts`) 생성
- JS 번들은 외부 도구(tsup, rollup 등)에서 처리
- 내부 API 숨김 (`stripInternal`)

대상: UI 라이브러리, util 패키지, hooks, SDK 등

## Rules

- base = 타입 정책
- preset = 실행 환경
- App preset은 emit 금지
- library만 declaration 생성

## Philosophy

- 환경별 preset 분리
- 타입 안정성을 기본값으로 적용
- 타입/런타임/빌드 역할 분리

## License

ISC
