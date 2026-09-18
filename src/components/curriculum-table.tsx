export type CurriculumColumn = {
  key: string;
  label: string;
  widthClassName?: string;
};

export type CurriculumRow = {
  [key: string]: React.ReactNode;
};

export function CurriculumTable({
  columns,
  rows,
}: {
  columns: CurriculumColumn[];
  rows: CurriculumRow[];
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/40">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-muted-foreground ${col.widthClassName ?? ''}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i !== rows.length - 1 ? 'border-b border-border' : ''}>
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-4 align-top leading-relaxed text-foreground/90">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
