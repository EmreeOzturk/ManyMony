import { useAuth } from "@/src/hooks/useAuth";
import { cn } from "@/src/utils/cn";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import LogoutIcon from "../icons/LogoutIcon";
import UserIcon from "../icons/UserIcon";
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
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/components/ui/popover";

const DashboardHeader = () => {
  const auth = useAuth();
  return (
    <>
      <div className="absolute right-0 flex gap-2 items-center">
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
                <Label htmlFor="amount" className="text-right text-zinc-300">
                  Amount
                </Label>
                <Input id="amount" className="w-full" name="amount" type="number" />
              </div>
              <div className="w-full">
                <Label htmlFor="username" className="text-right text-zinc-300">
                  Budget
                </Label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      role="combobox"
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
                      Select Budget
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandItem>
                          <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Calculator</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Profile</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Billing</span>
                        </CommandItem>
                        <CommandItem>
                          <span>Settings</span>
                        </CommandItem>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Expense</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <button className="border flex items-center border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300 justify-center rounded-md px-4 py-2">
          <span className="relative block text-zinc-600 group-hover:text-indigo-300">
            Add Expense
          </span>
        </button>
        <button
          className={cn(
            "relative px-4 py-2 rounded-md bg-transparent border border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300"
          )}
          onClick={() => {
            (
              auth as {
                logoutAction: () => void;
              }
            )?.logoutAction();
          }}
        >
          <span className="relative block text-zinc-600 group-hover:text-indigo-300">
            <LogoutIcon />
          </span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "relative px-4 py-2 rounded-md bg-transparent border border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300"
              )}
            >
              <span className="relative block text-zinc-600 group-hover:text-indigo-300 ">
                <UserIcon />
              </span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-zinc-950 border-zinc-800">
            <DropdownMenuLabel>Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-zinc-500" />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default DashboardHeader;
