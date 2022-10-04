export interface ICustomerOrder {
  getName(): string;
  getIdn(): string;
}

export interface IIndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface IEnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
