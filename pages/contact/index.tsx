import ContactCard from "@components/ContactCard";
import Image from "next/image";
import line from "@public/images/line.png";
import Head from "next/head";

export default function Contact() {
  return (
    <main>
      <Head>
        <title>DesignbyMelz | Contact</title>
      </Head>
      <div className="text-center text-grayishRed mt-20">
        <div className="flex items-center justify-center ">
          {/* <Image src="/images/line.png" width={80} height={10} alt="" /> */}
          <div className="bg-grayishRed w-16 h-px mx-4"></div>
          <h1 className="font-lanche text-2xl md:text-4xl">Contact.</h1>
          <div className="bg-grayishRed w-16 h-px mx-4"></div>
          {/* <Image src="/images/line.png" width={80} height={10} alt="" /> */}
        </div>
        <p className="mt-12 md:w-1/2 mx-auto text-base pr-8 pl-8">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nullam nec facilisis sem, quis ultrices erat.
          Mauris tincidunt, lacus aliquam porttitor suscipit, leo nunc lobortis
          augue, eget lacinia augue ante et odio. Aenean a tempus magna, ut
          venenatis nunc. Sed interdum cursus ligula, vitae ultrices purus
          ullamcorper vel.
        </p>
        <div className="md:w-2/5 mx-auto">
          <div className="flex flex-col md:flex-row mt-8 justify-center gap-8 md:gap-14 items-center">
            <ContactCard
              title="Instagram"
              imageSrc="/images/sosmed/instagram.svg"
              contact="@designbymelz"
            />
            <ContactCard
              title="Whatsapp"
              imageSrc="/images/sosmed/whatsapp.svg"
              contact="+62 896 503 07711"
            />
            <ContactCard
              title="Behance"
              imageSrc="/images/sosmed/behance.svg"
              contact="meliyani210"
            />
          </div>
          <div className="bg-softOrange text-darkPink mt-12 text-base w-full pt-4 pb-4 font-bold">
            Contact us for more info
          </div>
        </div>
      </div>
    </main>
  );
}
