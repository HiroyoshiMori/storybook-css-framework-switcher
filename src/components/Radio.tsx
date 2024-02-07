import React, {
  Fragment,
} from "react";
import { styled } from "@storybook/theming";

type Props = {
  value: string|number|readonly string[];
  checked?: boolean;
  disabled?: boolean;
  setValue: (v: string|number|readonly string[]) => void;
};

export const Radio = ({value, setValue, checked = false, disabled = false}: Props) => {
  return (
    <Fragment>
      <Container>
        <StyledInput
          type='radio'
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={({target: {value}}) => {
            setValue(value);
          }}
        />
      </Container>
    </Fragment>
  );
};

export const Container = styled.div`
  display: flex;
`;
export const StyledInput = styled.input`
  :hover {
      cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`;
