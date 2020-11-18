import CardAssociation from '../model/CardAssociation';
import CardType from '../model/CardType';
import InstallmentPrice from './dto/InstallmentPrice';

type SearchInstallmentsResponse = {
  binNumber: string;
  price: number;
  cardType: CardType;
  cardAssociation: CardAssociation;
  cardBrand: string;
  bankName: string;
  bankCode: number;
  force3ds: boolean;
  commercial: boolean;
  installmentPrices: InstallmentPrice[];
};

export default SearchInstallmentsResponse;