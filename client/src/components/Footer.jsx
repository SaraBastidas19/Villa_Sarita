function Footer() {
  return (
    <footer className="mt-16 bg-black py-10 text-stone-100">
      <div className="container-base flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo/logo.png" alt="Logo Villa Sarita" className="h-16 w-auto md:h-20" loading="lazy" />
          <div>
            <h3 className="text-lg font-semibold">Finca Villa Sarita</h3>
            <p className="text-sm text-stone-300">Turismo rural, glamping y conexión con la naturaleza.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/finca_villasarita/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-white/90 transition hover:scale-110 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5z" />
              <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4zM17.4 6.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-white/90 transition hover:scale-110 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M13.5 22v-8h2.8l.4-3.2h-3.2V8.7c0-.9.3-1.5 1.6-1.5h1.7V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4v2.2H8.2V14H11v8h2.5z" />
            </svg>
          </a>
          <a href="#" aria-label="TikTok" className="text-white/90 transition hover:scale-110 hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
              <path d="M14.5 3h2.3c.2 1.6 1.2 3.1 2.7 3.8v2.3a6.7 6.7 0 0 1-2.6-.8v5.7a5.7 5.7 0 1 1-5.7-5.7c.4 0 .9.1 1.3.2v2.4a3.5 3.5 0 1 0 2 3.1V3z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
