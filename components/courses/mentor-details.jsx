import { MentorCard } from "../shared/card/mentor-card";

export const MentorDetails = ({ mentors }) => {
  return (
    <div className="mt-24 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:justify-between md:gap-x-24 md:gap-y-20 xl:gap-x-32 ">
      {mentors &&
        mentors.map((mentor) => <MentorCard key={mentor._id} {...mentor} />)}
    </div>
  );
};
