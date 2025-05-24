
import React from 'react';
import { LanguageProps } from '../types';

interface ContactSectionProps extends LanguageProps {}

const ContactSection: React.FC<ContactSectionProps> = ({ isEnglish }) => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-thin text-gray-900 dark:text-white text-center mb-10">
          {isEnglish ? "Contact" : "연락처"}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-16 max-w-3xl mx-auto">
          {isEnglish 
            ? "Feel free to reach out to me for any inquiries or opportunities."
            : "문의나 기회에 대해 언제든지 연락해 주세요."}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-medium mb-4 dark:text-white">
              {isEnglish ? "Contact Information" : "연락처 정보"}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isEnglish ? "Email" : "이메일"}
                </p>
                <p className="dark:text-white">ink595@g.harvard.edu</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isEnglish ? "LinkedIn" : "링크드인"}
                </p>
                <p className="dark:text-white">linkedin.com/in/jooooo</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isEnglish ? "Phone" : "전화번호"}
                </p>
                <p className="dark:text-white">+82 10-5060-6843</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {isEnglish ? "Location" : "위치"}
                </p>
                <p className="dark:text-white">
                  {isEnglish ? "Seoul, South Korea" : "대한민국 서울"}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-medium mb-4 dark:text-white">
              {isEnglish ? "Send a Message" : "메시지 보내기"}
            </h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {isEnglish ? "Name" : "이름"}
                </label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" 
                  placeholder={isEnglish ? "Your name" : "이름을 입력하세요"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {isEnglish ? "Email" : "이메일"}
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" 
                  placeholder={isEnglish ? "Your email" : "이메일을 입력하세요"}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {isEnglish ? "Message" : "메시지"}
                </label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" 
                  placeholder={isEnglish ? "Your message" : "메시지를 입력하세요"}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-2 bg-[#007ACC] text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                {isEnglish ? "Send Message" : "메시지 보내기"}
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-medium mb-6 dark:text-white">
            {isEnglish ? "Connect With Me" : "소셜 미디어"}
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2023 InJoo Kim. {isEnglish ? "All rights reserved." : "모든 권리 보유."}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
