import React from "react";
import { Calendar, Clock, MapPin, Star } from "lucide-react";

const EventsSection = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "जनता दरबार",
      date: "------",
      time: "------",
      location: "------",
      type: "सार्वजनिक",
      priority: "high",
    },
    {
      id: 2,
      title: "कृषि मेला",
      date: "------",
      time: "------",
      location: "------",
      type: "कृषि",
      priority: "medium",
    },
    {
      id: 3,
      title: "स्वास्थ्य शिविर",
      date: "------",
      time: "------",
      location: "------",
      type: "स्वास्थ्य",
      priority: "high",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "सड़क निर्माण कार्य का शिलान्यास",
      date: "20 मई 2025",
      status: "completed",
    },
    {
      id: 2,
      title: "शिक्षा संस्थान का उद्घाटन",
      date: "18 मई 2025",
      status: "completed",
    },
    {
      id: 3,
      title: "जल आपूर्ति योजना की घोषणा",
      date: "15 मई 2025",
      status: "completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Upcoming Events */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Calendar className="mr-3 text-blue-600" size={28} />
          आगामी कार्यक्रम
        </h3>

        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-800 text-sm">
                  {event.title}
                </h4>
                {event.priority === "high" && (
                  <Star className="text-yellow-500 fill-current" size={16} />
                )}
              </div>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-2 text-blue-500" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock size={14} className="mr-2 text-green-500" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin size={14} className="mr-2 text-red-500" />
                  {event.location}
                </div>
              </div>

              <div className="mt-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === "सार्वजनिक"
                      ? "bg-blue-100 text-blue-800"
                      : event.type === "कृषि"
                      ? "bg-green-100 text-green-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {event.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <Star className="mr-3 text-green-600" size={28} />
          हाल की गतिविधियाँ
        </h3>

        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
            >
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-grow">
                <h4 className="font-medium text-gray-800 text-sm mb-1">
                  {activity.title}
                </h4>
                <p className="text-xs text-gray-500">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            सभी गतिविधियाँ देखें →
          </button>
        </div>
      </div>

      {/* Contact Card */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6">
        <h3 className="text-xl font-bold mb-4">संपर्क करें</h3>
        <div className="space-y-3 text-sm">
          <p>📧 amarsinghyadav@gmail.com</p>
          <p>📞 +91-XXXXX-XXXXX</p>
          <p>🏛️ विधानसभा कार्यालय</p>
        </div>
        <button className="w-full mt-4 bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          संदेश भेजें
        </button>
      </div>
    </div>
  );
};

export default EventsSection;
