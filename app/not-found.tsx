export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-8">
      <h1 className="text-lg font-bold">Not Found</h1>

      <p className="text-sm">Could not find requested resource</p>

      <div className="mt-4">
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home
        </a>
      </div>
    </main>
  );
}
