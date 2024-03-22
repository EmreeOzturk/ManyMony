import { Link, useRouteError, useNavigate } from "react-router-dom"

type ErrorType = {
  statusText: string
  status: number
  message: string
}

const Error = () => {
  const navigate = useNavigate()
  const error: ErrorType = useRouteError() as ErrorType
  console.log({ error })
  return (
    <div
      className="error"
    >
      <h1>Oops! Something went wrong</h1>
      <p>{error?.statusText || error?.status || error.message}</p>
      <div className="flex-md">
        <button className="btn btn--dark" onClick={
          () => navigate(-1)
        }>
          <span>Go back</span>
        </button>
        <Link to="/" className="btn btn--dark"><span>Go home</span></Link>
      </div>
    </div>
  )
}

export default Error