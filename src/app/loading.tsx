export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white" />
      <h2 className="text-2xl mt-8 mb-4">Loading...</h2>
      <p className="text-lg">Please wait while we fetch your weather data.</p>
    </div>
  );
}
