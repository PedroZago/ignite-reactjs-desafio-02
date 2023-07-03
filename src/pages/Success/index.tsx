import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';

import motorcycle from '../../assets/motorcycle.svg';
import { InfoItem } from '../../components';
import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

export const Success = () => {
  const infoItems = [
    {
      id: 1,
      text: 'Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS',
      icon: <MapPin weight="fill" size={16} color={defaultTheme.white} />,
      circleBackgroundColor: defaultTheme.purple,
    },
    {
      id: 2,
      text: (
        <S.InfoItemTextWrapper>
          <S.InfoItemText>Previsão de entrega</S.InfoItemText>
          <S.InfoItemTextBold>20 min - 30 min</S.InfoItemTextBold>
        </S.InfoItemTextWrapper>
      ),
      icon: <Timer weight="fill" size={16} color={defaultTheme.white} />,
      circleBackgroundColor: defaultTheme.yellow,
    },
    {
      id: 3,
      text: (
        <S.InfoItemTextWrapper>
          <S.InfoItemText>Pagamento na entrega</S.InfoItemText>
          <S.InfoItemTextBold>Cartão de Crédito</S.InfoItemTextBold>
        </S.InfoItemTextWrapper>
      ),
      icon: (
        <CurrencyDollar weight="regular" size={16} color={defaultTheme.white} />
      ),
      circleBackgroundColor: defaultTheme['yellow-dark'],
    },
  ];

  return (
    <S.SuccessContainer>
      <S.Content>
        <S.TitlesWrapper>
          <h1>Uhu! Pedido confirmado</h1>

          <p>Agora é só aguardar que logo o café chegará até você</p>
        </S.TitlesWrapper>

        <S.InvoiceDetailsWrapper>
          <S.InvoiceDetails>
            {infoItems.map(infoItem => (
              <InfoItem
                key={infoItem.id}
                text={infoItem.text}
                icon={infoItem.icon}
                circleBackgroundColor={infoItem.circleBackgroundColor}
              />
            ))}
          </S.InvoiceDetails>

          <S.Banner>
            <img src={motorcycle} alt="" title="Logo" />
          </S.Banner>
        </S.InvoiceDetailsWrapper>
      </S.Content>
    </S.SuccessContainer>
  );
};
