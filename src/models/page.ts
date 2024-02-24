export interface PageModel {
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    seoOverride?: {
        title: string;
        image: {
            height: number;
            width: number;
            url: string;
        }
        description: string;
    }
    content?: {
        html: string;
        raw: string;
    }
}