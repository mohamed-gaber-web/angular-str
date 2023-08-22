import { Base } from "src/app/shared/constants/base.constant";

export class faqListResult extends Base{
    list!: Array<faq>;
}
export class faq{
    id!:string;
    imagePath!:string;
    faqTranslations!:faqTranslation;
}

export class faqTranslation{
    question!:string;
    answer!:string;
    languageId!:string;
}
