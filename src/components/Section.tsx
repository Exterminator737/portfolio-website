"use client";
import React from "react";
import { useInView } from "@/hooks/useInView";

type Props = React.PropsWithChildren<{
  id?: string;
  className?: string;
}>;

export default function Section({ id, className, children }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id={id} className={className}>
      <div
        ref={ref}
        className={
          `transition-all duration-700 ease-out will-change-transform ` +
          (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
        }
      >
        {children}
      </div>
    </section>
  );
}
