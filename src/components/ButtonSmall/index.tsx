import * as S from './styles';
import * as T from './types';

export const ButtonSmall = ({
  text,
  icon,
  onClick,
  ...props
}: T.ButtonSmallProps) => {
  return (
    <S.ButtonSmallContainer {...props} type="button" onClick={onClick}>
      <S.IconContainer>{icon}</S.IconContainer>

      <S.Text>{text}</S.Text>
    </S.ButtonSmallContainer>
  );
};
