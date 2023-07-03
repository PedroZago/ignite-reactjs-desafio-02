import * as S from './styles';
import * as T from './types';

export const Button = ({ text, onClick, ...props }: T.ButtonProps) => {
  return (
    <S.ButtonContainer {...props} type="submit" onClick={onClick}>
      <S.Text>{text}</S.Text>
    </S.ButtonContainer>
  );
};
