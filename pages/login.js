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
import { useContext, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../utilities/contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { socialLogin, login } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  const handleSignIn = (data, e) => {
    const { email, password } = data;
    setLoading(true);
    console.log(data);

    login(email, password)
      .then((result) => {
        setLoading(false);
        setError('');
        e.target.reset();
        toast('login Success');
        console.log(result);
        router.push('/');
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
        setError('');
        toast.success('login Success');
        router.push('/');
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <Layout title="Login From">
      <section className="bg-white dark:bg-gray-900 h-screen mb-28 ">
        <div className="container px-6 pt-8  mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6 ">
            <div className="hidden lg:block lg:w-1/2 lg:mx-6 ">
              <img src="/assets/signIn.gif" alt="signIn" />
            </div>

            <div className="lg:mt-8 mt-5 lg:w-1/2 lg:mx-6">
              <Card className="w-full md:w-96 mx-auto py-7 bg-white border-t-2  border-gray-100">
                <Typography className="text-primary text-center text-4xl font-bold">
                  Sign In
                </Typography>

                <form onSubmit={handleSubmit(handleSignIn)}>
                  <CardBody className="flex flex-col gap-4 mt-1 space-y-3">
                    <p className="text-red-600 font-bold">{error}</p>

                    <Input
                      color="amber"
                      label="Email"
                      size="lg"
                      type="email"
                      name="email"
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
                      type="password"
                      name="password"
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
                        color="blue-gray"
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
                      {"Don't have an account?"}
                      <Link
                        href="/signUp"
                        className="ml-1 font-bold text-primary"
                      >
                        Sign up
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

export default Login;
