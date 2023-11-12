'use client';

import { useState } from 'react';

interface QNA {
  question: string;
  answer: string;
}

const randomAnswer = () => {
  const random = Math.random();
  if (random < 0.2) {
    return '안녕하세요';
  } else if (random < 0.4) {
    return 'GPT한테 물어봐';
  } else if (random < 0.6) {
    return '내가 어떻게 알아 이 새끼야';
  } else if (random < 0.8) {
    return '뭐라고?';
  } else {
    return '다시 말해봐';
  }
};

export default function ChatbotPage() {
  const [qna, setQna] = useState<QNA[]>([{ question: '안녕하세요', answer: '안녕하세요' }]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const question = formData.get('question') as string;
    setQna([...qna, { question, answer: randomAnswer() }]);

    e.currentTarget.reset();
  };

  return (
    <section className="flex h-screen flex-col justify-between">
      <header className="bg-gray-100 p-6 dark:bg-gray-900">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-semibold dark:text-white">에pt for hanyang</h1>
        </div>
      </header>
      <main className="relative flex grow flex-col p-6">
        <div className="h-[calc(100vh-208px)] space-y-4 overflow-y-scroll">
          {qna.map((item, index) => (
            <div key={index}>
              <div className="mb-4 flex flex-col items-end space-y-2">
                <span className="text-sm text-gray-400">01:24 PM</span>
                <div className="rounded-md bg-gray-100 p-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
                  {item.question}
                </div>
              </div>
              <div key={index} className="mb-4 flex flex-col items-start space-y-2">
                <span className="text-sm text-gray-400">01:24 PM</span>
                <div className="rounded-md bg-blue-50 p-3 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form className="absolute bottom-5 mt-4 flex w-[calc(100%-48px)] gap-2" onSubmit={onSubmit}>
          <input
            className="grow rounded-lg p-3 dark:bg-gray-800 dark:text-white"
            placeholder="Type your message..."
            name="question"
            type="text"
          />
          <button type="submit" className="rounded-xl border bg-white px-2 py-1">
            Send
          </button>
        </form>
      </main>
    </section>
  );
}
