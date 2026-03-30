import { useState, useEffect } from "react";
import type { KnowledgeBase } from "@/data/knowledge-base-types";

export function useKnowledgeBase() {
  const [data, setData] = useState<KnowledgeBase | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/data/cancer_knowledge_base.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<KnowledgeBase>;
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Failed to load knowledge base");
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
