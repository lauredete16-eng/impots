// Emplacement d’image : affiche <img> si `src` est fourni, sinon un bloc coloré à remplir plus tard.
export default function ImageSlot({ src, alt = "", label, ratio = "16/9", bg = "#dfe3f7", className = "", children }) {
  if (src) return <img src={src} alt={alt} className={`w-full object-cover ${className}`} style={{ aspectRatio: ratio }} />;
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`} style={{ aspectRatio: ratio, background: bg }} role="img" aria-label={alt || label}>
      {label && <span className="px-6 text-center text-sm font-medium text-black/45">Image : {label}</span>}
      {children}
    </div>
  );
}
