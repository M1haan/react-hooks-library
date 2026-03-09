import React, { useRef, useState } from 'react'
import {
    useToggle,
    useLocalStorage,
    useDebounce,
    useMediaQuery,
    useClickAway,
    useAsync
} from '../../../src'

interface User {
    id: number
    name: string
    email: string
}

function App() {

    const [isVisible, toggleVisibility] = useToggle(false)
    const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light')
    const [search, setSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)
    const isMobile = useMediaQuery('(max-width: 768px)')
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [isDropdownOpen, setDropdownOpen] = useState(false)

    useClickAway(dropdownRef, () => {
        setDropdownOpen(false)
    })

    const fetchUsers = useAsync<User[]>(async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
            throw new Error('Failed to fetch users')
        }
        return response.json()
    })

    return (
        <div style={{
            padding: '2rem',
            background: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
            minHeight: '100vh',
            transition: 'all 0.3s ease'
        }}>
            <h1>🎣 React Hooks Library - Examples</h1>

            <div style={{ display: 'grid', gap: '2rem' }}>
                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>1. useToggle</h2>
                    <button onClick={toggleVisibility}>
                        {isVisible ? 'Hide' : 'Show'} Content
                    </button>
                    {isVisible && <p>This content can be toggled!</p>}
                </section>

                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>2. useLocalStorage</h2>
                    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        Switch to {theme === 'light' ? 'dark' : 'light'} theme
                    </button>
                    <p>Current theme: <strong>{theme}</strong></p>
                </section>

                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>3. useDebounce</h2>
                    <input
                        type="text"
                        placeholder="Type something..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ padding: '0.5rem', width: '300px' }}
                    />
                    <p>Debounced value: <strong>{debouncedSearch}</strong></p>
                </section>

                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>4. useMediaQuery</h2>
                    <p>Mobile view (≤768px): <strong>{isMobile ? 'Yes 📱' : 'No 💻'}</strong></p>
                    <p style={{ fontSize: '0.9rem', color: '#666' }}>Try resizing your window!</p>
                </section>

                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>5. useClickAway</h2>
                    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
                        <button
                            onClick={() => setDropdownOpen(!isDropdownOpen)}
                            style={{ padding: '0.5rem 1rem' }}
                        >
                            Toggle Dropdown
                        </button>
                        {isDropdownOpen && (
                            <div style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                background: '#fff',
                                border: '1px solid #ccc',
                                padding: '1rem',
                                color: '#333',
                                borderRadius: '4px',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                zIndex: 1000
                            }}>
                                Click outside to close
                            </div>
                        )}
                    </div>
                </section>

                <section style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                    <h2>6. useAsync</h2>
                    <button
                        onClick={() => fetchUsers.execute()}
                        disabled={fetchUsers.loading}
                        style={{
                            padding: '0.5rem 1rem',
                            background: fetchUsers.loading ? '#ccc' : '#007bff',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: fetchUsers.loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {fetchUsers.loading ? 'Loading...' : 'Load Users'}
                    </button>

                    {fetchUsers.error && (
                        <p style={{ color: 'red' }}>Error: {fetchUsers.error.message}</p>
                    )}

                    {fetchUsers.data && (
                        <ul style={{ marginTop: '1rem' }}>
                            {fetchUsers.data.map((user) => (
                                <li key={user.id}>
                                    <strong>{user.name}</strong> - {user.email}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </div>
        </div>
    )
}

export default App