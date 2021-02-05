import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'

// const galleryData = [
//     "https://via.placeholder.com/800x450?text=0-25770813",
//     "https://via.placeholder.com/800x450?text=1-63193525",
//     "https://via.placeholder.com/800x450?text=2-04901980",
//     "https://via.placeholder.com/800x450?text=3-20358629",
//     "https://via.placeholder.com/800x450?text=4-48727706",
//     "https://via.placeholder.com/800x450?text=5-10801199",
//     "https://via.placeholder.com/800x450?text=6-34479573",
//     "https://via.placeholder.com/800x450?text=7-92113109",
//     "https://via.placeholder.com/800x450?text=8-78310972",
//     "https://via.placeholder.com/800x450?text=9-96757254",
//     "https://via.placeholder.com/800x450?text=10-20452905",
//     "https://via.placeholder.com/800x450?text=11-71184664",
//     "https://via.placeholder.com/800x450?text=12-49536239",
//     "https://via.placeholder.com/800x450?text=13-13166581",
//     "https://via.placeholder.com/800x450?text=14-42016794",
//     "https://via.placeholder.com/800x450?text=15-78096837",
//     "https://via.placeholder.com/800x450?text=16-14283389",
//     "https://via.placeholder.com/800x450?text=17-31608434",
//     "https://via.placeholder.com/800x450?text=18-55810105",
//     "https://via.placeholder.com/800x450?text=19-52086381",
//     "https://via.placeholder.com/800x450?text=20-61404259",
//     "https://via.placeholder.com/800x450?text=21-19836105",
//     "https://via.placeholder.com/800x450?text=22-57143524",
//     "https://via.placeholder.com/800x450?text=23-89040306",
//     "https://via.placeholder.com/800x450?text=24-03409045",
//     "https://via.placeholder.com/800x450?text=25-08258557",
//     "https://via.placeholder.com/800x450?text=26-21774353",
//     "https://via.placeholder.com/800x450?text=27-15211427",
//     "https://via.placeholder.com/800x450?text=28-97910844",
//     "https://via.placeholder.com/800x450?text=29-09134647",
//     "https://via.placeholder.com/800x450?text=30-47767097",
//     "https://via.placeholder.com/800x450?text=31-62011694",
//     "https://via.placeholder.com/800x450?text=32-74892167",
//     "https://via.placeholder.com/800x450?text=33-81089412",
//     "https://via.placeholder.com/800x450?text=34-22853664",
//     "https://via.placeholder.com/800x450?text=35-25677439",
//     "https://via.placeholder.com/800x450?text=36-67843494",
//     "https://via.placeholder.com/800x450?text=37-24155447",
//     "https://via.placeholder.com/800x450?text=38-44054161",
//     "https://via.placeholder.com/800x450?text=39-94240543",
//     "https://via.placeholder.com/800x450?text=40-98173409",
//     "https://via.placeholder.com/800x450?text=41-26657728",
//     "https://via.placeholder.com/800x450?text=42-28656565",
//     "https://via.placeholder.com/800x450?text=43-33888534",
//     "https://via.placeholder.com/800x450?text=44-95060931",
//     "https://via.placeholder.com/800x450?text=45-55811693",
//     "https://via.placeholder.com/800x450?text=46-67852184",
//     "https://via.placeholder.com/800x450?text=47-66682643",
//     "https://via.placeholder.com/800x450?text=48-14771963",
//     "https://via.placeholder.com/800x450?text=49-10305518",
//     "https://via.placeholder.com/800x450?text=50-17940343",
//     "https://via.placeholder.com/800x450?text=51-68236441",
//     "https://via.placeholder.com/800x450?text=52-00943905",
//     "https://via.placeholder.com/800x450?text=53-41269633",
//     "https://via.placeholder.com/800x450?text=54-09450977",
//     "https://via.placeholder.com/800x450?text=55-20333591",
//     "https://via.placeholder.com/800x450?text=56-61873134",
//     "https://via.placeholder.com/800x450?text=57-57426097",
//     "https://via.placeholder.com/800x450?text=58-41473929",
//     "https://via.placeholder.com/800x450?text=59-60351936",
//     "https://via.placeholder.com/800x450?text=60-81407047",
//     "https://via.placeholder.com/800x450?text=61-23584693",
//     "https://via.placeholder.com/800x450?text=62-51919206",
//     "https://via.placeholder.com/800x450?text=63-10022996",
//     "https://via.placeholder.com/800x450?text=64-74129726",
//     "https://via.placeholder.com/800x450?text=65-86087423",
//     "https://via.placeholder.com/800x450?text=66-42867065",
//     "https://via.placeholder.com/800x450?text=67-45659622",
//     "https://via.placeholder.com/800x450?text=68-68766732",
//     "https://via.placeholder.com/800x450?text=69-02780088",
//     "https://via.placeholder.com/800x450?text=70-12191339",
//     "https://via.placeholder.com/800x450?text=71-01420177",
//     "https://via.placeholder.com/800x450?text=72-81551394",
//     "https://via.placeholder.com/800x450?text=73-71993057",
//     "https://via.placeholder.com/800x450?text=74-62666342",
//     "https://via.placeholder.com/800x450?text=75-30853716",
//     "https://via.placeholder.com/800x450?text=76-18065795",
//     "https://via.placeholder.com/800x450?text=77-57399737",
//     "https://via.placeholder.com/800x450?text=78-03411706",
//     "https://via.placeholder.com/800x450?text=79-58670819",
//     "https://via.placeholder.com/800x450?text=80-91144114",
//     "https://via.placeholder.com/800x450?text=81-88705225",
//     "https://via.placeholder.com/800x450?text=82-43717842",
//     "https://via.placeholder.com/800x450?text=83-33074746",
//     "https://via.placeholder.com/800x450?text=84-36966412",
//     "https://via.placeholder.com/800x450?text=85-75921318",
//     "https://via.placeholder.com/800x450?text=86-69844105",
//     "https://via.placeholder.com/800x450?text=87-09883015",
//     "https://via.placeholder.com/800x450?text=88-81666058",
//     "https://via.placeholder.com/800x450?text=89-51287785",
//     "https://via.placeholder.com/800x450?text=90-79683871",
//     "https://via.placeholder.com/800x450?text=91-69242393",
//     "https://via.placeholder.com/800x450?text=92-88539500",
//     "https://via.placeholder.com/800x450?text=93-68060040",
//     "https://via.placeholder.com/800x450?text=94-18895739",
//     "https://via.placeholder.com/800x450?text=95-47382532",
//     "https://via.placeholder.com/800x450?text=96-57860635",
//     "https://via.placeholder.com/800x450?text=97-75497223",
//     "https://via.placeholder.com/800x450?text=98-59924445",
//     "https://via.placeholder.com/800x450?text=99-77354903"
// ];

export default function Gallery() {
    const router = useRouter();

    const galleryData = Array.from({ length: 200 }, (x, i) => {
        const label = `${i}-${Math.random().toString().slice(2,10)}`;
        return `https://via.placeholder.com/800x450?text=${label}`;
    });

    const galleryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridGap: '20px',
        alignItems: 'stretch',
    };

    const gelleryItemStyle = {
        border: '1px solid #ccc',
        boxShadow: '2px 2px 6px 0px  rgba(0,0,0,0.3)',
        maxWidth: '100%',
        width: '300px',
        height: 'auto',
        objectFit: 'cover',
    };

    const imageStyle = {
        display: 'block',
        width: '100%',
        height: 'auto',
    };

    const backStyle = {
        color: '#000',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '22px',
    }

    console.log(galleryData);

    return (
        <>
            <h1>Gallery</h1>

            <div style={galleryStyle}>
                {galleryData.map((src, index) => {
                    return (
                        <div style={gelleryItemStyle} key={index}>
                            <Link href={'/gallery/details?id='+index} scroll={false}>
                                <a>
                                    <img style={imageStyle} src={src} />
                                </a>
                            </Link>
                            <p style={backStyle} onClick={() => router.push('/gallery/details?id='+index)}>onClick:router.push()</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
