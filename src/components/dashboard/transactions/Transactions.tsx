import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import TransactionTableRow from "./TransactionTableRow";

const Transcations = () => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-zinc-900">
      <Table>
        <TableCaption>A list of your budgets.</TableCaption>
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
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={0}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={1}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Transport"
            category="Fuel"
            amount={100}
            index={2}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Entertainment"
            category="Movies"
            amount={50}
            index={3}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Shopping"
            category="Clothes"
            amount={100}
            index={4}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={5}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Transport"
            category="Fuel"
            amount={100}
            index={6}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Entertainment"
            category="Movies"
            amount={50}
            index={7}
          />
        </TableBody>
      </Table>
    </div>
  );
};

export default Transcations;
