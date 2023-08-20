import React from "react";
import { productData } from "@/config/product";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { GiCheckMark } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io";
import Gallery from "@/components/gallery";
import CaseStudy from "@/components/case-study";
import FaqProduct from "@/components/faq-product";
import "styles/styles.css";

export async function generateStaticParams() {
  return productData.map((data) => {
    return {
      slug: data.heros.meta.toLowerCase().replace(" ", "-"),
    };
  });
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = productData.find(
    (product) =>
      product.heros.meta.toLowerCase().replace(" ", "-") === params.slug
  );

  if (!product) notFound();
  return {
    title: product.contents.title,
    description: product.contents.desc,
  };
}

const Product = ({ params }: { params: { slug: string } }) => {
  const product = productData.find(
    (product) =>
      product.heros.meta.toLowerCase().replace(" ", "-") === params.slug
  );
  if (!product) notFound();

  return (
    <>
      <section className="space-y-6 pt-[3rem] md:pt-[5rem] ">
        <div className="flex-row">
          <div className="container grid-cols-1 grid md:grid-cols-[1fr,1fr] gap-10 mb-[2rem]">
            <div className="flex flex-col">
              <h1 className="text-[2rem] leading-none md:text-[40px] font-semibold mb-5">
                {product.contents.title}
              </h1>
              <p className="mb-5 max-w-[85%]">{product.contents.desc}</p>
              <div className="mt-[1rem]">
                <Link
                  href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                  target="_blank"
                  className="btn-md-orange"
                >
                  <span className="text-white text-xl mr-2">
                    <IoLogoWhatsapp />
                  </span>
                  {product.heros.action}
                </Link>
              </div>
            </div>
            <div className="flex rounded-xl relative overflow-hidden">
              <Image
                src={product.heros.image}
                alt="image"
                width={500}
                height={500}
                className="w-[450px] md:w-[500px] lg:w-[600px] xl:w-[700px] lg:mt-[-3rem] mb-[3rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 md:py-[3rem] big-card-bg-gradient">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-[1rem] text-white">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-5">Topik Pembahasan</h2>
            {product.contents.topics.map((topic, i) => (
              <ul key={i} className="flex items-center gap-2">
                <span className="mb-2">
                  <GiCheckMark />
                </span>
                <li className="mb-2">{topic}</li>
              </ul>
            ))}
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-5">Metode Training</h2>
            {product.contents.methods.map((topic, i) => (
              <ul key={i} className="flex items-center gap-2">
                <span className="mb-2">
                  <GiCheckMark />
                </span>
                <li className="mb-2">{topic}</li>
              </ul>
            ))}
          </div>

          <div className="flex flex-col">
            <h2 className="text-lg font-bold mb-5">Durasi Training</h2>
            <div className="flex flex-col justify-between h-full ">
              <p className="mb-5">{product.contents.duration}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 md:pt-[3rem] ">
        <div className="container">
          <Gallery images={product.contents.images} />
        </div>
      </section>

      <section className="space-y-6 md:py-[5rem] md:my-[3rem] bg-slate-100">
        <div className="container">
          <h2 className="text-center text-2xl md:text-3xl font-bold mx-auto md:max-w-[70%] mb-2">
            Cerita sukses klien yang telah mempercayai Squadgames
          </h2>
          <p className="text-center text-base font-light mb-[3rem] mx-auto md:w-[70%] lg:w-[50%]">
            Solusi: {product.contents.title}
          </p>
          <CaseStudy caseStudies={product.caseStudy} />
        </div>
      </section>

      <section className="space-y-6 pt-[3rem] md:pt-[4rem] pb-[1rem] md:pb-[4rem]">
        <div className="container">
          <FaqProduct faq={product.faq} />
        </div>
      </section>

      <section className="space-y-6 py-[2rem] mb-[1rem]">
        <div className="container ">
          <div className="bg-slate-100 py-[3rem] border border-[#ABD3E8] rounded-md">
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-[1rem] mx-auto md:max-w-[70%]">
              Siap untuk bermain bersama Squadgames?
            </h2>
            <p className="text-center text-base font-light mb-2 mx-auto md:w-[70%] lg:w-[50%]">
              Tingkatkan performa tim Anda lewat training yang menyenangkan
              dengan berbagai games dari Squadgames.
            </p>

            <div className="flex justify-center mt-[2rem]">
              <Link
                href="https://wa.me/6282115570991?text=Hi%20Squadgames,%20saya%20ingin%20konsultasi%20tentang%20training"
                target="_blank"
                className="btn-md-orange"
              >
                <span className="text-white text-xl mr-2">
                  <IoLogoWhatsapp />
                </span>
                Jadwalkan Konsultasi Gratis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;