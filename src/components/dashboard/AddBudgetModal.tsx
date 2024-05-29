import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/utils/cn";
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
import { useAuth } from "@/src/hooks/useAuth";
import { useState, useEffect } from "react";
import { memo } from "react";
import ModalTriggerButton from "./ModalTriggerButton";
import { LoaderIcon } from "lucide-react";

type AuthType = {
  userId: string;
};
const AddBudgetModal = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { userId } = useAuth() as AuthType;
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
        <ModalTriggerButton text="Add Budget" />
      </DialogTrigger>
      <DialogContent className="text-zinc-300 bg-zinc-950">
        <Form
          method="POST"
          onSubmit={() => {
            setLoading(true);
          }}
        >
          <DialogHeader>
            <DialogTitle>New Budget</DialogTitle>
            <DialogDescription>
              Add a new budget to your selected budget.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <input type="hidden" name="_action" value="createBudget" />
            <input type="hidden" name="userId" value={userId} />
            <div className="w-full">
              <Label htmlFor="name" className="text-right text-zinc-300">
                Name
              </Label>
              <Input
                id="name"
                className="w-full"
                name="budgetName"
                type="text"
                disabled={loading}
              />
              <Label htmlFor="limit" className="text-right text-zinc-300">
                Limit
              </Label>
              <Input
                id="name"
                className="w-full"
                name="budgetLimit"
                type="number"
                disabled={loading}
              />
              <Label htmlFor="category" className="text-right text-zinc-300">
                Category
              </Label>
              <select
                name="budgetCategory"
                id="category"
                disabled={loading}
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
                  Select Category
                </option>
                <option className="bg-black" value="FOOD">
                  Food
                </option>
                <option className="bg-black" value="KITCHEN">
                  Kitchen
                </option>
                <option className="bg-black" value="ENTERTAINMENT">
                  Entertainment
                </option>
                <option className="bg-black" value="TRANSPORTATION">
                  Transportation
                </option>
                <option className="bg-black" value="MEDICAL">
                  Medical
                </option>
                <option className="bg-black" value="PERSONAL">
                  Personal
                </option>
                <option className="bg-black" value="MISCALLENEOUS">
                  Miscalleneous
                </option>
                <option className="bg-black" value="GIFT">
                  Gift
                </option>
                <option className="bg-black" value="CINEMA">
                  Cinema
                </option>
                <option className="bg-black" value="HOBBY">
                  Hobby
                </option>
                <option className="bg-black" value="GYM">
                  Gym
                </option>
                <option className="bg-black" value="CONCERT">
                  Concert
                </option>
                <option className="bg-black" value="CLOTHES">
                  Clothes
                </option>
                <option className="bg-black" value="BILLINGS">
                  Billings
                </option>
                <option className="bg-black" value="CAR">
                  Car
                </option>
                <option className="bg-black" value="HOME">
                  Home
                </option>
              </select>
            </div>
          </div>
          <DialogFooter>
            <Button disabled={loading} variant={"ghost"} type="submit">
              {loading ? (
                <span>
                  <LoaderIcon className="animate-spin h-5 w-5" />
                </span>
              ) : (
                "Add Budget"
              )}
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
});

export default AddBudgetModal;
