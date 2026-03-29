# @ddoblue/tsconfig

일관된 타입 정책과 실행 환경을 적용하기 위한 공유 TypeScript 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/tsconfig
```

## Usage

프로젝트의 `tsconfig.json`에서 아래와 같이 사용합니다.

```json
{
  "extends": "@ddoblue/tsconfig/react.json"
}
```

프로젝트 특성에 따라 일부 설정을 확장하여 사용할 수 있습니다.

```json
{
  "extends": "@ddoblue/tsconfig/react.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## Configuration

### base.json

TypeScript 타입 정책의 기준이 되는 설정입니다.

- strict mode 활성화
- 안전한 타입 옵션 기본 적용
- emit 비활성화

> 모든 preset의 기반이 되는 설정입니다.

### react.json

React 환경을 위한 프리셋입니다.

- DOM 환경 지원
- ES module 기반 (Bundler)
- JSX transform (`react-jsx`)
- 전역 타입 자동 주입 차단

```json
{
  "extends": "@ddoblue/tsconfig/react.json"
}
```

### next.json

Next.js 환경을 위한 preset입니다.

- react preset 기반 확장
- JSX transform 비활성화
- Next.js 타입 플러그인 연동

```json
{
  "extends": "@ddoblue/tsconfig/next.json"
}
```

### node.json

Node.js 런타임 환경을 위한 preset입니다.

- Node.js 환경에 맞는 모듈 시스템 적용
- emit 활성화

```json
{
  "extends": "@ddoblue/tsconfig/node.json"
}
```

### nest.json

NestJS 환경을 위한 preset입니다.

- node preset 기반 확장
- decorator 문법 활성화
- DI를 위한 runtime metadata 생성

```json
{
  "extends": "@ddoblue/tsconfig/nest.json"
}
```

### library.json

배포용 라이브러리를 위한 preset입니다.

- 타입 선언 파일(`.d.ts`) 생성
- JS 번들은 외부 빌드 도구(tsup, rollup 등)에서 처리
- 내부 API 숨김 (`stripInternal`)

```json
{
  "extends": "@ddoblue/tsconfig/library.json"
}
```

## Configuration Strategy

- 역할 기반 분리:
  - base → 타입 정책
  - preset → 실행 환경
- 실행 환경별 전략:
  - App preset은 emit 금지 (type-check only)
  - library만 declaration 생성
- 암묵적 any 및 unsafe 패턴 최소화

## License

ISC
