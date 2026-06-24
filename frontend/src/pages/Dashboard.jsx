import { useState } from "react";
import Navbar from "../components/Navbar";
import UrlForm from "../components/UrlForm";
import UrlTable from "../components/UrlTable";
import { shortenUrl } from "../services/app";

function Dashboard() {
  const [urls, setUrls] = useState([]);

  const handleShorten = async (url) => {
    try {
      const res = await shortenUrl({
        redirectURL: url,
      });

      const newUrl = {
        shortId: res.data.shortId,
        redirectURL: url,
        clicks: 0,
      };

      setUrls([newUrl, ...urls]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">
          Dashboard
        </h2>

        <UrlForm onShorten={handleShorten} />

        <div className="mt-8">
          <UrlTable urls={urls} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;