import { Box, Grid, GridItem } from "@chakra-ui/react";
import { TaskColumn } from "../components/TaskColumn";

export const taskGroups: TaskColumn[] = [
	{
		title: "backlog",
		tasks: [
			{
				title: "Task 1",
				createdDate: "2023-11-08",
				dueDate: "2023-11-15",
			},
			{
				title: "Task 2",
				createdDate: "2023-11-09",
				dueDate: "2023-11-16",
			},
		],
	},
	{
		title: "in progress",
		tasks: [
			{
				title: "Task 3",
				createdDate: "2023-11-10",
				dueDate: "2023-11-17",
			},
		],
	},
	{
		title: "Tech Review",
		tasks: [
			{
				title: "Task 4",
				createdDate: "2023-11-11",
				dueDate: "2023-11-18",
			},
		],
	},
	{
		title: "Done",
		tasks: [
			{
				title: "Task 5",
				createdDate: "2023-11-12",
				dueDate: "2023-11-19",
			},
		],
	},
];

export function Tasks({ tasks }: { tasks: TaskColumn[] }) {
	return (
		<Box w="100%" paddingY={4} px={8}>
			<Grid templateColumns={`repeat(${tasks.length}, 1fr)`} gap={6}>
				{tasks.map((task) => (
					<GridItem minHeight="calc(100vh - 70px)">
						<TaskColumn task={task} />
					</GridItem>
				))}
			</Grid>
		</Box>
	);
}
