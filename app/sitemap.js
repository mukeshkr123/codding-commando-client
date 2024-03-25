export default async function sitemap() {
  const reponse = await fetch(
    "https://codingcommando.in/api/v1/get-all/courses"
  );
  const { courses } = await reponse.json();

  const courseEntries = courses.map(({ _id }) => ({
    url: `https://codingcommando.in/courses/${_id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://codingcommando.in/",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/about",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/courses",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/refund-policy",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/terms",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/demo",
      lastModified: new Date(),
    },
    {
      url: "https://codingcommando.in/workshop/salesforce",
      lastModified: new Date(),
    },
    ...courseEntries,
  ];
}
