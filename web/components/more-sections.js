const MoreSections = ({ sections }) => {

  const count = sections.length ?? 0;
  return (
    <section>
      <div>{count}</div>
    </section>
  )
}

export default MoreSections;

