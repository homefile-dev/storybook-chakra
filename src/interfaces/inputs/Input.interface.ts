export interface IInput {
  errorMessage?: string
  id: string;
  isDisabled?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder: string;
  value: string;
}