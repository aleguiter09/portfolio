import React from "react";
import Image from "next/image";

export default function Presentation() {
  return (
    <section className="flex gap-8 items-center">
      <Image
        className="rounded-full border border-gray-900"
        src="/images/me.jpg"
        alt="profile"
        width="100"
        height="100"
      />
      <div className="flex flex-col gap-0.5">
        <h1 className="text-2xl font-bold">Alejandro Guiter</h1>
        <h3 className="text-gray-700">Software Developer</h3>
      </div>
    </section>
  );
}
