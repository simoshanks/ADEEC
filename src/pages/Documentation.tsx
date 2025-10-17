import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Topbar from "@/components/Topbar";
import { FileText, Download, Calendar } from "lucide-react";
import { documentsData } from "@/data/db"; // <-- hna

const Document = () => {
  const downloadDocument = (url, title) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title}.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#F5FCF8]">
      <Topbar />
      <Navigation />

      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#146C2D] rounded-full mb-6">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              <span className="text-white font-medium text-sm uppercase">
                Documents
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Documentation Officielle
            </h1>

            <div className="w-20 h-1 bg-[#146C2D] mx-auto mb-6 rounded-full"></div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Accédez aux documents officiels de l'Association AADEC
            </p>
          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documentsData.map((doc) => (
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col min-h-[220px]">
  <div className="flex justify-center mb-4">
    <div className="p-3 bg-[#146C2D] text-white rounded-xl">
      <FileText className="w-6 h-6" />
    </div>
  </div>

  <h3 className="text-lg font-semibold text-gray-800 text-center mb-3 break-words">
    {doc.title}
  </h3>

  <p className="text-gray-600 text-sm text-center mb-4 break-words">
    {doc.description}
  </p>

  <div className="flex justify-between items-center text-sm text-gray-500 mb-4 mt-auto">
    <div className="flex items-center space-x-1">
      <Calendar className="w-4 h-4" />
      <span>{doc.date}</span>
    </div>
    <span>{doc.size}</span>
  </div>

  <button
    onClick={() => downloadDocument(doc.url, doc.title)}
    className="w-full flex items-center justify-center space-x-2 bg-[#146C2D] hover:bg-[#c58c40] text-white py-2.5 rounded-xl font-medium transition-colors duration-200"
  >
    <Download className="w-4 h-4" />
    <span>Télécharger</span>
  </button>
</div>

            ))}
          </div>

          {/* Info Message */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
              <p className="text-gray-600 text-sm">
                📄 Pour toute demande de documents supplémentaires, veuillez nous contacter.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Document;
