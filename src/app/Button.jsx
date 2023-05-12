"use client";

import { useRouter } from "next/navigation";

export default function Button({ page }) {
    const router = useRouter();
    return (
        <button
            onClick={() => {
                router.push(`?page=${(page += 1)}`);
            }}>
            увеличь меня
        </button>
    );
}
