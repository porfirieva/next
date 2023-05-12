import Link from "next/link";
import styles from "./page.module.css";
import Button from "./Button";

async function getUsers(page) {
    const res = await fetch(
        `
    https://gorest.co.in/public/v2/users?page=${page}&per_page=3`,
        {
            headers: {
                "Primary-Token": "82e81f356abf949027797372281548ebe6849eb200fc2bb3edb22bff214746c3",
            },
        }
    );
    return res.json();
}

export default async function Home({ searchParams }) {
    let page = searchParams.page !== undefined ? Number(searchParams.page) : 1;

    const data = await getUsers(page);

    return (
        <main className={styles.main}>
            {data.map((el) => {
                return <Link href={`/${el.id}`}>go to {el.name}</Link>;
            })}
            <Button page={page} />
        </main>
    );
}
