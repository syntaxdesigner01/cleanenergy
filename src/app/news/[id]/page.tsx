import { redirect } from 'next/navigation'
import { articles } from '@/data/articles'
import { ArticlePage } from '@/components/ArticlePage'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = articles.find(a => a.id === Number(id))
  if (!article) redirect('/')
  return <ArticlePage id={Number(id)} />
}
