export interface IRole {
    id: number;
    title: string;
    description: string;
    skills: ISkill[]
}
export interface ISkill{
    name:  string;
    level: ISkillLevels;
    description: string;
    requirements: string[];
    instructions: string[];
    resources: IResource[];
}
export interface IResource {
    title: string;
    url: string;
}

export enum SkillLevel{
    UNDERSTANDING = "UNDERSTANDING",
    DEMONSTRATING = "DEMONSTRATING",
    LEADING = "LEADING",
    COACHING = "COACHING"
}
export type ISkillLevels = keyof typeof SkillLevel;