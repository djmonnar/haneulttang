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
| 자주 묻는 질문과 답변 | `src/data/faqs.ts` |
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
- **커스텀 도메인**: Vercel 프로젝트 설정에서 연결 후 `robots.txt`, `sitemap.xml`, `index.html`의 URL 교체

2026-10-19 메인 정리 시 OwnerVista의 2026-09-16 진단(runId: `b69c7914-ad6a-4950-b84d-be73736a9edd`)을 확인했습니다. 당시 본문 추출과 주요 항목 판정이 완료되지 않아 미확인 내용을 사실로 사용하지 않았습니다. 메뉴·가격·연락처·영업시간과 FAQ는 기존 사이트의 정보를 유지했습니다.
