export const getStatusFromInvoice = (invoice) => {
  const dueDate = new Date(invoice.dueDate)
  let status
  if (invoice.paid) {
    status = 'paid'
  } else {
    const today = new Date().setHours(0, 0, 0, 0)
    if (dueDate.getTime() < today) {
      status = 'overdue'
    } else {
      status = 'unpaid'
    }
  }
  return status
}

export const getTotalAmountFromInvoice = (invoice) => {
  const total = invoice.items.reduce((acc, ele) => acc + ele.amount, 0)
  return total
}
