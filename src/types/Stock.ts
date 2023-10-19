import Entity from './Entity'

export default interface Stock extends Entity {
  itemName: string
  quantity: number
  minStockLevel: number
}

export const stockData: Stock[] = [
  {
    id: 1,
    itemName: 'Produto 1',
    quantity: 50,
    minStockLevel: 10,
  },
  {
    id: 2,
    itemName: 'Produto 2',
    quantity: 35,
    minStockLevel: 15,
  },
  {
    id: 3,
    itemName: 'Produto 3',
    quantity: 20,
    minStockLevel: 8,
  },
  {
    id: 4,
    itemName: 'Produto 4',
    quantity: 42,
    minStockLevel: 12,
  },
  {
    id: 5,
    itemName: 'Produto 5',
    quantity: 60,
    minStockLevel: 18,
  },
  {
    id: 6,
    itemName: 'Produto 6',
    quantity: 25,
    minStockLevel: 7,
  },
  {
    id: 7,
    itemName: 'Produto 7',
    quantity: 38,
    minStockLevel: 9,
  },
  {
    id: 8,
    itemName: 'Produto 8',
    quantity: 47,
    minStockLevel: 20,
  },
  {
    id: 9,
    itemName: 'Produto 9',
    quantity: 55,
    minStockLevel: 14,
  },
  {
    id: 10,
    itemName: 'Produto 10',
    quantity: 30,
    minStockLevel: 6,
  },
  {
    id: 11,
    itemName: 'Produto 11',
    quantity: 22,
    minStockLevel: 11,
  },
  {
    id: 12,
    itemName: 'Produto 12',
    quantity: 42,
    minStockLevel: 13,
  },
  {
    id: 13,
    itemName: 'Produto 13',
    quantity: 33,
    minStockLevel: 9,
  },
  {
    id: 14,
    itemName: 'Produto 14',
    quantity: 48,
    minStockLevel: 10,
  },
  {
    id: 15,
    itemName: 'Produto 15',
    quantity: 28,
    minStockLevel: 5,
  },
  {
    id: 16,
    itemName: 'Produto 16',
    quantity: 36,
    minStockLevel: 8,
  },
  {
    id: 17,
    itemName: 'Produto 17',
    quantity: 31,
    minStockLevel: 6,
  },
  {
    id: 18,
    itemName: 'Produto 18',
    quantity: 50,
    minStockLevel: 15,
  },
  {
    id: 19,
    itemName: 'Produto 19',
    quantity: 40,
    minStockLevel: 12,
  },
  {
    id: 20,
    itemName: 'Produto 20',
    quantity: 45,
    minStockLevel: 11,
  },
]
