async function getArtist(id) {
    const res = await fetch(
        `
    https://gorest.co.in/public/v2/users/${id}`,
        {
            headers: {
                "Primary-Token": "yourtoken",
            },
        }
    );
    return res.json();
}

export default async function Page({ params: { id } }) {
    const data = await getArtist(id);
    return (
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
        </div>
    );
}
