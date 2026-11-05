interface Props {
  eyebrow: string
  title: string
  description?: string
}

/** 서브 페이지 상단 히어로 밴드 */
export default function PageHero({ title, description }: Props) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1 className="page-hero__title">{title}</h1>
        {description && <p className="page-hero__desc">{description}</p>}
      </div>
    </section>
  )
}
