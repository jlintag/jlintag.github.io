import React from 'react'
import { render, screen } from 'react-dom'
import WorkSection from './WorkSection'

describe('WorkSection', () => {
  it('renders heading', () => {
    render(<WorkSection/>)
    const heading = screen.getByText(/Job Title/i)
  })
})
