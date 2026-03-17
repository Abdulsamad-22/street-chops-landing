import Image from "next/image";
import openingSchedule from "@/data/openingHours";
export default function OpeningHours() {
  return (
    <section className="w-full mb-20">
      <h2 className="text-center text-[1.125rem] md:text-[1.5rem] font-bold mb-4">
        Opening Hours
      </h2>

      <div className="">
        <div className="relative flex flex-col md:flex-row gap-12 bg-[#b70e10] w-full h-350 md:h-140 py-12 px-8 overflow-hidden">
          <Image
            src="/alubosa.png"
            alt="background image"
            width={280}
            height={200}
            className="object-cover absolute -bottom-30 -right-30"
          />

          <Image
            src="/pepper.png"
            alt="background image"
            width={280}
            height={200}
            className="object-cover absolute top-0 left-20 -translate-x-1/2 rotate-[60deg]"
          />
          <div className="relative w-full md:w-[30%] h-[30%] md:h-[100%] bg-[#fff] rounded-tl-[250px] rounded-br-[250px]">
            <div>
              <Image
                src={"/unsplash_O95r2WVvtr0.png"}
                alt=""
                fill
                className="rounded-tl-[250px] rounded-br-[250px]"
              />
            </div>
          </div>
          <div className="relative bg-[#fff] w-full md:w-[30%] h-[40%] md:h-[100%] mx-auto rounded-b-[200px] pt-10 pb-4 px-8">
            {openingSchedule.map((activity, idx) => (
              <div key={idx} className="flex gap-8 justify-center space-y-3">
                <div className="w-full md:w-1/2 ">
                  <p className="text-[1rem] text-[#b70e10] font-semibold">
                    {activity?.service}
                  </p>
                  <p className="text-[1rem] font-medium">{activity.day}</p>
                </div>

                <p className="">{activity.time}</p>
              </div>
            ))}

            <div>
              <Image
                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                src="/logo.png"
                alt="logo"
                width={70}
                height={70}
              />
            </div>
          </div>
          <div className="relative w-full md:w-[30%] h-[30%] md:h-[100%] bg-[#fff] rounded-tr-[250px] rounded-bl-[250px]">
            <Image
              src={"/unsplash_-fGRJrT2tEE.png"}
              alt=""
              fill
              className="rounded-tr-[250px] rounded-bl-[250px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
