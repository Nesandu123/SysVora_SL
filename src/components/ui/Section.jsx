export default function Section({
  children,
  id,
  className = '',
  background = 'default'
}) {
  const backgrounds = {
    default: 'bg-slate-950',
    darker: 'bg-slate-900',
    gradient: 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950',
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${backgrounds[background]} ${className}`}
    >
      {children}
    </section>
  );
}
