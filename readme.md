# Haeiny Official Site

Haeiny의 음악, 뮤직비디오와 공식 SNS를 소개하는 사이트입니다.

React + Vite + TypeScript + CSS Modules를 사용합니다.

## 로컬 실행

Node.js 24에서 실행합니다.

```bash
npm ci
npm run dev
```

## 빌드 및 미리보기

```bash
npm run build
npm run preview
```

## 파일 구성

- `src/components/`: 헤더, LP판, 곡 소개, 아티스트 소개 등 화면 컴포넌트
- `src/data/`: 아티스트 정보와 트랙·SNS 링크
- `src/assets/`: 앨범 자켓과 아티스트 사진
- `src/styles/`: 전역 공통 스타일
- `*.module.css`: 각 컴포넌트의 스타일

## 배포

저장소 Settings → Pages → Source를 **GitHub Actions**로 설정합니다.
`main`에 push하면 `.github/workflows/deploy.yml`이 빌드 후 배포합니다.

사이트: https://haeiny-cloud.github.io/haeiny_official_site/

저장소 이름이나 배포 경로를 바꾸면 `vite.config.ts`의 `base`도 수정하세요.
