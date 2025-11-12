# ⚡ EventDrivenDI — Node.js Event-Driven & Dependency Injection Architecture  

![Node.js](https://img.shields.io/badge/Node.js-Event--Driven-green?style=flat&logo=node.js)  
![JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=flat&logo=javascript)  
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## 🚀 Overview

**EventDrivenDI** is a small Node.js project that demonstrates **two core backend architecture patterns**:
1️⃣ **Dependency Injection (DI)** — for structured, maintainable code  
2️⃣ **Event-Driven Architecture** — using Node’s built-in `EventEmitter` module  

This project shows how both patterns can achieve modular communication between services —  
but with **different levels of coupling and scalability.**

---

## 🧠 Key Concepts

### 💡 Dependency Injection (DI)
Classes receive their dependencies via constructors, promoting cleaner code and better testability.  

Example:
```js
class OrderService {
  constructor(emailService, inventoryService) {
    this.emailService = emailService;
    this.inventoryService = inventoryService;
  }
}
```

**Pros:** Clean, predictable, easy to test  
**Cons:** Still a bit coupled — classes know each other

---

### ⚡ EventEmitter (Event-Driven)
Uses Node’s inbuilt `node:events` module for asynchronous, decoupled communication.

Example:
```js
import EventEmitter from "events";

const eventBus = new EventEmitter();

eventBus.on("orderCreated", (data) => console.log("📧 Email sent for", data.product));
eventBus.on("orderCreated", (data) => console.log("📦 Inventory updated for", data.product));

eventBus.emit("orderCreated", { product: "iPad 11th Gen" });
```

**Pros:** Modular, decoupled, async-friendly  
**Cons:** Flow tracing becomes harder in large systems

---

## 🧩 Why Both Matter
| Pattern | Use Case | Coupling | Scalability |
|----------|-----------|-----------|-------------|
| **Dependency Injection** | Small APIs, structured apps | Loose | Medium |
| **EventEmitter** | Async, modular systems | Very Loose | High |
| **Message Brokers (Kafka / RabbitMQ)** | Distributed microservices | Minimal | Very High |

---

## ⚙️ Installation & Setup

1️⃣ Clone the repo  
```bash
git clone https://github.com/ankitkumarbarik/EventDrivenDI.git
cd EventDrivenDI
```

2️⃣ Install dependencies (if any)  
```bash
pnpm install
```

3️⃣ Run the app  
```bash
pnpm dev
```

---

## 🧰 Folder Structure
```
EventDrivenDI/
├── orderController.js
├── orderService.js
├── emailService.js
├── inventoryService.js
├── eventDrivenExample.js
├── server.js
└── README.md
```

---

## 🧠 Learning Outcome
✅ Understand how **Dependency Injection** improves structure  
✅ Learn how **EventEmitter** creates fully decoupled communication  
✅ See how both patterns can coexist in real-world Node.js systems  

---

## ⚡ Performance Notes
- **DI** → Direct calls → ⚡ Fastest but coupled  
- **EventEmitter** → In-memory pub/sub → ⚡ Fast & async  
- **Kafka / RabbitMQ** → Networked event system → ⚙️ Slightly slower but reliable  

---

## 🧩 Future Enhancements
- Add **Redis Pub/Sub** demo for cross-process communication  
- Integrate **Kafka** for distributed event handling  
- Visualize event flow with console logs or a simple dashboard  

---

## 🧑‍💻 Author
**Ankit Barik**  

📬 Connect with me on [LinkedIn](https://linkedin.com/in/ankitkumarbarik)  

---

## 🪪 License
This project is licensed under the **MIT License** — feel free to use and modify.  

---

⭐ **If you found this project useful, consider giving it a star!**
