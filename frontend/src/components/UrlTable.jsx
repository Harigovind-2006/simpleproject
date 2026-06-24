function UrlTable({ urls }) {
  return (
    <div className="bg-white rounded shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">
              Original URL
            </th>

            <th className="p-3 text-left">
              Short URL
            </th>

            <th className="p-3 text-left">
              Clicks
            </th>
          </tr>
        </thead>

        <tbody>
          {urls.map((url) => (
            <tr
              key={url.shortId}
              className="border-t"
            >
              <td className="p-3">
                {url.redirectURL}
              </td>

              <td className="p-3">
                <a
                  href={`https://urlshortner-srak.onrender.com/${url.shortId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600"
                >
                  {url.shortId}
                </a>
              </td>

              <td className="p-3">
                {url.clicks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UrlTable;