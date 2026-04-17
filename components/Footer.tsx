export default function Footer() {
  return (
    <footer className="border-t border-sage/30 bg-cream/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-serif text-2xl uppercase tracking-[0.12em]">dyasse shop</h3>
          <p className="mt-3 text-sm text-champagne-muted">Contact: dyasse@gmail.com</p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-sage">Copyright © 2026 dyasse shop</p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Social</h4>
          <div className="mt-4 space-y-2 text-sm text-champagne-muted">
            <p>@dyasse.shop</p>
            <p>Pinterest / Instagram / TikTok</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">No-Floppy Guarantee</h4>
          <p className="mt-4 text-sm leading-relaxed text-champagne-muted">
            If your first build does not hold structure after following the sequence, we provide direct support and
            troubleshooting so your clutch achieves the intended luxury silhouette.
          </p>
        </div>
      </div>
    </footer>
  );
}
