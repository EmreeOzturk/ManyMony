import DeleteBudgetModal from "@/src/components/budgetDetail/DeleteBudgetModal";
import EditBudgetModal from "@/src/components/budgetDetail/EditBudgetModal";
import BackToHome from "@/src/components/header/BackToHome";
import { Models } from "appwrite";
import { Banana, ChevronLeft, ChevronRight } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/src/components/ui/pagination";
import TransactionTableRow from "@/src/components/dashboard/transactions/TransactionTableRow";
import { Button } from "@/src/components/ui/button";
// budget has name, limit, usage, category, expenses

type BudgetType = {
  name: string;
  limit: number;
  usage: number;
  category: string;
  expenses: Models.Document[];
};

const BudgetDetail = () => {
  const budget = useLoaderData() as BudgetType;
  const [page, setPage] = useState(1);
  console.log(budget);
  return (
    <div className="h-screen w-screen relative flex flex-col items-center justify-center">
      <BackToHome url="/dashboard" text="Go Dashboard" />
      <div className="h-[90%] px-10 py-10 [perspective:1000px] relative flex flex-col m-auto w-full  items-start justify-start ">
        <div className="flex gap-2 flex-col justify-between items-start w-full overflow-hidden relative h-full rounded-2xl p-4 text-xl md:text-4xl font-bold text-zinc-300 bg-zinc-900">
          <div className="flex w-full gap-2 flex-1">
            <div className="flex flex-col gap-2 w-full ">
              <div className="flex justify-between gap-2">
                <div className="w-1/2 flex flex-col items-start gap-4">
                  <div className="flex justify-between">
                    <div className="flex justify-center items-center gap-2">
                      <Banana className="h-12 w-12 border rounded-full p-1.5" />
                      <span>{budget?.name}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="font-bold">Limit: </span>
                        <span>{budget?.limit}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="font-bold">Usage: </span>
                        <span>
                          ${budget.usage} ={" "}
                          {((budget.usage / budget.limit) * 100).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2">
                        <span className="font-bold">Category: </span>
                        <span className="font-bold">{budget.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-end text-xl gap-2">
                    <EditBudgetModal />
                    <DeleteBudgetModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full h-96">
            <div className="absolute bottom-5 right-0 left-0 flex justify-center items-center w-full">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <Button
                      disabled={page === 1}
                      className="flex justify-between items-center"
                      variant="ghost"
                      onClick={() => {
                        setPage(page - 1);
                      }}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous</span>
                    </Button>
                  </PaginationItem>
                  {[...Array(2)].map(
                    (_, index) => {
                      return (
                        <PaginationItem key={index}>
                          <Button
                            className="flex justify-between items-center"
                            onClick={() => {
                              setPage(index + 1);
                            }}
                            variant={page === index + 1 ? "outline" : "ghost"}
                          >
                            {index + 1}
                          </Button>
                        </PaginationItem>
                      );
                    }
                  )}
                  <PaginationItem>
                    <Button
                      disabled={
                        page === Math.ceil(budget.expenses?.length / 10)
                      }
                      className="flex justify-between items-center"
                      variant="ghost"
                      onClick={() => {
                        setPage(page + 1);
                      }}
                    >
                      <span>Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Budget Name</TableHead>
                  <TableHead className="text-right">Category</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>

              {/* <TableBody>
                {budget?.expenses
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((transaction, index) => (
                    <TransactionTableRow
                      key={transaction.id}
                      date={new Date(transaction.date).toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      name={transaction.name}
                      category={transaction.category}
                      amount={transaction.amount}
                      index={index}
                      Icon={<Banana />}
                      id={transaction.id}
                      budgetId={transaction.budgetId}
                      usage={transaction.usage}
                    />
                  ))}
              </TableBody> */}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetDetail;
