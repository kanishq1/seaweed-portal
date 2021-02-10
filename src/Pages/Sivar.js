import React from "react";
import Particles from "react-particles-js";
import Menu from "../Components/Menu";

const Sivar = () => {
	return (
		<>
			<Menu />
			<section className="s-about target-section">
				<div className="row section-header bit-narrow">
					<div className="col-full">
						<h1 className="subhead">Project Sivaar</h1>
						<h1 className="display-1">A sustainable ocean farm initiative</h1>
					</div>
				</div>
				<div className="row bit-narrow" data-aos="fade-up">
					{/* <div className="flex mb-16">
						<img
							style={{ width: "50%", margin: "auto" }}
							src="https://ik.imagekit.io/enactus/sivarmain_-VcL8Ty-c.jpg"
						/>
					</div> */}
					<div className="col-full">
						<div className="grid grid-cols-1 gap-7">
							<p className="lead">
								For far too long now, the ocean has borne the brunt of the climate change, absorbing
								over 90 percent of the extra heat trapped in the atmosphere by excess greenhouse gases
								and 31 percent of the carbon dioxide since the 1970s. That means water has buffered
								land-dwellers against the worst effects of climate change; without it, the atmosphere
								would have heated up much more than the average of 1 degree it already has.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
							<p className="lead">
								Ocean acidification is also causing immense damage to marine habitats around the world.
								Calcium carbonate-based habitats like coral reefs and mussel beds are depleting. Kelp
								forests and seaweed meadows are decreasing, causing thousands of marine species to lose
								their homes.
							</p>
							<img src="https://ik.imagekit.io/enactus/sivar1_w4YmOxO7-a.jpeg" alt="enable-image" />
						</div>

						<p className="lead">
							Enactus BITS Goa aims to solve these pressing issues by introducing the practice of seaweed
							cultivation of various species of Phaeophyta, Rhodophyta and Chlorophyta in Goa. Seaweeds
							act as a carbon sink reducing carbon dioxide and deoxygenation of seawaters by absorbing
							carbon dioxide and releasing oxygen during photosynthesis. After cultivation, the final
							product is sold, generating incomes for micro-social entrepreneurs. The pilot project is
							going to held in Assolna, Goa, India.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
							<img src="https://ik.imagekit.io/enactus/sivar2_lQcgYTgSF.jpg" alt="enable-image" />
							<p className="lead">
								Project Sivaar aims to tackle the problem of ocean acidification, marine habitat loss
								and climate change through the creation of sustainable and innovative ocean farms and
								seaweed cultivation while creating micro-social entrepreneurs out of underprivileged
								communities and farmers around Goa.
							</p>
						</div>
					</div>
				</div>
				<div className="flex text-center">
					<a href="/achain" style={{ margin: "auto" }} className="smoothscroll btn btn--primary btn--large">
						Project Achain ⟶
					</a>
				</div>
			</section>
		</>
	);
};

export default Sivar;
