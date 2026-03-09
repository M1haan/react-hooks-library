import type { Meta, StoryObj } from '@storybook/react'
import { useDebounce } from './useDebounce'
import { useState, useEffect } from 'react'

const DebounceDemo = () => {
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)
    const [searchResults, setSearchResults] = useState<string[]>([])

    useEffect(() => {
        if (debouncedSearch) {
            setSearchResults([
                `📱 Результат 1 для "${debouncedSearch}"`,
                `💻 Результат 2 для "${debouncedSearch}"`,
                `⚡ Результат 3 для "${debouncedSearch}"`,
            ])
        } else {
            setSearchResults([])
        }
    }, [debouncedSearch])

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>⏱️ useDebounce Demo</h2>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="🔍 Поиск..."
                    style={{
                        padding: '12px',
                        width: '100%',
                        maxWidth: '400px',
                        borderRadius: '8px',
                        border: '2px solid #007bff',
                        fontSize: '16px',
                        outline: 'none'
                    }}
                />
            </div>

            <div style={{
                padding: '20px',
                background: '#f5f5f5',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #ddd'
            }}>
                <p>Немедленное значение: <strong>"{search || '(пусто)'}"</strong></p>
                <p>Debounced (500ms): <strong>"{debouncedSearch || '(пусто)'}"</strong></p>
            </div>

            {searchResults.length > 0 && (
                <div>
                    <h3 style={{ marginBottom: '10px' }}>Результаты поиска:</h3>
                    <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        background: '#e8f4fd',
                        borderRadius: '8px',
                    }}>
                        {searchResults.map((result, index) => (
                            <li key={index} style={{
                                padding: '8px 0',
                                borderBottom: index < searchResults.length - 1 ? '1px solid #007bff33' : 'none'
                            }}>
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

const meta = {
    title: 'Hooks/useDebounce',
    component: DebounceDemo,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Хук для дебаунсинга значения с задержкой',
            },
        },
    },
} satisfies Meta<typeof DebounceDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}