import React from 'react'
import { screen, render,logDOM } from '@testing-library/react'
import WorkSection from './WorkSection'

describe('WorkSection', () => {
  it('renders heading', () => {
    render(<WorkSection/>)
    const heading = screen.getByText(/Users/i)
    expect(heading).toBeInTheDocument();
  })
})
