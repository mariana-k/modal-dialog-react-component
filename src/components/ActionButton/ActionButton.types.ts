export interface ActionButtonProps {
    onClick: () => void
    /**
     * Button value
     */
    children: React.ReactNode
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary'
}
