export const success = (response, code = 200) => payload =>
  response.status(code).json(payload)

export const notFound = response => payload =>
   response.status(404).json(payload)

export const error = response => error =>
  response.status(400).json({ message: error.message })
