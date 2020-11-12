import Status from '../model/Status';
import SubMerchantType from '../model/SubMerchantType';

type SubMerchantResponse = {
  id: number;
  status: Status;
  name: string;
  email: string;
  iban: string;
  address: string;
  gsmNumber: string;
  taxOffice: string;
  taxNumber: string;
  contactName: string;
  contactSurname: string;
  identityNumber: string;
  legalCompanyTitle: string;
  subMerchantExternalId: string;
  subMerchantType: SubMerchantType;
};

export default SubMerchantResponse;
