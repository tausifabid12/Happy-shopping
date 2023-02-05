import React, { useState } from 'react';
import Layout from '../Components/Layout/Layout';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';
import Link from 'next/link';

const faq = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  return (
    <Layout title="FAQ">
      <section className="bg-white dark:bg-gray-900 min-h-screen mb-20 lg:px-20">
        <div className=" lg:px-6 py-4 lg:py-12 mx-auto">
          <h1 className="text-xl  font-semibold text-center text-gray-900 lg:text-3xl dark:text-white">
            Have any Questions?
          </h1>
          <p className="text-sm lg:text-lg text-center text-gray-600  dark:text-white">
            Find The most commonly asked questions and If you face any problem
            please contact us.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-4 mt-8 xl:mt-16 lg:gap-2">
            <div className="lg:pl-3 px-2 lg:px-0 hidden lg:block">
              <h1 className="text-lg lg:text-xl lg:pt-4 text-center lg:text-left font-semibold text-gray-800 dark:text-white">
                Table of Content
              </h1>

              <div className="mt-4 lg:space-y-2 grid grid-cols-2 gap-2 text-center lg:text-left  place-content-center lg:block items-center justify-center flex-wrap lg:mt-4 font-bold">
                <Link
                  href="#"
                  className="block  text-primary dark:text-primary hover:underline"
                >
                  General
                </Link>
                <Link
                  href="#"
                  className="block  text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Trust & Safety
                </Link>
                <Link
                  href="#"
                  className="block text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Services
                </Link>
                <Link
                  href="#"
                  className="block text-gray-500 dark:text-gray-300 hover:underline"
                >
                  Billing
                </Link>
              </div>
            </div>

            <div className="flex-1 col-span-3 mt-8 px-3 lg:px-0 lg:mt-0">
              <Accordion open={open === 1} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  What is Happy Shopping
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How to use Happy Shopping App?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  What can I do with Happy Shopping?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 4} animate={customAnimation}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  What Are the Advantages Of Happy Shopping?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default faq;
