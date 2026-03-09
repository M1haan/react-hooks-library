import type { Meta, StoryObj } from '@storybook/react'
import { useRef, useState } from 'react'
import { useClickAway } from './useClickAway'

const ModalDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useClickAway(modalRef, () => {
    if (isOpen) {
      setIsOpen(false)
    }
  })

  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        minHeight: '400px',
        position: 'relative',
      }}
    >
      <h2
        style={{
          margin: '0 0 20px 0',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span>🔲</span> useClickAway - Модальное окно
      </h2>

      <button
        onClick={() => setIsOpen(true)}
        type="button"
        style={{
          padding: '12px 24px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Открыть модальное окно
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
        >
          <div
            ref={modalRef}
            style={{
              background: 'white',
              padding: '32px',
              borderRadius: '12px',
              maxWidth: '400px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
              position: 'relative',
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                color: '#666',
              }}
            >
              ✕
            </button>

            <h3 style={{ margin: '0 0 16px 0' }}>Модальное окно</h3>
            <p style={{ margin: '0 0 24px 0', color: '#666' }}>
              Кликните вне этого окна, чтобы закрыть его. Хук useClickAway отслеживает клики вне
              элемента.
            </p>

            <div
              style={{
                padding: '12px',
                background: '#f8f9fa',
                borderRadius: '6px',
                fontSize: '14px',
                color: '#495057',
              }}
            >
              🔍 Попробуйте кликнуть вне этого окна
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const DropdownDemo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickAway(dropdownRef, () => {
    setIsOpen(false)
  })

  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        minHeight: '300px',
      }}
    >
      <h2
        style={{
          margin: '0 0 20px 0',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span>📋</span> useClickAway - Выпадающее меню
      </h2>

      <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          style={{
            padding: '12px 24px',
            background: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{isOpen ? '▼' : '▶'}</span>
          {isOpen ? 'Закрыть меню' : 'Открыть меню'}
        </button>

        {isOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              marginTop: '8px',
              background: 'white',
              border: '1px solid #dee2e6',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              minWidth: '200px',
              zIndex: 100,
            }}
          >
            {['Профиль', 'Настройки', 'Помощь', 'Выйти'].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  alert(`Выбрано: ${item}`)
                  setIsOpen(false)
                }}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '14px',
                  borderBottom: '1px solid #f1f3f5',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f8f9fa'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'none'
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: '40px',
          padding: '16px',
          background: '#f8f9fa',
          borderRadius: '8px',
          fontSize: '14px',
          color: '#666',
        }}
      >
        <p style={{ margin: '0 0 8px 0' }}>
          <strong>📌 Как это работает:</strong>
        </p>
        <ul style={{ margin: '0', paddingLeft: '20px' }}>
          <li>Кликните на кнопку, чтобы открыть меню</li>
          <li>Кликните вне меню, чтобы закрыть его</li>
          <li>Хук автоматически добавляет и удаляет слушатели событий</li>
        </ul>
      </div>
    </div>
  )
}

const TooltipDemo = () => {
  const [isVisible, setIsVisible] = useState(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useClickAway(tooltipRef, (event) => {
    if (buttonRef.current?.contains(event.target as Node)) {
      return
    }
    setIsVisible(false)
  })

  return (
    <div
      style={{
        padding: '24px',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        minHeight: '200px',
      }}
    >
      <h2
        style={{
          margin: '0 0 20px 0',
          color: '#333',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span>💡</span> useClickAway - Тултип
      </h2>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          ref={buttonRef}
          onClick={() => setIsVisible(!isVisible)}
          type="button"
          style={{
            padding: '12px 24px',
            background: '#17a2b8',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Показать подсказку
        </button>

        {isVisible && (
          <div
            ref={tooltipRef}
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginTop: '12px',
              padding: '16px',
              background: '#17a2b8',
              color: 'white',
              borderRadius: '8px',
              fontSize: '14px',
              minWidth: '250px',
              boxShadow: '0 4px 12px rgba(23, 162, 184, 0.3)',
              zIndex: 100,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-6px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderBottom: '8px solid #17a2b8',
              }}
            />

            <p style={{ margin: '0 0 8px 0', fontWeight: 'bold' }}>🎯 Полезная подсказка</p>
            <p style={{ margin: '0', fontSize: '12px', opacity: 0.9 }}>
              Этот тултип закроется, если кликнуть вне его области. Клик по кнопке не закрывает его.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const meta = {
  title: 'Hooks/useClickAway',
  component: ModalDemo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Хук для отслеживания кликов вне указанного элемента. Полезно для модальных окон, выпадающих меню и тултипов.',
      },
    },
  },
} satisfies Meta<typeof ModalDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {
  render: () => <ModalDemo />,
}

export const Dropdown: Story = {
  render: () => <DropdownDemo />,
}

export const Tooltip: Story = {
  render: () => <TooltipDemo />,
}

export const WithMultipleRefs: Story = {
  render: function WithMultipleRefs() {
    const [activeBox, setActiveBox] = useState<number | null>(null)
    const box1Ref = useRef<HTMLDivElement>(null)
    const box2Ref = useRef<HTMLDivElement>(null)
    const box3Ref = useRef<HTMLDivElement>(null)

    useClickAway(box1Ref, () => {
      if (activeBox === 1) setActiveBox(null)
    })

    useClickAway(box2Ref, () => {
      if (activeBox === 2) setActiveBox(null)
    })

    useClickAway(box3Ref, () => {
      if (activeBox === 3) setActiveBox(null)
    })

    return (
      <div style={{ padding: '24px', fontFamily: 'system-ui, sans-serif' }}>
        <h3>📦 Несколько элементов</h3>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Кликните на бокс - он активируется. Кликните вне его - деактивируется.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          {[1, 2, 3].map((num) => {
            // const ref = num === 1 ? box1Ref : num === 2 ? box2Ref : box3Ref
            const isActive = activeBox === num
            const colors = ['#007bff', '#28a745', '#dc3545']

            return (
              <button
                key={Date.now()}
                onClick={() => setActiveBox(num)}
                type="button"
                style={{
                  width: '150px',
                  height: '150px',
                  background: isActive ? colors[num - 1] : '#f8f9fa',
                  border: `3px solid ${colors[num - 1]}`,
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  color: isActive ? 'white' : '#333',
                }}
              >
                <span style={{ fontSize: '32px', marginBottom: '8px' }}>
                  {isActive ? '✓' : '□'}
                </span>
                <span>Бокс {num}</span>
                {isActive && <span style={{ fontSize: '12px', marginTop: '8px' }}>(активен)</span>}
              </button>
            )
          })}
        </div>
      </div>
    )
  },
}
