import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Form, useActionData } from "react-router-dom";
import { useState, useEffect } from "react";
import { memo } from "react";
import { LoaderIcon } from "lucide-react";
import ModalTriggerButton from "../dashboard/ModalTriggerButton";

const DeleteBudgetModal = memo(({ budgetId }: { budgetId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
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
        <ModalTriggerButton text="Delete Budget" />
      </DialogTrigger>
      <DialogContent className="text-zinc-300 bg-zinc-950">
        <Form
          method="DELETE"
          action="/dashboard"
          onSubmit={() => {
            setLoading(true);
          }}
        >
          <DialogHeader>
            <DialogTitle>Delete Budget</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this budget?
            </DialogDescription>
          </DialogHeader>
          <input type="hidden" name="_action" value="deleteBudget" />
          <input type="hidden" name="budgetId" value={budgetId} />
          <DialogFooter>
            <Button disabled={loading} variant={"destructive"} type="submit">
              {loading ? (
                <span>
                  <LoaderIcon className="animate-spin h-5 w-5" />
                </span>
              ) : (
                "Delete Budget"
              )}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
});

export default DeleteBudgetModal;
