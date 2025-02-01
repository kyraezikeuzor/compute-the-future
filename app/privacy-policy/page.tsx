import { Heading } from '@/components/ui/heading'
import Link from 'next/link'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Compute the Future",
  description: "Read the privacy policy for Compute the Future, outlining how we protect and handle your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
    <section className='flex flex-col gap-10 lg:px-32'>
        <header className='h-full w-full flex flex-col gap-5 justify-between items-center'>
            <Heading as='h1'>Privacy Policy</Heading>
            <p className='lg:text-center md:text-xl'>
            Your privacy is critically important to us. This policy explains how we collect,
            use, and safeguard your information when you use our website and services.
            </p>
        </header>
        <div>
            <Heading as='h3'>Information We Collect</Heading>
            <p>
            We collect information that you voluntarily provide to us when you use our services, such as your name, email
            address, and any other information you choose to share. Additionally, we may automatically collect data about
            your device, browser, and usage patterns when you interact with our website.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>How We Use Your Information</Heading>
            <p>
            We use the information we collect to:
            <ul className="space-y-2 text-gray-700 mt-5">
                <li className="px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">Provide, maintain, and improve our services.</li>
                <li className="px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">Respond to your inquiries and communicate with you.</li>
                <li className="px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">Ensure the security of our website and services.</li>
                <li className="px-4 py-2 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">Comply with legal obligations.</li>
            </ul>
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Information Sharing</Heading>
            <p>
            We do not sell, rent, or share your personal information with third parties except as necessary to provide our
            services or comply with the law. For example, we may share information with service providers who assist us in
            operating our website.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Your Choices</Heading>
            <p>
            You have the right to access, update, or delete your personal information. You can also opt out of receiving
            communications from us at any time by contacting us directly.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Security</Heading>
            <p>
            We implement reasonable security measures to protect your information. However, no method of transmission over
            the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Children&apos;s Privacy</Heading>
            <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly collect personal
            information from children. If we learn that we have collected information from a child under 13, we will delete
            it promptly.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Changes to This Privacy Policy</Heading>
            <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy
            on this page. Your continued use of our services after any changes indicates your acceptance of the updated
            policy.
            </p>
        </div>
  
        <div>
            <Heading as='h3'>Contact Us</Heading>
            <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at <Link href='mailto:contact@computefutures.org' className="text-blue-400 underline">contact@computefutures.org</Link>.
            </p>
        </div>
    </section>
    )
}