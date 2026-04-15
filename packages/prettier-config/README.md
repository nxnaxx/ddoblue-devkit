# @ddoblue/prettier-config

일관된 코드 스타일을 유지하기 위한 공유 Prettier 설정입니다.

## Installation

```bash
pnpm add -D @ddoblue/prettier-config
```

## Usage

프로젝트 루트에 `prettier.config.mjs` 파일을 생성하고 아래와 같이 설정합니다.

```js
import config from '@ddoblue/prettier-config';

export default config;
```

프로젝트 특성에 따라 일부 옵션을 override할 수 있습니다.

```js
import config from '@ddoblue/prettier-config';

export default {
  ...config,
  printWidth: 120,
};
```

## Configuration Strategy

### Base Options

- `printWidth: 100`
- `tabWidth: 2`
- `semi: true`
- `singleQuote: true`
- `trailingComma: "all"`
- `arrowParens: "always"`
- `endOfLine: "lf"`

### Overrides

파일 특성에 맞게 일부 포맷 규칙을 조정합니다.

- Markdown (`*.md`)
  - printWidth 80으로 제한하여 가독성 향상
- JSONC (`*.jsonc`)
  - trailing comma 제거하여 파싱 안정성 확보

## Notes

ESLint와 함께 사용할 경우, `eslint-config-prettier`를 통해 충돌을 제거하는 것을 권장합니다.

## Requirements

- Prettier ^3.0.0

## License

MIT
