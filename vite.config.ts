import { AliasOptions, defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"

type AliasProps = {
	find: string
	replacement: string
}

const alias: AliasProps[] = [
	{
		find: "~",
		replacement: resolve(__dirname, "src"),
	},
]

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: { alias },
})
