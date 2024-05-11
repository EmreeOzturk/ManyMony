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
const DashboardHeader = () => {
  const auth = useAuth();
  return (
    <>
      <div className="absolute right-0 flex gap-2 items-center">
        <button className="border flex items-center border-zinc-800 hover:scale-105 transition-all group hover:border-indigo-300 justify-center rounded-md px-4 py-2">
          <span className="relative block text-zinc-600 group-hover:text-indigo-300">
            Add Budget
          </span>
        </button>
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
