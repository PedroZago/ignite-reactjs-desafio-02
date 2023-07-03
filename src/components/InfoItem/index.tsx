import * as S from './styles';
import * as T from './types';

export const InfoItem = ({
  icon,
  text,
  circleBackgroundColor,
}: T.InfoItemProps) => {
  return (
    <S.InfoItemContainer>
      <S.IconContainer circleBackgroundColor={circleBackgroundColor}>
        {icon}
      </S.IconContainer>

      {typeof text === 'string' ? <S.Text>{text}</S.Text> : text}
    </S.InfoItemContainer>
  );
};
