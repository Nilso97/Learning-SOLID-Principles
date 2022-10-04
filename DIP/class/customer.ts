import {
  ICustomerOrder,
  IEnterpriseCustomerProtocol,
  IIndividualCustomerProtocol,
} from "./interfaces/customer-protocol";

export class IndividualCustomer
  implements IIndividualCustomerProtocol, ICustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastname: string, cpf: string) {
    (this.firstName = firstName), (this.lastName = lastname), (this.cpf = cpf);
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIdn(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements IEnterpriseCustomerProtocol, ICustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    (this.name = name), (this.cnpj = cnpj);
  }

  getName(): string {
    return this.cnpj;
  }

  getIdn(): string {
    return this.cnpj;
  }
}
