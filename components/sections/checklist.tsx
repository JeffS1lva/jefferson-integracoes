import { checklist } from "@/lib/content";

/**
 * Lembrete interno. Remova <Checklist /> de app/page.tsx antes de divulgar.
 */
export function Checklist() {
  return (
    <div className="mt-14 rounded-md border border-dashed border-border px-[22px] pt-[22px] pb-[18px]">
      <p className="rail mb-[18px]">{checklist.rail}</p>

      <h2 className="font-display text-[1.1rem] font-semibold">
        {checklist.title}
      </h2>

      <ol className="mt-3 list-decimal space-y-[7px] pl-5">
        {checklist.items.map((item) => (
          <li key={item.strong} className="text-[0.92rem] text-muted-foreground">
            <b className="font-semibold text-foreground">{item.strong}</b>{" "}
            {item.body}
          </li>
        ))}
      </ol>
    </div>
  );
}
