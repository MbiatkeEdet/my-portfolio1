"use client";

import React, { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

export default function BarcodeScanner() {
  const [data, setData] = useState("No barcode detected");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4">Scan a Barcode</h2>
      
      <div className="border-4 border-blue-500 rounded-lg overflow-hidden">
        <BarcodeScannerComponent
          width={300}
          height={300}
          onUpdate={(err, result) => {
            if (result) {
              setData(result.text);
            } else {
              setData("No barcode detected");
            }
          }}
        />
      </div>

      <p className="mt-4 text-xl font-semibold text-gray-800">Result: {data}</p>
    </div>
  );
}
