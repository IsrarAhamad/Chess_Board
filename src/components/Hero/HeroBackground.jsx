const HeroBackground = () => {
  return (
    <>
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[150px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30" />
    </>
  );
};

export default HeroBackground;