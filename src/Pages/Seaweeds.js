import React from "react";
import Menu from "../Components/Menu";

export default function Seaweeds() {
	return (
		<>
			<Menu />
			<section className="s-about target-section bg-light-green" style={{ minHeight: "100vh" }}>
				<div className="row section-header bit-narrow">
					<div className="col-full">
						<h1 className="subhead color-dark-green text-center">Varitey of Seaweeds</h1>
					</div>
				</div>
				<div className="row bit-narrow" data-aos="fade-up">
					<div className="grid grid-rows-1 md:grid-cols-2 gap-x-40">
						<div className="rounded-lg" style={{ background: "red" }}>
							1
						</div>
						<div style={{ background: "red" }}>1</div>
						<div>1</div>
					</div>
				</div>
			</section>
		</>
	);
}
