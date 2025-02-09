const Songs = () => {
    // Dummy song data
    const songs = [
      { id: 1, title: "ஸ்ரீ செல்வ சுந்தர விநாயகர் சுப்ரபாதம்", url: "/assets/WhatsApp Audio 2025-02-09 at 2.42.38 PM.mp3" },
      { id: 2, title: "குலம் விளங்க செய்வார் எங்க பிள்ளையார் சாமி", url: "/assets/WhatsApp Audio 2025-02-09 at 2.44.09 PM.mp3" },
    ];
  
    return (
      <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 p-6 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-700 mb-6 text-center">
          Songs List
        </h2>
  
        {/* Song List */}
        <ul className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-4">
          {songs.map((song) => (
            <li
              key={song.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b last:border-none"
            >
              <span className="text-lg font-medium mb-2 md:mb-0">{song.title}</span>
              <a
                href={song.url}
                download={song.title}
                className="text-blue-600 hover:underline font-medium"
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Songs;
  