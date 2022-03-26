export interface IButton {
    isDisabled?: boolean;
    handleClick?: () => void;
    label: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    variant?: 'primary' | 'secondary';
}
