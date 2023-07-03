import * as S from './styles';
import * as T from './types';

export const ButtonIcon = ({
  icon,
  backgroundColor,
  backgroundHoverColor,
  onClick,
  ...props
}: T.ButtonIconProps) => {
  return (
    <S.ButtonIconContainer
      {...props}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      type="button"
      onClick={onClick}
    >
      {icon}
    </S.ButtonIconContainer>
  );
};
