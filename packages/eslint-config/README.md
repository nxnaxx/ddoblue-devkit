# @ddoblue/eslint-config

여러 프로젝트에서 일관된 코드 품질을 적용하기 위한 공통 ESLint 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/eslint-config
```

## Usage

### Preset

| Preset                 | 설명                     |
| ---------------------- | ------------------------ |
| `presets/react`        | React 애플리케이션       |
| `presets/react-strict` | React + boundary rules   |
| `presets/next`         | Next.js (App Router)     |
| `presets/next-strict`  | Next.js + boundary rules |
| `presets/node`         | Node.js                  |
| `presets/library`      | 범용 라이브러리          |

#### Basic(Library)

프로젝트의 `eslint.config.mjs`에서 다음과 같이 사용합니다.

```js
import config from '@ddoblue/eslint-config';

export default config;
```

#### Node

```js
import config from '@ddoblue/eslint-config/presets/node';

export default config;
```

#### React

```js
import config from '@ddoblue/eslint-config/presets/react';

export default config;
```

#### Next

```js
import config from '@ddoblue/eslint-config/presets/next';

export default config;
```

## Advanced Usage (Composable)

모든 config는 독립적으로 조합할 수 있습니다.

```js
import base from '@ddoblue/eslint-config/base';
import typescript from '@ddoblue/eslint-config/typescript';
import imports from '@ddoblue/eslint-config/import';
import react from '@ddoblue/eslint-config/react';

export default [...base, ...typescript, ...imports, ...react];
```

## Philosophy

- 각 config는 독립적으로 설계 → 자유롭게 조합 가능
- Flat Config 기반 구성

## Notes

### TypeScript

type-aware lint를 사용하므로 `tsconfig.json`이 필요합니다.

### path alias

TS path alias를 사용하는 경우, 프로젝트에서 다음과 같이 설정합니다:

```js
export default [
  ...config,
  {
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
];
```

## Requirements

- ESLint >=9

## License

ISC
