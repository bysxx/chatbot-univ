import type { QNA } from './interfaces';

export default function ChatbotQNA({ item }: { item: QNA }) {
  return (
    <li>
      <div className="mb-4 flex flex-col items-end space-y-2">
        <span className="text-sm text-gray-400">01:24 PM</span>
        <div className="rounded-md bg-gray-100 p-3 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          {item.question}
        </div>
      </div>
      <div className="mb-4 flex flex-col items-start space-y-2">
        <span className="text-sm text-gray-400">01:24 PM</span>
        <div className="rounded-md bg-blue-50 p-3 text-blue-900 dark:bg-blue-900 dark:text-blue-100">{item.answer}</div>
      </div>
    </li>
  );
}
