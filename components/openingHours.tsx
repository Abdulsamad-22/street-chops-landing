import Image from "next/image";
import openingSchedule from "@/data/openingHours";
export default function OpeningHours() {
  return (
    <section className="w-full mb-20">
      <h2 className="text-center text-[1.125rem] md:text-[1.5rem] font-bold mb-4">
        Opening Hours
      </h2>
      <div className="bg-[#030200] w-full h-140 p-8">
        <div className="relative bg-[#fff] w-[30%] h-[100%] mx-auto rounded-b-[200px] pt-10 pb-4 px-8">
          {openingSchedule.map((activity, idx) => (
            <div key={idx} className="flex gap-8 justify-center space-y-3">
              <div className="w-1/2 ">
                <div className="text-[1rem] text-[#212121] font-medium">
                  {activity?.service}
                </div>
                <div className="text-[1rem]">{activity.day}</div>
              </div>

              <div className="">{activity.time}</div>
            </div>
          ))}

          <div>
            <Image
              className="absolute bottom-6 left-1/2 -translate-x-1/2"
              src="/logo.png"
              alt="logo"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
