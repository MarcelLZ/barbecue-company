export const success = (response, code = 200) => payload =>
  response.status(code).json(payload)

export const error = (response, code = 500) => error =>
  response.status(code).json({ message: error.message })

export const notFound = response => payload => {
  if (payload) return payload

  response
    .status(404)
    .end()
}
