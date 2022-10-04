"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCustomer = exports.IndividualCustomer = void 0;
class IndividualCustomer {
    constructor(firstName, lastname, cpf) {
        (this.firstName = firstName), (this.lastName = lastname), (this.cpf = cpf);
    }
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getIdn() {
        return this.cpf;
    }
}
exports.IndividualCustomer = IndividualCustomer;
class EnterpriseCustomer {
    constructor(name, cnpj) {
        (this.name = name), (this.cnpj = cnpj);
    }
    getName() {
        return this.cnpj;
    }
    getIdn() {
        return this.cnpj;
    }
}
exports.EnterpriseCustomer = EnterpriseCustomer;
