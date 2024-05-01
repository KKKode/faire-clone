import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};

export default function PublicLayout({
  children = <></>,
  title = "All European brands",
  description = "Faire helps local stores discover and try thousands of unique items risk-free.",
  ogImage,
}: Props) {
  return (
    <section>
      <Head>
        <meta property="og:url" content="https://faire-clone.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main className="w-full">
        <Navbar />
        {children}
        <Footer />
      </main>
    </section>
  );
}
