import { useRouter } from 'next/router';
import Link from 'next/link'

export default function Details() {
    const router = useRouter();
    const { id } = router.query;
    const label = `${id}-${Math.random().toString().slice(2,10)}`;
    const src = `https://via.placeholder.com/800x450?text=${label}`;

    const backStyle = {
        color: '#000',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '22px',
    }

    return (
        <>
            <div style={backStyle} onClick={() => router.back()}>&#10094; onClick:router.back()</div>
            <Link href="/gallery" scroll={false}>
                <a style={backStyle}>&#10094; link href="/gallery"</a>
            </Link>

            <h1>Obrazek: {id}</h1>

            <img src={src} />
        </>
    )
}
