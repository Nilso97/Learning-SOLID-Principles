import { IPersistencyProtocol } from "../class/interfaces/persistency-protocol";

export class Persistency implements IPersistencyProtocol {
  saveOrder(): void {
    console.log("order saved successfully...");
  }
}
