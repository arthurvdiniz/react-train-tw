import React from 'react'
import { render } from '@testing-library/react'
import Terms from './Terms'

test('renders a message', () => {
  const { container, getByText } = render(<Terms />)
  expect(getByText('Terms of Service')).toBeInTheDocument()
})
