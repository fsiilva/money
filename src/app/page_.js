"use client";

import {
  CurrencyDollarIcon,
  EnvelopeSimpleIcon,
  LockIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-purple">
        <div className="max-w-280 mx-auto pt-8 px-4 pb-48 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-light flex items-center justify-center text-white font-bold text-xl">
              <CurrencyDollarIcon size={24} />
            </div>
            <span className="text-white text-2xl font-semibold">
              Digital Money
            </span>
          </div>
        </div>
      </header>

      {/* Login Card */}
      <main className="max-w-md w-full mx-auto px-4 -mt-40 flex-1">
        <div className="bg-shape p-12 rounded shadow-[0_0_30px_rgba(0,0,0,0.4)]">
          <h2 className="text-text-title text-2xl mb-2 font-semibold">
            Acesse sua conta
          </h2>
          <p className="text-text-body text-base mb-8">
            Gerencie suas finanças com o Digital Money.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <EnvelopeSimpleIcon
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-body"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail"
                className="w-full py-4 pl-12 pr-6 rounded border border-input-border bg-input-bg text-base outline-none placeholder:text-text-body"
              />
            </div>

            <div className="relative mb-2">
              <LockIcon
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-text-body"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full py-4 pl-12 pr-12 rounded border border-input-border bg-input-bg text-base outline-none placeholder:text-text-body"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-body hover:text-text-title transition-colors"
              >
                {showPassword ? (
                  <EyeSlashIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
              </button>
            </div>

            <div className="flex justify-end mb-6">
              <Link
                href="/esqueci-senha"
                className="text-text-body text-sm hover:text-purple transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-green text-white border-none rounded text-base font-semibold cursor-pointer hover:brightness-90 transition-all"
            >
              Entrar
            </button>
          </form>

          <p className="text-text-body text-sm text-center mt-8">
            Ainda não tem conta?{" "}
            <Link
              href="/cadastro"
              className="text-purple font-semibold hover:brightness-90 transition-all"
            >
              Cadastre-se
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
