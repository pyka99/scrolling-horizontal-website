import React from "react";
import { Metadata } from "next";
import FeaturesWithScroll from "./components/Home/FeaturesWithScroll";

export const metadata: Metadata = {
  title: "Asuroo",
};

export default function Home() {
  return (
    <main>
      <FeaturesWithScroll />
    </main>
  );
}
