import React from "react";
import Card from "../Card";
import Logo from "@/components/atoms/Logo";
import Image from "next/image";
import Email from "@/icons/Email";
import Phone from "@/icons/Phone";
import Address from "@/icons/Address";
import Link from "next/link";
import Facebook from "@/icons/Facebook";
import Twitter from "@/icons/Twitter";
import LinkedIn from "@/icons/LinkedIn";

type FooterProps = {};

function Footer({}: FooterProps) {
  const contact = [
    {
      icon: <Email />,
      value: "hello@littlelearners.com",
    },
    {
      icon: <Phone />,
      value: "+91 91813 23 2309",
    },
    {
      icon: <Address />,
      value: "Somewhere in the World",
    },
  ];
  const navigation = [
    {
      page: "Home",
      sections: [
        {
          name: "Features",
          link: "/#features",
        },
        {
          name: "Our Testimonials",
          link: "/#our-testimonials",
        },
        {
          name: "FAQ",
          link: "/#faq",
        },
      ],
    },
    {
      page: "About Us",
      sections: [
        {
          name: "Our Mission",
          link: "/about-us/#our-mission",
        },
        {
          name: "Our Vision",
          link: "/about-us/#our-vision",
        },

        {
          name: "Awards and Recognitions",
          link: "/about-us/#awards-and-recognitions",
        },
        {
          name: "History",
          link: "/about-us/#history",
        },

        {
          name: "Teachers",
          link: "/about-us/#teachers",
        },
      ],
    },
    {
      page: "Academics",
      sections: [
        {
          name: "Special Features",
          link: "/academics/#special-features",
        },
        {
          name: "Gallery",
          link: "/academics/#gallery",
        },
      ],
    },

    {
      page: "Contact Us",
      sections: [
        {
          name: "Information",
          link: "/contact-us/#information",
        },
        {
          name: "Map & Direction",
          link: "/contact-us/#map-and-direction",
        },
      ],
    },
  ];
  const policies = [
    { name: "Terms of Service", link: "terms-of-service" },
    { name: "Privacy Policy", link: "privacy-policy" },
    { name: "Cookie Policy", link: "cookie-policy" },
  ];
  const socialMedia = [
    {
      icon: <Facebook />,
      link: "#",
    },
    {
      icon: <Twitter />,
      link: "#",
    },
    {
      icon: <LinkedIn />,
      link: "#",
    },
  ];
  return (
    <div className="px-[16px] pb-[20px] laptop:p-[50px] laptop:pb-[40px] desktop:p-[50px]">
      <Card className="space-y-[30px] p-[30px] pt-[60px] laptop:space-y-[40px] laptop:p-[80px] laptop:pb-[40px] desktop:space-y-[50px] desktop:px-[133px] desktop:pt-[100px]">
        <div className="flex flex-col gap-10 laptop:flex-row laptop:gap-20">
          <div className="laptop:w-1/3">
            <div className="space-y-10 desktop:space-y-[50px]">
              <div className="flex flex-col items-center gap-4 laptop:items-start desktop:gap-5">
                <div className="relative aspect-[182/40] w-full max-w-[182px] desktop:max-w-[228px]">
                  <Image src={"/assets/logo.svg"} fill alt="object-cover" />
                </div>
                <div>
                  We believe in the power of play to foster creativity,
                  problem-solving skills, and imagination.
                </div>
              </div>
              <div className="space-y-5 desktop:space-y-6">
                {contact.map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center gap-2 font-medium desktop:gap-2.5 desktop:text-xl"
                  >
                    <div className="size-8 rounded-[4px] border-2 border-secondary-15 bg-primary-97 desktop:size-10">
                      {item.icon}
                    </div>
                    <div>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 laptop:w-2/3 laptop:grid-cols-4">
            {navigation.map((item) => (
              <div
                key={item.page}
                className="space-y-5 desktop:space-y-6 desktop:text-xl"
              >
                <div className="font-semibold desktop:text-xl">{item.page}</div>
                {item.sections.map((section) => (
                  <div key={section.name} className="space-y-[14px]">
                    <Link href={section.link}>{section.name}</Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center space-y-5 border-y border-secondary-15 py-4 laptop:flex-row laptop:justify-between laptop:space-y-0 desktop:py-5">
            <div className="flex divide-x-2 divide-secondary-15">
              {policies.map((policy) => (
                <div
                  key={policy.name}
                  className="px-1.5 text-[14px] font-medium laptop:px-2.5 laptop:text-base desktop:px-4 desktop:text-[18px]"
                >
                  <Link href={policy.link}>{policy.name}</Link>
                </div>
              ))}
            </div>
            <div className="flex gap-2.5 laptop:gap-[14px]">
              {socialMedia.map((medium) => (
                <Link
                  href={medium.link}
                  key={medium.link}
                  className="flex size-11 items-center justify-center rounded-lg border-2 border-secondary-15 bg-primary-90 laptop:size-12 desktop:size-14"
                >
                  <span className="size-5 desktop:size-6">{medium.icon}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center text-[14px] text-secondary-40 laptop:mt-5 laptop:text-base desktop:mt-[30px] desktop:text-[18px]">
            Copyright © [2023] Little Learners Academy. All rights reserved.
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Footer;
