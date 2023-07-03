import * as S from './styles';
import * as T from './types';

export const SelectPaymentMode = ({
  icon,
  isSelected,
  label,
  onClick,
  ...props
}: T.SelectPaymentModeProps) => {
  return (
    <S.SelectPaymentModeContainer
      {...props}
      type="button"
      isSelected={isSelected}
      onClick={onClick}
    >
      <S.IconContainer>{icon}</S.IconContainer>

      <S.Text>{label}</S.Text>
    </S.SelectPaymentModeContainer>
  );
};
