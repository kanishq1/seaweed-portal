import React, { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import Menu from "../Components/Menu";
export default function Home() {
	const scrollTo = () => {
		scroller.scrollTo("about", {
			duration: 800,
			delay: 0,
			smooth: "easeInOutQuart",
		});
	};
	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				TOPOLOGY({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<div>
			<div id="preloader">
				<div id="loader" className="dots-jump">
					<div />
					<div />
					<div />
				</div>
			</div>
			<Menu logo={true} />
			<section
				ref={myRef}
				id="home"
				className="s-home page-hero target-section vanta-bg"
				data-parallax="scroll"
				// data-image-src="images/hero-bg.jpg"
				data-natural-width={3000}
				data-natural-height={2000}
				data-position-y="center"
			>
				<div className="home-content">
					<div className="row home-content__main">
						<h1>Seaweed</h1>
						<h3>Information on Marine Algae</h3>
						<div className="home-content__video">
							<a className="video-link explore-btn" href="#about" onClick={scrollTo}>
								<span className="video-text" data-lity>
									Explore
								</span>
								&nbsp; &nbsp;
								<span>
									<i className="fa fa-angle-down explore-down" aria-hidden="true"></i>
								</span>
							</a>
						</div>
						<div className="home-content__button">
							<a href="/sivar" className="btn btn--primary btn--large">
								Project Sivaar
							</a>
							<a href="/achain" className="btn btn--large">
								Project Achain
							</a>
						</div>
					</div>{" "}
					{/* end home-content__main */}
					<div className="home-content__scroll">
						<a href="#about" onClick={scrollTo} className="scroll-link">
							Scroll
						</a>
					</div>
				</div>{" "}
				{/* end home-content */}
				<ul className="home-social">
					<li>
						<a href="#0">
							<i className="fab fa-facebook-f" aria-hidden="true" />
							<span>Facebook</span>
						</a>
					</li>
					<li>
						<a href="#0">
							<i className="fab fa-twitter" aria-hidden="true" />
							<span>Twiiter</span>
						</a>
					</li>
					<li>
						<a href="#0">
							<i className="fab fa-instagram" aria-hidden="true" />
							<span>Instagram</span>
						</a>
					</li>
					<li>
						<a href="#0">
							<i className="fab fa-behance" aria-hidden="true" />
							<span>Behance</span>
						</a>
					</li>
					<li>
						<a href="#0">
							<i className="fab fa-dribbble" aria-hidden="true" />
							<span>Dribbble</span>
						</a>
					</li>
				</ul>{" "}
				{/* end home-social */}
			</section>
			<section id="about" className="s-about target-section">
				<div className="row section-header bit-narrow" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">What is seaweed?</h3>
						<h1 className="display-1 mb-20">
							Seaweed farming or kelp farming is the practice of cultivating and harvesting seaweed. In
							its simplest form, it consists of the management of naturally found batches. In its most
							advanced form, it consists of fully controlling the life cycle of the algae.
						</h1>
					</div>
				</div>{" "}
				<div className="row bit-narrow" data-aos="fade-up">
					<div className="col-full">
						<p className="lead">
							The main food species grown by aquaculture in Japan, China, and Korea include Gelidium,
							Pterocladia, Porphyra, and Laminaria. Seaweed farming has frequently been developed as an
							alternative to improve economic conditions and to reduce fishing pressure and overexploited
							fisheries. Seaweeds have been harvested throughout the world as a food source and an export
							commodity for the production of agar and carrageenan products.
						</p>
					</div>
				</div>
				<div className="row bit-narrow" data-aos="fade-up">
					<div className="col-full">
						<p className="lead">
							Seaweeds are generally cultivated in lagoons or sheltered bays. Seaweeds obtain nutrients
							directly from the seawater, and it is crucial to have currents that flush the site in which
							the seaweeds are placed. Small cuttings are attached to a line with short lengths of string
							(known as 'Tie Tie') at a density of five cuttings per metre of the line. In nature, these
							seaweeds live attached to a solid substrate.
						</p>
					</div>
				</div>
				<div className="row bit-narrow">
					<h1 className="md:pl-8">Techniques of Seaweed Culture</h1>
					<div className="about-process process block-1-2 block-tab-full">
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Off-bottom (post and line)</h4>
								<p>
									The general approach is to suspend a series of lines of 10m in length between two
									posts, which are usually made of wood. This technique is best suited for lagoons,
									where there is relatively shallow water at low tide and small-scale initiatives. The
									lines are regularly checked and the seaweed harvested during the two spring tide
									periods each month. The farmers can work on foot and is, therefore, a technique
									particularly suited to women farmers. Following each harvest, the seaweed is dried
									on land for a few days before the sale
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Longlines</h4>
								<p>
									This technique involves using lines of up to 50m in length, anchored at each end,
									and with floats attached every 10m or so to support the line. This technique is
									usually employed in the water of between 4, and 10m and farmers require access to
									some sort of boat to access the plots. However, due to the necessity of a boat, the
									farmers can access the plots at all times, except for bad weather.
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up" style={{ width: "100%" }}>
							<div className="item-process__text">
								<h4 className="item-title">Rock-based Farming for Spinosum</h4>
								<p>
									With this technique, the harvesting of seaweed is done, at low tide and on foot, by
									simply cutting away the new growth each cycle while leaving enough of the
									'rootstock' for the process of growth to start over again. This technique avoids the
									need to affix new cuttings after each harvest and represents a significant
									labor-saving; for example, a farmer using the line-based techniques would require up
									to 120,000 individual harvest manipulations per year to manage lines of just 3kms (=
									15,000 different plants). This technique has apparent attractions, and an image
									given by farmers using this technique in Zanzibar was like having an orchard of
									mangoes that provide their fruit all year-round.
								</p>
							</div>
						</div>
					</div>{" "}
				</div>
				<div className="row bit-narrow">
					<h1 className="pl-8">Types of relationships for business</h1>
					<div className="about-process process block-1-2 block-tab-full">
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Buyers Farmers</h4>
								<p>
									The buyers provide the farmers with the raw materials for production, including the
									lines, sometimes the posts, the boats, and the drying tables. They also link farmers
									with technical support and provide supervision. All this support is provided under
									contract with clear rules that help weed-out the less-motivated farmers and
									reallocate support. Payments are made in cash at least twice monthly.
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title"> Farmers Buyers</h4>
								<p>
									Farmers must respect their contracts' exclusive nature, which requires the sale of
									their seaweed to the contract partner only. It is also essential that the necessary
									quality of dry seaweed is produced.
								</p>
							</div>
						</div>
					</div>{" "}
				</div>
			</section>
			<section id="contact" className="s-contact target-section">
				<div className="grid-overlay">
					<div />
				</div>
				<div className="row section-header narrow" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">Enactus BITS Goa</h3>
						<h1 className="display-1">
							Feel free to contact us for any <br /> project idea or collaboration
						</h1>
					</div>
				</div>{" "}
				{/* end section-header */}
				<div className="row contact-main" data-aos="fade-up">
					<div className="col-full">
						<p className="contact-email">
							<a href="mailto:#enactusbitsgoa@gmail.com">enactusbitsgoa@gmail.com</a>
						</p>
						{/* <p className="contact-address">
							1600 Amphitheatre Parkway <br />
							Mountain View, CA, 94043 US
						</p>
						<p className="contact-numbers">+1 (917) 123 456 &nbsp; +1 (917) 333 987</p> */}
						<ul className="contact-social">
							<li>
								<a href="#0">
									<i className="fab fa-facebook" />
								</a>
							</li>
							<li>
								<a href="#0">
									<i className="fab fa-twitter" />
								</a>
							</li>
							<li>
								<a href="#0">
									<i className="fab fa-instagram" />
								</a>
							</li>
							<li>
								<a href="#0">
									<i className="fa fa-globe" aria-hidden="true"></i>
								</a>
							</li>
							{/* <li>
								<a href="#0">
									<i className="fab fa-dribbble" />
								</a>
							</li> */}
						</ul>
					</div>
				</div>
			</section>{" "}
			{/* end s-contact */}
			{/* footer
================================================== */}
			<footer>
				<div className="row">
					<div className="col-full ss-copyright">
						<span>© Copyright Enactus </span>
						<span>
							Developed by{" "}
							<a target="_blank" href="https://www.linkedin.com/in/kanishqkhandelwal/">
								Kanishq
							</a>
						</span>
					</div>
				</div>
				<div className="ss-go-top">
					<a className="smoothscroll" title="Back to Top" href="#top">
						Back to Top
					</a>
				</div>
			</footer>
			{/* photoswipe background
================================================== */}
			<div aria-hidden="true" className="pswp" role="dialog" tabIndex={-1}>
				<div className="pswp__bg" />
				<div className="pswp__scroll-wrap">
					<div className="pswp__container">
						<div className="pswp__item" />
						<div className="pswp__item" />
						<div className="pswp__item" />
					</div>
					<div className="pswp__ui pswp__ui--hidden">
						<div className="pswp__top-bar">
							<div className="pswp__counter" />
							<button className="pswp__button pswp__button--close" title="Close (Esc)" />{" "}
							<button className="pswp__button pswp__button--share" title="Share" />{" "}
							<button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />{" "}
							<button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
							<div className="pswp__preloader">
								<div className="pswp__preloader__icn">
									<div className="pswp__preloader__cut">
										<div className="pswp__preloader__donut" />
									</div>
								</div>
							</div>
						</div>
						<div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
							<div className="pswp__share-tooltip" />
						</div>
						<button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />{" "}
						<button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
						<div className="pswp__caption">
							<div className="pswp__caption__center" />
						</div>
					</div>
				</div>
			</div>
			{/* end photoSwipe background */}
		</div>
	);
}
