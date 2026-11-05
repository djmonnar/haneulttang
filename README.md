# 백년가업 하늘땅 — 공식 홈페이지

진해 숯불갈비 전문점 "백년가업 하늘땅 본점"의 기업형 브랜드 사이트입니다.
React + TypeScript + Vite 기반이며, 배포 시 각 페이지의 HTML을 미리 생성합니다. 자바스크립트를 실행하지 않는 검색봇도 본문·링크·메뉴·FAQ를 읽을 수 있습니다. 방문 후의 페이지 이동은 React Router로 처리합니다.

- **운영 주소**: https://하늘땅.com (`https://xn--wh1bu4c029b.com`)

## 실행

```bash
npm install
npm run dev      # 개발 서버 (기본 5173 포트)
npm run build    # 배포용 빌드 → dist/
npm run test:seo # 빌드 결과의 검색 데이터 검증
```

## 배포

GitHub `main` 브랜치에 반영하면 연결된 Vercel 프로젝트에서 자동 배포합니다. `vercel.json`의 경로별 rewrite로 `/menu` 요청에 `menu.html`을 제공하며, 없는 주소는 `404.html`과 HTTP 404로 응답합니다. 모든 경로를 홈으로 보내는 SPA rewrite를 다시 추가하지 마세요. 전역 `cleanUrls`는 네이버 소유권 확인 `.html` 주소까지 리디렉션하므로 사용하지 않습니다.

수동 배포가 필요한 경우:

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
| 자주 묻는 질문과 답변 | `src/data/faqs.ts` |
| 검색 제목·매장 구조화 데이터·사이트맵 경로 | `src/data/seo.ts` |
| 메인 페이지 구성과 문구 | `src/pages/Home.tsx` |
| 메인 페이지 전용 스타일 | `src/pages/Home.css` |

- 가격을 `null`로 두면 "가격 문의"로 표시됩니다.
- `[확인 필요]`로 표시된 값은 실제 정보 확정 후 교체하세요.

## 사진 교체

메인 페이지는 기존 음식·매장 사진을 사용하며, 메뉴는 모바일에서도 세로로 표시합니다. 본문은 고딕체를 사용하고 제목·안내 문구를 짧게 유지합니다. 사진에 보이는 내용을 반복하는 수식어나 출처가 확인되지 않은 후기 요약은 메인에 추가하지 않습니다.

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
| `/reservation` | 네이버 예약·전화 문의 |
| `/business` | 브랜드 문의 |
| `/location` | 오시는 길 |
| `/news` | 소식/공지 |
| `/faq` | 자주 묻는 질문 |

## 추후 연동 지점

- **카카오톡 채널**: `src/data/store.ts`의 `kakaoChannelUrl` 교체
- **네이버 예약**: `src/data/store.ts`의 `naverBookingUrl`에서 예약 링크 관리
- **네이버 지도**: `src/components/NaverMap.tsx`가 메인과 오시는 길에 공통 적용됩니다. 클라이언트 ID와 좌표는 `src/data/store.ts`에서 관리합니다. 네이버 클라우드 Maps의 Web 서비스 URL에 `https://xn--wh1bu4c029b.com`을 등록하고 Dynamic Map 사용을 활성화해야 합니다. 로컬 테스트 시 테스트 주소도 별도로 등록합니다.
- **FAQ 구조화 데이터**: `/faq`에서 화면과 동일한 질문·답변으로 FAQPage와 BreadcrumbList JSON-LD를 생성합니다. 질문을 수정하면 메인 FAQ와 구조화 데이터도 함께 반영됩니다. 검색 결과나 AI 답변 노출을 보장하는 설정은 아닙니다.
- **브랜드 문의 폼**: `src/pages/Business.tsx` — 메일 발송 또는 폼 서비스 연동 예정
- **커스텀 도메인**: `src/data/store.ts`의 `canonicalOrigin`과 `public/robots.txt`, `index.html`, `vercel.json`의 대표 도메인을 함께 확인합니다. 사이트맵은 `src/data/seo.ts`의 경로 목록으로 빌드 때 자동 생성합니다.

## 검색과 AI 검색 관리

- 검색 이름은 `하늘땅 숯불갈비`, 기존 상호는 `백년가업 하늘땅 본점`으로 함께 안내합니다. 별칭은 `src/data/store.ts`에서 관리합니다.
- 메뉴 가격·중량은 `src/data/menu.ts` 한 곳에서 수정합니다. 메뉴 화면, 메뉴 JSON-LD, 메뉴 메타 설명, FAQ 가격 답변에 함께 반영됩니다.
- `scripts/prerender.mjs`가 14개 공개 페이지와 404 페이지를 생성합니다. 빌드는 HTML 본문, 페이지별 canonical, 매장 식별, 메뉴·FAQ 일치, 404 설정을 검사하며 실패하면 배포를 중단합니다.
- `robots.txt`는 검색 크롤러 접근을 허용합니다. 실제 수집 여부는 네이버 서치어드바이저·Google Search Console과 호스팅 로그에서 따로 확인해야 합니다. OAI-SearchBot의 검색 수집과 GPTBot의 학습 수집은 서로 다른 목적입니다.
- 네이버와 Google에 `https://xn--wh1bu4c029b.com/sitemap.xml`을 제출하고 홈·메뉴·FAQ의 재수집을 요청합니다. 소유권 확인 파일은 `public/`에 유지합니다.
- 네이버 스마트플레이스·Google 비즈니스 프로필에도 같은 공식 홈페이지, 주소, 전화번호와 실제 영업 정보를 사용합니다. 이 저장소 수정은 외부 프로필을 변경하지 않습니다.
- FAQ는 방문자에게 실제로 필요한 질문만 추가합니다. 음식점 FAQ 마크업이 Google의 FAQ 리치 결과나 AI 추천을 보장하지는 않습니다. 허위 후기·평점, 근거 없는 수상, AI에 추천을 지시하는 숨은 문구를 넣지 않습니다.

2026-11-05 검색 보강 시 OwnerVista의 최근 저장 진단은 여전히 2026-09-16(runId: `b69c7914-ad6a-4950-b84d-be73736a9edd`)이었습니다. 당시 본문 추출은 `NONE`, 업장 식별은 `AMBIGUOUS`로 미확인 상태입니다. 이번에는 현재 저장소의 공개 정보에 맞춰 본문 사전 렌더링, 상호 별칭 연결, 메뉴·FAQ 데이터 일치를 검증했습니다. AI 추천 증가나 검색 색인 완료를 새로 측정한 결과는 아닙니다.

2026-10-19 메인 정리 시 OwnerVista의 2026-09-16 진단(runId: `b69c7914-ad6a-4950-b84d-be73736a9edd`)을 확인했습니다. 당시 본문 추출과 주요 항목 판정이 완료되지 않아 미확인 내용을 사실로 사용하지 않았습니다. 메뉴·가격·연락처·영업시간과 FAQ는 기존 사이트의 정보를 유지했습니다.
