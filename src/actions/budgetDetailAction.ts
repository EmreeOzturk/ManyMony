import type { ActionFunction } from "react-router-dom";
import { databases } from "../lib/appwrite";
import { toast } from "react-toastify";

export const budgetDetailAction: ActionFunction = async ({
  request,
}: {
  request: Request;
}) => {
  const formData = await request.formData();
  const actionType = formData.get("_action");

  if (actionType === "deleteBudget") {
    const budgetId = formData.get("budgetId");
    const userId = formData.get("userId");

    databases
      .deleteDocument(
        "66343e800011dbbdd0f4",
        "66343eb4001c491d89a7",
        budgetId as string
      )
      .then(() => {
        toast.success("Budget deleted successfully", {
          autoClose: 2000,
          position: "bottom-right",
        });
      })
      .catch(() => {
        toast.error("Failed to delete budget", {
          autoClose: 2000,
          position: "bottom-right",
        });
      });
  }
};
