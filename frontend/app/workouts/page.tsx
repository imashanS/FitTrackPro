"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function WorkoutsPage() {

    const [workouts, setWorkouts] = useState([]);
    const [exerciseName, setExerciseName] = useState("");
    const [sets, setSets] = useState(0);
    const [reps, setReps] = useState(0);
    const [weight, setWeight] = useState(0);

    const fetchWorkouts = async () => {

        const token = localStorage.getItem("token");

        try {

            const response = await axios.get(
                "http://localhost:8080/api/workouts/my",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setWorkouts(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        fetchWorkouts();

    }, []);

    const handleCreateWorkout = async () => {

        const token = localStorage.getItem("token");

        try {

            await axios.post(
                "http://localhost:8080/api/workouts",
                {
                    exerciseName,
                    sets,
                    reps,
                    weight,
                    workoutDate: new Date().toISOString().split("T")[0],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            fetchWorkouts();
            setExerciseName("");
            setSets(0);
            setReps(0);
            setWeight(0);

        } catch (error) {

            console.log(error);
        }
    };

    const [editingWorkout, setEditingWorkout] = useState<any>(null);

    const handleUpdateWorkout = async () => {

        const token = localStorage.getItem("token");

        try {

            await axios.put(
                `http://localhost:8080/api/workouts/${editingWorkout.id}`,
                editingWorkout,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setEditingWorkout(null);

            fetchWorkouts();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <>
            <DashboardNavbar/>
            <main className="min-h-screen bg-[#0a0a0a] text-white p-8">
                <h1 className="text-4xl font-bold mb-8">Workouts</h1>

                <div className="overflow-x-auto">
                    {/* Add Workout Form */}
                    <div className="bg-white/5 p-6 rounded-2xl mb-8">
                        <h2 className="text-2xl font-bold mb-6">Add Workout</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <input
                                type="text"
                                value={exerciseName}
                                placeholder="Exercise"
                                className="p-3 rounded-xl bg-black border border-white/10"
                                onChange={(e) => setExerciseName(e.target.value)}
                            />
                            <input
                                type="number"
                                value={sets}
                                placeholder="Sets"
                                className="p-3 rounded-xl bg-black border border-white/10"
                                onChange={(e) => setSets(Number(e.target.value))}
                            />
                            <input
                                type="number"
                                value={reps}
                                placeholder="Reps"
                                className="p-3 rounded-xl bg-black border border-white/10"
                                onChange={(e) => setReps(Number(e.target.value))}
                            />
                            <input
                                type="number"
                                value={weight}
                                placeholder="Weight"
                                className="p-3 rounded-xl bg-black border border-white/10"
                                onChange={(e) => setWeight(Number(e.target.value))}
                            />
                        </div>
                        <button
                            onClick={handleCreateWorkout}
                            className="mt-6 bg-[#e8ff47] text-black px-6 py-3 rounded-xl font-semibold"
                        >
                            Create Workout
                        </button>
                    </div>

                    {/* Workouts Table */}
                    <table className="w-full border border-white/10">
                        <thead className="bg-white/5">
                        <tr>
                            <th className="p-4 text-left">Exercise</th>
                            <th className="p-4 text-left">Sets</th>
                            <th className="p-4 text-left">Reps</th>
                            <th className="p-4 text-left">Weight</th>
                            <th className="p-4 text-left">Actions</th>
                            {/* FIX 1: Proper header label, no button here */}
                        </tr>
                        </thead>
                        <tbody>
                        {workouts.map((workout: any) => (
                            <tr key={workout.id} className="border-t border-white/10">
                                <td className="p-4">{workout.exerciseName}</td>
                                <td className="p-4">{workout.sets}</td>
                                <td className="p-4">{workout.reps}</td>
                                <td className="p-4">{workout.weight}</td>
                                <td className="p-4">  {/* FIX 1: Edit button moved into each row */}
                                    <button
                                        onClick={() => setEditingWorkout(workout)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded-lg"
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* FIX 2: Edit form moved outside <tbody>, below the table */}
                    {editingWorkout && (
                        <div className="bg-white/5 p-6 rounded-2xl mt-8">
                            <h2 className="text-2xl font-bold mb-6">Edit Workout</h2>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <input
                                    type="text"
                                    value={editingWorkout.exerciseName}   // FIX 5: uses editingWorkout fields
                                    placeholder="Exercise"
                                    className="p-3 rounded-xl bg-black border border-white/10"
                                    onChange={(e) =>
                                        setEditingWorkout({
                                            ...editingWorkout,
                                            exerciseName: e.target.value,
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    value={editingWorkout.sets}
                                    placeholder="Sets"
                                    className="p-3 rounded-xl bg-black border border-white/10"
                                    onChange={(e) =>
                                        setEditingWorkout({
                                            ...editingWorkout,
                                            sets: Number(e.target.value),
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    value={editingWorkout.reps}
                                    placeholder="Reps"
                                    className="p-3 rounded-xl bg-black border border-white/10"
                                    onChange={(e) =>
                                        setEditingWorkout({
                                            ...editingWorkout,
                                            reps: Number(e.target.value),
                                        })
                                    }
                                />
                                <input
                                    type="number"
                                    value={editingWorkout.weight}
                                    placeholder="Weight"
                                    className="p-3 rounded-xl bg-black border border-white/10"
                                    onChange={(e) =>
                                        setEditingWorkout({
                                            ...editingWorkout,
                                            weight: Number(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            {/* FIX 4: Save Changes button moved inside the edit form */}
                            <button
                                onClick={handleUpdateWorkout}
                                className="mt-6 bg-[#e8ff47] text-black px-6 py-3 rounded-xl font-semibold"
                            >
                                Save Changes
                            </button>
                        </div>  // FIX 3: removed stray } that was here before
                    )}
                </div>
            </main>
        </>
    );
}