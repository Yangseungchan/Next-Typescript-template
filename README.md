# NextJS + Typescript 템플릿

## 템플릿 기능 소개

본 템플릿은 아래의 기술 스택들을 포함하고 있습니다.

- `NextJS`
- `TypeScript`
- `ESLint & Prettier` (+ 저장 시 포맷 자동 적용)
- `Emotion`
- `Husky`(커밋 전 포맷 체크)

템플릿에 대한 자세한 설명은 본 [포스트](https://velog.io/@seungchan__y/NextJS-Typescript-%ED%85%9C%ED%94%8C%EB%A6%BF)를 참고하시길 바랍니다.

## Node 버전

`node 16.13.1`

## 템플릿 맞춤 IDE

`vscode`

## 실행 방법

### npm 모듈 설치

```tsx
npm install
```

### 개발환경에서 실행

```tsx
npm run dev
```

## 포맷 관련 명령어

```bash
npm run check-types # Typescript에 대해 타이핑 체크

npm run check-format # prettier로 포맷팅 체크

npm run check-lint  # eslint로 포맷팅 체크

npm run format  # prettier로 포맷팅 수정

npm run test-all # 앞의 4개명령어 + build 실행

npm run prepare # husky 설정 적용
```

## 브랜치 설명

- `typescript` - 타입스크립트 부분까지 적용된 부분입니다.
- `eslint` - ESLint 부분까지 적용된 부분입니다.
- `prettier` - prettier 부분까지 적용된 부분입니다.
- `format` - 저장시 포맷이 되는 부분까지 적용된 부분입니다.
- `husky` - Husky 부분까지 적용된 부분입니다.
- `emotion` - Emotion 부분까지 적용된 부분입니다.
- `directory` - Directory 구조 변경 부분까지 적용된 부분입니다.
