import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstname: string,
  lastname: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstname, lastname, cpf);
};

const createEnterpriseCustomer = (
  firstname: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(firstname, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastname and cpf', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut).toHaveProperty('firstname', 'Luiz');
    expect(sut).toHaveProperty('lastname', 'Otávio');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Luiz', 'Otávio', '111.111');
    expect(sut.getName()).toBe('Luiz Otávio');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have firstname and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut).toHaveProperty('firstname', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222');
  });

  it('should have methods to get firstname and idn for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Udemy', '222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222');
  });
});
