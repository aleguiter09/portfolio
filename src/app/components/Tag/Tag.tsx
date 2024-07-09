import "./Tag.scss";
import react from "../../assets/icons/react.svg";
import next from "../../assets/icons/next.svg";
import tailwind from "../../assets/icons/tailwind.svg";
import ts from "../../assets/icons/ts.svg";
import sass from "../../assets/icons/sass.svg";
import mongo from "../../assets/icons/mongo.svg";
import nest from "../../assets/icons/nest.svg";
import vue from "../../assets/icons/vue.svg";
import js from "../../assets/icons/js.svg";
import python from "../../assets/icons/python.svg";
import wordpress from "../../assets/icons/wordpress.svg";
import spacy from "../../assets/icons/spacy.svg";
import research from "../../assets/icons/research.svg";
import supabase from "../../assets/icons/supabase.svg";
import Image from "next/image";

const TAG = {
  react: {
    name: "React",
    icon: react,
  },
  "react-native": {
    name: "React Native",
    icon: react,
  },
  next: {
    name: "Next.js",
    icon: next,
  },
  tailwind: {
    name: "Tailwind",
    icon: tailwind,
  },
  ts: {
    name: "TypeScript",
    icon: ts,
  },
  sass: {
    name: "Sass",
    icon: sass,
  },
  mongo: {
    name: "MongoDB",
    icon: mongo,
  },
  nest: {
    name: "Nest",
    icon: nest,
  },
  vue: {
    name: "Vue",
    icon: vue,
  },
  js: {
    name: "JavaScript",
    icon: js,
  },
  python: {
    name: "Python",
    icon: python,
  },
  wordpress: {
    name: "WordPress",
    icon: wordpress,
  },
  spacy: {
    name: "spaCy",
    icon: spacy,
  },
  research: {
    name: "Research",
    icon: research,
  },
  supabase: {
    name: "Supabase",
    icon: supabase,
  },
};

export default function Tag({ tag_key }) {
  const { name, icon } = TAG[tag_key];

  return (
    <span className="tag_container">
      <Image src={icon} alt={name} width={18} height={18} />
      {name}
    </span>
  );
}
