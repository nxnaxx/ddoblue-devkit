# apps/nest

NestJS Sample App

`@ddoblue/*` Preset이 실제 프로젝트 환경에서 정상적으로 동작하는지 검증하기 위한 앱입니다.

> 해당 앱은 기능 개발 목적이 아닌 **Lint / TypeScript / Prettier / Markdown config 실행 검증 환경**입니다.

## Purpose

해당 앱의 목적은 다음을 검증하는 것입니다:

- ESLint 규칙이 Node / Nest 환경에서 정상적으로 동작하는가
- TypeScript 설정이 decorator 기반 구조에서 문제없이 적용되는가
- Prettier와 ESLint 간 충돌 없이 포맷팅이 이루어지는가
- Node(CommonJS) 환경에서 설정이 깨지지 않는가
- Markdown lint가 `.md` 파일 린트를 제대로 수행하는가

## Tech Stack

- NestJS
- TypeScript
- ESLint (Flat Config)
- Prettier

## Presets Used

```text
@ddoblue/eslint-config/presets/nest
@ddoblue/tsconfig/nest.json
@ddoblue/prettier-config
@ddoblue/markdown-lint
```

## Structure

```text
src/
├─ common/         # 공통 설정
└─ modules/        # feature
```

## Scripts

```bash
$ pnpm lint        # ESLint check
$ pnpm lint:md     # Markdown check
$ pnpm format      # Prettier check
$ pnpm type-check  # TypeScript check
```

## Notes

- 규칙 검증을 위해 의도된 에러 코드를 작성할 수 있습니다.
- 해당 앱은 preset 검증용이므로 비즈니스 로직 추가를 지양합니다.
- 테스트 코드는 검증 후 제거하거나 별도로 관리할 수 있습니다.
