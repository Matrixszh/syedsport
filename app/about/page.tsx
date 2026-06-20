import SplitText from "@/components/SplitText";
import StaggeredMenu from "@/components/StaggeredMenu";

export default function Home() {
  const menuItems = [
    { label: "Home", ariaLabel: "Go to home page", link: "/" },
    { label: "About", ariaLabel: "Learn about us", link: "/about" },
    { label: "Services", ariaLabel: "View our services", link: "/services" },
    { label: "Contact", ariaLabel: "Get in touch", link: "/contact" },
  ];

  const socialItems = [
    { label: "Twitter", link: "https://twitter.com" },
    { label: "GitHub", link: "https://github.com" },
    { label: "LinkedIn", link: "https://linkedin.com" },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-none text-white">
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(900px 520px at 22% 6%, rgba(168,85,247,0.22), rgba(0,0,0,0) 60%), radial-gradient(820px 480px at 76% -8%, rgba(99,102,241,0.14), rgba(0,0,0,0) 62%), radial-gradient(620px 460px at 30% 70%, rgba(244,63,94,0.08), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0) 40%), linear-gradient(180deg, #05050A, #05050A)",
        }}
      />

      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#ffffff"
        changeMenuColorOnOpen={true}
        colors={["#dd00ff", "#1e1e1f"]}
        logoUrl="/tulip.png"
        accentColor="#dd00ff"
        isFixed={true}
      />

      <main className="relative z-10 mx-auto w-full pt-24 sm:pt-28">
        <section className="pt-10 sm:pt-16">
          <SplitText
            tag="p"
            text="EPISODE // 01"
            className="block text-[10px] font-medium tracking-[0.35em] text-white/55"
            textAlign="left"
            splitType="chars"
            delay={30}
            duration={1.9}
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
          />

          <h1 className="mt-6 text-[52px] font-black uppercase leading-[0.82] tracking-[-0.04em] sm:text-[76px] md:text-[96px]">
            <SplitText
              tag="span"
              text="Creative"
              className="block pr-5 text-white"
              textAlign="left"
              splitType="chars"
              delay={40}
              duration={1.4}
              from={{ opacity: 0, y: 26 }}
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              tag="span"
              text="Rebellion"
              className="block rb-gradient-text"
              textAlign="left"
              splitType="chars"
              delay={40}
              duration={1.4}
              from={{ opacity: 0 , y: 26 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>

          <SplitText
            tag="p"
            text="Pushing the boundaries of digital creation. We do not just follow trends, we set them. This is design and code made bold, in noise and in silence."
            className="block mt-6 max-w-[540px] text-[13px] leading-6 text-white/58 sm:text-[14px]"
            textAlign="left"
            splitType="words"
            delay={20}
            duration={0.8}
            from={{ opacity: 0, y: 18 }}
            to={{ opacity: 1, y: 0 }}
          />
        </section>

        <section className="mt-10 sm:mt-12">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_50px_120px_rgba(0,0,0,0.65)]">
            <div className="relative h-[50vh] w-full">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(140px 140px at 26% 78%, rgba(255,255,255,0.12), rgba(0,0,0,0) 70%), radial-gradient(220px 180px at 58% 46%, rgba(255,255,255,0.08), rgba(0,0,0,0) 70%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0) 40%), linear-gradient(135deg, rgba(20,20,28,0.9), rgba(6,6,12,0.92))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

              <button
                type="button"
                aria-label="Play"
                className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                <span className="ml-0.5 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-white/85" />
              </button>
            </div>
          </div>
        </section>

        <section className="mt-20 pb-16 sm:mt-28 sm:pb-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-[34px] font-black uppercase leading-[0.9] tracking-[-0.03em] text-white sm:text-[40px]">
              <SplitText
                tag="span"
                text="The"
                className="block"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.75}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="span"
                text="  Archive"
                className="block"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.75}
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
              />
            </h2>
            <SplitText
              tag="p"
              text="Selected works from the depths. No noise — only signal."
              className="block max-w-[320px] text-[12px] leading-5 text-white/55"
              textAlign="left"
              splitType="words"
              delay={16}
              duration={0.6}
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
            />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12 md:gap-7">
            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-7">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(520px 520px at 18% 52%, rgba(34,211,238,0.30), rgba(0,0,0,0) 55%), radial-gradient(520px 520px at 75% 30%, rgba(168,85,247,0.18), rgba(0,0,0,0) 55%), linear-gradient(135deg, rgba(8,8,14,1), rgba(18,18,26,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="01 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />

                <div>
                  <SplitText
                    tag="h3"
                    text="VOID WALKER"
                    className="block mt-auto pt-10 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-5">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(220px 180px at 78% 40%, rgba(244,63,94,0.28), rgba(0,0,0,0) 62%), radial-gradient(260px 220px at 42% 62%, rgba(168,85,247,0.20), rgba(0,0,0,0) 62%), repeating-linear-gradient(135deg, rgba(255,255,255,0.08) 0 1px, rgba(255,255,255,0) 1px 12px), linear-gradient(135deg, rgba(10,10,16,1), rgba(20,20,30,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/35 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="02 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="h3"
                    text="NEURAL NET"
                    className="block mt-auto pt-10 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:col-span-12">
              <div
                className="absolute inset-0 opacity-90"
                style={{
                  backgroundImage:
                    "radial-gradient(600px 360px at 50% 55%, rgba(59,130,246,0.28), rgba(0,0,0,0) 62%), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, rgba(255,255,255,0) 1px 24px), linear-gradient(180deg, rgba(4,10,18,1), rgba(5,5,10,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

              <div className="relative h-[50vh] w-full p-6 sm:p-7">
                <SplitText
                  tag="p"
                  text="03 / PROJECT"
                  className="block text-sm font-light tracking-[0.32em] text-white/60"
                  textAlign="left"
                  splitType="chars"
                  delay={12}
                  duration={0.6}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="h3"
                    text="DEEP STATE"
                    className="block mt-auto pt-12 text-xl font-semibold tracking-[0.22em] text-white/90"
                    textAlign="left"
                    splitType="chars"
                    delay={14}
                    duration={0.7}
                    from={{ opacity: 0, y: 12 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </article>
          </div>
        </section>

        <section>
          <div className="overflow-hiddenbg-white/[0.03]">
            <div className="relative grid gap-10 px-7 py-10 sm:grid-cols-3 sm:gap-8  sm:py-12">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(560px 300px at 20% 60%, rgba(168,85,247,0.25), rgba(0,0,0,0) 60%), radial-gradient(560px 300px at 78% 40%, rgba(255,255,255,0.06), rgba(0,0,0,0) 62%), linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0) 55%), linear-gradient(180deg, rgba(8,8,14,1), rgba(6,6,10,1))",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/10" />

              <div className="relative">
                <SplitText
                  tag="p"
                  text="4.2M"
                  className="block rb-gradient-text text-[44px] font-black tracking-[-0.04em] sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="REACH"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <div className="relative">
                <SplitText
                  tag="p"
                  text="120+"
                  className="block text-[44px] font-black tracking-[-0.04em] text-white sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="PROJECTS"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>

              <div className="relative">
                <SplitText
                  tag="p"
                  text="90%"
                  className="block text-[44px] font-black tracking-[-0.04em] text-white sm:text-[56px]"
                  textAlign="left"
                  splitType="chars"
                  delay={20}
                  duration={0.75}
                  from={{ opacity: 0, y: 16 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div>
                  <SplitText
                    tag="p"
                    text="RETENTION"
                    className="block mt-1 text-[10px] font-medium tracking-[0.32em] text-white/55"
                    textAlign="left"
                    splitType="chars"
                    delay={18}
                    duration={0.65}
                    from={{ opacity: 0, y: 10 }}
                    to={{ opacity: 1, y: 0 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-black/30">
        <div className="mx-auto w-full max-w-full px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6">
              <SplitText
                tag="p"
                text="AURA MEDIA"
                className="block text-[12px] font-semibold tracking-[0.35em] text-white/80"
                textAlign="left"
                splitType="chars"
                delay={18}
                duration={0.7}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
              <SplitText
                tag="p"
                text="Designing the future of visual experiences. Where technology and emotion collide — art becomes industry."
                className="block mt-4 max-w-[420px] text-[12px] leading-5 text-white/55"
                textAlign="left"
                splitType="words"
                delay={14}
                duration={0.6}
                from={{ opacity: 0, y: 8 }}
                to={{ opacity: 1, y: 0 }}
              />
            </div>

            <div className="grid gap-8 text-[12px] text-white/60 sm:grid-cols-3 md:col-span-6">
              <div>
                <SplitText
                  tag="p"
                  text="Sitemap"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Work"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Services"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="About"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
              <div>
                <SplitText
                  tag="p"
                  text="Social"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Instagram"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="X"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Behance"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
              <div>
                <SplitText
                  tag="p"
                  text="Contact"
                  className="block text-[10px] font-medium tracking-[0.32em] text-white/55"
                  textAlign="left"
                  splitType="chars"
                  delay={14}
                  duration={0.6}
                  from={{ opacity: 0, y: 8 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <div className="mt-4 space-y-3">
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Email"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                  <a href="#" className="block hover:text-white">
                    <SplitText
                      tag="span"
                      text="Start a Project"
                      className="block"
                      textAlign="left"
                      splitType="chars"
                      delay={12}
                      duration={0.55}
                      from={{ opacity: 0, y: 8 }}
                      to={{ opacity: 1, y: 0 }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
           <div className="right-justify">© 2026 Aura Media. All rights reserved.
             </div>
            Designed in the dark.
          </div>
        </div>
      </footer>
    </div>
  );
}