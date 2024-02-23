import React from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import apiClient from "lib/api-client";
import { ErrorToast } from "../error-toast";

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

export default function WorkshopModal({ handleCloseModal, workshop }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (registerData) => {
    try {
      const { data } = await apiClient.post("/workshop/register", {
        ...registerData,
        workshop,
      });

      console.log(data);
      toast.success("Registered successfully");
      handleCloseModal();
    } catch (error) {
      ErrorToast(error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-2 max-w-sm rounded-xl bg-white p-8 shadow-lg sm:mx-auto md:max-w-lg md:p-14">
          <div className="absolute right-3 top-3 cursor-pointer rounded-full p-2 hover:bg-slate-200">
            <X className="h-6 w-6" onClick={handleCloseModal} />
          </div>
          <h1 className="mb-8 text-center text-3xl font-bold md:px-4">
            Register for workshop
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                label="First Name"
                placeholder="First Name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div>
              <Input
                label="Last Name"
                placeholder="Last Name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div>
              <Input label="Email" placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input label="Phone" placeholder="Phone" {...register("phone")} />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>
            <div>
              <Input
                label="Profession"
                placeholder="Profession"
                {...register("profession")}
              />
              {errors.profession && (
                <p className="text-sm text-red-500">
                  {errors.profession.message}
                </p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                disabled={isLoading}
                className="w-full rounded bg-blue-500 px-4 py-2 font-semibold text-white transition duration-300 hover:bg-blue-600 md:mt-4 md:py-2.5 md:text-lg"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}
