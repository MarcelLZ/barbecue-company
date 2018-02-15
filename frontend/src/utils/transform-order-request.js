export default orders => {
  let mergedItems = {}
  for (let i in orders) {
    let company = orders[i].company
    let description = orders[i].description
    let quantity = orders[i].quantity

    let added = mergedItems.hasOwnProperty(company) && mergedItems[company]

    if (added) {
      mergedItems[company].push({ description, quantity })
    } else {
      mergedItems[company] = [{ description, quantity }]
    }
  }

  let mergedOrders = []
  for (let key in mergedItems) {
    mergedOrders.push({
      company: key,
      items: mergedItems[key]
    })
  }

  return mergedOrders
}
