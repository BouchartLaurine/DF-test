import { describe, it, expect } from "vitest";
import { formatUserName } from "./formatUserName";

describe("formatUserName", () => {
  it("formate correctement un nom et prénom", () => {
    const result = formatUserName("alice", "dupont");
    expect(result).toBe("Alice Dupont");
  });
  it("supprime les espaces superflus autour du nom et du prénom", () => {
  const result = formatUserName("  bob ", " martin  ");
  expect(result).toBe("Bob Martin");
});
  it("marque une erreur si le prénom est manquant", () => {
  expect(() => formatUserName("", "Martin")).toThrow("Les deux champs sont requis");
});
  it("marque une erreur si le nom est manquant", () => {
  expect(() => formatUserName("Bob", "")).toThrow("Les deux champs sont requis");
});
  it("marque une erreur si nom et prénom sont manquant", () => {
    expect(() => formatUserName("", "" )
  )});
  it("formate correctement les accents", () => {
    expect(formatUserName ("Élodie" , "Mark")).toBe("Élodie Mark")});
});
