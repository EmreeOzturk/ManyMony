import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

const AddExpenseModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="border flex items-center border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300 justify-center rounded-md px-4 py-2">
          <span className="relative block text-zinc-600 group-hover:text-indigo-300">
            Add Expense
          </span>
        </button>
      </DialogTrigger>
      <DialogContent className="text-zinc-300 bg-zinc-950">
        <DialogHeader>
          <DialogTitle>New Expense</DialogTitle>
          <DialogDescription>
            Add a new expense to your selected budget.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-full">
            <Label htmlFor="username" className="text-right text-zinc-300">
              Budget
            </Label>
            <select
              name="budget"
              id="budget"
              className={cn(
                `flex h-10 w-full border border-violet-800/40 hover:bg-transparent bg-black text-neutral-400  shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] 
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `
              )}
            >
              <option className="bg-black" value="">
                Select Budget
              </option>
              <option className="bg-black" value="1">
                Budget 1
              </option>
              <option className="bg-black" value="2">
                Budget 2
              </option>
              <option className="bg-black" value="3">
                Budget 3
              </option>
              <option className="bg-black" value="4">
                Budget 4
              </option>
              <option className="bg-black" value="5">
                Budget 5
              </option>
            </select>
          </div>
          <div className="w-full">
            <Label htmlFor="amount" className="text-right text-zinc-300">
              Amount
            </Label>
            <Input id="amount" className="w-full" name="amount" type="number" />
          </div>
        </div>
        <DialogFooter>
          <Button variant={"ghost"} type="submit">
            <DialogClose>Add Expense</DialogClose>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddExpenseModal;
