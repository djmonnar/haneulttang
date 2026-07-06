interface Props {
  className?: string
  /** 접근성 라벨. 장식용일 때는 생략 (aria-hidden 처리) */
  label?: string
}

/**
 * 백년가업 낙관(전통 도장) 심볼.
 * 실제 간판의 붉은 낙관 "百年家業"을 SVG로 옮긴 브랜드 마크.
 * 헤더 · 푸터 · 인터루드 등에서 공통 사용.
 */
export default function BrandSeal({ className = '', label }: Props) {
  return (
    <svg
      className={`brand-seal ${className}`}
      viewBox="0 0 64 64"
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <rect x="1.5" y="1.5" width="61" height="61" rx="9" fill="#A63A2A" />
      <rect
        x="5.5"
        y="5.5"
        width="53"
        height="53"
        rx="5.5"
        fill="none"
        stroke="rgba(247, 240, 228, 0.5)"
        strokeWidth="1.6"
      />
      <g
        fill="#F7F0E4"
        fontFamily="'Noto Serif KR', 'Nanum Myeongjo', serif"
        fontSize="21"
        fontWeight="600"
        textAnchor="middle"
      >
        <text x="19.5" y="29">百</text>
        <text x="44.5" y="29">年</text>
        <text x="19.5" y="54">家</text>
        <text x="44.5" y="54">業</text>
      </g>
    </svg>
  )
}
