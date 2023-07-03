import { zodResolver } from '@hookform/resolvers/zod';
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as zod from 'zod';

import { Button, CartItem, Input, SelectPaymentMode } from '../../components';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../interfaces';
import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

export interface ProductFormatted extends Product {
  subTotal: string;
}

const addressFormValidationSchema = zod.object({
  zipCode: zod.string(),
  address: zod.string(),
  number: zod.number(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  federativeUnit: zod.string(),
});

export type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export const Checkout = () => {
  const navigate = useNavigate();

  const { cart, cleanCart } = useCart();

  const newCycleForm = useForm<AddressFormData>({
    resolver: zodResolver(addressFormValidationSchema),
    defaultValues: {
      zipCode: '',
      address: '',
      number: 0,
      complement: '',
      neighborhood: '',
      city: '',
      federativeUnit: '',
    },
  });
  const { handleSubmit, reset } = newCycleForm;

  const [paymentMode, setPaymentMode] = useState('');

  const cartFormatted: ProductFormatted[] = cart.map(product => ({
    ...product,
    subTotal: (product.price * product.amount).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    }),
  }));

  const shippingPrice = 3.5;

  const total = cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount;

    return sumTotal;
  }, 0);

  const handleFinishInvoice = (data: AddressFormData) => {
    console.log(data);
    reset();
    cleanCart();
    navigate('/success');
  };

  return (
    <S.CheckoutContainer>
      <S.Form onSubmit={handleSubmit(handleFinishInvoice)}>
        <S.Content>
          <S.LeftContent>
            <S.SectionTitle>Complete seu pedido</S.SectionTitle>

            <S.LeftCardsWrapper>
              <S.LeftCard>
                <S.CardTitleContent>
                  <MapPinLine size={22} color={defaultTheme['yellow-dark']} />

                  <S.TitlesWrapper>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                  </S.TitlesWrapper>
                </S.CardTitleContent>

                <S.InputsContainer>
                  <S.InputItem>
                    <Input placeholder="CEP" width={200} />
                  </S.InputItem>

                  <S.InputItem>
                    <Input placeholder="Rua" width={560} />
                  </S.InputItem>

                  <S.InputItem>
                    <Input placeholder="Número" width={200} />

                    <Input placeholder="Complemento" isOptional width={348} />
                  </S.InputItem>

                  <S.InputItem>
                    <Input placeholder="Bairro" width={200} />

                    <Input placeholder="Cidade" width={276} />

                    <Input placeholder="UF" width={60} />
                  </S.InputItem>
                </S.InputsContainer>
              </S.LeftCard>

              <S.LeftCard>
                <S.CardTitleContent>
                  <CurrencyDollar size={22} color={defaultTheme.purple} />

                  <S.TitlesWrapper>
                    <h3>Pagamento</h3>
                    <p>
                      O pagamento é feito na entrega. Escolha a forma que deseja
                      pagar
                    </p>
                  </S.TitlesWrapper>
                </S.CardTitleContent>

                <S.SelectPaymentModeButton>
                  <SelectPaymentMode
                    label="Cartão de crédito"
                    icon={<CreditCard size={16} color={defaultTheme.purple} />}
                    onClick={() => setPaymentMode('credit-card')}
                    isSelected={paymentMode === 'credit-card'}
                  />

                  <SelectPaymentMode
                    label="cartão de débito"
                    icon={<Bank size={16} color={defaultTheme.purple} />}
                    onClick={() => setPaymentMode('debit-card')}
                    isSelected={paymentMode === 'debit-card'}
                  />

                  <SelectPaymentMode
                    label="dinheiro"
                    icon={<Money size={16} color={defaultTheme.purple} />}
                    onClick={() => setPaymentMode('cash')}
                    isSelected={paymentMode === 'cash'}
                  />
                </S.SelectPaymentModeButton>
              </S.LeftCard>
            </S.LeftCardsWrapper>
          </S.LeftContent>

          <S.RightContent>
            <S.SectionTitle>Cafés selecionados</S.SectionTitle>

            <S.RightCard>
              {cartFormatted.map(product => (
                <div key={product.id}>
                  <CartItem product={product} />

                  <S.Divider />
                </div>
              ))}

              <S.InfoContainer>
                <S.InfoItem>
                  <S.TextRegular>Total de itens</S.TextRegular>

                  <S.TextRegular>
                    R${' '}
                    {total.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </S.TextRegular>
                </S.InfoItem>

                <S.InfoItem>
                  <S.TextRegular>Entrega</S.TextRegular>

                  <S.TextRegular>
                    R${' '}
                    {shippingPrice.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </S.TextRegular>
                </S.InfoItem>

                <S.InfoItem>
                  <S.TextBold>Total</S.TextBold>

                  <S.TextBold>
                    R${' '}
                    {(total + shippingPrice).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                    })}
                  </S.TextBold>
                </S.InfoItem>
              </S.InfoContainer>

              <Button text="Confirmar pedido" />
            </S.RightCard>
          </S.RightContent>
        </S.Content>
      </S.Form>
    </S.CheckoutContainer>
  );
};
