export interface ICustomerOrder {
  getName(): string;
  getIdn(): string;
}

// Não há necessidade de ter uma Interface geral para implementar...
export interface ICustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
  cnpj: string;
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
