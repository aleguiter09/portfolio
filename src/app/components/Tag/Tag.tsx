import Image from "next/image";
import react from "@/assets/icons/react.svg";
import next from "@/assets/icons/next.svg";
import tailwind from "@/assets/icons/tailwind.svg";
import ts from "@/assets/icons/ts.svg";
import sass from "@/assets/icons/sass.svg";
import mongo from "@/assets/icons/mongo.svg";
import nest from "@/assets/icons/nest.svg";
import vue from "@/assets/icons/vue.svg";
import js from "@/assets/icons/js.svg";
import python from "@/assets/icons/python.svg";
import wordpress from "@/assets/icons/wordpress.svg";
import spacy from "@/assets/icons/spacy.svg";
import research from "@/assets/icons/research.svg";
import supabase from "@/assets/icons/supabase.svg";

const TAG: Record<string, { name: string; icon: { src: string } }> = {
  react: { name: "React", icon: react },
  "react-native": { name: "React Native", icon: react },
  next: { name: "Next.js", icon: next },
  tailwind: { name: "Tailwind", icon: tailwind },
  ts: { name: "TypeScript", icon: ts },
  sass: { name: "Sass", icon: sass },
  mongo: { name: "MongoDB", icon: mongo },
  nest: { name: "Nest.js", icon: nest },
  vue: { name: "Vue.js", icon: vue },
  js: { name: "JavaScript", icon: js },
  python: { name: "Python", icon: python },
  wordpress: { name: "WordPress", icon: wordpress },
  spacy: { name: "spaCy", icon: spacy },
  research: { name: "Research", icon: research },
  supabase: { name: "Supabase", icon: supabase },
};

export default function Tag({ tag_key }: { tag_key: string }) {
  const tag = TAG[tag_key];
  if (!tag) return null;

  const { name, icon } = tag;

  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-tag-border bg-tag-bg px-2 py-0.5 text-xs text-muted">
      <Image src={icon.src} alt={name} width={12} height={12} />
      {name}
    </span>
  );
}
