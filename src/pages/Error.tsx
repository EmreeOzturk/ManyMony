import { useRouteError } from "react-router-dom"

type ErrorType = {
  statusText: string
  status: number
  message: string
}

const Error = () => {
  const error: ErrorType = useRouteError() as ErrorType
  console.log({ error })
  return (
    <div
      className="error"
    >
      <h1>Oops! Something went wrong</h1>
      <p>{error?.statusText || error?.status || error.message}</p>
    </div>
  )
}

export default Error