import { Metadata } from 'next';
import DetailCaseStudies from '../detailCaseStudies';
import { caseStudiesDetails } from '@/data/caseStudy';

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    const id = params.id as keyof typeof caseStudiesDetails;
    const study = caseStudiesDetails[id];

    if (!study) {
        return {
            title: 'Case Study Not Found',
            description: 'The requested case study could not be found.'
        };
    }

    return {
        title: `${study.title} - Case Study | Capaxe`,
        description: study.description,
        openGraph: {
            title: `${study.title} - Case Study | Capaxe`,
            description: study.description,
            type: 'article',
            authors: ['Capaxe'],
        },
    };
}

export default async function CaseStudyDetail({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = await searchParams;
    const id = params.id as keyof typeof caseStudiesDetails;
    const study = caseStudiesDetails[id];

    if (!study) return <div>Case study not found</div>;

    return (
        <DetailCaseStudies caseStudiesDetails={study} />
    );
} 