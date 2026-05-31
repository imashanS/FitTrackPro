"use client";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import Stats from "@/components/landing/Stats";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
    const [dashboard, setDashboard] = useState({

        totalWorkouts: 0,

        totalVolume: 0,

        latestWeight: 0,

        recentWorkoutCount: 0,

        latestExercise: "",

    });

    useEffect(() => {

        axios

            .get("http://localhost:8080/api/dashboard/1")

            .then((response) => {

                setDashboard(response.data);

            })

            .catch((error) => {

                console.error(error);

            });

    }, []);
  return (
      <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden">
        <Navbar />
        <Hero />
        <Stats />
        <Features />
        <CTA />
        <Footer />
      </main>
  );
}