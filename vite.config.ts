import {book} from "vite-plugin-book/vite"
import {defineConfig} from "vite"

export default defineConfig({
	plugins: [book({
		name: "Buku Zenia",
		repo: "https://github.com/mzaini30/buku"
	})]
})
