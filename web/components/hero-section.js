import React from 'react'

const HeroSection = ({
  title,
  workplace,
  start,
  end,
}) => {
    return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <p>{title} {workplace} {start} {end}</p>
      </div>
    </section>
    )
}

export default HeroSection;
