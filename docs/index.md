# Buku Zenia&#x20;

Hai, selamat datang di Buku Zenia. Website apa lagi ini? Ya intinya sih sama dengan blog-blogku yang lain. Cuma beda teknologinya aja.

Untuk cara installnya simpel banget. Intinya ya pakai Vite, terus pasang script ini di `vite.config.ts`:

```typescript
import {book} from "vite-plugin-book/vite"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [book()]
}
```

Simpel banget kan?

Yang aku suka sih, kita ngetik langsung di browser. Jadi, ketika kita save yang di browser, otomatis akan terbuat file Markdown berdasarkan yang udah kita ketik.

Beda sama tools lain yang kita ngetiknya di text editor.
