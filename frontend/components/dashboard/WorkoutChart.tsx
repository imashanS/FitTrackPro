"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

export default function WorkoutChart({
                                         workouts
                                     }: any) {

    const data = workouts.map((workout: any) => ({
        name: workout.exerciseName,
        volume:
            workout.sets *
            workout.reps *
            workout.weight,
    }));

    return (

        <div className="bg-white/5 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-6">
                Workout Volume Trend
            </h2>

            <div className="h-[300px]">

                <ResponsiveContainer width="100%" height="100%">

                    <LineChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Line
                            type="monotone"
                            dataKey="volume"
                            stroke="#e8ff47"
                            strokeWidth={3}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}