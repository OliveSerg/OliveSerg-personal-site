import { Skill } from "@features/experiences/types/skill";

export type Vocation = {
	id: number;
	company: string;
	title: string;
	start_date: string;
	end_date: string | null;
	city: string;
	country: string;
	description: string;
	url: string;
	type: string;
	skills: Skill[];
	logo: string;
};
