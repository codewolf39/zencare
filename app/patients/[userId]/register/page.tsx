import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt=""
        className="side-img max-w-[390px]"
      />
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          {/* <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          /> */}
          <Link href="/react-ai" className="text-dark-700">
            Want AI to assess you !
          </Link>
          <RegisterForm user={user} />

          <p className="copyright py-12">©️ 2024 ZenCare</p>
        </div>
      </section>
    </div>
  );
};

export default Register;
