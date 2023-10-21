export interface Service {
    id: string;
    title: string;
    iconUrl: string;
    active: boolean;
};

export interface Tech {
    id: string;
    title: string;
    iconUrl: string;
    active: boolean;
};

export interface Project {
    id: string;
    title: string;
    technologies: string;
    description: string;
    live_url: string;
    demo_url: string;
    source_code_link: string;
    active: boolean;
    live: boolean;
    images: Image[];
}

export interface Contact {
    id: string;
    title: string;
    contact: string;
    iconUrl: string;
    active: boolean;
    urlType: boolean;
}

export interface Image {
    id: string;
    url: string;
};