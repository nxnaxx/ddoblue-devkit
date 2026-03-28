# 🛠️ ddoblue Devkit

여러 프로젝트에서 일관된 개발 환경과 코드 품질을 유지하기 위한 공유 설정 패키지 모음입니다.

## Overview

ESLint, Prettier, TypeScript 등의 설정을 재사용 가능한 형태로 제공하여 프로젝트마다 반복되는 환경 구성을 줄이고 동일한 기준으로 코드를 관리할 수 있도록 돕습니다.

| package                    | description                    |
| :------------------------- | :----------------------------- |
| `@ddoblue/eslint-config`   | ESLint Flat Config 기반 preset |
| `@ddoblue/prettier-config` | 코드 포맷팅 규칙               |
| `@ddoblue/tsconfig`        | TypeScript strict preset       |
| `@ddoblue/markdown-lint`   | Markdown 문서 품질 관리        |

필요에 따라 config를 조합하여 사용하거나 별도 preset을 import하여 바로 사용할 수 있습니다.

## Usage

각 패키지는 개별적으로 설치하여 사용할 수 있습니다.\
프로젝트 환경에 맞게 선택적으로 조합하여 사용합니다.

### ESLint

```bash
$ pnpm add -D eslint @ddoblue/eslint-config
```

```js
// eslint.config.mjs
import next from '@ddoblue/eslint-config/presets/next-strict';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...next,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
```

### Prettier

```bash
$ pnpm add -D prettier @ddoblue/prettier-config
```

```js
// prettier.config.js or prettier.config.mjs
import config from '@ddoblue/prettier-config';

export default config;
```

### TypeScript

```bash
$ pnpm add -D @ddoblue/tsconfig
```

```jsonc
// tsconfig.json
{
  "extends": "@ddoblue/tsconfig/next.json",
}
```

### Markdownlint

```bash
$ pnpm add -D markdownlint-cli2 @ddoblue/markdown-lint
```

```jsonc
// .markdownlint.jsonc
{
  "extends": "@ddoblue/markdown-lint",
}
```

## Structure

```text
apps/                # preset 동작 검증용 Sample App
├─ nest/
├─ next/
└─ react/

packages/            # 배포 패키지
├─ eslint-config/
├─ prettier-config/
├─ tsconfig/
└─ markdown-lint/
```

### apps

샘플 앱을 통해 실제 환경에서 설정을 검증합니다.

- ESLint rule 정상 동작 여부
- TypeScript strict 설정 검증
- Prettier 충돌 여부 확인
- 다양한 런타임 환경 대응 확인

### eslint-config

- Flat Config 기반
- Type-aware lint 지원
- 네이밍 규칙 강제
- Prettier와의 충돌 제거

### prettier-config

- Prettier를 통한 일관된 포맷 유지

### tsconfig

- strict mode 기본 적용
- 실행 환경별 preset 제공(react / next / node / nest / library)

### markdown-lint

- Markdown lint로 문서 품질 관리

## Versioning

Changesets 기반으로 버전을 관리합니다.

- breaking change → major
- rule 추가 → minor
- 내부 수정 → patch
