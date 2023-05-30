export const borderFilter = (strategy: number) => {
  if (strategy === 1) return "border-l-wv-safe";
  if (strategy === 2) return "border-l-wv-environment";
  if (strategy === 3) return "border-l-wv-equality";
  if (strategy === 4) return "border-l-wv-connectivity";
  if (strategy === 5) return "border-l-wv-democracy";
  if (strategy === 6) return "border-l-wv-economic";
  if (strategy === 7) return "border-l-wv-management";
};

export const colorFilter = (strategy: number) => {
  if (strategy === 1) return "bg-wv-safe";
  if (strategy === 2) return "bg-wv-environment";
  if (strategy === 3) return "bg-wv-equality";
  if (strategy === 4) return "bg-wv-connectivity";
  if (strategy === 5) return "bg-wv-democracy";
  if (strategy === 6) return "bg-wv-economic";
  if (strategy === 7) return "bg-wv-management";
};

export const handleAddSelected = (selector: string, className: string) => {
  return [...(document.querySelectorAll(selector) as any)].map(elem =>
    elem.classList.add(className),
  );
};

export const handleRemoveSelected = (selector: string, className: string) => {
  return [...(document.querySelectorAll(selector) as any)].map(elem =>
    elem.classList.remove(className),
  );
};
