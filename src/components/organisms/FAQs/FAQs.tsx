import FAQsAccordion from "@/components/molecules/FAQsAccordion";
import Section from "@/components/molecules/Section";
import React from "react";

function FAQs() {
  const faqs = [
    {
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      question: "Is there a uniform policy for students?",
      answer:
        "Yes, students are required to wear uniforms, which can be purchased through our designated supplier.",
    },
    {
      question: "What extracurricular activities are available for students?",
      answer:
        "We offer a variety of extracurricular activities, including sports, music, art, and STEM clubs.",
    },

    {
      question: "How do you handle food allergies and dietary restrictions?",
      answer:
        "We take food allergies and dietary restrictions very seriously and work with parents to ensure all students' needs are safely met.",
    },

    {
      question:
        "What is the teacher-to-student ratio at Little Learners Academy?",
      answer:
        "Our teacher-to-student ratio is 1:12, ensuring personalized attention and support for each student.",
    },

    {
      question: "How do you handle discipline and behavior management?",
      answer:
        "We use positive reinforcement and restorative practices to handle discipline and behavior management, focusing on teaching and growth.",
    },

    {
      question: "How do I apply for admission to Little Learners Academy?",
      answer:
        "You can apply for admission by filling out our online application form and scheduling a tour of our campus.",
    },
    {
      question: "What is the curriculum focus at Little Learners Academy?",
      answer:
        "Our curriculum focuses on holistic development, incorporating academic excellence, character building, and practical life skills.",
    },
  ];
  return (
    <Section
      intro="Solutions For The Doubts"
      title="Frequently Asked Questions"
      description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
    >
      <FAQsAccordion faqs={faqs} />
    </Section>
  );
}

export default FAQs;
