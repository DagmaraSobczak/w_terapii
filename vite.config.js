import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/w_terapii/', // Ustawienie bazowego URL-a aplikacji
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Dodanie rozszerzeń dla lepszej obsługi
  },
  esbuild: {
    loader: 'jsx', // Upewnienie się, że pliki JSX są poprawnie obsługiwane
    include: /src\/.*\.[jt]sx?$/, // Zastosowanie loadera tylko do plików JSX/TSX w katalogu src
  },
  server: {
    strictPort: true, // Ustawienie, które sprawia, że serwer lokalny używa wyłącznie określonego portu
  },
})
