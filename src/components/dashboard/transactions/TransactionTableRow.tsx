import { Ellipsis } from "lucide-react";
import { TableCell } from "../../ui/table";
import { motion } from "framer-motion";

const TransactionTableRow = ({
  date,
  name,
  category,
  amount,
  index,
}: {
  date: string;
  name: string;
  category: string;
  amount: number;
  index: number;
}) => {
  return (
    <motion.tr
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="w-full hover:bg-indigo-950/60 text-zinc-300 font-medium text-sm "
    >
      <TableCell className="font-medium">
        <span>{date}</span>
      </TableCell>
      <TableCell>
        <span>{name}</span>
      </TableCell>
      <TableCell className="text-right">
        <span>{category}</span>
      </TableCell>
      <TableCell className="text-right">${amount}</TableCell>
      <TableCell className="flex justify-end pr-6">
        <Ellipsis />
      </TableCell>
    </motion.tr>
  );
};

export default TransactionTableRow;
