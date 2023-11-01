// será usada em order para não precisar fazer if para saber se é pessoa fisica ou jurídica
export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstname: string;
  lastname: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  firstname: string;
  cnpj: string;
}
