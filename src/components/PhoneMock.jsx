// A phone frame around a real app screenshot from public/screenshots/
export default function PhoneMock({ shot, alt, small = false }) {
  return (
    <div className={`phone ${small ? 'phone--small' : ''}`}>
      <img
        className="phone__img"
        src={`/screenshots/${shot}.webp`}
        alt={alt}
        width="450"
        height="908"
        loading="lazy"
      />
    </div>
  );
}
