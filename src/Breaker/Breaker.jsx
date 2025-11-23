import './Breaker.css';
export default function LogoScrollSection() {
  // Array of logo data - add your logo paths here
  const logos = [
    {
      name: 'UNIVERSITY OF SCIENCE AND TECHNOLOGY OF SOUTHERN PHILIPPINES',
      image: '/logos/ete-rale.svg',
      alt: 'Ete Rale Logo',
      textStyle: 'font-semibold text-2xl text-red-400 italic',
    },
    {
      name: 'BS IN INFORMATION TECHNOLOGY',
      image: '/logos/spotify.svg',
      alt: 'Spotify Logo',
      textStyle: 'font-bold text-2xl text-blue-400',
    },
    {
      name: 'CERTIFIED WEB DEVELOPER',
      image: '/logos/vodafone.svg',
      alt: 'Vodafone Logo',
      textStyle: 'font-semibold text-2xl text-green-400',
    },
    {
      name: 'MGBX CERTIFICATE',
      image: '/logos/american-airlines.svg',
      alt: 'American Airlines Logo',
      textStyle: 'font-bold text-2xl text-purple-400',
    },
    {
      name: 'OJT CERTIFICATE',
      image: '/logos/duolingo.svg',
      alt: 'Duolingo Logo',
      textStyle: 'font-semibold text-2xl text-yellow-400',
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#0a0e1a] py-8 overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-[#0a0e1a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-[#0a0e1a] to-transparent z-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex animate-scroll items-center">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="shrink-0 mx-8 md:mx-12 flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.target.style.display = 'none';
                    const textStyle =
                      logo.textStyle || 'text-gray-400 text-xl md:text-2xl font-semibold';
                    e.target.parentElement.innerHTML = `<span class="${textStyle}">${logo.name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
