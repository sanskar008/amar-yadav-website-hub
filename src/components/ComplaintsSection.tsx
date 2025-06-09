import React, { useState } from "react";
import { AlertCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ComplaintsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    village: "",
    panchayat: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitted complaint:", formData);
    toast({
      title: "शिकायत दर्ज की गई",
      description: "आपकी शिकायत सफलतापूर्वक दर्ज की गई है।",
    });
    setFormData({ name: "", description: "", village: "", panchayat: "" });
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
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            मोबाइल नंबर
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
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
          className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#F59E0B] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Send size={20} />
          शिकायत दर्ज करें
        </Button>
      </form>
    </div>
  );
};

export default ComplaintsSection;
