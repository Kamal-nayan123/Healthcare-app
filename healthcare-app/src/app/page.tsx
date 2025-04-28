// src/app/page.tsx
'use client'; // Needed for Framer Motion animations

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiHeart, FiActivity, FiUsers } from 'react-icons/fi'; // Example icons

export default function LandingPage() {
  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ // Custom prop for stagger delay
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger effect
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 bg-gradient-to-br from-primary-light via-white to-secondary/10 rounded-lg shadow-lg overflow-hidden" // Using custom colors
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
          className="relative w-48 h-48 mx-auto mb-6" // Container for image
        >
          {/* Placeholder Image - Replace with a relevant healthcare graphic/illustration */}
          <Image
            src="/images/healthcare-hero.svg" // **IMPORTANT: Create a `public/images` folder and add an SVG or PNG here**
            alt="Healthcare Illustration"
            layout="fill" // Makes image fill the container
            objectFit="contain" // Adjust as needed (cover, contain)
            priority // Load image eagerly as it's above the fold
          />
        </motion.div>

        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold text-primary-dark mb-4"
        >
          Welcome to HealthApp
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Your all-in-one solution for seamless healthcare management. Track, monitor, and connect like never before.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href="/home" // Link to Clerk sign-up page
            className="inline-block bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose HealthApp?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: FiHeart, title: 'Personalized Tracking', description: 'Monitor vitals and symptoms easily.' },
            { icon: FiActivity, title: 'Activity Monitoring', description: 'Integrate with wearables for fitness data.' },
            { icon: FiUsers, title: 'Connect with Providers', description: 'Securely share data with your doctor.' },
            { icon: FiCheckCircle, title: 'Appointment Reminders', description: 'Never miss an important check-up.' },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              custom={index} // Pass index to variants for stagger
              initial="hidden"
              whileInView="visible" // Animate when in view
              viewport={{ once: true, amount: 0.3 }} // Trigger animation once when 30% visible
              variants={featureVariants}
            >
              <feature.icon className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Add more sections as needed: Testimonials, How it Works, etc. */}

    </div>
  );
}