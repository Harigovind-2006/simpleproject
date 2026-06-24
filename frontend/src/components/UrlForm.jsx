import { useState } from "react";

function UrlForm({ onShorten }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!url) return;

    onShorten(url);
    setUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow"
    >
      <div className="flex gap-3">
        <input
          type="url"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 border p-3 rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 rounded"
          style={{ minWidth: "100px" ,
            cursor: "pointer"
          }}
        >
          
          Shorten
        </button>
      </div>
    </form>
  );
}

export default UrlForm;