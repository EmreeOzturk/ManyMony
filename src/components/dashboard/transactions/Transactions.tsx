import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import TransactionTableRow from "./TransactionTableRow";
import { Banana, Plane, Wheat, Drama, Shirt } from "lucide-react";

const Transcations = () => {
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
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={0}
            Icon={<Wheat />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={1}
            Icon={<Wheat />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Transport"
            category="Fuel"
            amount={100}
            index={2}
            Icon={<Plane />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Entertainment"
            category="Movies"
            amount={50}
            index={3}
            Icon={<Drama />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Shopping"
            category="Clothes"
            amount={100}
            index={4}
            Icon={<Shirt />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Food"
            category="Groceries"
            amount={200}
            index={5}
            Icon={<Banana />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Transport"
            category="Fuel"
            amount={100}
            index={6}
            Icon={<Plane />}
          />
          <TransactionTableRow
            date="12/12/2021"
            name="Entertainment"
            category="Movies"
            amount={50}
            index={7}
            Icon={<Drama />}
          />
        </TableBody>
      </Table>
    </div>
  );
};

export default Transcations;
