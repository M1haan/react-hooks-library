import { renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { Handler } from './useClickAway'
import { useClickAway } from './useClickAway'

describe('useClickAway', () => {
  let handler: Handler
  let element: HTMLDivElement
  let ref: React.RefObject<HTMLDivElement | null>

  beforeEach(() => {
    handler = vi.fn()
    element = document.createElement('div')
    ref = { current: element }

    document.body.appendChild(element)
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.clearAllMocks()
  })

  it('should call handler when clicking outside', () => {
    renderHook(() => useClickAway(ref, handler))

    const outsideElement = document.createElement('button')
    document.body.appendChild(outsideElement)

    outsideElement.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('should not call handler when clicking inside', () => {
    renderHook(() => useClickAway(ref, handler))

    element.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))

    expect(handler).not.toHaveBeenCalled()
  })

  it('should cleanup event listeners on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(document, 'removeEventListener')

    const { unmount } = renderHook(() => useClickAway(ref, handler))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledTimes(2)
    expect(removeEventListenerSpy).toHaveBeenCalledWith('mousedown', expect.any(Function))
    expect(removeEventListenerSpy).toHaveBeenCalledWith('touchstart', expect.any(Function))
  })
})
