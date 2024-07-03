import { Logo } from "@/components/logo";

export default function Home() {
  return (
    <main className="h-screen w-screen max-h-screen flex flex-col items-center justify-center ">
      <section className="h-full w-full flex flex-col items-center justify-center bg-[url(/medias/woman-streching-leg.png)] bg-center text-white font-paragraph py-24">
        <Logo sizew={150} sizeh={150} color="fill-purple" />
        <h1 className="font-titre text-4xl text-center font-bold">Bienvenue chez Active Gaming !</h1>
        <p className="pt-6">Améliorez, vos compétences In-Game</p>
        <p>Grâce aux sport </p>
        <a href="/onboarding" className="bg-purple block w-[80vw] mx-auto text-center py-4 rounded font-titre font-bold mt-[10vh]">
          Commencer
        </a>
      </section>
    </main>
  );
}