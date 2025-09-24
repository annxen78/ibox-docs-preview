import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Добро пожаловать в iBox Docs"
      description="Документация по ERP-системе iBox"
    >
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Добро пожаловать в iBox Docs 👋</h1>
        <p>Здесь вы найдете всю документацию по ERP-системе iBox: от обзора продукта до инструкций для партнеров.</p>
      </main>
    </Layout>
  );
}
