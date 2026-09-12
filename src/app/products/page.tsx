"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IntroBot from "@/components/chat/IntroBot";
import Image3DModal from "@/components/3d/Image3DModal";
import { products, Product } from "@/data/products";
import {
  Box,
  Search,
  ArrowUpRight,
  Maximize2,
  Sparkles,
  SlidersHorizontal
} from "lucide-react";

const categories = [
  { id: "all", label: "All Collections" },
  { id: "living", label: "Living Room" },
  { id: "dining", label: "Dining & Hospitality" },
  { id: "bedroom", label: "Bedroom Sanctuary" },
  { id: "lighting", label: "Lighting Art" },
  { id: "decor", label: "Storage & Consoles" },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = products
    .filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.materials.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.designer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans antialiased selection:bg-[#9A7B56] selection:text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#EFECE4] border-b border-[#1C1917]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#9A7B56]/15 border border-[#9A7B56]/30 text-xs font-mono uppercase tracking-widest text-[#9A7B56]">
              <Box className="w-3.5 h-3.5" />
              <span>Interactive 3D Furniture Catalog</span>
            </div>
            <h1 className="font-serif-grains text-4xl sm:text-5xl font-bold text-[#1C1917] tracking-tight">
              Curated Collections for Elevated Living
            </h1>
            <p className="text-base text-[#1C1917]/70 font-light leading-relaxed">
              Explore custom furniture models with real-time WebGL 3D inspection, organic wood finish toggles, and proportion details.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="py-6 bg-[#F5F2EB] border-b border-[#1C1917]/10 sticky top-[70px] z-30 backdrop-blur-xl bg-[#F5F2EB]/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-[#1C1917] text-[#F5F2EB] shadow-md"
                    : "bg-[#EFECE4] text-[#1C1917]/70 hover:bg-[#9A7B56] hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1C1917]/40" />
              <input
                type="text"
                placeholder="Search materials, furniture, designer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#EFECE4] border border-[#1C1917]/15 rounded-full pl-10 pr-4 py-2 text-xs text-[#1C1917] placeholder-[#1C1917]/40 focus:outline-none focus:border-[#9A7B56]"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="text-xs text-[#1C1917]/60 font-mono uppercase tracking-wider">
                Showing {filteredProducts.length} Items
              </span>

              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#9A7B56]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#EFECE4] border border-[#1C1917]/15 rounded-full px-4 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#9A7B56] font-medium"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-[#EFECE4] rounded-3xl border border-[#1C1917]/10 space-y-4">
              <p className="text-xl font-serif-grains text-[#1C1917]">
                No matching furniture items found.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-[#9A7B56] text-white rounded-full text-xs uppercase tracking-wider font-semibold shadow-md"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#EFECE4] rounded-3xl overflow-hidden border border-[#1C1917]/10 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-72 w-full overflow-hidden bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#1C1917]/80 backdrop-blur-md text-[#F5F2EB] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border border-[#9A7B56]/30 flex items-center gap-1.5">
                      <Box className="w-3.5 h-3.5 text-[#9A7B56]" />
                      <span>3D Model</span>
                    </div>

                    <div className="absolute top-4 right-4 bg-[#9A7B56] text-white text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                      {product.categoryLabel}
                    </div>

                    {/* Quick 3D View overlay button */}
                    <div
                      onClick={() => setActiveModalProduct(product)}
                      className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    >
                      <div className="px-4 py-2 bg-[#1C1917] text-white text-xs font-mono uppercase tracking-wider rounded-full flex items-center gap-2 shadow-xl">
                        <Maximize2 className="w-3.5 h-3.5 text-[#9A7B56]" />
                        <span>Launch 3D Modal</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <Link
                        href={`/products/${product.id}`}
                        className="font-serif-grains text-xl font-bold text-[#1C1917] hover:text-[#9A7B56] transition-colors block"
                      >
                        {product.name}
                      </Link>
                      <p className="text-xs text-[#1C1917]/70 font-light mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#1C1917]/10 space-y-1">
                        <div className="flex items-center text-[11px] text-[#1C1917]/60">
                          <span className="font-semibold text-[#1C1917] w-20">Materials:</span>
                          <span className="truncate">{product.materials}</span>
                        </div>
                        <div className="flex items-center text-[11px] text-[#1C1917]/60">
                          <span className="font-semibold text-[#1C1917] w-20">Dimensions:</span>
                          <span>{product.dimensions}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#1C1917]/10 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-[#1C1917]/50 uppercase tracking-widest block font-mono">
                          PRICE
                        </span>
                        <span className="font-serif-grains text-2xl font-bold text-[#1C1917]">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveModalProduct(product)}
                          className="px-3.5 py-2 bg-[#EFECE4] hover:bg-[#9A7B56] hover:text-white text-[#1C1917] rounded-full text-xs uppercase tracking-wider font-semibold border border-[#1C1917]/15 transition-all"
                          title="Quick 3D View"
                        >
                          Quick 3D
                        </button>
                        <Link
                          href={`/products/${product.id}`}
                          className="px-4 py-2 bg-[#1C1917] text-white hover:bg-[#9A7B56] rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-1 shadow-md"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Interactive 3D Modal */}
      {activeModalProduct && (
        <Image3DModal
          isOpen={!!activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          title={activeModalProduct.name}
          category={activeModalProduct.modelCategory}
          imageSrc={activeModalProduct.image}
          materials={activeModalProduct.materials}
          dimensions={activeModalProduct.dimensions}
          price={activeModalProduct.price}
        />
      )}

      <IntroBot />
      <Footer />
    </div>
  );
}
