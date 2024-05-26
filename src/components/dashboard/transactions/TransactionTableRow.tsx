import { Ellipsis, LoaderIcon } from "lucide-react";
import { TableCell } from "../../ui/table";
import { motion } from "framer-motion";
import { ReactElement, useEffect } from "react";
import { Button } from "../../ui/button";
import { Trash } from "lucide-react";
import { Form, useActionData } from "react-router-dom";
import { useState } from "react";
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
  id,
  budgetId,
  usage,
}: {
  date: string;
  name: string;
  category: string;
  amount: number;
  index: number;
  Icon?: ReactElement;
  id: string;
  budgetId: string;
  usage: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const data = useActionData() as { status: string };
  useEffect(() => {
    if (data && data?.status === "success") {
      setLoading(false);
      setIsOpen(false);
    }
  }, [data]);
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
        {/* <Form method="POST" className=" inline-block">
          <input type="hidden" name="_action" value="deleteExpense" />
          <input type="hidden" name="_id" value={id} />
          <input type="hidden" name="_budgetId" value={budgetId} />
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="usage" value={usage} />
          <Button className="text-xs" variant={"destructive"}>
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </Form> */}
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger>
            <Ellipsis />
          </PopoverTrigger>
          <PopoverContent className="w-full  bg-zinc-900">
            {/* <Button
              className="text-xs bg-transparent text-zinc-300 "
              variant={"outline"}
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit
            </Button> */}
            <Form
              onSubmit={() => {
                setLoading(true);
              }}
              method="POST"
              className=" inline-block"
            >
              <input type="hidden" name="_action" value="deleteExpense" />
              <input type="hidden" name="_id" value={id} />
              <input type="hidden" name="_budgetId" value={budgetId} />
              <input type="hidden" name="amount" value={amount} />
              <input type="hidden" name="usage" value={usage} />
              <Button
                disabled={loading}
                className="text-xs"
                variant={"destructive"}
              >
                {loading ? (
                  <span>
                    <LoaderIcon className="animate-spin h-5 w-5" />
                  </span>
                ) : (
                  <>
                    <Trash className="w-4 h-4 mr-2" />
                    Delete
                  </>
                )}
              </Button>
            </Form>
          </PopoverContent>
        </Popover>
      </TableCell>
    </motion.tr>
  );
};

export default TransactionTableRow;
