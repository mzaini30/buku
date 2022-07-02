import {book} from "vite-plugin-book/vite"
import {defineConfig} from "vite"

export default defineConfig({
	plugins: [book({
		name: "Buku Zenia",
		repo: "mzaini30/buku"
	})]
})
