import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
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
  var checkbox = screen.getByTestId('terms-of-service-checkbox')

  fireEvent.click(checkbox)

  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('green')
})

test('should update text color when checkbox is checked and not checked', () => {
  render(<Terms />)
  var checkbox = screen.getByTestId('terms-of-service-checkbox')

  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('black')

  fireEvent.click(checkbox)
  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('green')

  fireEvent.click(checkbox)
  expect(screen.getByTestId('terms-of-service-text').style.color).toBe('black')
})
