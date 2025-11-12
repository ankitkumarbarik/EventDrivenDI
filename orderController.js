export class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }

    create(req, res) {
        // initial logic
        const order = this.orderService.createOrder(req.body);
        return res.json({ message: order });
    }
}
