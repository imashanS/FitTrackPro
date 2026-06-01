"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import WorkoutChart from "@/components/dashboard/WorkoutChart";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function DashboardPage() {

    const router = useRouter();
    const [workouts, setWorkouts] = useState([]);
    const [dashboard, setDashboard] = useState({
        totalWorkouts: 0,
        totalVolume: 0,
        latestWeight: 0,
        recentWorkoutCount: 0,
        latestExercise: "",
        mostPerformedExercise: "",
        workoutsThisMonth: 0,
        averageWeight: 0,
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login");
            return;
        }
        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/users/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                setWorkouts(response.data);
            });

        axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/api/workouts/analytics`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                setDashboard(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [router]);

    return (

        <>

            <DashboardNavbar />

            <main className="min-h-screen bg-[#0a0a0a] text-white p-8">

            <h1 className="text-4xl font-bold text-black">
                Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold text-black">
                        Total Workouts
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.totalWorkouts}
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold text-black">
                        Latest Weight
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.latestWeight} kg
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold text-black">
                        Total Volume
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.totalVolume}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow">
                    <h2 className="text-xl font-semibold text-black">
                        Most Performed Exercise
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.mostPerformedExercise}
                    </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow">

                    <h2 className="text-xl font-semibold text-black">
                        Workouts This Month
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.workoutsThisMonth}
                    </p>

                </div>
                <div className="bg-white p-6 rounded-2xl shadow">

                    <h2 className="text-xl font-semibold text-black">
                        Average Weight
                    </h2>

                    <p className="text-3xl mt-4 text-black">
                        {dashboard.averageWeight} kg
                    </p>

                </div>
                <WorkoutChart workouts={workouts} />

            </div>

            </main>

        </>

    );
}