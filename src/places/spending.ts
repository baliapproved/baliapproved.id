import type { CollectionEntry } from "astro:content";
import { site } from "@/site/site";

const rupiah = new Intl.NumberFormat(site.language, {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "narrowSymbol",
  notation: "compact",
});

type Spending = NonNullable<CollectionEntry<"places">["data"]["spending"]>;

/** Compact rupiah range, e.g. "Rp 30–100K", or "Under Rp 500K" when only the max is known. */
export function formatSpending({ min, max }: Spending) {
  return min ? rupiah.formatRange(min, max) : `Under ${rupiah.format(max)}`;
}
