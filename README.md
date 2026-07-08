# 백년가업 하늘땅 — 공식 홈페이지

진해 숯불갈비 전문점 "백년가업 하늘땅 본점"의 기업형 브랜드 사이트입니다.
React + TypeScript + Vite 기반의 다중 페이지(SPA) 구조입니다.

- **운영 주소**: https://하늘땅.com (`https://xn--wh1bu4c029b.com`)

## 실행

```bash
npm install
npm run dev      # 개발 서버 (기본 5173 포트)
npm run build    # 배포용 빌드 → dist/
```

## 배포

Vercel CLI로 배포합니다 (`vercel.json`에 SPA 라우팅 설정 포함):

```bash
npx vercel deploy --prod --yes
```

## 콘텐츠 수정 가이드 (코드 지식 불필요)

| 수정할 내용 | 파일 |
| --- | --- |
| 전화번호·영업시간·대표자·사업자번호·주차 안내 | `src/data/store.ts` |
| 메뉴 추가·가격 변경 | `src/data/menu.ts` |
| 선물세트 상품 | `src/data/gifts.ts` |
| 공지/소식 게시글 | `src/data/news.ts` |

- 가격을 `null`로 두면 "가격 문의"로 표시됩니다.
- `[확인 필요]`로 표시된 값은 실제 정보 확정 후 교체하세요.

## 사진 교체

`public/images/` 아래에 정해진 파일명으로 사진을 넣으면 코드 수정 없이 자동 표시됩니다.
(파일이 없으면 placeholder가 표시됩니다.) 경로 목록: `public/images/README.md`

## 페이지 구조

| 경로 | 페이지 |
| --- | --- |
| `/` | 메인 |
| `/brand` | 하늘땅 이야기 |
| `/menu` | 메뉴 안내 |
| `/space` | 공간 안내 |
| `/butchery` | 정육·육가공 |
| `/gift` | 선물세트 |
| `/reservation` | 단체예약 |
| `/business` | 브랜드 문의 |
| `/location` | 오시는 길 |
| `/news` | 소식/공지 |

## 추후 연동 지점

- **카카오톡 채널**: `src/data/store.ts`의 `kakaoChannelUrl` 교체
- **예약 폼**: `src/pages/Reservation.tsx` — 현재 UI만 동작, 카카오톡/네이버 예약 연동 예정
- **브랜드 문의 폼**: `src/pages/Business.tsx` — 메일 발송 또는 폼 서비스 연동 예정
- **커스텀 도메인**: Vercel 프로젝트 설정에서 연결 후 `robots.txt`, `sitemap.xml`, `index.html`의 URL 교체
