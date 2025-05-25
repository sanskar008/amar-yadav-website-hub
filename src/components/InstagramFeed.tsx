
import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

const InstagramFeed = () => {
  // Sample Instagram-style posts data
  const instagramPosts = [
    {
      id: 1,
      image: "photo-1649972904349-6e44c42644a7",
      caption: "राजगढ़ में स्वास्थ्य शिविर का आयोजन - जनता की सेवा में समर्पित",
      likes: 245,
      comments: 12,
      timestamp: "2 दिन पहले"
    },
    {
      id: 2,
      image: "photo-1466442929976-97f336a657be",
      caption: "किसान कल्याण योजना की शुरुआत - हमारे अन्नदाताओं के लिए",
      likes: 189,
      comments: 8,
      timestamp: "4 दिन पहले"
    },
    {
      id: 3,
      image: "photo-1506744038136-46273834b3fb",
      caption: "शिक्षा संस्थानों का निरीक्षण - बेहतर शिक्षा व्यवस्था के लिए",
      likes: 167,
      comments: 15,
      timestamp: "1 सप्ताह पहले"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <Instagram className="mr-3 text-pink-600" size={28} />
            सामाजिक गतिविधियाँ
          </h3>
          <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ExternalLink size={20} className="mr-1" />
            Instagram पर देखें
          </button>
        </div>
        
        <div className="space-y-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              {/* Post Header */}
              <div className="flex items-center p-4 bg-gray-50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Instagram className="text-white" size={20} />
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-800">amarsinghyadav_mla</h4>
                  <p className="text-gray-500 text-sm">{post.timestamp}</p>
                </div>
              </div>
              
              {/* Post Image */}
              <div className="aspect-square bg-gray-100">
                <img 
                  src={`https://images.unsplash.com/${post.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                  alt="Instagram post"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Post Content */}
              <div className="p-4">
                <p className="text-gray-800 mb-3 leading-relaxed">{post.caption}</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span>❤️ {post.likes} पसंद</span>
                  <span>💬 {post.comments} टिप्पणियाँ</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
            और पोस्ट देखें
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramFeed;
