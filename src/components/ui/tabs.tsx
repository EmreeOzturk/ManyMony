import { useState } from "react";
import { motion } from "framer-motion";
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
import { useAuth } from "@/src/hooks/useAuth";
type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | JSX.Element;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const auth = useAuth();
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0  bg-indigo-950 rounded-full ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-zinc-300 ">{tab.title}</span>
          </button>
        ))}

        <div className="absolute right-0 flex gap-2 items-center">
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
        <div className="bg-transparent flex justify-between items-center text-white gap-2 rounded-md  absolute right-0 top-5 h-10 mt-10">
          <button className="border flex items-center border-zinc-800 text-zinc-600 justify-center rounded-md px-4 py-2">
            Create Budget
          </button>
          <button className="border  flex items-center border-zinc-800 text-zinc-600 justify-center rounded-md px-4 py-2">
            Create Expense
          </button>
        </div>
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-24", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
