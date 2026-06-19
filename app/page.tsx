"use client";

import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      {/* ─────────────────────────────────────────
          MOBILE  (< md)
      ───────────────────────────────────────── */}
      <div className="md:hidden relative min-h-screen w-full flex flex-col overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/teste-bg8.png"
            alt="SkinBoxd background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/70" />
        </div>

        <div
          className="absolute left-6 right-6 top-25 z-20 pointer-events-none select-none overflow-hidden"
          style={{ height: "13vw" }}
        >
          <div
            style={{
              width: "100%",
              transform: "translateY(20%)",
              transformOrigin: "top center",
            }}
          >
            <Image
              src="/SKINBOXDMOBILE.svg"
              alt="SKINBOXD"
              width={1920}
              height={260}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        <div className="flex-1" />

        <div className="relative z-10 mx-4 mb-10 rounded-2xl overflow-hidden">
          <div
            className="px-6 pt-7 pb-8 flex flex-col justify-center"
            style={{
              background: "rgba(255,255,255,0.13)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: "1rem",
            }}
          >
            <h1 className="font-lexend text-white text-[1.75rem] font-bold mb-5 text-center drop-shadow-md">
              Acessar sua conta
            </h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.12] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 font-lexend text-sm outline-none focus:border-white/50 focus:bg-white/[0.18] transition-all"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.12] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 font-lexend text-sm outline-none focus:border-white/50 focus:bg-white/[0.18] transition-all"
              />
              <div className="flex justify-start mt-[-2px]">
                <button
                  type="button"
                  className="font-lexend text-[#E8E8E8] text-sm hover:text-white transition-colors pl-1"
                >
                  Esqueceu a senha?
                </button>
              </div>
              <button
                type="submit"
                className="mt-1 w-full bg-white/80 text-black font-lexend font-bold text-2xl rounded-xl py-3.5 tracking-wide hover:bg-white active:scale-[0.98] transition-all"
              >
                Entrar
              </button>
            </form>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-white rounded-xl py-3 hover:bg-white/90 active:scale-[0.98] transition-all"
                aria-label="Entrar com Google"
              >
                <GoogleIcon />
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-white rounded-xl py-3 hover:bg-white/90 active:scale-[0.98] transition-all"
                aria-label="Entrar com Apple"
              >
                <AppleIcon />
              </button>
            </div>

            <p className="text-center font-lexend text-white/70 text-xs mt-4">
              Não tem conta?{" "}
              <a
                href="/cadastro"
                className="text-white font-semibold underline underline-offset-2 hover:text-white/80 transition-colors"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────
          DESKTOP / TABLET  (≥ md)
      ───────────────────────────────────────── */}
      <div className="hidden md:flex relative w-screen h-screen overflow-hidden bg-black">
        {/* LEFT photo */}
        <div className="relative flex-1 h-full">
          <Image
            src="/image/teste-bg11.png"
            alt="SkinBoxd esquerda"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* RIGHT photo */}
        <div className="relative flex-1 h-full">
          <Image
            src="/image/teste-bg10.png"
            alt="SkinBoxd direita"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Center divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 z-10 -translate-x-1/2" />

        {/* ── LOGO via SVG do Figma ──
            O container tem overflow:hidden e altura fixa em vw.
            O SVG fica com width:100% e é empurrado para cima com
            translateY negativo — isso cria o efeito de "corte do topo".
            
            COMO AJUSTAR:
            - Mais corte (logo menor visualmente): aumente o valor negativo do translateY, ex: -18%
            - Menos corte (logo maior visualmente): diminua, ex: -8%
            - O container height="13vw" controla a "janela" visível
        ── */}
        <div
          className="absolute left-0 right-0 top-0 z-20 pointer-events-none select-none overflow-hidden"
          style={{ height: "13vw" }}
        >
          <div
            style={{
              width: "100%",
              transform: "translateY(20%)",
              transformOrigin: "top center",
            }}
          >
            <Image
              src="/SKINBOXD.svg"
              alt="SKINBOXD"
              width={1920}
              height={260}
              priority
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        </div>

        {/* ── "Login / Register" trigger — bottom-left ── */}
        {!showForm && (
          <button
            onClick={() => setShowForm(true)}
            className="absolute bottom-8 left-8 z-30 font-syne font-bold text-white/90 text-5xl hover:text-white transition-colors tracking-wide"
          >
            Login<span className="text-white/90 mx-1">/</span>Register
          </button>
        )}

        {/* ── Slide-up form panel ── */}
        <div
          className={`
            absolute bottom-0 left-0 right-0 z-30
            transition-transform duration-500 ease-in-out
            ${showForm ? "translate-y-0" : "translate-y-full"}
          `}
        >
          <div
            className="mx-auto w-full max-w-md px-8 pt-8 pb-10 rounded-t-3xl"
            style={{
              background: "rgba(10,10,10,0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderBottom: "none",
            }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-6 text-white/40 hover:text-white text-2xl leading-none transition-colors"
              aria-label="Fechar"
            >
              ×
            </button>

            <h1 className="font-lexend text-white text-2xl font-bold mb-6 text-center">
              Acessar sua conta
            </h1>

            <form onSubmit={handleLogin} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/[0.10] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-lexend text-sm outline-none focus:border-white/50 focus:bg-white/[0.16] transition-all"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/[0.10] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 font-lexend text-sm outline-none focus:border-white/50 focus:bg-white/[0.16] transition-all"
              />
              <div className="flex justify-start">
                <button
                  type="button"
                  className="font-lexend text-white/50 text-sm hover:text-white/80 transition-colors pl-1"
                >
                  Esqueceu a senha?
                </button>
              </div>
              <button
                type="submit"
                className="mt-1 w-full bg-white text-black font-lexend font-bold text-lg rounded-xl py-3.5 hover:bg-white/90 active:scale-[0.98] transition-all"
              >
                Entrar
              </button>
            </form>

            <div className="flex gap-3 mt-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl py-3 hover:bg-white/20 active:scale-[0.98] transition-all"
                aria-label="Entrar com Google"
              >
                <GoogleIcon white />
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center bg-white/10 border border-white/20 rounded-xl py-3 hover:bg-white/20 active:scale-[0.98] transition-all"
                aria-label="Entrar com Apple"
              >
                <AppleIcon white />
              </button>
            </div>

            <p className="text-center font-lexend text-white/50 text-xs mt-5">
              Não tem conta?{" "}
              <a
                href="/cadastro"
                className="text-white font-semibold underline underline-offset-2 hover:text-white/70 transition-colors"
              >
                Cadastre-se
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Icons ── */
function GoogleIcon({ white }: { white?: boolean }) {
  if (white) {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="rgba(255,255,255,0.85)"
        />
        <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="rgba(255,255,255,0.85)"
        />
        <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="rgba(255,255,255,0.85)"
        />
        <path
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="rgba(255,255,255,0.85)"
        />
      </svg>
    );
  }
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AppleIcon({ white }: { white?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={white ? "rgba(255,255,255,0.85)" : "black"}
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
