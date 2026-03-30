import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe, ExternalLink, ChevronDown, ChevronUp, Phone,
  MapPin, Heart, Building2, Wallet, BookOpen, FlaskConical,
  Stethoscope, AlertTriangle, BookMarked, Microscope, Users,
  HandHeart, Leaf, Award, Search
} from "lucide-react";
import type { KnowledgeBase } from "@/data/knowledge-base-types";

/* ── Shared helpers ───────────────────────────────────────── */

function SectionAccordion({ id, icon, title, badge, defaultOpen, children }: {
  id: string; icon: React.ReactNode; title: string; badge?: number | string; defaultOpen?: boolean; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  return (
    <div className="border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card hover:bg-primary/5 transition-colors text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="text-primary">{icon}</span>
          {title}
          {badge !== undefined && (
            <span className="text-[10px] font-mono text-muted-foreground bg-border px-1.5 py-0.5 rounded-sm">{badge}</span>
          )}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border"
          >
            <div className="px-4 py-4 bg-background/50 text-sm text-muted-foreground">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResourceLink({ name, url, description, helpline, badge }: {
  name: string; url: string; description?: string; helpline?: string; badge?: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start justify-between p-3 bg-card border border-border rounded-sm hover:border-primary/40 transition-colors group"
    >
      <div className="flex-1 min-w-0">
        <span className="text-xs font-semibold text-primary group-hover:underline">{name}</span>
        {badge && <span className="ml-2 text-[10px] px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{badge}</span>}
        {description && <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{description}</p>}
        {helpline && (
          <p className="text-[10px] text-amber-400/90 mt-1 flex items-center gap-1">
            <Phone className="w-3 h-3" /> {helpline}
          </p>
        )}
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5 ml-2" />
    </a>
  );
}

/* ── Global Resources ─────────────────────────────────────── */

export function GlobalResourcesSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <Globe className="w-5 h-5 text-primary" />
        {data.globalResources.title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.globalResources.items.map((r) => (
          <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} badge={r.type} />
        ))}
      </div>
    </div>
  );
}

/* ── Geography Resources ──────────────────────────────────── */

export function GeographyResourcesSection({ data }: { data: KnowledgeBase }) {
  const geo = data.geographyResources;

  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <MapPin className="w-5 h-5 text-primary" />
        Geography &amp; Country Resources
      </h3>

      {/* India */}
      <SectionAccordion id="india" icon={<Building2 className="w-4 h-4" />} title="India" badge={`${geo.india.hospitals.length} hospitals`} defaultOpen>
        <p className="text-xs leading-relaxed mb-3">{geo.india.overview}</p>

        <div className="space-y-3">
          {/* Govt Schemes */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Government Schemes</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {geo.india.govtSchemes.map((s) => (
                <ResourceLink key={s.name} name={s.name} url={s.url} description={s.description} badge={s.type} />
              ))}
            </div>
          </div>

          {/* Top Hospitals */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Premier Hospitals</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {geo.india.hospitals.map((h) => (
                <div key={h.name} className="p-3 bg-card border border-border rounded-sm">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-semibold text-foreground">{h.name}</span>
                      {h.tier && <span className="ml-1.5 text-[9px] px-1 py-0.5 bg-amber-400/10 border border-amber-400/20 text-amber-400 rounded-sm">{h.tier}</span>}
                    </div>
                    {h.url && (
                      <a href={h.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                  {h.description && <p className="text-xs text-muted-foreground mt-1">{h.description}</p>}
                  {h.phone && <p className="text-[10px] text-amber-400/90 mt-1 flex items-center gap-1"><Phone className="w-3 h-3" />{h.phone}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* NGOs */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">NGOs &amp; Support</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {geo.india.ngos.map((n) => (
                <ResourceLink key={n.name} name={n.name} url={n.url} description={n.description} helpline={n.helpline} />
              ))}
            </div>
          </div>

          {/* City-specific */}
          {[geo.india.hyderabad, geo.india.chennai].map((city) => (
            <div key={city.title}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">{city.title}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {city.hospitals.map((h) => (
                  <div key={h.name} className="p-2 bg-card border border-border rounded-sm">
                    <div className="flex items-start justify-between">
                      <span className="text-xs font-semibold text-foreground">{h.name}</span>
                      {h.url && <a href={h.url} target="_blank" rel="noopener noreferrer"><ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary" /></a>}
                    </div>
                    {h.description && <p className="text-[10px] text-muted-foreground mt-0.5">{h.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionAccordion>

      {/* USA */}
      <SectionAccordion id="usa" icon={<Building2 className="w-4 h-4" />} title="United States">
        {geo.usa.overview && <p className="text-xs leading-relaxed mb-3">{geo.usa.overview}</p>}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {geo.usa.resources.map((r) => (
              <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} helpline={r.helpline} />
            ))}
          </div>
          {geo.usa.topHospitals && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-2">Top Cancer Hospitals</p>
              <div className="flex flex-wrap gap-2">
                {geo.usa.topHospitals.map((h) => (
                  <a key={h.name} href={h.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs px-2 py-1 bg-card border border-border rounded-sm hover:border-primary/40 hover:text-primary transition-colors">
                    {h.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </SectionAccordion>

      {/* UK, Australia, Canada, UAE */}
      {(["uk", "australia", "canada", "uae"] as const).map((key) => {
        const country = geo[key];
        return (
          <SectionAccordion key={key} id={key} icon={<Building2 className="w-4 h-4" />} title={country.title} badge={country.resources.length}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {country.resources.map((r) => (
                <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} helpline={r.helpline} />
              ))}
            </div>
          </SectionAccordion>
        );
      })}
    </div>
  );
}

/* ── Treatment Modalities ─────────────────────────────────── */

export function TreatmentModalitiesSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <FlaskConical className="w-5 h-5 text-primary" />
        {data.treatmentModalities.title}
      </h3>
      {data.treatmentModalities.items.map((t) => (
        <SectionAccordion key={t.id} id={t.id} icon={<Stethoscope className="w-4 h-4" />} title={t.name}>
          <p className="text-xs leading-relaxed mb-3">{t.description}</p>
          {t.subtypes && t.subtypes.length > 0 && (
            <div className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1.5">Subtypes</p>
              <div className="flex flex-wrap gap-1.5">
                {t.subtypes.map((s) => (
                  <span key={s} className="text-[10px] px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{s}</span>
                ))}
              </div>
            </div>
          )}
          {t.usedFor && (
            <p className="text-xs mb-2"><span className="font-semibold text-foreground">Used for:</span> {t.usedFor}</p>
          )}
          {t.costRange && (
            <div className="mb-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Cost Ranges</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(t.costRange).map(([region, cost]) => (
                  <span key={region} className="text-[10px] px-2 py-1 bg-card border border-border rounded-sm">
                    <span className="font-semibold text-foreground capitalize">{region}:</span> {cost}
                  </span>
                ))}
              </div>
            </div>
          )}
          {t.resources.length > 0 && (
            <div className="space-y-1.5">
              {t.resources.map((r) => (
                <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 hover:bg-primary/5 rounded-sm transition-colors group">
                  <Globe className="w-3 h-3 text-primary shrink-0" />
                  <span className="text-xs text-foreground group-hover:text-primary group-hover:underline">{r.name}</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto shrink-0" />
                </a>
              ))}
            </div>
          )}
        </SectionAccordion>
      ))}
    </div>
  );
}

/* ── Support Resources ────────────────────────────────────── */

const SUPPORT_SECTIONS = [
  { key: "emotional" as const, label: "Emotional Support", icon: <Heart className="w-4 h-4" /> },
  { key: "financial" as const, label: "Financial Aid", icon: <Wallet className="w-4 h-4" /> },
  { key: "palliative" as const, label: "Palliative Care", icon: <HandHeart className="w-4 h-4" /> },
  { key: "survivorship" as const, label: "Survivorship", icon: <Award className="w-4 h-4" /> },
  { key: "nutrition" as const, label: "Nutrition", icon: <Leaf className="w-4 h-4" /> },
];

export function SupportResourcesSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <Users className="w-5 h-5 text-primary" />
        Support Resources
      </h3>
      {SUPPORT_SECTIONS.map(({ key, label, icon }) => {
        const items = data.supportResources[key];
        return (
          <SectionAccordion key={key} id={key} icon={icon} title={label} badge={items.length}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {items.map((r) => (
                <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} helpline={r.helpline}
                  badge={r.geography} />
              ))}
            </div>
          </SectionAccordion>
        );
      })}
    </div>
  );
}

/* ── Clinical Trials & Diagnostics ────────────────────────── */

export function ClinicalTrialsSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <Search className="w-5 h-5 text-primary" />
        Clinical Trials
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.clinicalTrialResources.map((r) => (
          <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} />
        ))}
      </div>

      <h3 className="font-serif text-lg text-foreground flex items-center gap-2 pt-4">
        <Microscope className="w-5 h-5 text-primary" />
        Diagnostics &amp; Genomic Testing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.diagnosticsResources.map((r) => (
          <ResourceLink key={r.name} name={r.name} url={r.url} description={r.description} />
        ))}
      </div>
    </div>
  );
}

/* ── Books & References ───────────────────────────────────── */

export function BooksReferencesSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <BookMarked className="w-5 h-5 text-primary" />
        Books, PDFs &amp; Reference Materials
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.booksPdfsReference.map((b) => (
          <div key={b.title} className="p-3 bg-card border border-border rounded-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-xs font-semibold text-foreground">{b.title}</span>
                {b.edition && <span className="ml-1.5 text-[10px] text-muted-foreground">({b.edition})</span>}
              </div>
              {b.url && (
                <a href={b.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 text-muted-foreground hover:text-primary" />
                </a>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{b.description}</p>
            {b.format && (
              <span className="inline-block mt-1.5 text-[10px] px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">
                {b.format}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Emergency Contacts ───────────────────────────────────── */

const COUNTRY_LABELS: Record<string, string> = {
  india: "🇮🇳 India",
  usa: "🇺🇸 United States",
  uk: "🇬🇧 United Kingdom",
  australia: "🇦🇺 Australia",
  canada: "🇨🇦 Canada",
};

export function EmergencyContactsSection({ data }: { data: KnowledgeBase }) {
  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-red-400" />
        Emergency &amp; Helpline Contacts
      </h3>
      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-sm text-xs text-red-300 mb-3">
        If you or someone you know is in a cancer-related crisis, reach out to these helplines immediately.
      </div>
      {Object.entries(data.emergencyContacts).map(([country, contacts]) => (
        <SectionAccordion key={country} id={`emergency-${country}`} icon={<Phone className="w-4 h-4" />}
          title={COUNTRY_LABELS[country] ?? country} badge={contacts.length} defaultOpen={country === "india"}>
          <div className="space-y-2">
            {contacts.map((c) => (
              <div key={c.name} className="flex items-center justify-between p-2 bg-card border border-border rounded-sm">
                <span className="text-xs text-foreground">{c.name}</span>
                <span className="text-xs font-mono text-primary font-semibold">{c.number}</span>
              </div>
            ))}
          </div>
        </SectionAccordion>
      ))}
    </div>
  );
}

/* ── Extended Cancer Types from JSON ──────────────────────── */

export function ExtendedCancerTypesSection({ data }: { data: KnowledgeBase }) {
  const [searchQ, setSearchQ] = useState("");
  const filtered = data.cancerTypes.filter((c) => {
    if (c.note && c.url) return false; // skip cross-references
    const q = searchQ.toLowerCase();
    if (!q) return true;
    return c.name.toLowerCase().includes(q) ||
      (c.aliases?.some((a) => a.toLowerCase().includes(q)) ?? false) ||
      c.category.toLowerCase().includes(q);
  });

  return (
    <div className="space-y-3">
      <h3 className="font-serif text-lg text-foreground flex items-center gap-2">
        <BookOpen className="w-5 h-5 text-primary" />
        Extended Cancer A–Z ({data.cancerTypes.length} types)
      </h3>
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={searchQ}
          onChange={(e) => setSearchQ(e.target.value)}
          placeholder="Search extended cancer types…"
          className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <p className="text-[10px] text-muted-foreground font-mono">{filtered.length} entries</p>

      <div className="space-y-2">
        {filtered.map((cancer) => (
          <SectionAccordion key={cancer.id} id={cancer.id} icon={<Stethoscope className="w-4 h-4" />}
            title={cancer.name} badge={cancer.icdCode}>
            <div className="space-y-3">
              {cancer.aliases && cancer.aliases.length > 0 && (
                <p className="text-[10px] font-mono text-muted-foreground">Also: {cancer.aliases.join(" · ")}</p>
              )}
              <p className="text-xs leading-relaxed">{cancer.description}</p>

              <span className="inline-block text-[10px] px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded-sm">{cancer.category}</span>

              {cancer.symptoms && cancer.symptoms.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Symptoms</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cancer.symptoms.map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 bg-border text-foreground rounded-sm">{s}</span>
                    ))}
                  </div>
                </div>
              )}

              {cancer.riskFactors && cancer.riskFactors.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Risk Factors</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cancer.riskFactors.map((r) => (
                      <span key={r} className="text-[10px] px-2 py-0.5 bg-border text-foreground rounded-sm">{r}</span>
                    ))}
                  </div>
                </div>
              )}

              {cancer.treatments && cancer.treatments.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Treatments</p>
                  <ul className="space-y-0.5">
                    {cancer.treatments.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-xs">
                        <span className="text-primary shrink-0 mt-0.5">→</span>{t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cancer.survivalRates && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Survival Rates</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(cancer.survivalRates).map(([k, v]) => (
                      <span key={k} className="text-[10px] px-2 py-1 bg-card border border-border rounded-sm">
                        <span className="font-semibold text-foreground capitalize">{k.replace(/([A-Z])/g, " $1")}:</span> {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {cancer.costs && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-primary mb-1">Costs</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(cancer.costs).map(([k, v]) => (
                      <span key={k} className="text-[10px] px-2 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-300 rounded-sm">
                        <span className="font-semibold capitalize">{k}:</span> {v}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {cancer.indiaContext && (
                <div className="p-2 bg-amber-500/5 border border-amber-500/15 rounded-sm">
                  <p className="text-[10px] text-amber-400/90"><span className="font-bold">🇮🇳 India context:</span> {cancer.indiaContext}</p>
                </div>
              )}

              {cancer.resources.length > 0 && (
                <div className="space-y-1">
                  {cancer.resources.map((r) => (
                    <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 p-1.5 hover:bg-primary/5 rounded-sm transition-colors group">
                      <Globe className="w-3 h-3 text-primary shrink-0" />
                      <span className="text-xs text-foreground group-hover:text-primary group-hover:underline">{r.name}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground ml-auto shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </SectionAccordion>
        ))}
      </div>
    </div>
  );
}
