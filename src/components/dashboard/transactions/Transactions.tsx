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
import TransactionTableRow from "./TransactionTableRow";
import { Banana, ChevronLeft, ChevronRight } from "lucide-react";
import { useTransactionData } from "@/src/hooks/useTransactionData";
import { memo, useState } from "react";
import { Button } from "../../ui/button";
const Transcations = memo(() => {
  const [page, setPage] = useState(1);
  const { recentTransactions } = useTransactionData();
  return (
    <div className="w-full overflow-y-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-zinc-900">
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
            {[...Array(Math.ceil(recentTransactions?.length / 10))].map(
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
                disabled={page === Math.ceil(recentTransactions?.length / 10)}
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

        <TableBody>
          {recentTransactions
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
        </TableBody>
      </Table>
    </div>
  );
});

export default Transcations;
