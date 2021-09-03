import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Terms from './Terms'

test('Should renders a message and checkbox', () => {
  const { container, getByText, getByTestId } = render(<Terms />)
  expect(getByText('Terms of Service')).toBeInTheDocument()
  expect(getByText('Accept terms')).toBeInTheDocument()
  expect(getByTestId('terms-of-service-text')).toBeInTheDocument()
})

test('should keep text color black when checkbox is not checked', () => {
  const { container, getByText, getByTestId } = render(<Terms />)
  var checkbox = getByText('Accept terms')

  expect(getByTestId('terms-of-service-text').style.color).toBe('black')
  expect(checkbox).not.toBeChecked()
})

test('should change text color when checkbox is checked', () => {
  const { container, getByTestId } = render(<Terms />)
  var checkbox = getByTestId('terms-of-service-checkbox')

  fireEvent.click(checkbox)

  expect(getByTestId('terms-of-service-text').style.color).toBe('green')
})

test('should update text color when checkbox is checked and not checked', () => {
  const { container, getByTestId } = render(<Terms />)
  var checkbox = getByTestId('terms-of-service-checkbox')

  expect(getByTestId('terms-of-service-text').style.color).toBe('black')

  fireEvent.click(checkbox)
  expect(getByTestId('terms-of-service-text').style.color).toBe('green')

  fireEvent.click(checkbox)
  expect(getByTestId('terms-of-service-text').style.color).toBe('black')
})
