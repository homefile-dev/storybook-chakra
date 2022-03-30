export interface IInput {
  errorMessage?: string
  id: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  placeholder: string;
  value: string;
}