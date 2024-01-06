"use client";

import { ErrorToast } from "@/components/error-toast";
import LoadingAnimation from "@/components/shared/loading-animation";
import apiClient from "lib/api-client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DataTable } from "../../students/data-tables";
import { PaymentColumn } from "./payment-column";

export const PaymentList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchPayments = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient.get("/purchases", config);
      setData(data?.results);
    } catch (error) {
      ErrorToast(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <div className="p-6">
      <DataTable columns={PaymentColumn} data={data} />
    </div>
  );
};
