export interface NavigationModel {
    id: string;
    navId: string;
    link: {
        externalUrl: string;
        displayText: string;
        page: {
            id: string;
            slug: string;
        }
    }[]
}