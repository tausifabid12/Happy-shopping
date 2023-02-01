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
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Layout from '../Components/Layout/Layout';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };
  return (
    <Layout title="Sign Up From">
      <div className="h-screen w-full pt-20 bg-gray-50">
        <Card className="w-full md:w-96 mx-auto bg-white">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <CardBody className="flex flex-col gap-4 mt-1">
              <p className="text-red-600 font-bold">{error}</p>
              <Input
                label="User Name"
                size="lg"
                name="username"
                {...register('username', { required: true })}
              />
              {errors.username && (
                <span className="text-red-500">This field is required</span>
              )}
              <Input
                label="Email"
                size="lg"
                name="email"
                type="email"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
              <Input
                label="Password"
                size="lg"
                name="password"
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                })}
              />
              {errors.password && errors.password.type === 'required' && (
                <span className="text-red-500">This is required</span>
              )}
              {errors.password && errors.password.type === 'minLength' && (
                <span className="text-red-500 ">
                  Password must have 6 character
                </span>
              )}
              {loading ? (
                <Button
                  type="submit"
                  color="blue-gray"
                  variant="gradient"
                  fullWidth
                >
                  Loading...
                </Button>
              ) : (
                <Button type="submit" variant="gradient" fullWidth>
                  Sign Up
                </Button>
              )}

              <Typography variant="small" className="mt-2 ">
                Already have an account?
                <Link href="/login" className="ml-1 font-bold text-blue-500">
                  Sign in
                </Link>
              </Typography>
            </CardBody>
            <CardFooter divider className="pt-0">
              <Button
                // onClick={handleGoogleSignIn}
                variant="gradient"
                fullWidth
                className="mt-6"
              >
                SignIn with google
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default SignUp;
