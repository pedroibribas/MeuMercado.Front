import { MarketList } from "../../shared/models/market-list";

export const MOCKED_MARKET_LIST: MarketList = {
    id: Math.random().toString(),
    userId: Math.random().toString(),
    createdAt: new Date().toISOString(),
    products: [
      {
        id: "1",
        isSelected: false,
        isPending: true,
        name: "Desinfetante 500ml",
        brand: "Ypê",
        amount: "2"
      },
      {
        id: "2",
        isSelected: true,
        isPending: true,
        name: "Banana Nanica",
        brand: "",
        amount: "1kg"
      },
      {
        id: "3",
        isSelected: false,
        isPending: true,
        name: "Banana",
        brand: "",
        amount: "1kg"
      },
      {
        id: "4",
        isSelected: false,
        isPending: true,
        name: "Desinfetante 500ml",
        brand: "Ypê",
        amount: "2"
      },
      {
        id: "5",
        isSelected: true,
        isPending: true,
        name: "Banana Nanica",
        brand: "",
        amount: "1kg"
      },
      {
        id: "6",
        isSelected: false,
        isPending: true,
        name: "Banana",
        brand: "",
        amount: "1kg"
      }
    ]
  };