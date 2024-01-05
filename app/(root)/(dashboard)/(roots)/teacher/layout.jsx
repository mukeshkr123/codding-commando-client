import TeacherProtectedLayout from "@/components/dashboard/teacher/teacher--proctect";

const TeacherLayout = ({ children }) => {
  return (
    <>
      <TeacherProtectedLayout>{children}</TeacherProtectedLayout>
    </>
  );
};

export default TeacherLayout;
