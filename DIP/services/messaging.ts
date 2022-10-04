import { IMessagingProtocol } from "../class/interfaces/messaging-protocol";

export class Messaging implements IMessagingProtocol {
  sendMessage(msg: string): void {
    console.log(`message sendt: ${msg}`);
  }
}
