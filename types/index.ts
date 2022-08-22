export type Feature = {
    id: String;
    name: String;
    icon: String;
    iconColor: String;
    description: String;
}

export type Price = {
    id: String;
    name: String;
    features: String[];
    price: String;
}

export type Faq = {
    id: String;
    title: String;
    answer: String;
}

export type ContactForm = {
    fullName: string;
    email: string;
    costumer: string;
    privacy: boolean;
    problem: string;
}

export type TgQuest = {
    name: String;
    targets: String;
    total: number;
    partial: number;
}