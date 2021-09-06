import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Terms from './Terms'

test('should renders a message and checkbox', () => {
  render(<Terms />)
  expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  expect(screen.getByText('Accept terms')).toBeInTheDocument()
  expect(screen.getByTestId('terms-of-service-text')).toBeInTheDocument()
})

test('should keep text color black when checkbox is not checked', () => {
  render(<Terms />)
  var checkbox = screen.getByText('Accept terms')

  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('black')
  expect(checkbox).not.toBeChecked()
})

test('should change text color when checkbox is checked', () => {
  render(<Terms />)
  var checkbox = screen.getByRole('checkbox', { name: /Accept terms/i })

  userEvent.click(checkbox)

  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('green')
})

test('should update text color when checkbox is checked and not checked', () => {
  render(<Terms />)
  var checkbox = screen.getByRole('checkbox', { name: /Accept terms/i })
  var text = screen.getByTestId('terms-of-service-text')

  expect(text.style.color).toBe('black')

  userEvent.click(checkbox)
  expect(text.style.color).toBe('green')

  userEvent.click(checkbox)
  expect(text.style.color).toBe('black')
})
