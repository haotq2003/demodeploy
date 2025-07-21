import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-start p-10 bg-gray-50 min-h-[60vh]">
      <div className="flex-1 min-w-[280px] max-w-md bg-white p-8 rounded-xl shadow-md mb-5">
        <h2 className="mb-5 text-2xl font-bold text-gray-800">Liên hệ với chúng tôi</h2>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Địa chỉ:</span> 123 Đường ABC, Quận 1, TP.HCM</p>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Email:</span> support@ecomer.vn</p>
        <p className="mb-2 text-gray-700"><span className="font-semibold">Điện thoại:</span> 0123 456 789</p>
      </div>
      <form className="flex-1 min-w-[320px] max-w-lg bg-white p-8 rounded-xl shadow-md flex flex-col gap-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">Gửi liên hệ</h3>
        <input type="text" placeholder="Họ và tên" required className="p-3 border border-gray-200 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none" />
        <input type="email" placeholder="Email" required className="p-3 border border-gray-200 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none" />
        <input type="tel" placeholder="Số điện thoại" className="p-3 border border-gray-200 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none" />
        <textarea placeholder="Nội dung liên hệ" rows="5" required className="p-3 border border-gray-200 rounded-md bg-gray-50 focus:border-gray-500 focus:outline-none" />
        <button type="submit" className="p-3 bg-gray-800 text-white rounded-md font-semibold hover:bg-gray-700 transition">Gửi</button>
      </form>
    </div>
  )
}

export default Contact
