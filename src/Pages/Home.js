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
						<h3 className="subhead">Who We Are</h3>
						<h1 className="display-1">
							We are Sublime, a design and branding agency with partners worldwide. We design thoughtful
							digital experiences and beautiful brand aesthetics.
						</h1>
					</div>
				</div>{" "}
				<div className="row bit-narrow" data-aos="fade-up">
					<div className="col-full">
						<p className="lead">
							Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo
							eget malesuada. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
							in reprehenderit in voluptate velit esse.
						</p>
					</div>
				</div>{" "}
				<div className="row bit-narrow">
					<div className="about-process process block-1-2 block-tab-full">
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Define</h4>
								<p>
									Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere
									animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere
									unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt
									ab.
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Design</h4>
								<p>
									Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere
									animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere
									unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt
									ab.
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Build</h4>
								<p>
									Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere
									animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere
									unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt
									ab.
								</p>
							</div>
						</div>
						<div className="col-block item-process" data-aos="fade-up">
							<div className="item-process__text">
								<h4 className="item-title">Launch</h4>
								<p>
									Quos dolores saepe mollitia deserunt accusamus autem reprehenderit. Voluptas facere
									animi explicabo non quis magni recusandae. Numquam debitis pariatur omnis facere
									unde. Laboriosam minus amet nesciunt est. Et saepe eos maxime tempore quasi deserunt
									ab.
								</p>
							</div>
						</div>
					</div>{" "}
					{/* end process */}
				</div>{" "}
			</section>
			{/* end s-about */}
			{/* services
================================================== */}
			<section id="services" className="s-services target-section darker">
				<div className="row section-header bit-narrow" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">What we do</h3>
						<h1 className="display-1">
							We take pride in what we do. Our services are designed to help your business stand out and
							turn your ideas into digital realities.
						</h1>
					</div>
				</div>{" "}
				{/* end section-header */}
				<div className="row bit-narrow services block-1-2 block-tab-full">
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-star" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">Brand Identity</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-group" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">Illustration</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-pie-chart" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">Marketing</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-image" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">Photography</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-cube" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">UI/UX Design</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
					<div className="col-block item-service" data-aos="fade-up">
						<div className="item-service__icon">
							<i className="icon-lego-block" />
						</div>
						<div className="item-service__text">
							<h3 className="item-title">Frontend Design</h3>
							<p>
								Nemo cupiditate ab quibusdam quaerat impedit magni. Earum suscipit ipsum laudantium. Quo
								delectus est. Maiores voluptas ab sit natus veritatis ut. Debitis nulla cumque
								veritatis. Sunt suscipit voluptas ipsa in tempora esse soluta sint.
							</p>
						</div>
					</div>
				</div>{" "}
				{/* end services */}
			</section>{" "}
			{/* end s-services */}
			{/* works
================================================== */}
			<section id="works" className="s-works target-section">
				<div className="row section-header has-bottom-sep narrow target-section" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">Our Works</h3>
						<h1 className="display-1">
							We create brands, products, and experiences that people love. Check out our recent works.
						</h1>
					</div>
				</div>{" "}
				{/* end section-header */}
				<div className="row masonry-wrap">
					<div className="masonry">
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-shutterbug.jpg"
										className="thumb-link"
										title="Shutterbug"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/lady-shutterbug.jpg"
											srcSet="images/portfolio/lady-shutterbug.jpg 1x, images/portfolio/lady-shutterbug@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">Shutterbug</h3>
									<p className="item-folio__cat">Branding</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-woodcraft.jpg"
										className="thumb-link"
										title="Woodcraft"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/woodcraft.jpg"
											srcSet="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">Woodcraft</h3>
									<p className="item-folio__cat">Web Design</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-beetle.jpg"
										className="thumb-link"
										title="The Beetle Car"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/the-beetle.jpg"
											srcSet="images/portfolio/the-beetle.jpg 1x, images/portfolio/the-beetle@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">The Beetle</h3>
									<p className="item-folio__cat">Web Development</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-salad.jpg"
										className="thumb-link"
										title="Grow Green"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/salad.jpg"
											srcSet="images/portfolio/salad.jpg 1x, images/portfolio/salad@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">Salad</h3>
									<p className="item-folio__cat">Branding</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-lamp.jpg"
										className="thumb-link"
										title="Guitarist"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/lamp.jpg"
											srcSet="images/portfolio/lamp.jpg 1x, images/portfolio/lamp@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">Lamp</h3>
									<p className="item-folio__cat">Web Design</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
						<div className="masonry__brick" data-aos="fade-up">
							<div className="item-folio">
								<div className="item-folio__thumb">
									<a
										href="images/portfolio/gallery/g-fuji.jpg"
										className="thumb-link"
										title="Palmeira"
										data-size="1050x700"
									>
										<img
											src="images/portfolio/fuji.jpg"
											srcSet="images/portfolio/fuji.jpg 1x, images/portfolio/fuji@2x.jpg 2x"
											alt=""
										/>
									</a>
								</div>
								<div className="item-folio__text">
									<h3 className="item-folio__title">Fuji</h3>
									<p className="item-folio__cat">Web Design</p>
								</div>
								<a
									href="https://www.behance.net/"
									className="item-folio__project-link"
									title="Project link"
								>
									<i className="icon-link" />
								</a>
								<div className="item-folio__caption">
									<p>
										Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto
										quo.Unde dolorem corrupti neque nisi.
									</p>
								</div>
							</div>
						</div>{" "}
						{/* end masonry__brick */}
					</div>{" "}
					{/* end masonry */}
				</div>{" "}
				{/* end masonry-wrap */}
			</section>{" "}
			{/* end s-works */}
			{/* clients
================================================== */}
			<section id="clients" className="s-clients target-section darker">
				<div className="grid-overlay">
					<div />
				</div>
				<div className="row section-header text-center narrow" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">Our Clients</h3>
						<h1 className="display-1">Who we have work with</h1>
					</div>
				</div>{" "}
				{/* end section-header */}
				<div className="row clients-wrap" data-aos="fade-up">
					<div className="col-twelve">
						<ul className="clients">
							<li>
								<a href="#0">Uber</a>
							</li>
							<li>
								<a href="#0">Spotify</a>
							</li>
							<li>
								<a href="#0">Grab</a>
							</li>
							<li>
								<a href="#0">Dropbox</a>
							</li>
							<li>
								<a href="#0">IBM</a>
							</li>
							<li>
								<a href="#0">Microsoft</a>
							</li>
							<li>
								<a href="#0">Xiaomi</a>
							</li>
							<li>
								<a href="#0">Adidas</a>
							</li>
							<li>
								<a href="#0">Mozilla</a>
							</li>
							<li>
								<a href="#0">Apple</a>
							</li>
							<li>
								<a href="#0">Google</a>
							</li>
							<li>
								<a href="#0">Asus</a>
							</li>
						</ul>
					</div>
				</div>
			</section>{" "}
			{/* end s-clients */}
			{/* testimonies
================================================== */}
			<section className="s-testimonials">
				<div className="testimonials__icon" data-aos="fade-up" />
				<div className="row testimonials narrow">
					<div className="col-full testimonials__slider" data-aos="fade-up">
						<div className="testimonials__slide">
							<p>
								Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum.
								Laudantium quia consequatur molestias delectus culpa facere hic dolores aperiam.
								Accusantium quos qui praesentium corpori.
							</p>
							<div className="testimonials__author">
								Tim Cook
								<span>CEO, Apple</span>
							</div>
						</div>{" "}
						{/* end testimonials__slide */}
						<div className="testimonials__slide">
							<p>
								Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat
								voluptas animi adipisci. Nisi eaque consequatur. Quasi voluptas eius distinctio. Atque
								eos maxime. Qui ipsam temporibus quisquam vel.
							</p>
							<div className="testimonials__author">
								Sundar Pichai
								<span>CEO, Google</span>
							</div>
						</div>{" "}
						{/* end testimonials__slide */}
						<div className="testimonials__slide">
							<p>
								Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia
								nesciunt. Ducimus aut sed ipsam. Autem eaque officia cum exercitationem sunt voluptatum
								accusamus. Quasi voluptas eius distinctio.
							</p>
							<div className="testimonials__author">
								Satya Nadella
								<span>CEO, Microsoft</span>
							</div>
						</div>{" "}
						{/* end testimonials__slide */}
					</div>{" "}
					{/* end testimonials__slider */}
				</div>{" "}
				{/* end testimonials */}
			</section>{" "}
			{/* end s-testimonials */}
			{/* contact
================================================== */}
			<section id="contact" className="s-contact target-section">
				<div className="grid-overlay">
					<div />
				</div>
				<div className="row section-header narrow" data-aos="fade-up">
					<div className="col-full">
						<h3 className="subhead">Keep In Touch</h3>
						<h1 className="display-1">
							Feel free to contact us for any <br /> project idea or collaboration
						</h1>
					</div>
				</div>{" "}
				{/* end section-header */}
				<div className="row contact-main" data-aos="fade-up">
					<div className="col-full">
						<p className="contact-email">
							<a href="mailto:#0">sayhello@sublime.com</a>
						</p>
						<p className="contact-address">
							1600 Amphitheatre Parkway <br />
							Mountain View, CA, 94043 US
						</p>
						<p className="contact-numbers">+1 (917) 123 456 &nbsp; +1 (917) 333 987</p>
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
									<i className="fab fa-behance" />
								</a>
							</li>
							<li>
								<a href="#0">
									<i className="fab fa-dribbble" />
								</a>
							</li>
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
							Developed by <a href="https://www.styleshout.com/">kanishq</a>
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
