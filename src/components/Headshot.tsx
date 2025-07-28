// components/Headshot.tsx
export default function Headshot() {
  const primary = "/img/me.jpg";
  const hover   = "/img/IMG_0299.jpg";

  return (
    <img
      src={primary}
      onMouseEnter={e => (e.currentTarget.src = hover)}
      onMouseLeave={e => (e.currentTarget.src = primary)}
      alt="Nolan MacLear"
      className="w-44 h-44 md:w-56 md:h-56 rounded-xl object-cover transition-transform duration-300 hover:scale-105"
    />
  );
}
