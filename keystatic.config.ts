import { config, collection, singleton, fields } from "@keystatic/core";

const localizedText = (label: string, multiline = false) =>
  fields.object(
    {
      en: multiline
        ? fields.text({ label: "English", multiline: true })
        : fields.text({ label: "English" }),
      es: multiline
        ? fields.text({ label: "Spanish", multiline: true })
        : fields.text({ label: "Spanish" }),
    },
    { label }
  );

const STACK_OPTIONS = [
  { label: "React", value: "react" },
  { label: "React Native", value: "react-native" },
  { label: "Next.js", value: "next" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "ts" },
  { label: "Sass", value: "sass" },
  { label: "MongoDB", value: "mongo" },
  { label: "Nest.js", value: "nest" },
  { label: "JavaScript", value: "js" },
  { label: "Python", value: "python" },
  { label: "WordPress", value: "wordpress" },
  { label: "spaCy", value: "spacy" },
  { label: "Research", value: "research" },
  { label: "Supabase", value: "supabase" },
] as const;

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    site: singleton({
      label: "Site",
      path: "content/site",
      schema: {
        name: fields.text({ label: "Name" }),
        role: fields.text({ label: "Role" }),
        photo: fields.image({
          label: "Profile photo",
          directory: "public/images",
          publicPath: "/images/",
        }),
        photoAlt: fields.text({ label: "Photo alt text" }),
        yearsExperience: fields.integer({
          label: "Years of experience",
          validation: { min: 0 },
        }),
        specialty: fields.text({ label: "Specialty (tech stack line)" }),
        locationCity: fields.text({ label: "City" }),
        email: fields.text({ label: "Email" }),
        githubUrl: fields.text({ label: "GitHub URL" }),
        linkedinUrl: fields.text({ label: "LinkedIn URL" }),
        cvEn: fields.file({
          label: "CV (English)",
          directory: "public/files",
          publicPath: "/files/",
        }),
        cvEs: fields.file({
          label: "CV (Spanish)",
          directory: "public/files",
          publicPath: "/files/",
        }),
      },
    }),
    labels: singleton({
      label: "UI Labels",
      path: "content/labels",
      schema: {
        header: fields.object(
          {
            about: localizedText("About"),
            experience: localizedText("Experience"),
            projects: localizedText("Projects"),
            contact: localizedText("Contact"),
          },
          { label: "Header" }
        ),
        about: fields.object(
          {
            years: localizedText("Years word"),
            as: localizedText("As / role suffix"),
            spain: localizedText("Spain / country label"),
            especialized: localizedText("Specialized in"),
          },
          { label: "About" }
        ),
        experience: fields.object(
          {
            title: localizedText("Section title"),
          },
          { label: "Experience" }
        ),
        projects: fields.object(
          {
            title: localizedText("Section title"),
            code: localizedText("Code button"),
            preview: localizedText("Preview button"),
          },
          { label: "Projects" }
        ),
        contact: fields.object(
          {
            title: localizedText("Section title"),
            description: localizedText("Description", true),
            getInTouch: localizedText("CTA"),
          },
          { label: "Contact" }
        ),
      },
    }),
  },
  collections: {
    experiences: collection({
      label: "Experiences",
      slugField: "company",
      path: "content/experiences/*",
      format: { data: "yaml" },
      schema: {
        company: fields.slug({ name: { label: "Company" } }),
        position: fields.text({ label: "Position" }),
        order: fields.integer({
          label: "Order (higher = first)",
          validation: { min: 0 },
        }),
        logo: fields.image({
          label: "Logo",
          directory: "public/images",
          publicPath: "/images/",
        }),
        logoAlt: fields.text({ label: "Logo alt" }),
        date: localizedText("Date range"),
        country: localizedText("Location"),
        description: fields.array(
          localizedText("Bullet", true),
          {
            label: "Description bullets",
            itemLabel: (props) =>
              props.fields.en.value || props.fields.es.value || "Bullet",
          }
        ),
        stack: fields.multiselect({
          label: "Stack",
          options: [...STACK_OPTIONS],
        }),
      },
    }),
    projects: collection({
      label: "Projects",
      slugField: "title",
      path: "content/projects/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        order: fields.integer({
          label: "Order (higher = first)",
          validation: { min: 0 },
        }),
        link: fields.text({ label: "Live URL" }),
        codeLink: fields.text({ label: "Code URL" }),
        logo: fields.image({
          label: "Logo (optional)",
          directory: "public/images",
          publicPath: "/images/",
        }),
        logoAlt: fields.text({ label: "Logo / project alt" }),
        description: localizedText("Description", true),
        stack: fields.multiselect({
          label: "Stack",
          options: [...STACK_OPTIONS],
        }),
        screenshots: fields.array(
          fields.image({
            label: "Screenshot",
            directory: "public/images/savv",
            publicPath: "/images/savv/",
          }),
          {
            label: "Screenshots",
            itemLabel: () => "Screenshot",
          }
        ),
      },
    }),
  },
});
