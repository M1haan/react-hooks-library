import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

interface User {
  id: number
  name: string
  email: string
}

const AsyncDemo = () => {
  const [data, setData] = useState<User[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      await new Promise((resolve) => setTimeout(resolve, 1500))
      if (!response.ok) throw new Error('Failed to fetch')
      const result = await response.json()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'))
    } finally {
      setLoading(false)
    }
  }

  const reset = () => {
    setData(null)
    setError(null)
    setLoading(false)
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>useAsync Demo</h2>

      <div style={{ marginBottom: '20px' }}>
        <button
          type="button"
          onClick={fetchUsers}
          disabled={loading}
          style={{
            padding: '10px 20px',
            background: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            marginRight: '10px',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Loading...' : 'Fetch Users'}
        </button>

        {data && (
          <button
            type="button"
            onClick={reset}
            style={{
              padding: '10px 20px',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        )}
      </div>

      {loading && <div style={{ color: '#666' }}>Loading data...</div>}

      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}

      {data && (
        <div>
          <h3>Users ({data.length})</h3>
          <ul>
            {data.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

const meta = {
  title: 'Hooks/useAsync',
  component: AsyncDemo,
  tags: ['autodocs'],
} satisfies Meta<typeof AsyncDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <AsyncDemo />,
}
