"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-6xl font-bold mb-4">Error</h1>
      <h2 className="text-2xl mb-6">Something went wrong!</h2>
      <p className="text-lg mb-8">Please try again later.</p>
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
