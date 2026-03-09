import type { Meta, StoryObj } from '@storybook/react'
import { useToggle } from './useToggle'

const ToggleDemo = () => {
    const [isOn, toggle, setOn, setOff] = useToggle(false)

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>🔧 useToggle Demo</h2>

            <div style={{
                padding: '20px',
                background: '#f5f5f5',
                borderRadius: '8px',
                marginBottom: '20px',
                border: '1px solid #ddd'
            }}>
                <p style={{ fontSize: '18px' }}>
                    Current state: <strong>{isOn ? 'ON 🔥' : 'OFF ❄️'}</strong>
                </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                    onClick={toggle}
                    style={{
                        padding: '10px 20px',
                        background: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Toggle
                </button>

                <button
                    onClick={setOn}
                    style={{
                        padding: '10px 20px',
                        background: '#28a745',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Set ON
                </button>

                <button
                    onClick={setOff}
                    style={{
                        padding: '10px 20px',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Set OFF
                </button>
            </div>
        </div>
    )
}

const meta = {
    title: 'Hooks/useToggle',
    component: ToggleDemo,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Хук для управления булевым состоянием (переключатель)',
            },
        },
    },
} satisfies Meta<typeof ToggleDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}