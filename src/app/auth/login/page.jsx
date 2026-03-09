'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useLink } from 'next/navigation';
import logo from '@/assets/img/favicon.png';
import { Form, FormInput } from '@/components/forms';
import { useForm } from 'react-hook-form';
import './login.css';

const Login = () => {
    const router = useRouter();
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorLoginMsg, setErrorLoginMsg] = useState('');

    const loginForm = useForm({
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onSubmit = (data) => {
        const { username, password } = data;
        setErrorLogin(false);
        setErrorLoginMsg('');
        // TODO: call your auth API here, e.g. loginAuth(username, password)
        // For now just log and optionally redirect
        console.log('Login submit', { username, password });
        router.replace('/dashboard');
        // router.push('/dashboard');
    };

    return (
        <>
            <div className="account-pages w-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card">
                                <div className="card-body p-4 position-relative">
                                    <div className="text-center w-75 m-auto">
                                        <Link href="/">
                                            <Image
                                                src={logo}
                                                alt="NSL"
                                                className="img-fluid"
                                                width={120}
                                                height={48}
                                            />
                                        </Link>
                                        <p className="dark-gray-color mb-3 mt-3 font-w-700">
                                            Enter your email and password to login.
                                        </p>
                                    </div>

                                    {errorLogin && (
                                        <div
                                            className="alert alert-danger mt-3"
                                            role="alert"
                                        >
                                            {errorLoginMsg || 'Invalid email or password.'}
                                        </div>
                                    )}

                                    <Form {...loginForm}>
                                        <form onSubmit={loginForm.handleSubmit(onSubmit)}>
                                            <FormInput
                                                control={loginForm.control}
                                                name="username"
                                                label="Email"
                                                placeholder="Enter your email"
                                                type="email"
                                                rules={{
                                                    required: 'Email is required',
                                                    minLength: {
                                                        value: 3,
                                                        message: 'Email must be at least 3 characters',
                                                    },
                                                }}
                                            />
                                            <div className="mb-3">
                                                <FormInput
                                                    control={loginForm.control}
                                                    type="password"
                                                    name="password"
                                                    label="Password"
                                                    placeholder="Enter your password"
                                                    rules={{
                                                        required: 'Password is required',
                                                    }}
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <button type="submit" className="btn btn-block w-100 main-btn">
                                                    Log In
                                                </button>
                                            </div>
                                        </form>
                                    </Form>

                                    {/* <p className="text-center mb-0">
                                        <Link
                                            href="/auth/forget-password"
                                            className="main-font-color font-w-600"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer footer-alt dark-gray-color font-w-700">
                {new Date().getFullYear()} &copy; by{' '}
                <a
                    href="https://nsl-me.com/"
                    className="main-font-color font-w-700"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    NSL
                </a>
            </footer>
        </>
    );
};

export default Login;
