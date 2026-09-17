import { CircleLoader } from "react-spinners";

export function Loader() {
	return (
		<div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm z-999">
			<CircleLoader color="#eab308" size={100} />
		</div>
	);
}
