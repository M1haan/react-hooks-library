import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import React from 'react'

global.React = React

afterEach(() => {
  cleanup()
})