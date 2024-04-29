import React from "react";

export default function Card({
  children,
}: Readonly<{ children?: React.ReactNode; key?: string | number }>) {
  return (
    <div className="flex gap-4 items-center bg-white rounded-md border border-gray-800 shadow overflow-hidden">
      {children}
    </div>
  );
}
