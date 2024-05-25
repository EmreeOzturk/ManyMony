import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import TransactionTableRow from "./TransactionTableRow";
import { Banana } from "lucide-react";
import { useTransactionData } from "@/src/hooks/useTransactionData";
const Transcations = () => {
  const { recentTransactions } = useTransactionData();
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-zinc-900">
      <Table>
        <TableCaption>A list of your transactions.</TableCaption>
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
          {recentTransactions.map((transaction, index) => (
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
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Transcations;
