interface PhoneReplacer {
  (match: string, p1: string, p2: string, p3: string): string;
}

const phoneReplacer: PhoneReplacer = (_, p1, p2, p3) => {
  let formatted = p1;
  formatted = p1 && p2 ? `(${p1})` : formatted;
  formatted = p2 ? `${formatted} ${p2}` : formatted;
  formatted = p3 ? `${formatted}-${p3}` : formatted;

  return formatted;
};

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '');

  if (digits === '') return '';

  const main = digits.replace(/^(\d{2})(\d{0,5})(\d{0,4})$/, phoneReplacer);

  return main;
}

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
  currency: 'BRL',
  minimumFractionDigits: 2,
});

function formatCurrency(value: string | number): string {
  const digits = String(value).replace(/\D/g, '');

  if (digits === '' || Number(digits) === 0) return '';

  return currencyFormatter.format(parseInt(digits, 10) / 100);
}

export { formatCurrency, formatPhone };
