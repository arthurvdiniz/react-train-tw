import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Terms from './Terms'

test('Should renders a message and checkbox', () => {
  const { container, getByText, getByDisplayValue } = render(<Terms />)
  expect(getByText('Terms of Service')).toBeInTheDocument()
  expect(getByDisplayValue('Accept terms of service')).toBeInTheDocument()
})

test('should keep text color black when checkbox is not checked', () => {
  const { container, getByText, getByDisplayValue } = render(<Terms />)
  var checkbox = getByDisplayValue('Accept terms of service')

  expect(getByText('Terms of Service').style.color).toBe('black')
  expect(checkbox).not.toBeChecked()
})

test('should change text color when checkbox is checked', () => {
  const { container, getByText, getByDisplayValue } = render(<Terms />)
  var checkbox = getByDisplayValue('Accept terms of service')

  fireEvent.click(checkbox)

  expect(getByText('Terms of Service').style.color).toBe('red')
})