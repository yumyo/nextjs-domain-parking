import { SVGProps } from "react";

// Next
import Image from "next/image";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4gQQ8xGqZaT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import dynamic from 'next/dynamic';
const ContactForm = dynamic(() => import('@/components/contact-form'), { ssr: false });
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="md:flex md:min-h-screen">
      <section className="bg-[#f7f7f4] p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            <span className="block">nicolapernice.com</span>
          </h1>
          <h2 className="text-3xl font-bold mb-4">
            <span className="block">nicolapernice.it</span>
            <span className="block">nicopernice.com</span>
            <span className="block">nicopernice.it</span>
          </h2>
          <p className="text-lg text-[#22c55e] mb-0 font-bold italic">are available for sale</p>
          <p className="text-lg mb-6">For instantly purchase, Please make an order.</p>
          <Button className="bg-[#22c55e] text-white w-full md:w-auto">Buy the whole pack now for $4999</Button>
          <div className="lg:flex items-center justify-between mt-8 text-sm">
            <div className="flex">
              <PhoneIcon className="text-[#22c55e] mr-4 mb-6 lg:mb-0" />
              <strong>+44 7949026708</strong>
            </div>
            <div className="flex">
              <MailboxIcon className="text-[#22c55e] mr-4" />
              <strong>ekrypt@mailfence.com</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white p-8 md:w-1/2 md:flex md:flex-col md:justify-center md:items-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Interested just in this domain?</h2>
          <ContactForm />
          <div className="flex items-center justify-end mt-8 text-sm">
            <ShieldCheckIcon className="text-[#22c55e]" />
            <span>Privacy & Terms</span>
          </div>
        </div>
      </section>
    </div>
  )
}

function MailboxIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  )
}


function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ShieldCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}