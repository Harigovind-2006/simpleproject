function UrlCard({ item }) {
  const shortUrl = `http://localhost:3000/${item.shortId}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  };

  return (
    <div className="border p-4 rounded shadow">
      <p>
        <strong>Original:</strong>
        {" "}
        {item.redirectURL}
      </p>

      <p>
        <strong>Short:</strong>
        {" "}
        <a
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600"
        >
          {shortUrl}
        </a>
      </p>

      <p>
        <strong>Clicks:</strong>
        {" "}
        {item.clicks}
      </p>

      <button
        onClick={copyUrl}
        className="mt-3 bg-green-500 text-white px-4 py-2 rounded"
      >
        Copy
      </button>
    </div>
  );
}

export default UrlCard;