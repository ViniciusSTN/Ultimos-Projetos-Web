import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstname: string;
  lastname: string;
  cpf: string;
  cnpj: string;

  constructor(firtname: string, lastname: string, cpf: string) {
    this.lastname = lastname;
    this.cpf = cpf;
    this.firstname = firtname;
    this.cnpj = '';
  }

  getName(): string {
    return this.firstname + ' ' + this.lastname;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  firstname: string;
  cnpj: string;

  constructor(firstname: string, cnpj: string) {
    this.firstname = firstname;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.firstname;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
