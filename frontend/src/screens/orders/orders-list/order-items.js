const orderItems = items =>
  items.map(item => {
    return `${item.quantity}x ${item.description}, `
  })

export default orderItems
