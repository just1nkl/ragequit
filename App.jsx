
import React from "react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="p-6 space-y-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
        <h1 className="text-4xl font-bold mb-4">Klichmann BBQ- und Schankservice</h1>
        <p className="text-lg">Euer Partner für unvergessliche Privatfeiern mit Grillgenuss & Getränken vom Feinsten!</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Galerie</h2>
        <p>Bilder folgen in Kürze – hier entsteht eine visuelle Kostprobe unserer Arbeit!</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-200 aspect-square rounded-xl" />
          <div className="bg-gray-200 aspect-square rounded-xl" />
          <div className="bg-gray-200 aspect-square rounded-xl" />
          <div className="bg-gray-200 aspect-square rounded-xl" />
        </div>
      </motion.div>
    </div>
  );
}
