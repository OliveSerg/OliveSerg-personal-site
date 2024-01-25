import { useQuery } from "@tanstack/react-query";
import { Vocation } from "./types/vocation";
import { fetchApiResponse } from "@features/utilities/api";
import VocationItem from "./vocation-item";
import { LayoutGroup } from "framer-motion";

type Props = {
	vocationSkills: number[];
	handleClick: (skillIds: number[]) => void;
};

const VocationsList = ({ vocationSkills, handleClick }: Props) => {
	const vocationsQuery = useQuery({
		queryKey: ["experiences", "vocations"],
		queryFn: () => fetchApiResponse<Vocation>("vocations/"),
	});

	if (vocationsQuery.isLoading) return <div>Loading...</div>;
	if (vocationsQuery.error)
		return <div>Error: {vocationsQuery.error.message}</div>;
	const vocations = vocationsQuery.data as Array<Vocation>;
	return (
		<div className="container mx-auto py-8 px-6 backdrop-blur-sm rounded-lg bg-white bg-opacity-30">
			<div className="flex flex-wrap gap-4 relative justify-center ">
				<LayoutGroup>
					{vocations
						.sort((cur, next) => (cur.type > next.type ? -1 : 1))
						.map((vocation: Vocation) => (
							<VocationItem
								key={vocation.id}
								vocation={vocation}
								handleClick={handleClick}
								selectedId={vocationSkills[0]}
							/>
						))}
				</LayoutGroup>
			</div>
		</div>
	);
};

export default VocationsList;
