import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';
import Link from 'next/link';

const ContactUs = () => {
  return (
    <section class=" dark:bg-gray-900 h-auto bg-white lg:mx-10 lg:mt-16 rounded-xl lg:pt-10">
      <div>
        <h4 className="text-center text-primary font-semibold">contact us</h4>
        <h4 className="text-center font-semibold text-2xl lg:text-4xl pt-4">
          We Are Always Delighted To Hear From You
        </h4>
      </div>
      <div class="container lg:px-6 pt-4  mx-auto">
        <div class="lg:flex lg:items-center lg:-mx-6 ">
          <div class="hidden lg:block lg:w-1/2 lg:mx-6 ">
            <img src="/assets/contact-us.gif" alt="contact us" />
          </div>

          <div className="w-full lg:w-1/2">
            <Card className="w-full mx-auto md:w-[470px] py-8 lg:py-10 px-4 lg:px-10 bg-white border-t-2  border-gray-100">
              <Typography className="text-primary text-center text-4xl font-bold">
                Contact Us
              </Typography>

              <form>
                <div className="flex flex-col  gap-4 h-auto py-7 lg:py-16 mt-1 space-y-3">
                  <Input
                    color="amber"
                    label="Name"
                    size="lg"
                    type="text"
                    name="email"
                  />
                  <Input
                    color="amber"
                    label="Email"
                    size="lg"
                    type="email"
                    name="email"
                  />
                  <Input
                    color="amber"
                    label="Write How Can we Help you..."
                    className="h-24 mb-20"
                    type="text"
                    name="password"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-primary shadow-lg hover:shadow-[#ffc10746] mt-20 lg:mt-6"
                  fullWidth
                >
                  Send
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
