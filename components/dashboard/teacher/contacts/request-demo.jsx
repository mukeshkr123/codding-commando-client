"use client";

import apiClient from "lib/api-client";
import { BellRing, Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ContactDataTable } from "./contact-data-tables";
import ContactColumns from "./contact-columns";
// import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { DatePicker } from "antd";
import { Button } from "@/components/ui/button";

const { RangePicker } = DatePicker;

export const ContactDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);
  const [dates, setDates] = useState([]);
  const [initialLoad, setInitialLoad] = useState(true);

  const fetchContactData = async (startDate, endDate) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      const url =
        startDate && endDate
          ? `/send/get-all?startDate=${startDate}&endDate=${endDate}`
          : "/send/get-all";
      const { data } = await apiClient.get(url, config);
      setData(data?.contacts);
    } catch (error) {
      // toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialLoad) {
      fetchContactData();
      setInitialLoad(false); // Fix: setInitialLoad to false instead of true
    }
  }, [initialLoad]);

  const unSeenItems = data?.filter((item) => !item.seen);

  const handleShowButtonClick = () => {
    fetchContactData(dates[0], dates[1]);
  };

  const handleDateChange = (values) => {
    setDates(values);
  };

  const handleClearButtonClick = () => {
    setDates([]);
    fetchContactData();
  };

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  return (
    <section>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <BellRing className="h-9 w-9" />
            {unSeenItems?.length > 0 && (
              <div className="absolute -right-2 -top-1 rounded-full bg-red-500 px-2 text-white">
                {unSeenItems.length}
              </div>
            )}
          </div>

          <h1 className="text-2xl font-medium">Notifications</h1>
        </div>
        <div className="mb-4 flex gap-1 md:gap-2">
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
      </div>

      <ContactDataTable columns={ContactColumns} data={data} />
    </section>
  );
};
