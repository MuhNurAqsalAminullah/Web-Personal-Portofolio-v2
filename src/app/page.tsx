"use client";
import React from "react";
import dynamic from "next/dynamic";

// Memaksa seluruh halaman Home hanya dirender di sisi client
const Home = dynamic(() => import("../pages/home"), {
  ssr: false,
});

export default function Page() {
  return <Home />;
}