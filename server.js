import express from "express";
import { OrderController } from "./orderController.js";
import { EmailService } from "./emailService.js";
import { InventoryService } from "./inventoryService.js";
import { OrderService } from "./orderService.js";

const app = express();
app.use(express.json());
const PORT = process.env.PORT;

const emailService = new EmailService();
const inventoryService = new InventoryService();
const orderService = new OrderService();
const orderController = new OrderController(orderService);

// register event listeners
orderService.on('order:created', (orderData) => emailService.sendEmail(orderData));
orderService.on('order:created', (orderData) => inventoryService.updateInventory(orderData));

app.post("/orders", (req, res) => orderController.create(req, res));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
