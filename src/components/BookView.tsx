// Comprehensive long-form "Cancer Book" view — renders every CancerEntry as a chapter
// with table of contents, in-page anchors and full clinical detail.

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Book, Search, X, ChevronRight, ExternalLink, FlaskConical, MapPin,
  Activity, AlertCircle, Users, Stethoscope, Video as VideoIcon, Printer, Download
} from "lucide-react";

import type { CancerEntry, CancerCategory } from "@/data/types";

const CATEGORY_LABEL: Record<CancerCategory, string> = {
  carcinoma: "Carcinoma",
  sarcoma: "Sarcoma",
  lymphoma: "Lymphoma",
  leukemia: "Leukemia",
  melanoma: "Melanoma",
  cns: "CNS / Brain",
  other: "Other",
};

interface BookViewProps {
  cancers: CancerEntry[];
}

export function BookView({ cancers }: BookViewProps) {
  const [tocQuery, setTocQuery] = useState("");
  const [downloading, setDownloading] = useState(false);
  const bookRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (!bookRef.current) return;
    setDownloading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: [10, 10, 10, 10],
          filename: `cancer-knowledge-book-${new Date().toISOString().slice(0, 10)}.pdf`,
          image: { type: "jpeg", quality: 0.92 },
          html2canvas: { scale: 2, useCORS: true, backgroundColor: "#ffffff" },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          pagebreak: { mode: ["css", "legacy"] },
        })
        .from(bookRef.current)
        .save();
    } finally {
      setDownloading(false);
    }
  };



  // Group by first letter for TOC
  const grouped = useMemo(() => {
    const map = new Map<string, CancerEntry[]>();
    cancers.forEach((c) => {
      const letter = c.name.charAt(0).toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(c);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [cancers]);

  const visible = useMemo(() => {
    const q = tocQuery.toLowerCase().trim();
    if (!q) return cancers;
    return cancers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.alternateNames.some((n) => n.toLowerCase().includes(q)) ||
        c.description.toLowerCase().includes(q),
    );
  }, [cancers, tocQuery]);

  const visibleIds = useMemo(() => new Set(visible.map((c) => c.id)), [visible]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
      {/* ── Table of Contents (sticky on desktop) ── */}
      <aside className="lg:sticky lg:top-32 lg:self-start lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto border border-border rounded-sm bg-card p-4">
        <div className="flex items-center gap-2 mb-3">
          <Book className="w-4 h-4 text-primary" />
          <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
            Table of Contents
          </h2>
        </div>
        <div className="relative mb-3">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
          <input
            value={tocQuery}
            onChange={(e) => setTocQuery(e.target.value)}
            placeholder="Filter chapters…"
            className="w-full pl-7 pr-7 py-1.5 bg-background border border-border rounded-sm text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          {tocQuery && (
            <button
              onClick={() => setTocQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Clear filter"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <p className="text-[10px] text-muted-foreground font-mono mb-3">
          {visible.length} of {cancers.length} chapters
        </p>
        <div className="space-y-1.5 mb-4">
          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="w-full inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium rounded-sm border border-primary/40 text-primary bg-primary/5 hover:bg-primary/10 transition-colors disabled:opacity-60 disabled:cursor-wait"
          >
            <Download className="w-3 h-3" />
            {downloading ? "Generating PDF…" : "Download PDF"}
          </button>
          <button
            onClick={() => window.print()}
            className="w-full inline-flex items-center justify-center gap-1.5 px-2 py-1.5 text-[11px] font-medium rounded-sm border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            <Printer className="w-3 h-3" />
            Print
          </button>
        </div>

        <nav className="space-y-3">
          {grouped.map(([letter, entries]) => {
            const filtered = entries.filter((e) => visibleIds.has(e.id));
            if (filtered.length === 0) return null;
            return (
              <div key={letter}>
                <div className="text-[10px] font-mono font-bold text-primary mb-1">
                  {letter}
                </div>
                <ul className="space-y-0.5">
                  {filtered.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#chapter-${c.id}`}
                        className="block text-xs text-muted-foreground hover:text-primary py-0.5 truncate"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </nav>
      </aside>

      {/* ── Chapters ── */}
      <main ref={bookRef} className="space-y-12 print:space-y-6">
        <div className="border-b border-border pb-6">
          <h1 className="font-serif text-3xl text-foreground mb-2">
            The Cancer Knowledge Book
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            A long-form clinical reference covering all {cancers.length} cancer types in
            this knowledge base. Each chapter includes definition, symptoms, risk
            factors, diagnostics, staging, treatments with typical costs, survival data,
            curated videos, support organisations and external resources. Educational use
            only — always consult qualified medical professionals.
          </p>
        </div>

        {visible.map((c, idx) => (
          <BookChapter key={c.id} cancer={c} chapter={idx + 1} />
        ))}

        {visible.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <Search className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">No chapters match your filter.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function BookChapter({ cancer, chapter }: { cancer: CancerEntry; chapter: number }) {
  return (
    <motion.section
      id={`chapter-${cancer.id}`}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.3 }}
      className="scroll-mt-32 border-b border-border pb-10 last:border-b-0"
    >
      {/* Chapter header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">
          <span>Chapter {chapter.toString().padStart(2, "0")}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">{CATEGORY_LABEL[cancer.category]}</span>
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-1">
          {cancer.name}
        </h2>
        {cancer.alternateNames.length > 0 && (
          <p className="text-xs text-muted-foreground italic">
            Also known as: {cancer.alternateNames.join(" · ")}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-foreground/90 leading-relaxed mb-6 first-letter:text-3xl first-letter:font-serif first-letter:font-semibold first-letter:text-primary first-letter:mr-1 first-letter:float-left first-letter:leading-none first-letter:mt-1">
        {cancer.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-xs">
        <ChapterBlock icon={<AlertCircle className="w-3.5 h-3.5" />} title="Common Symptoms">
          <ul className="list-disc list-inside space-y-0.5">
            {cancer.commonSymptoms.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </ChapterBlock>

        <ChapterBlock icon={<Activity className="w-3.5 h-3.5" />} title="Risk Factors">
          <ul className="list-disc list-inside space-y-0.5">
            {cancer.riskFactors.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </ChapterBlock>

        <ChapterBlock icon={<Stethoscope className="w-3.5 h-3.5" />} title="Diagnostics">
          <ul className="list-disc list-inside space-y-0.5">
            {cancer.diagnostics.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </ChapterBlock>

        {cancer.stages && cancer.stages.length > 0 && (
          <ChapterBlock icon={<ChevronRight className="w-3.5 h-3.5" />} title="Staging">
            <ul className="list-disc list-inside space-y-0.5">
              {cancer.stages.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </ChapterBlock>
        )}
      </div>

      {/* Treatments */}
      <div className="mt-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
          <FlaskConical className="w-3.5 h-3.5" /> Treatments
        </h3>
        <div className="space-y-2">
          {cancer.treatments.map((t) => (
            <div key={t.name} className="border-l-2 border-primary/30 pl-3 py-1">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <span className="text-sm font-medium text-foreground">{t.name}</span>
                {t.typicalCostRange && (
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {t.typicalCostRange}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Survival */}
      {cancer.survivalRates && (
        <div className="mt-5 p-3 border border-primary/20 bg-primary/5 rounded-sm">
          <div className="text-[10px] font-mono uppercase tracking-wider text-primary mb-1">
            Survival
          </div>
          <p className="text-xs text-foreground/90 leading-relaxed">{cancer.survivalRates}</p>
        </div>
      )}

      {/* Geography */}
      {cancer.geographyNotes.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Geography
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {cancer.geographyNotes.map((g) => (
              <div key={g.region} className="border border-border rounded-sm p-2">
                <div className="font-semibold text-foreground mb-0.5">{g.region}</div>
                {g.prevalence && <p className="text-muted-foreground">{g.prevalence}</p>}
                {g.notableHospitals && g.notableHospitals.length > 0 && (
                  <p className="text-muted-foreground italic mt-0.5">
                    {g.notableHospitals.join(" · ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Videos */}
      {cancer.videos && cancer.videos.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <VideoIcon className="w-3.5 h-3.5" /> Curated Videos
          </h3>
          <ul className="space-y-1">
            {cancer.videos.map((v) => (
              <li key={v.title} className="text-xs">
                <a
                  href={v.youtubeId
                    ? `https://www.youtube.com/watch?v=${v.youtubeId}`
                    : `https://vimeo.com/${v.vimeoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {v.title}
                  <span className="text-muted-foreground">— {v.channel}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Support */}
      {cancer.supportOrganizations.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Support Organisations
          </h3>
          <ul className="space-y-1 text-xs">
            {cancer.supportOrganizations.map((o) => (
              <li key={o.name}>
                <a
                  href={o.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary font-medium"
                >
                  {o.name}
                </a>
                <span className="text-muted-foreground"> — {o.description} ({o.geography})</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Resources */}
      {cancer.externalResources.length > 0 && (
        <div className="mt-5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            Further Reading
          </h3>
          <ul className="space-y-1 text-xs">
            {cancer.externalResources.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-primary inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" />
                  {r.title}
                  <span className="text-muted-foreground uppercase text-[9px]">[{r.type}]</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4 text-[10px] font-mono text-muted-foreground">
        Last updated: {cancer.lastUpdated}
      </div>
    </motion.section>
  );
}

function ChapterBlock({
  icon, title, children,
}: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-primary mb-1.5 flex items-center gap-1.5">
        {icon} {title}
      </h3>
      <div className="text-xs text-foreground/85 leading-relaxed">{children}</div>
    </div>
  );
}
