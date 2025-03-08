import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { Star } from "lucide-react";
import Camera from "../../public/Camera.jpeg";
import Gun from "../../public/gun.jpeg";
import vaccum from "../../public/vaccum.jpeg";

const products = [
  {
    id: 1,
    image: Camera,
    name: "Camera Mi 360°",
    soldAmount: 432,
    unitPrice: 120,
    revenue: 51840,
    rating: 4.81,
  },
  {
    id: 2,
    image: Gun,
    name: "Massage Gun",
    soldAmount: 120,
    unitPrice: 112,
    revenue: 25440,
    rating: 3.44,
  },
  {
    id: 3,
    image: vaccum,
    name: "Vacuum-Mop 2 Pro",
    soldAmount: 221,
    unitPrice: 320,
    revenue: 15123,
    rating: 3.22,
  },
  {
    id: 4,
    image: vaccum,
    name: "Vacuum-Mop 2",
    soldAmount: 223,
    unitPrice: 234,
    revenue: 32812,
    rating: 3.00,
  },
];

const TopProductsTable = () => {
  return (
    <div className="p-6">
      {/* Table Header */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-gray-500 text-sm">Full results</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b">
              <th className="pb-2">Product</th>
              <th className="pb-2">Sold amount</th>
              <th className="pb-2">Unit price</th>
              <th className="pb-2">Revenue</th>
              <th className="pb-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b last:border-none">
                <td className="py-3 flex items-center gap-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={32} 
                    height={32} 
                    className="rounded-full"
                  />
                  <span className="text-gray-700">{product.name}</span>
                </td>
                <td className="py-3 text-gray-700">{product.soldAmount}</td>
                <td className="py-3 text-gray-700">${product.unitPrice}</td>
                <td className="py-3 text-gray-700">${product.revenue.toLocaleString()}</td>
                <td className="py-3 text-gray-700 flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" />
                  {product.rating.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopProductsTable;
