"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterpriseCustomer = exports.IndividualCustomer = void 0;
class IndividualCustomer {
    constructor(firstName, lastName, cpf) {
        (this.firstName = firstName), (this.lastName = lastName), (this.cpf = cpf);
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
        return this.name;
    }
    getIdn() {
        return this.cnpj;
    }
}
exports.EnterpriseCustomer = EnterpriseCustomer;
