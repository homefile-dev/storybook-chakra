export interface IInput {
  errorMessage?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  id: string;
  isDisabled?: boolean;
  placeholder: string;
  value: string;
}