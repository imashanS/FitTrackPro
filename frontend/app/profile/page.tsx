"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

export default function ProfilePage() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        role: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const token = localStorage.getItem("token");

        axios.get(
            "http://localhost:8080/api/users/me",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const handleUpdateProfile = async () => {

        const token = localStorage.getItem("token");

        try {

            setLoading(true);

            const response = await axios.put(
                "http://localhost:8080/api/users/me",
                {
                    name: user.name,
                    email: user.email,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setUser(response.data);

            alert("Profile updated successfully!");

        } catch (error) {

            console.log(error);
            alert("Failed to update profile");

        } finally {

            setLoading(false);
        }
    };

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChangePassword = async () => {

        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const token = localStorage.getItem("token");

        try {

            await axios.put(
                "http://localhost:8080/api/users/me/password",
                {
                    currentPassword,
                    newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            alert("Password updated successfully");

            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");

        } catch (error) {

            console.log(error);
            alert("Failed to update password");
        }
    };

    return (

        <>

            <DashboardNavbar />

            <main className="min-h-screen bg-[#0a0a0a] text-white p-8">

                <h1 className="text-4xl font-bold mb-8">
                    Profile
                </h1>

                <div className="bg-white/5 p-8 rounded-2xl max-w-2xl">

                    <div className="space-y-6">

                        <div>

                            <p className="text-gray-400 mb-2">
                                Name
                            </p>

                            <input
                                type="text"
                                value={user.name}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        name: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded-xl bg-black border border-white/10"
                            />

                        </div>

                        <div>

                            <p className="text-gray-400 mb-2">
                                Email
                            </p>

                            <input
                                type="email"
                                value={user.email}
                                onChange={(e) =>
                                    setUser({
                                        ...user,
                                        email: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded-xl bg-black border border-white/10"
                            />

                        </div>

                        <div>

                            <p className="text-gray-400 mb-2">
                                Role
                            </p>

                            <p className="text-2xl">
                                {user.role}
                            </p>

                        </div>

                        <button
                            onClick={handleUpdateProfile}
                            disabled={loading}
                            className="mt-8 bg-[#e8ff47] text-black px-6 py-3 rounded-xl font-semibold"
                        >
                            {loading ? "Saving..." : "Save Changes"}
                        </button>

                    </div>

                </div>
                <div className="bg-white/5 p-8 rounded-2xl max-w-2xl mt-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Change Password
                    </h2>

                    <div className="space-y-4">

                        <input
                            type="password"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full p-3 rounded-xl bg-black border border-white/10"
                        />

                        <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 rounded-xl bg-black border border-white/10"
                        />

                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-3 rounded-xl bg-black border border-white/10"
                        />

                        <button
                            onClick={handleChangePassword}
                            className="bg-[#e8ff47] text-black px-6 py-3 rounded-xl font-semibold"
                        >
                            Change Password
                        </button>

                    </div>

                </div>

            </main>

        </>
    );
}