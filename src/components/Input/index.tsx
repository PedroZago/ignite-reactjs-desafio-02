import * as S from './styles';
import * as T from './types';

export const Input = ({
  value,
  isOptional = false,
  width,
  ...props
}: T.InputProps) => {
  return (
    <S.InputContainer value={value} isOptional={isOptional} width={width}>
      <S.Input type="text" value={value} {...props} />
    </S.InputContainer>
  );
};
