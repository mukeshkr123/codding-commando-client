"use client";

import { Banner } from "@/components/banner";
import { Actions } from "@/components/dashboard/courses/actions";
import { AditionalDetailForm } from "@/components/dashboard/mentors/additional-detail-form";
import { MentorDescriptionForm } from "@/components/dashboard/mentors/description-form";
import { MentorImageForm } from "@/components/dashboard/mentors/mentor-image";
import { MentorNameForm } from "@/components/dashboard/mentors/mentor-name-form";
import { SelectRole } from "@/components/dashboard/mentors/select-role";
import { ErrorToast } from "@/components/error-toast";
import { IconBadge } from "@/components/icon-bagde";
import apiClient from "lib/api-client";
import { LayoutDashboard, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MentorIdPage = ({ params }) => {
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userAuth } = useSelector((state) => state?.user);

  const fetchmentorData = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userAuth?.accessToken}`,
        },
      };

      const { data } = await apiClient.get(
        `/mentors/${params.mentorId}`,
        config
      );
      setMentorData(data?.mentor);
    } catch (error) {
      ErrorToast(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchmentorData();
  }, []);

  const requiredFields = [
    mentorData?.name,
    mentorData?.description,
    mentorData?.imageUrl,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  if (loading) {
    return (
      <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center rounded-md">
        <Loader2 className="h-16 w-16 animate-spin text-sky-700" />
      </div>
    );
  }

  console.log(mentorData);

  return (
    <>
      {!mentorData?.isPublished && (
        <Banner label="This member is unpublished. It will not be visible to the students." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Member Setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            mentorId={params.mentorId}
            isPublished={mentorData?.isPublished}
          />
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-2xl">Customize your Member Details</h2>
            </div>
            <MentorNameForm
              initialData={mentorData}
              mentorId={params.mentorId}
            />
            <MentorDescriptionForm
              initialData={mentorData}
              mentorId={params.mentorId}
            />
            <SelectRole initialData={mentorData} mentorId={params.mentorId} />
          </div>
          <div className="md:mt-12">
            <MentorImageForm
              initialData={mentorData}
              mentorId={params.mentorId}
            />
            {mentorData?.role === "mentor" && (
              <AditionalDetailForm
                initialData={mentorData}
                mentorId={params.mentorId}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MentorIdPage;
