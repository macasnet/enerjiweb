
import React from 'react';


const Iletisim = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  bg-gray-100">
      <div className="container mx-auto flex flex-wrap py-16 ">
        <section className="w-full md:w-1/2 px-4 ">
          <div className="bg-white border border-gray-300 p-8 h-full md:text-xl lg:text-2xl">
            <h2 className=" font-bold mb-6">İletişim Bilgileri</h2>
            <div className="mb-6">
              <p className="mb-2 "><span className="font-bold">Adres :</span> Ankara, Türkiye</p>
              <p className="mb-2 "><span className="font-bold">Telefon :</span> +90 123 456 78 90</p>
              <p className="mb-2 "><span className="font-bold">Email :</span> info@example.com</p>
              <p className="mb-2 "><span className="font-bold">Çalışma Saatleri :</span> Pazartesi - Cuma, 9:00 - 18:00</p>
              <p className="mb-2 "><span className="font-bold">Sosyal Medya :</span>
                <a href="https://twitter.com/example" className="text-blue-500 hover:underline"> Twitter - </a>
                <a href="https://facebook.com/example" className="text-blue-500 hover:underline">Facebook</a>
              </p>
            </div>
          </div>
        </section>
        <section className="w-full md:w-1/2 px-4">
          <div className="bg-white border border-gray-300 p-8 h-full">
            <h2 className="text-3xl font-bold mb-6">Konum</h2>
            <iframe
              title="Ankara Location"
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12012.33673123366!2d32.85766986977519!3d39.933363022712876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d33998d0c1a587%3A0x4d6e4807b23b4e42!2sAnkara%2C%20Turkey!5e0!3m2!1sen!2s!4v1623753142953!5m2!1sen!2s"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Iletisim;
