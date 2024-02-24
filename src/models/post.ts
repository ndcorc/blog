export interface PostModel {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content: {
        raw: string;
        html: string;
        markdown: string;
        text: string;
    };
    coverImage: {
        url: string;
        width: number;
        height: number;
    }
    author: {
        remoteTypeName: string;
        remoteId: string;
        name: string;
        title: string;
        picture: {
            url: string;
            width: number;
            height: number;
        }
    }
}