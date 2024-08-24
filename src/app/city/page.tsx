import Link from "next/link";

export default function CityList() {
  const cities = [
    { name: "Jakarta", slug: "jakarta" },
    { name: "Surabaya", slug: "surabaya" },
    { name: "Bandung", slug: "bandung" },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h1 className="text-3xl font-bold mb-6">Cities in Indonesia</h1>
      <ul className="space-y-4">
        {cities.map((city) => (
          <li key={city.slug} className="bg-blue-600 rounded-lg shadow-md">
            <Link
              href={`/city/${city.slug}`}
              className="block p-4 hover:bg-blue-700 transition-colors"
            >
              <h2 className="text-xl font-semibold">{city.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
