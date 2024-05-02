import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'], // Указываем веса, если нужны конкретные
    subsets: ['latin'],     // Указываем подмножество для предзагрузки
    preload: true           // Включаем предзагрузку
  });
