import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Head from 'next/head';


export default function Home(){
    return(

        <>
        <Head>
            <title>DesignbyMelz | Home</title>
        </Head>
        <Section1/>
        <Section2/>
        <Section3/>
        </>
    )
}