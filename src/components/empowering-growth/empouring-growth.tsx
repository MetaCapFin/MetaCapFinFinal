import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import GradientText from "../ui/gradient-text";
import Link from "next/link";

const EmpouringGrowth = () => {
  return (
    <>
      <section className="py-20 relative">
        <div className="flex flex-col justify-center items-center">
          <Image src="/assets/svg/fav-icon.svg" alt="" width={60} height={60} />
          <GradientText
            className="my-6 text-center text-white max-w-[660px] mx-auto"
            small
          >
            Empowering Growth <br />
            <span>Fueling Returns</span>
          </GradientText>
          <p className="text-white/70 max-w-[660px] font-light text-center mb-10 text-xl mx-auto">
            Whether you’re growing your business or growing your
            wealth, MetaCap your success.
          </p>
          <Link href="/join-our-list">
            <Button bg className="!py-[16px] w-[236px]">Connect with us</Button>
          </Link>
        </div>
        <Image
          src="/assets/images/empouring-bg.png"
          alt=""
          width={1200}
          height={400}
          className="opacity-30 w-full z-[-1] absolute object-cover inset-0"
        />
      </section>
    </>
  );
};

export default EmpouringGrowth;
