import { useState } from 'react'

interface Props {
  /** 실제 이미지 경로 (추후 public/images 아래에 파일을 넣으면 자동 표시) */
  src?: string
  /** 이미지가 없을 때 표시할 라벨, 예: "매장 내부 사진 자리" */
  label: string
  /** 가로:세로 비율, 예: "4 / 3" */
  ratio?: string
  className?: string
}

/**
 * 이미지 자리 컴포넌트.
 * src 경로에 실제 파일이 존재하면 이미지를 보여주고,
 * 없으면 고급스러운 placeholder 박스를 보여줍니다.
 * → 추후 public/images 폴더에 사진만 넣으면 코드 수정 없이 교체됩니다.
 */
export default function ImagePlaceholder({
  src,
  label,
  ratio = '4 / 3',
  className = '',
}: Props) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div
      className={`img-frame ${className}`}
      style={{ aspectRatio: ratio }}
      role={showImage ? undefined : 'img'}
      aria-label={label}
    >
      {showImage ? (
        <img src={src} alt={label} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="img-frame__placeholder">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <span>{label}</span>
        </div>
      )}
    </div>
  )
}
