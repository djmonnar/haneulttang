interface Props {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  /** 어두운 배경 섹션 위에서 사용할 때 true */
  onDark?: boolean
}

export default function SectionHeading({
  title,
  description,
  align = 'center',
  onDark = false,
}: Props) {
  return (
    <div
      className={`section-heading section-heading--${align} ${
        onDark ? 'section-heading--dark' : ''
      }`}
    >
      <h2 className="section-heading__title">{title}</h2>
      <span className="section-heading__line" aria-hidden="true" />
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  )
}
