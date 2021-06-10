import PostPreview from '../components/post-preview'

export default function MoreSections({ sections }) {
  const count = sections.length ?? 0;
  return (
    <section>
      <div>{count}</div>
    </section>
  )
}
