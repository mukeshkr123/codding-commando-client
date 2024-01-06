"use client";
import React, { useEffect, useState } from "react";
import { DataCard } from "@/components/dashboard/analytics/data-card";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Chart } from "./chart";

const chartData = [
  { name: "Category 1", total: 1000 },
  { name: "Category 2", total: 1500 },
  { name: "Category 3", total: 800 },
  { name: "Category 3", total: 800 },
];

const AnalyticsDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const { userAuth } = useSelector((state) => state?.user);

  const fetchAnalyticsData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const { data } = await apiClient("/analytics", config);
      setData(data?.data);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
  }, []);

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Link href={"/teacher/analytics/payments"}>
          <DataCard
            label="Total Revenue"
            value={data?.totalPrice}
            shouldFormat
            color="bg-blue-500"
          />
        </Link>
        <Link href={"/teacher/analytics/payments"}>
          <DataCard
            label="Total Sales"
            value={data?.totalSales}
            color="bg-red-500"
          />
        </Link>

        <Link href={"/teacher/student"}>
          <DataCard
            label="Total Students"
            value={data?.totalStudents}
            color="bg-green-500"
          />
        </Link>
      </div>
      <Chart data={chartData} />
    </div>
  );
};

export default AnalyticsDetails;
