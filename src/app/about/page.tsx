export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="mb-4">
        Welcome to our About page. We are a passionate team dedicated to
        creating innovative solutions.
      </p>
      <p className="mb-4">
        Our mission is to provide high-quality products and services that make a
        positive impact on people&apos;s lives.
      </p>
      <p className="mb-4">
        Founded in 2023, we have been working tirelessly to build a company that
        values creativity, integrity, and customer satisfaction.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
      <ul className="list-disc list-inside">
        <li>Sami Kalammallah - CEO</li>
        <li>Jane Smith - CTO</li>
        <li>Mike Johnson - Head of Design</li>
        <li>Sarah Brown - Lead Developer</li>
      </ul>
    </div>
  );
}
