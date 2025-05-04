import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ImmigrationLawyerHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-100 via-rose-100 to-sky-100 text-black font-sans">
      <Head>
        <title>Ethlena Macauley | Immigration Attorney</title>
        <meta name="description" content="Compassionate and experienced immigration attorney offering personalized virtual legal services." />
        <meta property="og:title" content="Ethlena Macauley | Immigration Attorney" />
        <meta property="og:description" content="Compassionate and experienced immigration attorney offering personalized virtual legal services." />
        <meta property="og:type" content="website" />
      </Head>

      <nav className="bg-white shadow-md sticky top-0 z-50 p-4 flex justify-center gap-8 text-lg font-semibold text-green-900">
        <a href="#welcome" className="hover:underline">Welcome</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#about" className="hover:underline">Why Me</a>
        <a href="#contact" className="hover:underline">Schedule</a>
      </nav>

      <header className="bg-coral-200 text-black p-12 shadow-xl text-center border-b-4 border-green-400">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-lg">Ethlena Macauley, Esq.</h1>
        <p className="text-2xl mt-4 font-medium">Immigration Lawyer | Advocate | Legal Freelancer</p>
        <p className="text-lg mt-2 italic">Proudly focusing on U.S. Immigration Law</p>
      </header>

      <section id="welcome" className="p-8 grid md:grid-cols-1 gap-6 items-center bg-white bg-[url('/flowers.svg')] bg-cover bg-center">
        <div>
          <h2 className="text-4xl font-bold mb-4 text-green-700">Welcome!</h2>
          <p className="text-xl leading-relaxed">
            I'm Ethlena Macauley, a Florida-barred attorney with a strong foundation in family and civil law, now specializing in immigration law. I’m also an immigrant — I came to the United States when I was just eleven years old, and my family is full of immigrants. I understand the journey, the fear, and the hope that comes with seeking a better life in a new country. My mission is to make legal help more accessible, approachable, and human. Whether you're seeking a green card, facing deportation concerns, or navigating the complex visa process — I'm here to help.
          </p>
        </div>
      </section>

      <main className="p-8 grid gap-6">
        <section id="services">
          <Card className="bg-orange-300 border-orange-500">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-pink-800">Services Offered</h2>
              <ul className="list-disc list-inside text-xl space-y-2">
                <li>Green Card Applications</li>
                <li>Naturalization & Citizenship</li>
                <li>Family-Based Immigration</li>
                <li>Employment-Based Immigration</li>
                <li>Asylum & Deportation Defense</li>
                <li>Freelance Legal Writing & Consulting</li>
                <li>General Legal Guidance for Newcomers to the U.S.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section id="about">
          <Card className="bg-pink-200 border-pink-300 shadow-lg">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4 text-green-800">Why Work With Me?</h2>
              <p className="text-xl leading-relaxed">
                With a background in prosecution, legal aid, and civil litigation, I bring a balanced and compassionate approach to every case. I’ve served clients from all walks of life — and now I want to serve you, whether you're applying for a visa or fighting to stay with your family. My passion for justice is matched only by my commitment to people.
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="text-center">
          <Button className="bg-pink-600 hover:bg-pink-700 text-white text-lg">Schedule a Consultation</Button>
        </section>
      </main>

      <footer className="bg-gradient-to-r from-green-400 to-rose-200 text-white text-center py-6 mt-10">
        <p className="text-lg">&copy; {new Date().getFullYear()} Ethlena Macauley, Esq. All rights reserved.</p>
        <p className="text-md mt-1">Bright, Bold, and Here for You — Always.</p>
      </footer>
    </div>
  );
}
