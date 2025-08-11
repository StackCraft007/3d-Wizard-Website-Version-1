import React, { useState } from "react";
import { Upload, ChevronDown, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// Backend base URL: configurable via Vite env, falls back to local dev
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

type Technology = "3d-printing" | "3d-scanning" | "vacuum-casting";
type PrintingTechnology = "FDM" | "SLA" | "SLS" | "MJF";

interface FormData {
  technology: Technology;
  printingTechnology: PrintingTechnology | "";
  material: string;
  quantity: number;
  email: string;
  mobile: string;
  file: File | null;
}

interface QuoteResponse {
  success: boolean;
  quote?: {
    price: number;
    volume_cm3: number;
    weight: number | null;
    estimatedDelivery: string;
    technology: string;
    material: string;
    quantity: number;
  };
  file?: {
    name: string;
    uploaded: boolean;
    driveLink: string;
  };
  quoteId?: string;
  timestamp?: string;
  error?: string;
  message?: string;
}

export const StartPrintPage = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    technology: "3d-printing",
    printingTechnology: "",
    material: "",
    quantity: 1,
    email: "",
    mobile: "",
    file: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quoteResult, setQuoteResult] = useState<QuoteResponse | null>(null);

  // Material options for each technology and printing technology
  const printingTechnologyOptions = {
    FDM: ["PLA", "ABS", "PETG", "TPU (rubber like)"],
    SLA: ["Prototyping resin", "ABS resin", "Transparent Resin"],
    SLS: ["Nylon PA - 12"],
    MJF: ["Nylon PA - 12"],
  };

  const materialOptions = {
    "3d-printing": formData.printingTechnology ? printingTechnologyOptions[formData.printingTechnology] : [],
    "3d-scanning": [
      "High Resolution Scan",
      "Medium Resolution Scan",
      "Low Resolution Scan",
      "Color Scan",
      "Texture Mapping",
      "Reverse Engineering",
    ],
    "vacuum-casting": [
      "Polyurethane (Rigid)",
      "Polyurethane (Flexible)",
      "Silicone Rubber",
      "Epoxy Resin",
      "ABS-like Material",
      "PP-like Material",
      "Transparent Material",
    ],
  };

  const handleTechnologyChange = (tech: Technology) => {
    setFormData({
      ...formData,
      technology: tech,
      printingTechnology: "", // Reset printing technology
      material: "", // Reset material when technology changes
    });
    setQuoteResult(null); // Reset quote when technology changes
  };

  const handlePrintingTechnologyChange = (tech: PrintingTechnology) => {
    setFormData({
      ...formData,
      printingTechnology: tech,
      material: "", // Reset material when printing technology changes
    });
    setQuoteResult(null); // Reset quote
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
      setQuoteResult(null); // Reset quote when new file is selected
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
      setQuoteResult(null); // Reset quote when new file is selected
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    setQuoteResult(null);

    try {
      // Validate required fields
      if (!formData.file) {
        throw new Error('Please upload a file');
      }

      // Enforce STL for instant quote
      const fileName = formData.file.name.toLowerCase();
      if (!fileName.endsWith('.stl')) {
        throw new Error('Only STL files are supported for instant quotes');
      }

      if (formData.technology === '3d-printing' && !formData.printingTechnology) {
        throw new Error('Please select a 3D printing technology');
      }

      // Create FormData for file upload
      const uploadData = new FormData();
      uploadData.append('file', formData.file);
      uploadData.append('technology', formData.technology);
      uploadData.append('printingTechnology', formData.printingTechnology);
      uploadData.append('material', formData.material);
      uploadData.append('quantity', formData.quantity.toString());
      uploadData.append('email', formData.email);
      uploadData.append('mobile', formData.mobile);

      // Make API call to backend
      const response = await fetch(`${API_BASE_URL}/api/quote/generate`, {
        method: 'POST',
        body: uploadData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      const result: QuoteResponse = await response.json();

      if (result.success) {
        setQuoteResult(result);
        console.log('✅ Quote generated successfully:', result);
      } else {
        throw new Error(result.error || 'Failed to generate quote');
      }

    } catch (err) {
      console.error('❌ Quote generation failed:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-['Manrope'] min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upload Your <span className="text-blue-600">3D Model</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The wizard works fast — get your quote instantly and your print delivered anywhere on Earth.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Technology Selection */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Technology</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: "3d-printing", label: "3D Printing" },
                { id: "3d-scanning", label: "3D Scanning" },
                { id: "vacuum-casting", label: "Vacuum Casting" },
              ].map((tech) => (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => handleTechnologyChange(tech.id as Technology)}
                  className={`p-4 rounded-lg border-2 font-medium transition-all ${
                    formData.technology === tech.id
                      ? "border-blue-500 bg-blue-50 text-blue-700"
                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                  }`}
                >
                  {tech.label}
                </button>
              ))}
            </div>
          </div>

          {/* 3D Printing Technologies Selection */}
          {formData.technology === "3d-printing" && (
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3D Printing Technologies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { id: "FDM", label: "FDM", description: "Fused Deposition Modeling" },
                  { id: "SLA", label: "SLA", description: "Stereolithography" },
                  { id: "SLS", label: "SLS", description: "Selective Laser Sintering" },
                  { id: "MJF", label: "MJF", description: "Multi Jet Fusion" },
                ].map((tech) => (
                  <button
                    key={tech.id}
                    type="button"
                    onClick={() => handlePrintingTechnologyChange(tech.id as PrintingTechnology)}
                    className={`p-4 rounded-lg border-2 font-medium transition-all text-left ${
                      formData.printingTechnology === tech.id
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    <div className="font-semibold">{tech.label}</div>
                    <div className="text-sm opacity-75">{tech.description}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Material Selection */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Select Material</h3>
            <div className="relative">
              <select
                value={formData.material}
                onChange={(e) => setFormData({ ...formData, material: e.target.value })}
                className="w-full p-4 pr-12 rounded-lg border border-gray-300 bg-white text-gray-700 appearance-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              >
                <option value="">Choose material...</option>
                {materialOptions[formData.technology].map((material) => (
                  <option key={material} value={material}>
                    {material}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Quantity and Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                max="1000"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* File Upload Area */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Your File</h3>
            <div
              className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                dragActive
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 bg-white hover:border-gray-400"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                type="file"
                onChange={handleFileSelect}
                accept=".stl"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isLoading}
              />
              
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                
                {formData.file ? (
                  <p className="text-green-600 font-medium flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Selected: {formData.file.name}
                  </p>
                ) : (
                  <div className="text-gray-600 space-y-2">
                    <p>Instant quotes currently support STL files.</p>
                    <p className="text-sm">Max upload size: 500 MB per file.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center space-y-4">
            <button
              type="submit"
              disabled={isLoading}
              className="text-white font-semibold py-4 px-12 rounded-lg text-lg transition-colors shadow-lg [background:radial-gradient(50%_50%_at_50%_100%,rgba(255,255,255,0.45)_0%,rgba(0,0,0,0)_100%,rgba(255,255,255,0)_100%),linear-gradient(0deg,rgba(49,107,255,1)_0%,rgba(49,107,255,1)_100%)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Generating Quote...
                </>
              ) : (
                'Get Instant Quote'
              )}
            </button>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Error generating quote</p>
                  <p className="text-red-600 text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            {/* Quote Results */}
            {quoteResult && quoteResult.success && quoteResult.quote && (
              <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h4 className="text-xl font-semibold text-green-900">Quote Generated Successfully!</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-800">
                  <div className="space-y-2">
                    <p><span className="font-medium">Price:</span> ₹{quoteResult.quote.price.toFixed(2)}</p>
                    <p><span className="font-medium">Volume:</span> {quoteResult.quote.volume_cm3} cm³</p>
                    {quoteResult.quote.weight && (
                      <p><span className="font-medium">Estimated Weight:</span> {quoteResult.quote.weight}g</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p><span className="font-medium">Technology:</span> {quoteResult.quote.technology}</p>
                    <p><span className="font-medium">Material:</span> {quoteResult.quote.material}</p>
                    <p><span className="font-medium">Quantity:</span> {quoteResult.quote.quantity}</p>
                    <p><span className="font-medium">Delivery:</span> {quoteResult.quote.estimatedDelivery}</p>
                  </div>
                </div>

                {quoteResult.file && (
                  <div className="mt-4 p-3 bg-white rounded border">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">File uploaded:</span> {quoteResult.file.name}
                    </p>
                    <a 
                      href={quoteResult.file.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm underline"
                    >
                      View in Google Drive
                    </a>
                  </div>
                )}

                {quoteResult.quoteId && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-green-700">
                      Quote ID: <span className="font-mono font-medium">{quoteResult.quoteId}</span>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </form>

        {/* Privacy Notice */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Your data stays safe — we follow India's data security and privacy standards.
          </p>
        </div>
      </div>
    </div>
  );
};