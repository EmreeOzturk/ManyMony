import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";
import { LoaderIcon } from "lucide-react";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Form, useActionData, useLoaderData } from "react-router-dom";
import { useState, useEffect, memo } from "react";
import { useAuth } from "@/src/hooks/useAuth";
import { Models } from "appwrite";
import ModalTriggerButton from "./ModalTriggerButton";
type AuthType = {
  user: {
    $id: string;
  };
};
const AddExpenseModal = memo(() => {
  const { documents } = useLoaderData() as { documents: Models.Document[] };
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState<string>(
    documents[0]?.$id
  );
  const { user } = useAuth() as AuthType;
  const data = useActionData() as { status: string };
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data && data?.status === "success") {
      setIsOpen(false);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [data]);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <ModalTriggerButton text="Add Expense" />
      </DialogTrigger>
      <DialogContent className="text-zinc-300 bg-zinc-950">
        <Form
          onSubmit={() => {
            setLoading(true);
          }}
          method="POST"
        >
          <DialogHeader>
            <DialogTitle>New Expense</DialogTitle>
            <DialogDescription>
              Add a new expense to your selected budget.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="w-full">
              <input type="hidden" name="_action" value="createExpense" />
              <input type="hidden" name="userId" value={user?.$id} />
              <input
                type="hidden"
                name="oldUsage"
                disabled={loading}
                value={
                  documents?.find((doc) => doc.$id === selectedBudget)?.usage
                }
              />
              <Label htmlFor="budget" className="text-right text-zinc-300">
                Budget
              </Label>
              <select
                name="budget"
                disabled={loading}
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
                defaultValue={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
              >
                {documents?.map((doc: Models.Document) => (
                  <option className="bg-black" key={doc.$id} value={doc.$id}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <Label htmlFor="amount" className="text-right text-zinc-300">
                Amount
              </Label>
              <Input
                id="amount"
                className="w-full"
                name="amount"
                type="number"
              />
            </div>
          </div>
          <DialogFooter>
            <Button disabled={loading} variant={"ghost"} type="submit">
              {loading ? (
                <span>
                  <LoaderIcon className="animate-spin h-5 w-5" />
                </span>
              ) : (
                "Add Expense"
              )}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
});

export default AddExpenseModal;
