import Americano from '../assets/Americano.png';
import Arabe from '../assets/Arabe.png';
import CafeComLeite from '../assets/CafeComLeite.png';
import CafeGelado from '../assets/CafeGelado.png';
import Capuccino from '../assets/Capuccino.png';
import ChocolateQuente from '../assets/ChocolateQuente.png';
import Cubano from '../assets/Cubano.png';
import Expresso from '../assets/Expresso.png';
import ExpressoCremoso from '../assets/ExpressoCremoso.png';
import Havaiano from '../assets/Havaiano.png';
import Irlandes from '../assets/Irlandes.png';
import Latte from '../assets/Latte.png';
import Macchiato from '../assets/Macchiato.png';
import Mochaccino from '../assets/Mochaccino.png';

export const getProductImage = (imageName: string): string => {
  switch (imageName) {
    case 'americano':
      return Americano;
    case 'arabe':
      return Arabe;
    case 'cafe_com_leite':
      return CafeComLeite;
    case 'cafe_gelado':
      return CafeGelado;
    case 'capuccino':
      return Capuccino;
    case 'chocolate_quente':
      return ChocolateQuente;
    case 'cubano':
      return Cubano;
    case 'expresso':
      return Expresso;
    case 'expresso_cremoso':
      return ExpressoCremoso;
    case 'havaiano':
      return Havaiano;
    case 'irlandes':
      return Irlandes;
    case 'latte':
      return Latte;
    case 'macchiato':
      return Macchiato;
    case 'mochaccino':
      return Mochaccino;
    default:
      return Expresso;
  }
};
