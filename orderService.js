import { EventEmitter } from "node:events";

export class OrderService extends EventEmitter {
    createOrder(orderData) {
        // create order logic
        // if success

        // emit event
        this.emit("order:created", orderData);

        return { id: Date.now().toString(), ...orderData };
    }
}
