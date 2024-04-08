import { RegisterButton } from "app/(root)/(workshops)/workshop/salesforce-2/page";

export function OfferEnds() {
  return (
    <div className="mx-auto mt-8 flex max-w-5xl flex-col  items-center gap-y-3  sm:mt-10 md:mt-16">
      <RegisterButton />
      <p className="text-center text-xl font-normal">Offer ends in</p>
      <div className="mt-2 flex gap-6">
        <div
          className=" flex h-20 w-20 flex-col items-center justify-center rounded-[15px]
  border border-[#F4F4F4]"
        >
          <span>00</span>
          <p>Hours</p>
        </div>
        <div
          className=" flex h-20 w-20 flex-col items-center justify-center
  rounded-[15px] border border-[#F4F4F4]"
        >
          <span>29</span>
          <p>Mins</p>
        </div>
        <div
          className=" flex h-20 w-20 flex-col items-center justify-center
  rounded-[15px] border border-[#F4F4F4]"
        >
          <span>50</span>
          <p>Seconds</p>
        </div>
      </div>
      <p className=" text-center text-sm font-normal sm:text-base md:text-[21px]">
        This Webinar is for all freshers who are looking for new opportunities
        in the Salesforce and for those who want to switch their career in the
        Salesforce
      </p>
    </div>
  );
}
