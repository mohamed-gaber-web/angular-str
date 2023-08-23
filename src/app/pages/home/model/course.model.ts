import { Base } from "src/app/shared/constants/base.constant";

export class CourseListResult extends Base{
    list!: Array<Course>;
}
export interface Course{
    id:string;
    imagePath:string;
    duration: number;
    price: number;
    title: string;
    shortDescription: string;
}
