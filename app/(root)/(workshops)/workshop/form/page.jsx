"use client";

import { Input } from "@/components/ui/input";
import apiClient from "lib/api-client";
import React, { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorToast } from "@/components/error-toast";
import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const registerSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name is required",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Invalid phone number",
    })
    .regex(/^\d+$/, {
      message: "Invalid phone number",
    }),
  profession: z.string().min(2, {
    message: "Profession is required",
  }),
});

export default function WorkshopForm() {
  const workshop = "salesforce";

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCreateOrder = async (values) => {
    try {
      const {
        data: { order, name, email, phone, price },
      } = await apiClient.post(`/workshop/${workshop}/create-order`, values);

      const options = {
        key: "rzp_test_SsZQw7VSzw5bCq",
        name: order?.notes?.paymentFor || workshop,
        currency: order.currency,
        amount: order.amount,
        order_id: order.id,
        prefill: { name, email, contact: phone },
        handler: async function (response) {
          const responseData = {
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_order_id: response.razorpay_order_id,
            razorpay_signature: response.razorpay_signature,
            amount: price,
            name,
            email,
            phone,
          };

          try {
            const { data } = await apiClient.post(
              `/workshop/${workshop}/verify-order`,
              responseData
            );

            if (data.success) {
              router.push(`/workshop/thank-you`);
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            ErrorToast("Payment verification failed. Please try again.");
          }
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

      paymentObject.on("payment.failed", function () {
        alert("Payment failed. Please try again. Contact support for help");
      });
    } catch (error) {
      console.error("Error processing order:", error);
      ErrorToast("Order processing failed. Please try again.");
    }
  };

  const onSubmit = async (registerData) => {
    setIsLoading(true);
    try {
      const { data } = await apiClient.post("/workshop/register", {
        workshop,
        ...registerData,
      });

      console.log(data);

      handleCreateOrder(data?.data);

      toast.success("Registered successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
      ErrorToast("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-slate-200 ">
      <div className="flex max-w-2xl flex-col gap-6 rounded-md border bg-white p-8 shadow-lg md:mx-auto lg:p-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-3xl font-semibold">
            Register for workshop
          </h1>
          <p className="text-center">Register for Two Hours Carrier Mapping</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="h-full w-full md:flex md:justify-between md:gap-4">
            <div className="flex h-full w-full flex-col gap-2">
              <Label className="text-base text-slate-800">
                First Name <span className="text-red-500">*</span>
              </Label>
              <Input {...register("firstName")} />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="flex h-full w-full flex-col gap-2">
              <Label className="text-base text-slate-800">
                Last Name <span className="text-red-500">*</span>
              </Label>
              <Input {...register("lastName")} />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <Label className="text-base text-slate-800">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input {...register("email")} />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <Label className="text-base text-slate-800">
              Phone <span className="text-red-500">*</span>
            </Label>
            <Input {...register("phone")} />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex h-full w-full flex-col gap-2">
            <Label className="text-base text-slate-800">
              Profession <span className="text-red-500">*</span>
            </Label>
            <Input {...register("profession")} />
            {errors.profession && (
              <p className="text-sm text-red-500">
                {errors.profession.message}
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className={`mt-6 rounded-md bg-blue-500 px-10 py-2 text-lg text-white ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading || isSubmitting}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
