export function centsToReal(cents: number) {
  let real = cents / 100;
  return real.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
