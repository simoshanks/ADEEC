import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, X } from "lucide-react";
import contactImage from "@/assets/heroAADEC.jpg";

const ContactMain = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, subject, message } = formData;
    const body = `
Nom: ${firstName} ${lastName}
Email: ${email}
Téléphone: ${phone}

Message:
${message}
`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamedaitboujanoui1998@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank");
    setShowAlert(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-[#F5FCF8]">
      {/* ✅ Section 1 : Image + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] min-h-[50vh]">
        {/* Left - Text Info */}
        <div className="flex flex-col justify-center px-8 sm:px-12 py-12 bg-[#F5FCF8]">
          <div className="max-w-sm mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Prenons Contact
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Appelez, écrivez ou trouvez votre chemin vers notre centre.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <MapPin className="w-5 h-5 text-white" />,
                  title: "Adresse",
                  text: "Quartier Administratif BP : 100 Azilal",
                  bg: "bg-[#146C2D]",
                },
                {
                  icon: <Phone className="w-5 h-5 text-white" />,
                  title: "Téléphone",
                  text: "+212 5 23 45 98 12",
                  bg: "bg-[#22A55D]",
                },
                {
                  icon: <Mail className="w-5 h-5 text-white" />,
                  title: "Email",
                  text: "aadec2000@hotmail.com",
                  bg: "bg-[#146C2D]",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div
                    className={`w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div className="relative">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-[60vh] object-cover object-left translate-x-[-15px] rounded-b-[80px]"
          />
        </div>
      </div>

      {/* ✅ Section 2 : Form */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
        <div className="bg-white shadow-xl rounded-2xl p-8 lg:p-10 relative">
          {showAlert && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-green-200 rounded-xl shadow-2xl p-6 w-full max-w-md z-50 animate-fadeIn">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Merci !
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Votre message a été envoyé avec succès.
                  </p>
                </div>
                <button
                  onClick={() => setShowAlert(false)}
                  className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          )}

          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Envoyez-nous un message
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="Prénom"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D] focus:border-transparent"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Nom"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D] focus:border-transparent"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Téléphone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D]"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Votre message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-[#146C2D] resize-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#146C2D] to-[#22A55D] text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Envoyer
            </button>
          </form>
        </div>
      </div>
     

    </section>
  );
};

export default ContactMain;
