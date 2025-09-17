import { tableSchema } from "@nozbe/watermelondb";

export const OrderSchema = tableSchema({
  name: "orders",
  columns: [
    { name: "order_id", type: "string" },
    { name: "items", type: "string" }, 
    { name: "quantity", type: "number" },
    { name: "total", type: "number" },
    { name: "date", type: "string" },
  ],
});
