"use client";

import apiClient from "lib/api-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { useSelector } from "react-redux";
import ConfirmModal from "@/components/modals/confirm-modal";
import { ErrorToast } from "@/components/error-toast";

export const StudentActions = ({ studentId, isBlocked }) => {
  console.log(isBlocked);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);
  const config = {
    headers: {
      Authorization: `Bearer ${userAuth?.accessToken}`,
    },
  };

  const onClick = async () => {
    try {
      setIsLoading(true);

      if (isBlocked) {
        await apiClient.patch(
          `/users/students/${studentId}/unblock`,
          {},
          config
        );
        toast.success("User Unblocked");
        router.refresh();
      } else {
        await apiClient.patch(`/users/students/${studentId}/block`, {}, config);
        toast(
          "This student has been blocked; as a result, they are unable to access the dashboard or course materials.",
          {
            duration: 6000,
          }
        );
      }
      router.refresh();
    } catch (error) {
      ErrorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mr-2 flex items-center gap-x-2">
      <ConfirmModal
        onConfirm={onClick}
        description={`You are going to ${
          isBlocked ? "Unblock" : "Block"
        } this user!`}
      >
        <Button disabled={isLoading} variant="destructive" size="sm">
          {isBlocked ? "Unblock" : "Block"}
        </Button>
      </ConfirmModal>
    </div>
  );
};
