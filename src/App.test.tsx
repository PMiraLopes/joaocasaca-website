import React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import App from './App'

describe('<App>', () => {
  beforeEach(() => {
    render(<App />)
  })

  afterEach(cleanup)
  it('should render the App container', () => {
    expect(screen.getByTestId('appContainer')).toBeTruthy()
  })
})
