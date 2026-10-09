"use client";

import { useEffect, useState } from "react";
import { DoodleSparkle } from "@/components/ui/Doodles";
import { motion } from "framer-motion";

const BASE_VISITOR_COUNT = 108;
const SESSION_STORAGE_KEY = "vishwesh_portfolio_visited";
const LOCAL_STORAGE_KEY = "vishwesh_portfolio_visitor_count";

function getOrdinal(n: number): string {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

export function VisitorCounter() {
  const [count, setCount] = useState<number>(BASE_VISITOR_COUNT);

  useEffect(() => {
    try {
      if (typeof window === "undefined") return;

      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      let current = stored ? Math.max(BASE_VISITOR_COUNT, parseInt(stored, 10) || BASE_VISITOR_COUNT) : BASE_VISITOR_COUNT;

      const hasVisited = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!hasVisited) {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
        current += 1;
        localStorage.setItem(LOCAL_STORAGE_KEY, current.toString());
      }
      setCount(current);
    } catch {
      // Fallback stays at BASE_VISITOR_COUNT
    }
  }, []);

  const ordinalText = getOrdinal(count);

  return (
    <motion.div
      initial={{ opacity: 0, y: 4, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2 select-none"
    >
      <span
        style={{ transform: "rotate(-2.5deg)" }}
        className="font-hand text-xl text-accent transition-transform duration-200 hover:scale-105 sm:text-2xl"
      >
        you are #{ordinalText} visitor
      </span>
      <DoodleSparkle className="size-5 shrink-0 -rotate-6 text-accent/85" delay={0.2} />
    </motion.div>
  );
}
