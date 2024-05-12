import { Ellipsis } from "lucide-react";
import { TableCell } from "../../ui/table";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { Button } from "../../ui/button";
import { Edit, Trash } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";
const TransactionTableRow = ({
  date,
  name,
  category,
  amount,
  index,
  Icon,
}: {
  date: string;
  name: string;
  category: string;
  amount: number;
  index: number;
  Icon?: ReactElement;
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
        <span className="flex items-center gap-2">
          {Icon && Icon}
          {name}
        </span>
      </TableCell>
      <TableCell className="text-right">
        <span>{category}</span>
      </TableCell>
      <TableCell className="text-right">${amount}</TableCell>
      <TableCell className="flex justify-end pr-6">
        <Popover>
          <PopoverTrigger>
            <Ellipsis />
          </PopoverTrigger>
          <PopoverContent className="w-56 space-x-2  px-4 bg-zinc-900">
            <Button className="text-xs bg-transparent text-zinc-300 " variant={"outline"}>
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button className="text-xs" variant={"destructive"}>
              <Trash className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </PopoverContent>
        </Popover>
      </TableCell>
    </motion.tr>
  );
};

export default TransactionTableRow;
