# @ddoblue/prettier-config

여러 프로젝트에서 일관된 코드 스타일을 유지하기 위한 공유 Prettier 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/prettier-config
```

## Usage

프로젝트 루트에 `prettier.config.mjs` 파일을 생성하고 `@ddoblue/prettier-config` 패키지를 추가합니다.

```js
import config from '@ddoblue/prettier-config';

export default config;
```

## Configuration

### Base Options

- `printWidth: 100`
- `tabWidth: 2`
- `semi: true`
- `singleQuote: true`
- `trailingComma: "all"`
- `arrowParens: "always"`
- `endOfLine: "lf"`

### Overrides

- Markdown → 줄 길이 및 자동 줄바꿈 최적화

## Philosophy

- 일관성 우선
- 포맷팅에 대한 의사결정 제거
- 도구 역할 분리
  - Prettier → 포맷팅
  - ESLint → 린트 및 아키텍처 규칙

## Requirements

- Prettier v3 이상

## License

ISC
