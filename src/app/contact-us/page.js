"use client";

import Footer from '@/components/footer/footer';
import Button from '@/components/ui/button';
import WButton from '@/components/ui/button-white';
import GradientText from '@/components/ui/gradient-text';
import Image from 'next/image';
import React, { useState } from 'react';
import Modal from '@/components/ui/modal'; // Import the Modal component
import Link from 'next/link'; // Import Link from next/link

const Page = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phoneNumber: ''
    });

    const [showModal, setShowModal] = useState(false); // State to control modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const webhookUrl = 'https://hooks.zapier.com/hooks/catch/20787888/2kj7bom/';

        // Concatenate country code with phone number
        const dataToSubmit = {
            ...formData,
            phoneNumber: `+1${formData.phoneNumber}`
        };

        const urlParams = new URLSearchParams(dataToSubmit);

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlParams.toString()
            });

            if (response.ok) {
                setShowModal(true); // Show the modal on successful form submission
                setFormData({ // Clear the form fields
                    firstName: '',
                    lastName: '',
                    companyName: '',
                    email: '',
                    phoneNumber: ''
                });
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission error');
            }
        } catch (error) {
            console.error('Form submission error', error);
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section className='relative overflow-y-hidden'>
            <div className='max-w-[660px] mx-auto pt-[70px] mb-0'>
                <div className='flex justify-center'>
                    <Link href="/join-our-list">
                        <WButton>
                            <Image src="/assets/svg/partner.svg" alt="" width={20} height={20} />
                            Connect with us
                        </WButton>
                    </Link>
                </div>
                <GradientText className="text-center mt-7 !text-white" small>
                    Let's dig into how Meta Capital can help <span>your business</span>
                </GradientText>
            </div>
            <form onSubmit={handleSubmit} className='mt-16 max-w-[860px] mx-auto text-white'>
                <div className='flex w-full gap-3'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <label>First Name</label>
                        <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='w-full mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <label>Last Name</label>
                        <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='w-full mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                    </div>
                </div>
                <div className='flex w-full gap-3 mt-3'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <label>Company Name</label>
                        <input type='text' name='companyName' value={formData.companyName} onChange={handleChange} className='w-full mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                    </div>
                </div>
                <div className='flex w-full gap-3 mt-3'>
                    <div className='flex flex-col gap-1 flex-1'>
                        <label>Email</label>
                        <input type='email' name='email' value={formData.email} onChange={handleChange} className='w-full mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                    </div>
                    <div className='flex flex-col gap-1 flex-1'>
                        <label>Phone Number</label>
                        <div className='flex'>
                            <input type='text' value='+1' readOnly className='w-16 mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                            <input type='text' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className='flex-1 mt-1 rounded-lg bg-transparent border p-3 border-gray-600' />
                        </div>
                    </div>
                </div>
                <div className='mt-6 flex justify-center'>
                    <Button bg type='submit'>Send Message</Button>
                </div>
            </form>
            {showModal && <Modal message="Thank you for registering. One of our team members will be in contact with you shortly." onClose={closeModal} />}
            <Image src="/assets/images/dots.png" alt="" className="w-full absolute opacity-20 top-0 left-1/2 -translate-x-1/2 -z-[1]" width={1500} height={400} />
            <Image src="/assets/images/left-circle.png" alt='' className='left-0 absolute top-0 -z-[1]' width={836} height={658} />
            <Image src="/assets/images/right_circle.png" alt='' className='right-0 top-0 absolute -z-[1]' width={836} height={658} />
            <Footer/>
        </section>
    );
}

export default Page;
