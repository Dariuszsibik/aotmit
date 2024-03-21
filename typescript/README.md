# <a href='https://infoshareacademy.com/'><img src='https://infoshareacademy.com/wp-content/themes/infoshare/src/images/logo.svg' height='60' alt='infoShare Academy Logo' aria-label='https://infoshareacademy.com/' /></a>

# Zadania:
- zadania od 1 do 6
- odkomentuj kod ctrl + A następnie ctrl + /
- dodaj odpowiednie typy
- zastąp typ unknown odpowiednim typem 

## ℹ️ Wprowadzenie

TypeScript rozszerza JavaScript przede wszystkim o możliwość statycznego typowania. Główną zaletą jego użycia jest możliwość wykrycia błędów w aplikacji jeszce na etapie naszego środowiska programistycznego (*IDE*). Wynika to z faktu, że kod *TypeScript* nie jest rozumiany przez przeglądarki i wymaga on kompilacji do kodu *JS* - jeżeli *TypeScript* zgłosi błędy to owa kompliacja nie będzie możliwa.

*TypeScript* został stworzony przez firmę *Microsoft* i roziwjany jest na zasadzie *Open Source*. 

Rozszerzenie plików w przypadku *TypeScript* to `.ts` lub `.tsx` (dla składni *JSX*).

## 🧐 Garść linków na dzień dobry
- [Dokumentacja TS](https://www.typescriptlang.org/docs/)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Playground](https://www.typescriptlang.org/play)
- [Types Or Interfaces](https://github.com/typescript-cheatsheets/react#types-or-interfaces)
- [React Typescript](https://create-react-app.dev/docs/adding-typescript/)

## 🚀 Rozpoczęcie pracy z TS

Zaczynamy od utworzenia pliku `package.json` za pomocą komendy:

```bash
npm init -y
```

Następnie przygotowujemy strukturę katalogową która powinna zawierać plik `index.html` i katalog `src` który będzie zawierał pliki z rozszerzeniem `.ts`

Możemy na tym etapie zainstalować *TypeScript* w naszym projekcie wpisując:

```typescript
npm i typescript
```

W projekcie dodajemy plik konfiguracyjny o nazwie `tsconfig.json` którego zawartość może być na początku następująca:

```typescript
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "target": "ES2015"
  }
}
```

Powyższy kod określa, że pliki źródłowe z rozszerzeniem `.ts` znajdują się w katalogu `src`, a pliki `.js` które powstaną w wyniku kompilacji umieścimy w katalogu `dist`. Klucz `target` pozwala nam określić sposób kompilacji np. jeżeli używamy najnowszych konstrukcji języka JS i chcemy aby wygenerowany wynikowy kod był np. kompatybilny wstecz ze starszymi przeglądarkami to możemy określić standard *ES* który nas interesuje.

Pozostało już tylko dodanie skryptu który umożliwi wykorzystanie kompilatora *TypeScripta* (skrypt dodajemy w pliku `package.json` w sekcji `scripts`):

```typescript
"build": "tsc"
```

## 🚀 Użycie TS'a w *CRA*
Z kolei w przypadku *Create React App* wygląda to następująco:

```bash
npx create-react-app my-app --template typescript
```
