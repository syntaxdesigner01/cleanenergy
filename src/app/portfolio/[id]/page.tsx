import { redirect } from 'next/navigation'
import { portfolioData } from '@/data/projects'
import { CaseStudy } from '@/components/CaseStudy'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = portfolioData.find(p => p.id === id)
  if (!project) redirect('/')
  return <CaseStudy id={id} />
}
