export default function SectionText({ children, maxWidth = "md" }) {
  return (
    <p className={`text-black text-sm mt-5 max-w-${maxWidth}`}>{children}</p>
  );
}
