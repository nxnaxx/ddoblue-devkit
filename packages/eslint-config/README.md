# @ddoblue/eslint-config

일관된 코드 품질을 적용하기 위한 Flat Config 기반 공유 ESLint 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/eslint-config
```

## Usage

프로젝트 환경에 맞는 preset을 선택하여 사용할 수 있습니다.

```js
// eslint.config.mjs
import config from '@ddoblue/eslint-config/presets/react';

export default config;
```

### Presets

| preset                 | description              |
| :--------------------- | :----------------------- |
| `presets/react`        | React App                |
| `presets/react-strict` | React + boundary rules   |
| `presets/next`         | Next.js App (App Router) |
| `presets/next-strict`  | Next.js + boundary rules |
| `presets/nest`         | NestJS                   |
| `presets/library`      | 범용 라이브러리          |

### Examples

#### Library (Default)

```js
import config from '@ddoblue/eslint-config';

export default config;
```

#### React

```js
import config from '@ddoblue/eslint-config/presets/react';

export default config;
```

#### Next.js

```js
import config from '@ddoblue/eslint-config/presets/next';

export default config;
```

#### Nest

```js
import config from '@ddoblue/eslint-config/presets/nest';

export default config;
```

### Configuration

각 config는 역할 단위로 분리되어 있으며 필요에 따라 선택적으로 조합할 수 있습니다.

- `base`: 공통 JavaScript 규칙
- `typescript`: TypeScript 전용 규칙 (type-aware lint)
- `react`: React 규칙
- `next`: Next.js 규칙
- `node`: Node.js 규칙
- `import`: import 정렬 및 path 규칙
- `storybook`: Storybook 환경 규칙
- `prettier`: Prettier와의 ESLint 충돌 제거

```js
import base from '@ddoblue/eslint-config/base';
import typescript from '@ddoblue/eslint-config/typescript';
import imports from '@ddoblue/eslint-config/import';
import react from '@ddoblue/eslint-config/react';

export default [...base, ...typescript, ...imports, ...react];
```

## Configuration Strategy

- ESLint Flat Config 기반 구성
- preset으로 조합된 DX 제공
  - 필요 시 세부 config 단위로 확장 가능
- import 정렬 및 그룹화
- 네이밍 컨벤션 규칙 포함

ESLint는 코드 품질과 구조에 집중하며, formatting 충돌은 prettier config로 제거합니다.

## Notes

### TypeScript

- type-aware lint를 사용하므로 `tsconfig.json` 설정이 필요합니다.
- `projectService` 기반으로 동작하므로 별도의 project 설정은 필요하지 않습니다.

## Requirements

- ESLint >=9

## License

ISC
