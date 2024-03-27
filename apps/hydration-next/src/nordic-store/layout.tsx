import { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      {children}
    </main>
  );
}
