import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from '@material-tailwind/react';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

import Layout from '../Components/Layout/Layout';
import { AuthContext } from '../utilities/contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { createUser, socialLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    const { email, password } = data;
    setLoading(true);
    createUser(email, password)
      .then((result) => {
        router.push('/');
        setLoading(false);
        setError('');
        toast.success(' Sign up success');
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    setLoading(true);
    socialLogin(googleProvider)
      .then((result) => {
        setLoading(false);
        router.push('/');
        setError('');
        toast.success(' log in success');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Layout title="Sign Up From">
      <section className="bg-white dark:bg-gray-900 h-screen mb-28">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="hidden lg:block lg:w-1/2 lg:mx-6">
              <img src="/assets/signIn.gif" alt="signIn" />
            </div>

            <div className="lg:mt-8 mt-5 lg:w-1/2 lg:mx-6">
              <Card className="w-full md:w-96 mx-auto py-7 bg-white border-t-2  border-gray-100">
                <Typography className="text-primary text-center text-4xl font-bold">
                  Sign Up
                </Typography>

                <form onSubmit={handleSubmit(handleSignUp)}>
                  <CardBody className="flex flex-col gap-4 mt-1">
                    <p className="text-red-600 font-bold">{error}</p>
                    <Input
                      label="User Name"
                      color="amber"
                      size="lg"
                      name="username"
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                    <Input
                      color="amber"
                      label="Email"
                      size="lg"
                      name="email"
                      type="email"
                      {...register('email', { required: true })}
                    />
                    {errors.email && (
                      <span className="text-red-500">
                        This field is required
                      </span>
                    )}
                    <Input
                      color="amber"
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
                    {errors.password &&
                      errors.password.type === 'minLength' && (
                        <span className="text-red-500 ">
                          Password must have 6 character
                        </span>
                      )}
                    {loading ? (
                      <Button
                        type="submit"
                        className="bg-primary shadow-lg hover:shadow-[#ffc10746]"
                        fullWidth
                      >
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-primary shadow-lg hover:shadow-[#ffc10746]"
                        fullWidth
                      >
                        Sign Up
                      </Button>
                    )}

                    <Typography variant="small" className="mt-2 ">
                      Already have an account?
                      <Link
                        href="/login"
                        className="ml-1 font-bold text-primary"
                      >
                        Sign in
                      </Link>
                    </Typography>
                  </CardBody>
                  <CardFooter divider className="pt-0">
                    <Button
                      onClick={handleGoogleSignIn}
                      className="bg-primary shadow-lg hover:shadow-[#ffc10746] mt-6"
                      fullWidth
                    >
                      SignIn with google
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
