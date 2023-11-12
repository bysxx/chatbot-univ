'use client';

import { useRef, useState } from 'react';

import ChatbotHeader from './header';
import type { QNA } from './interfaces';
import ChatbotQNA from './qna';

const randomAnswer = () => {
  const random = Math.random();
  let answer = '안녕하세요';

  if (random < 0.2) {
    answer = '다시 말해봐';
  } else if (random < 0.4) {
    answer = 'GPT한테 물어봐';
  } else if (random < 0.6) {
    answer = '내가 어떻게 알아 이 새끼야';
  } else if (random < 0.8) {
    answer = '뭐라고?';
  }

  return answer;
};

export default function ChatbotPage() {
  const [qna, setQna] = useState<QNA[]>([{ question: '안녕하세요', answer: '안녕하세요' }]);
  const ref = useRef<HTMLUListElement | null>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const question = formData.get('question') as string;
    setQna([...qna, { question, answer: randomAnswer() }]);

    e.currentTarget.reset();
    ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="flex h-screen flex-col justify-between">
      <ChatbotHeader />
      <main className="relative flex grow flex-col p-6">
        <ul ref={ref} className="h-[calc(100vh-208px)] space-y-4 overflow-y-scroll">
          {qna.map((item, index) => (
            <ChatbotQNA key={index} item={item} />
          ))}
        </ul>
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
