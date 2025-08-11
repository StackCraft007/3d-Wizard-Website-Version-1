import React, { useState } from "react";
import { HeroSection } from "../HeroSection";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex justify-between items-center"
        onClick={onToggle}
      >
        <span>{question}</span>
        <ChevronDown 
          className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
};

export const FAQPage = (): JSX.Element => {
  const [openItem, setOpenItem] = useState<number>(0);

  const faqData = [
    {
      question: "How does it work?",
      answer: "It's quick and hassle-free!\nUpload your 3D file → Choose material & finish → Get an instant quote → We print & ship it to your door."
    },
    {
      question: "What services does 3D Wizard offer?",
      answer: "We offer comprehensive 3D printing services including FDM, SLA, SLS, and MJF technologies, 3D scanning with high-precision laser scanners, and vacuum casting for small batch production."
    },
    {
      question: "How do I place an order for 3D printing?",
      answer: "Simply upload your 3D file on our platform, select your preferred material and finish, review the instant quote, and proceed with payment. We'll handle the rest!"
    },
    {
      question: "Which materials and technologies do you offer?",
      answer: "We support 40+ materials including PLA, ABS, PETG, TPU, Nylon PA-12, prototyping resins, and more. Our technologies include FDM, SLA, SLS, and MJF printing."
    },
    {
      question: "Do you offer design assistance if I don't have a 3D model?",
      answer: "Yes! Our team of experienced designers can help you create 3D models from your concepts, sketches, or existing products. Contact us for design consultation services."
    },
    {
      question: "Is post-processing (like smoothing or painting) available?",
      answer: "Absolutely! We offer various post-processing services including smoothing, painting, assembly, and custom finishes to give your parts a professional look."
    },
    {
      question: "Can students or educators get special discounts?",
      answer: "Yes, we offer special educational discounts for students, teachers, and educational institutions. Contact us with your educational credentials to learn about available discounts."
    },
    {
      question: "Do you have a physical store or only operate online?",
      answer: "We operate primarily online for convenience, but we do have a physical facility in Ravet, Pune. You can visit us by appointment for consultations or to see our equipment."
    },
    {
      question: "What should I do if I receive a damaged or incorrect part?",
      answer: "If you receive a damaged or incorrect part, please contact us immediately with photos. We'll arrange for a replacement or refund according to our quality guarantee policy."
    },
    {
      question: "Can I order multiple materials or colors in a single print job?",
      answer: "Yes, depending on the technology and design, we can accommodate multi-material and multi-color prints. Contact us to discuss your specific requirements and feasibility."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h1>
          <p className="text-lg text-gray-600">
            Can't find the answer here? Contact us for more information.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};