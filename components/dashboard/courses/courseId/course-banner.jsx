"use client";
import { Pencil, PlusCircle, ImageIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import { useSelector } from "react-redux";
import apiClient from "lib/api-client";

export const CourseBanner = ({ initialData, courseId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userAuth } = useSelector((state) => state?.user);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };
      await apiClient.patch(`/courses/update/${courseId}`, values, config);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="mt-6 rounded-md border bg-slate-100 p-4">
      <div className="flex items-center justify-between font-medium">
        Course image
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && <>Cancel</>}
          {!isEditing && !initialData.banner && (
            <>
              <PlusCircle className="mr-2 h-4 w-4" />
              Add an image
            </>
          )}
          {!isEditing && initialData.banner && (
            <>
              <Pencil className="mr-2 h-4 w-4" />
              Edit Banner
            </>
          )}
        </Button>
      </div>
      {!isEditing &&
        (!initialData.banner ? (
          <div className="flex h-60 items-center justify-center rounded-md bg-slate-200">
            <ImageIcon className="h-10 w-10 text-slate-500" />
          </div>
        ) : (
          <div className="relative mt-2 aspect-video">
            <Image
              alt="Upload"
              fill
              className="rounded-md object-cover"
              src={initialData.banner}
            />
          </div>
        ))}
      {isEditing && (
        <div>
          <FileUpload
            endpoint="banner"
            onChange={(url) => {
              if (url) {
                onSubmit({ banner: url });
              }
            }}
          />
          <div className="mt-4 text-xs text-muted-foreground">
            16:9 aspect ratio recommended
          </div>
        </div>
      )}
    </div>
  );
};
