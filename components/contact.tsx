"use client";


import { motion } from "framer-motion";

import SectionWrapper from "@/hoc/sectionWrapper";
import { slideIn, fadeIn } from "@/lib/utils";
import { Contact } from "@/types";

import Heading from "@/components/ui/heading";
import ContactCard from "@/components/contact-card";
import URLContactCard from "@/components/url-contact-card";
import EmailForm from "@/components/ui/email-form";
import EarthCanvas from "@/components/canvas/earth-canvas";

interface ContactProps {
    contacts: Contact[];
    urlcontacts: Contact[];
};

const Contact: React.FC<ContactProps> = ({ contacts, urlcontacts }) => {

    return (
        <SectionWrapper idName="contact">
            {/* <motion.div variants={slideIn('left', 'tween', 0.2, 1)}> */}
                <Heading title="Contact" description="Get in touch" />
            {/* </motion.div> */}

            <p
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                These cards represent diffrent ways i can be contacted through social media and other means. and also through email with the form below
                I am delighted to connect with you, i believe in open communication and providing multiple ways for you to reach out to me. Whether you have questions, feedback, or simply want to say hello, i am here to listen and assist. <br />
                Explore the various contact options below, and choose the one that suits you best. I value your input and look forward to hearing from you
            </p>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 text-white">
                {contacts?.map((item, index) => (
                    <ContactCard
                        key={item.id}
                        index={index}
                        {...item}
                    />
                ))}

                {urlcontacts?.map((item, index) => (
                    <URLContactCard
                        key={item.id}
                        index={index}
                        {...item}
                    />
                ))}
            </div>

            <div className="mt-20 xl:mt-12 xl:flex-row flex-col-reverse flex gap-0 items-center overflow-hidden">
                <div
                    className="sm:w-2/5 w-full"
                >
                    <Heading
                        title="Email"
                        description="You can contact me through email by using the form below"
                    />

                    <EmailForm />
                </div>

                <div
                    className="xl:flex-1 xl:h-[550px] md:h-[500px] h-[350px] sm:w-3/5 w-full"
                > 
                    <EarthCanvas />
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;