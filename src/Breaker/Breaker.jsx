import './Breaker.css';
import logos from '@/data/logos';

export default function LogoScrollSection() {
  
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full bg-[#0a0e1a] py-8 overflow-hidden">
      <div className="relative">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#0a0e1a] to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#0a0e1a] to-transparent z-10 pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex animate-scroll items-center gap-6 sm:gap-8">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="shrink-0 flex items-center justify-center whitespace-nowrap text-sm sm:text-base lg:text-lg"
              >
                <span className={logo.textStyle}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
