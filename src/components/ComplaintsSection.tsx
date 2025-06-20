import React, { useState } from "react";
import { AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ComplaintsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    panchayat: "",
    village: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // SheetDB expects data inside `data` object as an array of objects or a single object
    const dataToSend = {
      data: {
        name: formData.name,
        mobile: formData.mobile,
        panchayat: formData.panchayat,
        village: formData.village,
        description: formData.description,
      },
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/uvjbbidmwjbqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        toast({
          title: "शिकायत दर्ज की गई",
          description: "आपकी शिकायत सफलतापूर्वक दर्ज की गई है।",
        });
        setFormData({
          name: "",
          mobile: "",
          panchayat: "",
          village: "",
          description: "",
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "त्रुटि",
          description: errorData.message || "डेटा भेजने में समस्या हुई।",
        });
      }
    } catch (error) {
      console.error("Error submitting complaint:", error);
      toast({
        title: "त्रुटि",
        description: "डेटा भेजने में समस्या हुई। कृपया पुनः प्रयास करें।",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-800 flex items-center">
          <AlertCircle className="mr-3 text-red-600" size={28} />
          शिकायत/समस्या/सुझाव
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Your input fields unchanged */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            नाम
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="अपना पूरा नाम दर्ज करें"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="mobile" className="text-sm font-medium text-gray-700">
            मोबाइल नंबर
          </label>
          <Input
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="अपना मोबाइल नंबर दर्ज करें"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="panchayat"
            className="text-sm font-medium text-gray-700"
          >
            पंचायत का नाम
          </label>
          <Input
            id="panchayat"
            name="panchayat"
            value={formData.panchayat}
            onChange={handleChange}
            placeholder="अपनी पंचायत का नाम दर्ज करें"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="village"
            className="text-sm font-medium text-gray-700"
          >
            गाँव का नाम
          </label>
          <Input
            id="village"
            name="village"
            value={formData.village}
            onChange={handleChange}
            placeholder="अपने गाँव का नाम दर्ज करें"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700"
          >
            शिकायत का विवरण
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="अपनी शिकायत का विस्तृत विवरण दर्ज करें"
            required
            className="w-full min-h-[100px]"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className={`w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          <Send size={20} />
          {loading ? "संकलित हो रहा है..." : "शिकायत दर्ज करें"}
        </Button>
      </form>
    </div>
  );
};

export default ComplaintsSection;
