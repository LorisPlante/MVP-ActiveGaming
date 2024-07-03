"use client";

import { Logo } from "@/components/logo";
import  SignInBtn from "../../components/SignInBtn"

import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

export default function Onboarding() {
  const swiperRef = useRef<SwiperClass | null>(null);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    const previousIndex = swiper.previousIndex;

    // Allow swipe only to the left (increment slide index)
    if (currentIndex < previousIndex) {
      swiper.slideTo(previousIndex); // Go back to the previous slide
    }
  };
  return (
    <main className="h-screen w-screen max-h-screen flex flex-row items-center justify-center overflow-y-hidden">
      <Swiper
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="overflow-y-hidden">
        <SwiperSlide>
          <section className="min-h-screen w-screen flex flex-col items-center justify-center bg-[url(/medias/man-running-in-forest.png)] bg-center text-white font-paragraph py-24">
            <Logo sizew={150} sizeh={150} color="fill-purple" />
            <h1 className="font-titre text-5xl text-center font-bold uppercase">S'améliorer</h1>
            <p className="pt-6 px-[15vw] text-xl font-bold text-center">Grâce à des exercices , qui vous sont entièrement adaptés .</p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="min-h-screen w-screen flex flex-col items-center justify-center bg-[url(/medias/player-screaming.png)] bg-center text-white font-paragraph py-24">
            <Logo sizew={150} sizeh={150} color="fill-purple" />
            <h1 className="font-titre text-5xl text-center font-bold uppercase">DEVENEZ , UNE LÉGENDE DU JEUX</h1>
            <p className="pt-6 px-[15vw] text-xl font-bold text-center">
              Plus vous , faites de l’activité physiques . Plus vous , serez récompensés , en débloquant des items spéciaux , et des personnages uniques
            </p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="min-h-screen w-screen flex flex-col items-center justify-center gap-5 bg-gray-950 text-white font-paragraph py-24">
            <Logo sizew={150} sizeh={150} color="fill-purple" />
            <h1 className="font-titre text-3xl text-center font-bold uppercase">Comment ca marche ?</h1>
            <div className="flex flex-col gap-3 w-full font-titre font-semibold">
              <p className="bg-gray-700 py-8 w-[90%] mx-auto text-center inline-block rounded uppercase">Selectionne ton pass</p>
              <p className="bg-gray-700 py-8 w-[90%] mx-auto text-center inline-block rounded uppercase">Réalise des défis sportifs</p>
              <p className="bg-gray-700 py-8 w-[90%] mx-auto text-center inline-block rounded uppercase">débloque des récompenses</p>
            </div>
            <a href="/onboarding" className="bg-purple block w-[80vw] mx-auto text-center py-4 rounded font-titre font-bold mt-[5vh]">
              Continuer
            </a>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className="min-h-screen w-screen flex flex-col items-center justify-center bg-[url(/medias/guys-on-phone.png)] bg-center text-white font-paragraph py-24">
            <Logo sizew={150} sizeh={150} color="fill-purple" />
            <h1 className="font-titre text-5xl text-center font-bold uppercase">L’ENTRAIDE , AU SERVICE DU PROGÈS</h1>
            <p className="pt-6 px-[15vw] text-xl font-bold text-center">
              Partager vos progressions, avec vos amis et d’autres passionnée par la culture du jeux vidéo , et la passion pour le sport .
            </p>
            <a href="/home" className="bg-purple block w-[80vw] mx-auto text-center py-4 rounded font-titre font-bold mt-[10vh]">
             < SignInBtn/>
            </a>
          </section>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}