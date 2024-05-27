import { Link, useRouteError, useNavigate } from "react-router-dom";

type ErrorType = {
  statusText: string;
  status: number;
  message: string;
};

const BudgetDetailError = () => {
  const navigate = useNavigate();
  const error: ErrorType = useRouteError() as ErrorType;
  console.log({ error });
  return (
    <div className="text-zinc-300 text-center flex items-center justify-center flex-col gap-4 h-screen w-screen bg-zinc-900">
      <h1>
            We're sorry, but we can't find the budget you're looking for.
      </h1>
      <div className="flex gap-4">
        <button
          className="
            text-white
            bg-indigo-500
            px-4
            py-2
            rounded-md
            hover:bg-indigo-600
            transition
            duration-200
            "
          onClick={() => navigate(-1)}
        >
          <span>Go back</span>
        </button>
        <Link
          to="/"
          className="
            text-white
            bg-indigo-500
            px-4
            py-2
            rounded-md
            hover:bg-indigo-600
            transition
            duration-200
        "
        >
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};

export default BudgetDetailError;
