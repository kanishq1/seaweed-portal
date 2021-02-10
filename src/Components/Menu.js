import React from "react";

export default function Menu(props) {
	const toggleMenu = (event) => {
		document.body.classList.add("menu-is-open");
	};
	const closeMenu = (event) => {
		document.body.classList.remove("menu-is-open");
	};
	return (
		<>
			<header className="s-header">
				{props.logo && (
					<div className="header-logo">
						<a className="site-logo" href="index.html">
							<img src="https://enactus.org/wp-content/themes/enactus/images/logo.png" alt="Homepage" />
						</a>
					</div>
				)}
				{/* end header-logo */}
				<nav className="header-nav">
					<a className="header-nav__close" onClick={closeMenu} title="close">
						<span>Close</span>
					</a>
					<h3>Navigate to</h3>
					<div className="header-nav__content">
						<ul className="header-nav__list">
							<li>
								<a className="smoothscroll" href="/" title="home">
									Home
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="/sivar" title="sivar">
									Project Sivar
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="/achain" title="achain">
									Project Achain
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#works" title="works">
									Works
								</a>
							</li>
							<li>
								<a className="smoothscroll" href="#contact" title="contact">
									Contact
								</a>
							</li>
						</ul>
						<p>
							Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href="#0">voluptatem</a> porro
							iusto sequi veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.
						</p>
						<ul className="header-nav__social">
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
					</div>{" "}
					{/* end header-nav__content */}
				</nav>
				{/* end header-nav */}
				<a className="header-menu-toggle" onClick={toggleMenu}>
					<span className="header-menu-icon" />
				</a>
			</header>
		</>
	);
}
