import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectPageTemplate from '@/app/components/ProjectPageTemplate'
import { projects, getProjectBySlug } from '@/lib/projects-data'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {
      title: 'Project Not Found | E&E Home Remodeling',
    }
  }

  return {
    title: `${project.title} | E&E Home Remodeling Project`,
    description: project.description,
    keywords: project.seoKeywords,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.heroImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectPageTemplate project={project} />
}
