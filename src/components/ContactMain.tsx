import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, X } from "lucide-react";

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

    // رابط Gmail الرسمي
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohamedaitboujanoui1998@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // فتح Gmail في تبويب جديد
    window.open(gmailLink, "_blank");

    // عرض alert
    setShowAlert(true);

    // إعادة تعيين الفورم
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
    <section className="py-16 lg:py-20 bg-[#F5FCF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* معلومات الاتصال */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Prenons Contact
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                N'hésitez pas à nous contacter pour discuter de vos projets, poser des questions ou explorer des opportunités de collaboration.
              </p>
            </div>

            <div className="space-y-6">
              {[{
                icon: <MapPin className="w-6 h-6 text-white" />,
                title: "Adresse",
                text: "Quartier Administratif BP : 100 Azilal",
                bg: "bg-[#146C2D]"
              },{
                icon: <Phone className="w-6 h-6 text-white" />,
                title: "Téléphone",
                text: "+212 5 23 45 98 12\n+212 5 23 45 98 12",
                bg: "bg-[#22A55D]"
              },{
                icon: <Mail className="w-6 h-6 text-white" />,
                title: "Email",
                text: "aadec2000@hotmail.com\naadec2000@hotmail.com",
                bg: "bg-[#146C2D]"
              },{
                icon: <Clock className="w-6 h-6 text-white" />,
                title: "Horaires",
                text: "Lundi - Vendredi: 8h30 - 18h30\nSamedi: 9h00 - 13h00",
                bg: "bg-[#22A55D]"
              }].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* الفورم + Alert */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10 relative">
            {/* Alert */}
            {showAlert && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white border border-green-200 rounded-xl shadow-2xl p-6 w-full max-w-md z-50 animate-fadeIn">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-1">Merci !</h4>
                    <p className="text-gray-600 text-sm">
                      Votre message a été envoyé avec succès. Vous pouvez fermer cette notification.
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

            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Envoyez un Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">Prénom *</label>
                  <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200" placeholder="Votre prénom" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">Nom *</label>
                  <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200" placeholder="Votre nom" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200" placeholder="votre@email.com" />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">Téléphone</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200" placeholder="+212 XX XX XX XX" />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">Sujet *</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200" placeholder="Objet de votre message" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-black mb-2">Message *</label>
                <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-[#146C2D] focus:border-transparent transition-all duration-200 resize-none" placeholder="Votre message..." />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#146C2D] to-[#22A55D] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-200 flex items-center justify-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Envoyer le Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
