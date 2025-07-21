import React from 'react'
import aboutImg from '../assets/about_img.png'

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Về chúng tôi</h2>
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl w-full">
        <img src={aboutImg} alt="about" className="w-full max-w-xs rounded-xl shadow-md" />
        <div className="flex-1">
          <p className="text-gray-700 text-lg mb-4">
            Ecomer là nền tảng thương mại điện tử hiện đại, mang đến trải nghiệm mua sắm trực tuyến tiện lợi, an toàn và đa dạng sản phẩm. Chúng tôi cam kết cung cấp sản phẩm chất lượng, giá cả cạnh tranh và dịch vụ khách hàng tận tâm.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <span className="text-2xl">🌟</span>
              <span className="font-semibold text-gray-800">Sản phẩm chất lượng</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <span className="text-2xl">🚚</span>
              <span className="font-semibold text-gray-800">Giao hàng nhanh chóng</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <span className="text-2xl">💬</span>
              <span className="font-semibold text-gray-800">Hỗ trợ tận tâm</span>
            </div>
            <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold text-gray-800">Thanh toán an toàn</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
