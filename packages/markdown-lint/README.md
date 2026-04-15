# @ddoblue/markdown-lint

마크다운 문서 품질 관리를 위한 공유 MarkdownLint 설정입니다.

해당 패키지는 markdownlint 규칙을 JSONC 형태로 제공하며, 각 프로젝트에서 `extends` 방식으로 간단하게 적용할 수 있습니다.

## Installation

```bash
pnpm add -D @ddoblue/markdown-lint
```

## Usage

프로젝트 루트에 `.markdownlint.jsonc` 파일을 생성하고 아래와 같이 설정합니다.

```json
{
  "extends": "@ddoblue/markdown-lint"
}
```

프로젝트 특성에 따라 자유롭게 확장할 수 있습니다.

```json
{
  "extends": "@ddoblue/markdown-lint",
  "MD013": {
    "line_length": 100
  }
}
```

## CLI

`.markdownlint-cli2.*` 파일을 생성합니다.

```js
// .markdownlint-cli2.cjs
module.exports = {
  globs: ['**/*.md'],
  ignores: ['**/node_modules/**', '**/.turbo/**', '**/.next/**'],
};
```

`package.json`에 스크립트를 추가합니다.

```json
{
  "scripts": {
    "lint:md": "markdownlint-cli2",
    "lint:md:fix": "markdownlint-cli2 --fix"
  }
}
```

## Configuration Strategy

### 1. 구조 일관성

문서의 가독성과 유지보수를 위해 구조 관련 규칙을 명확하게 통일합니다.

- ATX 스타일(`##`) heading 강제
- 리스트 스타일(`-`) 통일
- fenced code block 사용
- code fence는 backtick(```)으로 고정
- 테이블 구문 정렬 강제

### 2. 포맷 안정성 강화

자동 포맷팅 및 협업 환경에서 흔히 발생하는 문제를 방지합니다.

- trailing spaces 금지 (strict)
- tab 대신 space 사용
- 테이블 column 정렬 유지
- reference link 및 inline link 사용 규칙 통일

### 3.과도한 제약 제거

일부 규칙은 의도적으로 완화합니다.

- line length 제한 제거
- inline HTML 허용
- heading punctuation 제한 제거
- emphasis를 heading처럼 사용하는 패턴 허용
- 첫 줄 H1 강제하지 않음

## Notes

- 일부 규칙은 자동 수정(`--fix`)이 불가능합니다. (e.g. empty link)

## Requirements

- `markdownlint-cli2` ^0.22.0

## License

MIT
