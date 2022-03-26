import { Button } from "@chakra-ui/react";
import { IButton } from "../interfaces/FullButton.interface";

export const FullButton = ({
  isDisabled = false,
  handleClick,
  label,
  size,
  variant,
}: IButton) => {
  return (
       <Button variant={variant} size={size} onClick={handleClick} isDisabled={isDisabled}>
      {label}
    </Button>
  );
};
