export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container max-w-6xl mx-auto px-6 space-y-6">
        {/* Links row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © Kalilur Rahman. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <a
              href="https://kalilur-portfolio.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-primary hover:text-accent transition-colors"
            >
              All KR apps →
            </a>
            <span className="text-muted-foreground opacity-50 hidden md:inline">|</span>
            <a
              href="https://www.linkedin.com/in/kalilurrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/kalilurrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.kaggle.com/kalilurrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Kaggle
            </a>
            <a
              href="mailto:rahman.kalilur@outlook.com"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        {/* AI Content Disclaimer */}
        <div className="p-4 border border-amber-500/20 bg-amber-500/5 rounded-sm">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            <span className="font-semibold text-amber-500/80">⚠ AI Content Notice.</span>{" "}
            Content in this application is produced with the assistance of Artificial Intelligence including large language models.
            AI systems can and do produce hallucinations — outputs that appear plausible but may be factually incorrect, outdated, incomplete,
            or contextually inappropriate. No AI system is infallible. All content here is a starting point and reference only — not
            authoritative, certified, or production-ready. All content must be critically reviewed and vetted by qualified human
            professionals and domain experts before use in any professional, commercial, technical, legal, or safety-critical context.
            Kalilur Rahman accepts no liability for outcomes or damages arising from use of AI-generated content without independent human verification.
          </p>
        </div>

        {/* Financial Disclaimer */}
        <div className="p-4 border border-border bg-card/50 rounded-sm">
          <p className="text-[10px] text-muted-foreground leading-relaxed">
            <span className="font-semibold">📋 Medical Disclaimer.</span>{" "}
            This Cancer Knowledge Book is for informational and educational purposes only. It does not constitute medical advice,
            diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.
            Cost ranges are indicative estimates and vary significantly by region, insurance status, and individual circumstances.
            Video content is sourced from third-party channels and is provided for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
