import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { Ellipsis } from "lucide-react";

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
          <TableRow>
            <TableCell className="font-medium">
              <span>12/12/2021</span>
            </TableCell>
            <TableCell>
              <span>Food</span>
            </TableCell>
            <TableCell className="text-right">
              <span>Groceries</span>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end pr-6">
              <Ellipsis className="" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <span>12/12/2021</span>
            </TableCell>
            <TableCell>
              <span>Food</span>
            </TableCell>
            <TableCell className="text-right">
              <span>Groceries</span>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end pr-6">
              <Ellipsis className="" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <span>12/12/2021</span>
            </TableCell>
            <TableCell>
              <span>Food</span>
            </TableCell>
            <TableCell className="text-right">
              <span>Groceries</span>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end pr-6">
              <Ellipsis className="" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <span>12/12/2021</span>
            </TableCell>
            <TableCell>
              <span>Food</span>
            </TableCell>
            <TableCell className="text-right">
              <span>Groceries</span>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end pr-6">
              <Ellipsis className="" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">
              <span>12/12/2021</span>
            </TableCell>
            <TableCell>
              <span>Food</span>
            </TableCell>
            <TableCell className="text-right">
              <span>Groceries</span>
            </TableCell>
            <TableCell className="text-right">$250.00</TableCell>
            <TableCell className="flex justify-end pr-6">
              <Ellipsis className="" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default Transcations;
