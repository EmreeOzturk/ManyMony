import { Button } from "@/src/components/ui/button";
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
import { Form, useActionData } from "react-router-dom";
import { useState, useEffect, memo } from "react";
import ModalTriggerButton from "../dashboard/ModalTriggerButton";
import { useAuth } from "@/src/hooks/useAuth";
type AuthType = {
  user: {
    $id: string;
  };
};
const AddExpenseModal = memo(
  ({
    budgetId,
    budgetName,
    budgetUsage,
  }: {
    budgetId: string;
    budgetName: string;
    budgetUsage: number;
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    const data = useActionData() as { status: string };
    const [loading, setLoading] = useState(false);
    const { user } = useAuth() as AuthType;
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
                Add a new expense to your {budgetName} budget.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="w-full">
                <input type="hidden" name="_action" value="createExpense" />
                <input type="hidden" name="userId" value={user?.$id} />
                <input type="hidden" name="budgetId" value={budgetId} />
                <input
                  type="hidden"
                  name="oldUsage"
                  disabled={loading}
                  value={budgetUsage}
                />
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
  }
);

export default AddExpenseModal;
