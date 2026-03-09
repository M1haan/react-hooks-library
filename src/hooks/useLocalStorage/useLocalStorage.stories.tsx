import type { Meta, StoryObj } from '@storybook/react'
import { useLocalStorage } from './useLocalStorage'

const LocalStorageDemo = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('demo-theme', 'light')
  const [name, setName] = useLocalStorage('demo-name', 'John Doe')

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>💾 useLocalStorage Demo</h2>

      <div
        style={{
          padding: '20px',
          background: theme === 'dark' ? '#333' : '#f5f5f5',
          color: theme === 'dark' ? '#fff' : '#333',
          borderRadius: '8px',
          marginBottom: '20px',
          border: '1px solid #ddd',
          transition: 'all 0.3s ease',
        }}
      >
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <p>
          Name: <strong>{name}</strong>
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          type="button"
          style={{
            padding: '10px 20px',
            background: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Toggle Theme
        </button>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />
      </div>

      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666', fontStyle: 'italic' }}>
        🔄 Значения сохраняются в localStorage. Попробуй обновить страницу!
      </p>
    </div>
  )
}

const meta = {
  title: 'Hooks/useLocalStorage',
  component: LocalStorageDemo,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Хук для синхронизации состояния с localStorage',
      },
    },
  },
} satisfies Meta<typeof LocalStorageDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
