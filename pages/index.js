import Question from "components/question";
import Head from "next/head";
import Question2 from "../components/question2";
import AccountImportInput from "../components/AccountImportInput";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Vote </title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="w-screen min-h-screen bg-gray-900 p-5 pt-20 text-white">
                <div className="questions max-w-3xl p-2 mx-auto  bg-gray-700">
                    <AccountImportInput/>
                    <Question2 />
                </div>
            </main>
        </div>
    );
}
