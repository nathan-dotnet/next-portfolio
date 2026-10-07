"use client";

import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    const w = window as any;
    if (w.__portfolioStarted) return;
    w.__portfolioStarted = true;
    import("../lib/initPortfolio").then((mod) => mod.default());
  }, []);

  return (
    <>
      <div id="loader">
        <div className="lg">Nathaniel Lucero</div>
        <div className="nm">Full Stack Developer</div>
        <div className="lbar"><i></i></div>
      </div>

      <canvas id="gl"></canvas>
      <div id="scroll-space"></div>

      <header id="topbar">
        <button id="wordmark"><b>NL</b><span>Nathaniel Lucero</span></button>
        <div className="tb-right">
          <button id="btnTheme" aria-label="Switch to night mode">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
            <span>Night</span>
          </button>
          <button id="btn2d">2D Portfolio</button>
        </div>
      </header>

      <div id="landing">
        <p className="kicker">Full Stack Developer · Zambales, Philippines</p>
        <h1>Nathaniel<br />Lucero</h1>
        <p className="tagline">Building scalable, maintainable, and user-friendly web applications.</p>
        <p className="loc">IoT Integration · PLC · Real-Time Systems</p>
        <div className="btnrow">
          <button className="btn solid" id="btnExplore">Explore Portfolio</button>
          <button className="btn" id="btnCV">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>
            Download CV
          </button>
          <button className="btn" id="btnEmail">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            Send Email
          </button>
        </div>
      </div>

      <div id="hint"><span>Scroll to explore</span><div className="ln"></div></div>

      <div id="caption"><span className="num"></span><span className="name"></span><span className="hint"></span></div>

      <div id="contactbar">
        <a className="chip" href="mailto:nathaniellucero.dev@gmail.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
          nathaniellucero.dev@gmail.com</a>
        <a className="chip" href="https://github.com/nathan-dotnet" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub</a>
        <a className="chip" href="https://www.linkedin.com/in/nathaniel-lucero052903/" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
          LinkedIn</a>
        <a className="chip" href="https://www.instagram.com/nathan_dotnet?utm_source=qr&igsh=MzNpd2g0enIxcXgz" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>
          Instagram</a>
        <button className="btn" id="btnSend">Send Email</button>
      </div>

      <div id="finale">
        <p className="kicker">End of tour</p>
        <p>Explore the workspace of a Full Stack Developer.</p>
        <div className="btnrow" style={{justifyContent:"center"}}>
          <button className="btn solid" id="btnAgain">Explore Again</button>
          <button className="btn" id="btnCV2">Download CV</button>
        </div>
      </div>

      <nav id="rail"></nav>

      <div id="tooltip"><span className="tag"></span><b></b><span></span></div>
      <div id="modal"></div>
      <div id="flat"></div>
    </>
  );
}
