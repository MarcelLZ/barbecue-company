export const success = (response, code = 200) => payload =>
  response.status(code).json(payload)

export const notFound = response => payload => {
  if (payload) return payload

  response
    .status(404)
    .end()

  return null
}

export const error = response => error =>
  response.status(500).json({ message: error.message })
