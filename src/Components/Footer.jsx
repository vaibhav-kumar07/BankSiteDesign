import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";
import styles from "../style";

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.flexStart} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full `}>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={logo}
            alt="imageslogo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrapmd:mt-0 mt-10">
          {footerLinks.map((footerLink)=>(
            <div key={footerLink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] text-white">{footerLink.title}</h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link,index)=>(
                  <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index!==footerLink.links.length-1 ? "mb-4" :"mb-0"}`}>{link.name}</li>
                ))}
              </ul>
              </div>
          ))}
        </div>
      </div>
      <div className="flex ml-5 m-6">
        <p className="font-poppins font-normal text-center text-[18px]leading-[27px] text-white" >
          2021 Hoobank .all Right Reserved @ Designed  by vaibhav 
        </p>
        <div className="flex flex-row md:mt-0 mt-6  ml-6">
       {socialMedia.map((social,index)=>(
        <img  key={social.id} src={social.icon} alt="image" className={`w-[21px] h-[21px] object-contain cursor-pointer ${index!==socialMedia.length-1 ? "mr-6":"mr-0"}`}/>
       ))}
        </div>
      </div>
    </section>
  );
}
