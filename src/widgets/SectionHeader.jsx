export default function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-700 mb-5">{subtitle}</h3>
      <h2 className="text-4xl font-bold text-black leading-normal">{title}</h2>
    </div>
  );
}
