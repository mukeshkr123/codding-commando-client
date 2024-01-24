"use client";
import React, { useEffect, useState } from "react";
import { DataCard } from "@/components/dashboard/analytics/data-card";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { Chart } from "./chart";
import { DatePicker } from "antd";
import { Button } from "@/components/ui/button";

const { RangePicker } = DatePicker;

const AnalyticsDetails = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [dates, setDates] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const { userAuth } = useSelector((state) => state?.user);

  const fetchAnalyticsData = async (startDate, endDate) => {
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      const url =
        startDate && endDate
          ? `/analytics?startDate=${startDate}&endDate=${endDate}`
          : "/analytics";

      const { data } = await apiClient(url, config);
      setData(data?.data);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialLoad) {
      fetchAnalyticsData();
      setInitialLoad(false);
    }
  }, [initialLoad]);

  const handleShowButtonClick = () => {
    fetchAnalyticsData(dates[0], dates[1]);
  };

  const handleDateChange = (values) => {
    setDates(values);
  };

  const handleClearButtonClick = () => {
    setDates([]);
    fetchAnalyticsData();
  };

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-4 flex gap-1">
        <RangePicker onChange={handleDateChange} value={dates} />
        <Button
          onClick={handleShowButtonClick}
          className="bg-blue-500 hover:bg-blue-600"
          disabled={dates?.length !== 2}
        >
          Show
        </Button>
        <Button
          onClick={handleClearButtonClick}
          className="bg-gray-500 hover:bg-gray-600"
          disabled={dates?.length === 0}
        >
          Clear
        </Button>
      </div>
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
      <Chart data={data?.courseRevenue} />
    </div>
  );
};

export default AnalyticsDetails;
